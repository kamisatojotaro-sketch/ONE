import { useTimer } from '../context/TimerContext';

/**
 * useStudyTimer hook
 * Connects directly to the global persistent TimerContext so timer state
 * is persisted across page reloads, tab navigation, and refreshes.
 */
export function useStudyTimer() {
  return useTimer();
}
