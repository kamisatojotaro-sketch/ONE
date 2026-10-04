import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

const TIMER_STORAGE_KEY = 'one_study_timer_state_v1';

// Web Audio API 2-Second Resonant Bell Sound
export function playBellSound() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const duration = 2.0; // exactly 2 seconds bell chime

    // Harmonics for a rich, warm, cathedral / temple bell chime (fundamental + overtones)
    const bellTones = [
      { freq: 587.33, gain: 0.35 }, // D5 (Fundamental)
      { freq: 880.00, gain: 0.22 }, // A5 (Fifth)
      { freq: 1174.66, gain: 0.14 }, // D6 (Octave)
      { freq: 1760.00, gain: 0.08 }  // A6 (Higher overtone)
    ];

    bellTones.forEach(({ freq, gain }) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Instant attack, smooth exponential decay over exactly 2.0 seconds
      gainNode.gain.setValueAtTime(gain, now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    });
  } catch (err) {
    console.warn('AudioContext bell sound error:', err);
  }
}

function readStoredTimerState() {
  try {
    const raw = localStorage.getItem(TIMER_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || typeof data !== 'object') return null;

    const minutes = Math.max(1, Math.min(180, parseInt(data.minutes, 10) || 25));
    const isRunning = Boolean(data.isRunning);
    const targetEndTime = typeof data.targetEndTime === 'number' ? data.targetEndTime : null;

    if (isRunning && targetEndTime) {
      const now = Date.now();
      const remainingMs = targetEndTime - now;
      if (remainingMs > 0) {
        // Still running! Restore exact remaining time
        return {
          minutes,
          secondsLeft: Math.ceil(remainingMs / 1000),
          isRunning: true,
          targetEndTime,
          isCompleted: false,
          showAlarmOverlay: false,
          shouldRingBellOnMount: false
        };
      } else {
        // Completed while page was refreshing or away
        return {
          minutes,
          secondsLeft: 0,
          isRunning: false,
          targetEndTime: null,
          isCompleted: true,
          showAlarmOverlay: true,
          shouldRingBellOnMount: true
        };
      }
    }

    const savedSeconds = typeof data.secondsLeft === 'number' && !isNaN(data.secondsLeft)
      ? Math.max(0, Math.min(180 * 60, data.secondsLeft))
      : minutes * 60;

    return {
      minutes,
      secondsLeft: savedSeconds,
      isRunning: false,
      targetEndTime: null,
      isCompleted: Boolean(data.isCompleted),
      showAlarmOverlay: Boolean(data.showAlarmOverlay),
      shouldRingBellOnMount: false
    };
  } catch (err) {
    console.warn('Failed to parse stored timer state:', err);
    return null;
  }
}

function saveTimerStateToStorage({
  minutes,
  secondsLeft,
  isRunning,
  targetEndTime,
  isCompleted,
  showAlarmOverlay
}) {
  try {
    const payload = {
      minutes,
      secondsLeft,
      isRunning,
      targetEndTime: isRunning ? targetEndTime : null,
      isCompleted,
      showAlarmOverlay,
      savedAt: Date.now()
    };
    localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn('Failed to persist timer state:', err);
  }
}

const TimerContext = createContext(null);

