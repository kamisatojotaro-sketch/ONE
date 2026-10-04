import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

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

const TimerContext = createContext(null);

export function TimerProvider({ children }) {
  const [minutes, setMinutes] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showAlarmOverlay, setShowAlarmOverlay] = useState(false);
  const intervalRef = useRef(null);

  // Sync seconds when minutes change while paused
  const changeDuration = useCallback((newMinutes) => {
    const val = Math.max(1, Math.min(180, parseInt(newMinutes, 10) || 1));
    setMinutes(val);
    if (!isRunning) {
      setSecondsLeft(val * 60);
      setIsCompleted(false);
    }
  }, [isRunning]);

  const startTimer = useCallback(() => {
    if (secondsLeft === 0) {
      setSecondsLeft(minutes * 60);
    }
    setIsRunning(true);
    setIsCompleted(false);
    setShowAlarmOverlay(false);
  }, [secondsLeft, minutes]);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setSecondsLeft(minutes * 60);
    setIsCompleted(false);
    setShowAlarmOverlay(false);
  }, [minutes]);

  // Quick preset from the full-screen alarm overlay (5 min, 10 min, 30 min, 1 hour / 60 min)
  const startNewTimerPreset = useCallback((presetMinutes) => {
    const val = Math.max(1, Math.min(180, parseInt(presetMinutes, 10) || 5));
    setMinutes(val);
    setSecondsLeft(val * 60);
    setIsRunning(true);
    setIsCompleted(false);
    setShowAlarmOverlay(false);
  }, []);

  const dismissAlarmOverlay = useCallback(() => {
    setShowAlarmOverlay(false);
  }, []);

  // Timer Tick Hook
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            setIsCompleted(true);
            setShowAlarmOverlay(true);
            // Ring 2-second bell sound when timer ends
            playBellSound();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

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
