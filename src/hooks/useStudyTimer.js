import { useState, useEffect, useRef, useCallback } from 'react';

export function useStudyTimer(defaultMinutes = 25) {
  const [minutes, setMinutes] = useState(defaultMinutes);
  const [secondsLeft, setSecondsLeft] = useState(defaultMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
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
  }, [secondsLeft, minutes]);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setSecondsLeft(minutes * 60);
    setIsCompleted(false);
  }, [minutes]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            setIsCompleted(true);
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

  return {
    minutes,
    secondsLeft,
    isRunning,
    isCompleted,
    changeDuration,
    startTimer,
    pauseTimer,
    resetTimer,
    formattedTime: formatTime()
  };
}
