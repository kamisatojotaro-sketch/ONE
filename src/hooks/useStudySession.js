import { useState, useEffect, useCallback, useMemo } from 'react';
import { NCERT_SYLLABUS, EXAM_PORTIONS } from '../data/ncertSyllabus';
import { getDefaultPriority } from '../data/priorityData';

const STORAGE_KEY = 'one_study_session_v1';

export function useStudySession() {
  const [sessionState, setSessionState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Self-heal and validate state so no stale/mismatched IDs can break the app on page refresh
        if (parsed.selectedSubject && NCERT_SYLLABUS[parsed.selectedSubject]) {
          const subject = NCERT_SYLLABUS[parsed.selectedSubject];
          let matchingChapter = null;
          let matchingVolume = null;
          let matchingSub = null;

          if (parsed.selectedChapter) {
            for (const vol of subject.volumes) {
              const ch = vol.chapters.find(c => c.id === parsed.selectedChapter);
              if (ch) {
                matchingChapter = ch.id;
                matchingVolume = vol.id;
                if (parsed.selectedSubchapter && ch.subchapters?.some(s => s.id === parsed.selectedSubchapter)) {
                  matchingSub = parsed.selectedSubchapter;
                } else if (ch.subchapters?.length) {
                  matchingSub = ch.subchapters[0].id;
                }
                break;
              }
            }
          }

          return {
            ...parsed,
            selectedVolume: matchingVolume || parsed.selectedVolume || subject.volumes[0]?.id,
            selectedChapter: matchingChapter,
            selectedSubchapter: matchingSub,
            chapterStudyMode: parsed.chapterStudyMode || 'GENERAL',
            userPriorities: parsed.userPriorities || {}
          };
        }
      }
    } catch (e) {
      console.error('Error loading study session from storage:', e);
    }
    return {
      selectedSubject: null,
      activeSidebarTab: 'NOTES', // 'NOTES' | 'PYQ' | 'MCQ' | 'PORTIONS'
      selectedVolume: null,
      selectedChapter: null,
      selectedSubchapter: null,
      chapterStudyMode: 'GENERAL', // 'GENERAL' | 'QUESTIONS'
      completedSections: [],
      completedSubchapters: [],
      completedPortionChapters: [],
      userNotes: {},
      userPriorities: {}
    };
  });

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionState));
    } catch (e) {
      console.error('Error saving study session to storage:', e);
    }
  }, [sessionState]);

  // Actions
  const setSelectedSubject = useCallback((subjectId) => {
    setSessionState(prev => {
      if (!subjectId) {
        return {
          ...prev,
          selectedSubject: null,
          selectedVolume: null,
          selectedChapter: null,
          selectedSubchapter: null
        };
      }
      const subject = NCERT_SYLLABUS[subjectId];
      const firstVolume = subject?.volumes?.[0]?.id || null;
      return {
        ...prev,
        selectedSubject: subjectId,
        selectedVolume: firstVolume,
        selectedChapter: null,
        selectedSubchapter: null
      };
    });
  }, []);

  const setActiveSidebarTab = useCallback((tab) => {
    setSessionState(prev => ({ ...prev, activeSidebarTab: tab }));
  }, []);

  const setSelectedVolume = useCallback((volumeId) => {
    setSessionState(prev => ({
      ...prev,
      selectedVolume: volumeId,
      selectedChapter: null,
      selectedSubchapter: null
    }));
  }, []);

  const setSelectedChapter = useCallback((chapterId, mode = null) => {
    setSessionState(prev => {
      if (!chapterId) {
        return { ...prev, selectedChapter: null, selectedSubchapter: null };
      }
      // If selecting a chapter, find its containing volume and first subchapter
      const subject = NCERT_SYLLABUS[prev.selectedSubject];
      let firstSub = null;
      let matchingVol = prev.selectedVolume;
      if (subject) {
        for (const vol of subject.volumes) {
          const ch = vol.chapters.find(c => c.id === chapterId);
          if (ch) {
            matchingVol = vol.id;
            if (ch.subchapters?.length) {
              firstSub = ch.subchapters[0].id;
            }
            break;
          }
        }
      }
      return {
        ...prev,
        selectedVolume: matchingVol,
        selectedChapter: chapterId,
        selectedSubchapter: firstSub,
        chapterStudyMode: mode || prev.chapterStudyMode || 'GENERAL'
      };
    });
  }, []);

  const setChapterStudyMode = useCallback((mode) => {
    setSessionState(prev => ({ ...prev, chapterStudyMode: mode }));
  }, []);

  const setSelectedSubchapter = useCallback((subchapterId) => {
    setSessionState(prev => ({ ...prev, selectedSubchapter: subchapterId }));
  }, []);

  const toggleSection = useCallback((sectionId) => {
    setSessionState(prev => {
      const isCompleted = prev.completedSections.includes(sectionId);
      const newCompleted = isCompleted
        ? prev.completedSections.filter(id => id !== sectionId)
        : [...prev.completedSections, sectionId];
      return { ...prev, completedSections: newCompleted };
    });
  }, []);

  const markSubchapterCompleted = useCallback((subchapterId) => {
    setSessionState(prev => {
      if (prev.completedSubchapters.includes(subchapterId)) return prev;
      return {
        ...prev,
        completedSubchapters: [...prev.completedSubchapters, subchapterId]
      };
    });
  }, []);

  const togglePortionChapter = useCallback((chapterId) => {
    setSessionState(prev => {
      const isCompleted = prev.completedPortionChapters.includes(chapterId);
      const newPortion = isCompleted
        ? prev.completedPortionChapters.filter(id => id !== chapterId)
        : [...prev.completedPortionChapters, chapterId];
      return { ...prev, completedPortionChapters: newPortion };
    });
  }, []);

  const saveUserNote = useCallback((sectionId, text) => {
    setSessionState(prev => ({
      ...prev,
      userNotes: { ...prev.userNotes, [sectionId]: text }
    }));
  }, []);

  const setItemPriority = useCallback((id, rating) => {
    const clamped = Math.max(0, Math.min(10, Math.round(Number(rating) || 0)));
    setSessionState(prev => ({
      ...prev,
      userPriorities: { ...(prev.userPriorities || {}), [id]: clamped }
    }));
  }, []);

  const resetItemPriority = useCallback((id) => {
    setSessionState(prev => {
      const next = { ...(prev.userPriorities || {}) };
      delete next[id];
      return { ...prev, userPriorities: next };
    });
  }, []);

  const getPriority = useCallback((id) => {
    if (sessionState.userPriorities && sessionState.userPriorities[id] !== undefined) {
      return sessionState.userPriorities[id];
    }
    return getDefaultPriority(id);
  }, [sessionState.userPriorities]);

  // Compute Volume Progress
  const volumeProgress = useMemo(() => {
    if (!sessionState.selectedSubject || !sessionState.selectedVolume) return 0;
    const subject = NCERT_SYLLABUS[sessionState.selectedSubject];
    if (!subject) return 0;
    const volume = subject.volumes.find(v => v.id === sessionState.selectedVolume);
    if (!volume) return 0;

    let totalSections = 0;
    let completedCount = 0;

    volume.chapters.forEach(ch => {
      if (ch.subchapters) {
        ch.subchapters.forEach(sub => {
          if (sub.sections) {
            sub.sections.forEach(sec => {
              totalSections++;
              if (sessionState.completedSections.includes(sec.id)) {
                completedCount++;
              }
            });
          }
        });
      }
    });

    if (totalSections === 0) return 0;
    return Math.round((completedCount / totalSections) * 100);
  }, [sessionState.selectedSubject, sessionState.selectedVolume, sessionState.completedSections]);

  // Compute Active Subchapter Progress
  const activeSubchapterStats = useMemo(() => {
    if (!sessionState.selectedSubject || !sessionState.selectedChapter || !sessionState.selectedSubchapter) {
      return { total: 0, completed: 0, percentage: 0, isAllCompleted: false };
    }

    const subject = NCERT_SYLLABUS[sessionState.selectedSubject];
    if (!subject) return { total: 0, completed: 0, percentage: 0, isAllCompleted: false };

    let foundSub = null;
    for (const vol of subject.volumes) {
      const ch = vol.chapters.find(c => c.id === sessionState.selectedChapter);
      if (ch && ch.subchapters) {
        foundSub = ch.subchapters.find(s => s.id === sessionState.selectedSubchapter);
        if (foundSub) break;
      }
    }

    if (!foundSub || !foundSub.sections || foundSub.sections.length === 0) {
      return { total: 0, completed: 0, percentage: 0, isAllCompleted: false };
    }

    const total = foundSub.sections.length;
    const completed = foundSub.sections.filter(s => sessionState.completedSections.includes(s.id)).length;
    const percentage = Math.round((completed / total) * 100);

    return {
      total,
      completed,
      percentage,
      isAllCompleted: total > 0 && completed === total
    };
  }, [sessionState.selectedSubject, sessionState.selectedChapter, sessionState.selectedSubchapter, sessionState.completedSections]);

  // Compute Portions Stats
  const portionsStats = useMemo(() => {
    const totalPortionChapters = Object.values(EXAM_PORTIONS).reduce((acc, curr) => acc + curr.length, 0);

    const completedPortions = sessionState.completedPortionChapters.length;
    const percentage = totalPortionChapters > 0 ? Math.round((completedPortions / totalPortionChapters) * 100) : 0;

    return {
      total: totalPortionChapters,
      completed: completedPortions,
      percentage,
      physicsCompleted: sessionState.completedPortionChapters.filter(id => id.startsWith('phy')).length,
      physicsTotal: EXAM_PORTIONS.physics?.length || 0,
      chemCompleted: sessionState.completedPortionChapters.filter(id => id.startsWith('chem')).length,
      chemTotal: EXAM_PORTIONS.chemistry?.length || 0,
      bioCompleted: sessionState.completedPortionChapters.filter(id => id.startsWith('bio')).length,
      bioTotal: EXAM_PORTIONS.biology?.length || 0,
      psyCompleted: sessionState.completedPortionChapters.filter(id => id.startsWith('psy')).length,
      psyTotal: EXAM_PORTIONS.psychology?.length || 0
    };
  }, [sessionState.completedPortionChapters]);

  const jumpToLocation = useCallback(({ subjectId, volumeId, chapterId, subchapterId, tab = 'NOTES' }) => {
    setSessionState(prev => {
      const subject = NCERT_SYLLABUS[subjectId];
      if (!subject) return prev;

      let resolvedVolume = volumeId;
      let resolvedChapter = chapterId;
      let resolvedSub = subchapterId;

      if (resolvedChapter && !resolvedVolume) {
        for (const vol of subject.volumes) {
          if (vol.chapters.some(c => c.id === resolvedChapter)) {
            resolvedVolume = vol.id;
            break;
          }
        }
      }
      if (!resolvedVolume) {
        resolvedVolume = subject.volumes[0]?.id;
      }

      if (resolvedChapter && !resolvedSub) {
        for (const vol of subject.volumes) {
          const ch = vol.chapters.find(c => c.id === resolvedChapter);
          if (ch && ch.subchapters?.length) {
            resolvedSub = ch.subchapters[0].id;
            break;
          }
        }
      }

      return {
        ...prev,
        selectedSubject: subjectId,
        selectedVolume: resolvedVolume,
        selectedChapter: resolvedChapter || null,
        selectedSubchapter: resolvedSub || null,
        activeSidebarTab: tab || 'NOTES'
      };
    });
  }, []);

  return {
    ...sessionState,
    setSelectedSubject,
    setActiveSidebarTab,
    setSelectedVolume,
    setSelectedChapter,
    setSelectedSubchapter,
    setChapterStudyMode,
    toggleSection,
    markSubchapterCompleted,
    togglePortionChapter,
    saveUserNote,
    setItemPriority,
    resetItemPriority,
    getPriority,
    jumpToLocation,
    volumeProgress,
    activeSubchapterStats,
    portionsStats
  };
}