export function TimerProvider({ children }) {
  // Initialize state once from localStorage
  const [initialState] = useState(() => {
    return readStoredTimerState() || {
      minutes: 25,
      secondsLeft: 25 * 60,
      isRunning: false,
      targetEndTime: null,
      isCompleted: false,
      showAlarmOverlay: false,
      shouldRingBellOnMount: false
    };
  });

  const [minutes, setMinutes] = useState(initialState.minutes);
  const [secondsLeft, setSecondsLeft] = useState(initialState.secondsLeft);
  const [isRunning, setIsRunning] = useState(initialState.isRunning);
  const [isCompleted, setIsCompleted] = useState(initialState.isCompleted);
  const [showAlarmOverlay, setShowAlarmOverlay] = useState(initialState.showAlarmOverlay);
  
  const targetEndTimeRef = useRef(initialState.targetEndTime);
  const intervalRef = useRef(null);

  // Play bell on mount if expired while page was refreshed or closed
  useEffect(() => {
    if (initialState.shouldRingBellOnMount) {
      playBellSound();
    }
  }, [initialState.shouldRingBellOnMount]);

  // Persist state to localStorage on any state transition
  useEffect(() => {
    saveTimerStateToStorage({
      minutes,
      secondsLeft,
      isRunning,
      targetEndTime: targetEndTimeRef.current,
      isCompleted,
      showAlarmOverlay
    });
  }, [minutes, secondsLeft, isRunning, isCompleted, showAlarmOverlay]);

  // Timer Tick Hook (Wall-clock accurate with Date.now() check)
  useEffect(() => {
    if (isRunning) {
      const checkAndTick = () => {
        if (!targetEndTimeRef.current) return;
        const remainingMs = targetEndTimeRef.current - Date.now();
        if (remainingMs <= 0) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = null;
          targetEndTimeRef.current = null;
          setIsRunning(false);
          setSecondsLeft(0);
          setIsCompleted(true);
          setShowAlarmOverlay(true);
          playBellSound();
          saveTimerStateToStorage({
            minutes,
            secondsLeft: 0,
            isRunning: false,
            targetEndTime: null,
            isCompleted: true,
            showAlarmOverlay: true
          });
        } else {
          setSecondsLeft(Math.ceil(remainingMs / 1000));
        }
      };

      // Immediate tick, then repeat every 500ms for high responsiveness
      checkAndTick();
      intervalRef.current = setInterval(checkAndTick, 500);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, minutes]);

  // Handle Tab Visibility & Focus changes (prevents sleep/background interval throttling)
  useEffect(() => {
    const handleVisibilityOrFocus = () => {
      if (isRunning && targetEndTimeRef.current) {
        const remainingMs = targetEndTimeRef.current - Date.now();
        if (remainingMs <= 0) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = null;
          targetEndTimeRef.current = null;
          setIsRunning(false);
          setSecondsLeft(0);
          setIsCompleted(true);
          setShowAlarmOverlay(true);
          playBellSound();
        } else {
          setSecondsLeft(Math.ceil(remainingMs / 1000));
        }
      }
    };

    const handleStorage = (e) => {
      if (e.key === TIMER_STORAGE_KEY && e.newValue) {
        try {
          const synced = JSON.parse(e.newValue);
          if (synced && typeof synced === 'object') {
            setMinutes(synced.minutes || 25);
            setIsRunning(Boolean(synced.isRunning));
            setIsCompleted(Boolean(synced.isCompleted));
            setShowAlarmOverlay(Boolean(synced.showAlarmOverlay));
            if (synced.isRunning && synced.targetEndTime) {
              targetEndTimeRef.current = synced.targetEndTime;
              const rem = Math.max(0, Math.ceil((synced.targetEndTime - Date.now()) / 1000));
              setSecondsLeft(rem);
            } else {
              targetEndTimeRef.current = null;
              setSecondsLeft(typeof synced.secondsLeft === 'number' ? synced.secondsLeft : 25 * 60);
            }
          }
        } catch {
          // ignore parsing error
        }
      }
    };

    window.addEventListener('visibilitychange', handleVisibilityOrFocus);
    window.addEventListener('focus', handleVisibilityOrFocus);
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityOrFocus);
      window.removeEventListener('focus', handleVisibilityOrFocus);
      window.removeEventListener('storage', handleStorage);
    };
  }, [isRunning]);

  // Actions
  const changeDuration = useCallback((newMinutes) => {
    const val = Math.max(1, Math.min(180, parseInt(newMinutes, 10) || 1));
    setMinutes(val);
    if (!isRunning) {
      const secs = val * 60;
      targetEndTimeRef.current = null;
      setSecondsLeft(secs);
      setIsCompleted(false);
      saveTimerStateToStorage({
        minutes: val,
        secondsLeft: secs,
        isRunning: false,
        targetEndTime: null,
        isCompleted: false,
        showAlarmOverlay: false
      });
    }
  }, [isRunning]);

  const startTimer = useCallback(() => {
    const secs = secondsLeft <= 0 ? minutes * 60 : secondsLeft;
    const targetEnd = Date.now() + secs * 1000;
    targetEndTimeRef.current = targetEnd;
    setSecondsLeft(secs);
    setIsRunning(true);
    setIsCompleted(false);
    setShowAlarmOverlay(false);
    saveTimerStateToStorage({
      minutes,
      secondsLeft: secs,
      isRunning: true,
      targetEndTime: targetEnd,
      isCompleted: false,
      showAlarmOverlay: false
    });
  }, [secondsLeft, minutes]);

  const pauseTimer = useCallback(() => {
    let rem = secondsLeft;
    if (targetEndTimeRef.current) {
      rem = Math.max(0, Math.ceil((targetEndTimeRef.current - Date.now()) / 1000));
    }
    targetEndTimeRef.current = null;
    setIsRunning(false);
    setSecondsLeft(rem);
    saveTimerStateToStorage({
      minutes,
      secondsLeft: rem,
      isRunning: false,
      targetEndTime: null,
      isCompleted: false,
      showAlarmOverlay
    });
  }, [secondsLeft, minutes, showAlarmOverlay]);

  const resetTimer = useCallback(() => {
    targetEndTimeRef.current = null;
    setIsRunning(false);
    const secs = minutes * 60;
    setSecondsLeft(secs);
    setIsCompleted(false);
    setShowAlarmOverlay(false);
    saveTimerStateToStorage({
      minutes,
      secondsLeft: secs,
      isRunning: false,
      targetEndTime: null,
      isCompleted: false,
      showAlarmOverlay: false
    });
  }, [minutes]);

  // Quick preset from the full-screen alarm overlay (5 min, 10 min, 30 min, 1 hour / 60 min)
  const startNewTimerPreset = useCallback((presetMinutes) => {
    const val = Math.max(1, Math.min(180, parseInt(presetMinutes, 10) || 5));
    const secs = val * 60;
    const targetEnd = Date.now() + secs * 1000;
    targetEndTimeRef.current = targetEnd;
    setMinutes(val);
    setSecondsLeft(secs);
    setIsRunning(true);
    setIsCompleted(false);
    setShowAlarmOverlay(false);
    saveTimerStateToStorage({
      minutes: val,
      secondsLeft: secs,
      isRunning: true,
      targetEndTime: targetEnd,
      isCompleted: false,
      showAlarmOverlay: false
    });
  }, []);

  const dismissAlarmOverlay = useCallback(() => {
    setShowAlarmOverlay(false);
    saveTimerStateToStorage({
      minutes,
      secondsLeft,
      isRunning,
      targetEndTime: targetEndTimeRef.current,
      isCompleted,
      showAlarmOverlay: false
    });
  }, [minutes, secondsLeft, isRunning, isCompleted]);

  const formatTime = useCallback(() => {
    const m = Math.floor(secondsLeft / 60);
    const s = secondsLeft % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }, [secondsLeft]);

  const value = {
    minutes,
    secondsLeft,
    isRunning,
    isCompleted,
    showAlarmOverlay,
    changeDuration,
    startTimer,
    pauseTimer,
    resetTimer,
    startNewTimerPreset,
    dismissAlarmOverlay,
    playBellSound,
    formattedTime: formatTime()
  };

  return (
    <TimerContext.Provider value={value}>
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
}
