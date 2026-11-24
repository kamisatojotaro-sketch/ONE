import { useState, useEffect, useCallback, useMemo } from 'react';
import { NCERT_SYLLABUS, EXAM_PORTIONS, getSubjectSyllabus } from '../data/ncertSyllabus';
import { getDefaultPriority } from '../data/priorityData';
import { getSectionTopicIds, isTopicCompleted } from '../utils/studyTopicTicks';

const STORAGE_KEY = 'one_study_session_v1';
const NOTES_VERSION_KEY = 'one_notes_version_preference';

export function useStudySession() {
  const [sessionState, setSessionState] = useState(() => {
    let standaloneSavedVersion = null;
    try {
      const v = localStorage.getItem(NOTES_VERSION_KEY);
      if (v === 'D' || v === 'NON_D') {
        standaloneSavedVersion = v;
      }
    } catch { /* ignore */ }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const savedVersion =
          parsed.notesVersion === 'D' || parsed.notesVersion === 'NON_D'
            ? parsed.notesVersion
            : standaloneSavedVersion;
        // Self-heal and validate state so no stale/mismatched IDs can break the app on page refresh
        if (parsed.selectedSubject && getSubjectSyllabus(parsed.selectedSubject, savedVersion === 'D')) {
          const subject = getSubjectSyllabus(parsed.selectedSubject, savedVersion === 'D');
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

          const validSavedVolume = subject.volumes.some(v => v.id === parsed.selectedVolume)
            ? parsed.selectedVolume
            : subject.volumes[0]?.id;

          return {
            ...parsed,
            notesVersion: savedVersion,
            activeSidebarTab:
              savedVersion === 'D'
                ? 'NOTES'
                : parsed.activeSidebarTab === 'IMPORTANT'
                ? 'NOTES'
                : (parsed.activeSidebarTab || 'NOTES'),
            selectedVolume: matchingVolume || validSavedVolume,
            selectedChapter: matchingChapter,
            selectedSubchapter: matchingSub,
            chapterStudyMode:
              parsed.chapterStudyMode === 'QUESTIONS' ||
              (savedVersion === 'D' && parsed.chapterStudyMode === 'CHEAT_SHEET')
                ? 'GENERAL'
                : (parsed.chapterStudyMode || 'GENERAL'),
            userPriorities: parsed.userPriorities || {}
          };
        }

        return {
          selectedSubject: null,
          notesVersion: savedVersion,
          activeSidebarTab: 'NOTES',
          selectedVolume: null,
          selectedChapter: null,
          selectedSubchapter: null,
          chapterStudyMode: 'GENERAL',
          completedSections: parsed.completedSections || [],
          completedSubchapters: parsed.completedSubchapters || [],
          completedPortionChapters: parsed.completedPortionChapters || [],
          userNotes: parsed.userNotes || {},
          userPriorities: parsed.userPriorities || {}
        };
      }
    } catch (e) {
      console.error('Error loading study session from storage:', e);
    }
    return {
      selectedSubject: null,
      notesVersion: standaloneSavedVersion,
      activeSidebarTab: 'NOTES', // 'NOTES' | 'PYQ' | 'MCQ' | 'PORTIONS'
      selectedVolume: null,
      selectedChapter: null,
      selectedSubchapter: null,
      chapterStudyMode: 'GENERAL', // 'GENERAL' | 'DERIVATIONS' | 'CHEAT_SHEET'
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
      if (sessionState.notesVersion === 'D' || sessionState.notesVersion === 'NON_D') {
        localStorage.setItem(NOTES_VERSION_KEY, sessionState.notesVersion);
      }
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
      const subject = getSubjectSyllabus(subjectId, prev.notesVersion === 'D');
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

  const setNotesVersion = useCallback((version) => {
    setSessionState(prev => {
      const nextIsClean = version === 'D';
      let nextVolume = prev.selectedVolume;
      let nextChapter = prev.selectedChapter;
      let nextSubchapter = prev.selectedSubchapter;

      if (prev.selectedSubject) {
        const subject = getSubjectSyllabus(prev.selectedSubject, nextIsClean);
        if (subject) {
          const hasVolume = subject.volumes.some(v => v.id === nextVolume);
          if (!hasVolume) {
            nextVolume = subject.volumes[0]?.id || null;
          }
          if (nextChapter) {
            const hasChapter = subject.volumes.some(v => v.chapters.some(c => c.id === nextChapter));
            if (!hasChapter) {
              nextChapter = null;
              nextSubchapter = null;
            }
          }
        }
      }

      return {
        ...prev,
        notesVersion: version,
        selectedVolume: nextVolume,
        selectedChapter: nextChapter,
        selectedSubchapter: nextSubchapter,
        chapterStudyMode:
          version === 'D' && prev.chapterStudyMode === 'CHEAT_SHEET'
            ? 'GENERAL'
            : prev.chapterStudyMode
      };
    });
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
      const subject = getSubjectSyllabus(prev.selectedSubject, prev.notesVersion === 'D');
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

  const toggleSection = useCallback((sectionId, allSectionTopicIds = []) => {
    setSessionState(prev => {
      const completedSet = new Set(prev.completedSections || []);
      const hasTopics = Array.isArray(allSectionTopicIds) && allSectionTopicIds.length > 0;
      const isCurrentlyDone = hasTopics
        ? allSectionTopicIds.every(tId => isTopicCompleted(tId, sectionId, completedSet))
        : completedSet.has(sectionId);

      if (isCurrentlyDone) {
        completedSet.delete(sectionId);
        if (hasTopics) {
          allSectionTopicIds.forEach(tId => completedSet.delete(tId));
        }
      } else {
        completedSet.add(sectionId);
        if (hasTopics) {
          allSectionTopicIds.forEach(tId => completedSet.add(tId));
        }
      }
      return { ...prev, completedSections: Array.from(completedSet) };
    });
  }, []);

  const toggleTopic = useCallback((topicId, parentSectionId = null, allSectionTopicIds = []) => {
    setSessionState(prev => {
      const completedSet = new Set(prev.completedSections || []);
      const parentWasCompleted = parentSectionId && completedSet.has(parentSectionId);
      const topicIsCurrentlyDone = completedSet.has(topicId) || parentWasCompleted;

      if (topicIsCurrentlyDone) {
        // Untick this specific topic. If parentSectionId was marked as a whole, expand other topics first
        if (parentWasCompleted) {
          completedSet.delete(parentSectionId);
          allSectionTopicIds.forEach(tId => {
            if (tId !== topicId) completedSet.add(tId);
          });
        }
        completedSet.delete(topicId);
      } else {
        completedSet.add(topicId);
        if (
          parentSectionId &&
          Array.isArray(allSectionTopicIds) &&
          allSectionTopicIds.length > 0 &&
          allSectionTopicIds.every(tId => completedSet.has(tId))
        ) {
          completedSet.add(parentSectionId);
        }
      }

      return { ...prev, completedSections: Array.from(completedSet) };
    });
  }, []);

  const toggleTopicGroup = useCallback((groupTopicIds = [], parentSectionId = null, allSectionTopicIds = []) => {
    if (!Array.isArray(groupTopicIds) || groupTopicIds.length === 0) return;
    setSessionState(prev => {
      const completedSet = new Set(prev.completedSections || []);
      const parentWasCompleted = parentSectionId && completedSet.has(parentSectionId);
      const allGroupDone = groupTopicIds.every(tId => completedSet.has(tId) || parentWasCompleted);

      if (allGroupDone) {
        if (parentWasCompleted) {
          completedSet.delete(parentSectionId);
          allSectionTopicIds.forEach(tId => completedSet.add(tId));
        }
        groupTopicIds.forEach(tId => completedSet.delete(tId));
      } else {
        groupTopicIds.forEach(tId => completedSet.add(tId));
        if (
          parentSectionId &&
          Array.isArray(allSectionTopicIds) &&
          allSectionTopicIds.length > 0 &&
          allSectionTopicIds.every(tId => completedSet.has(tId))
        ) {
          completedSet.add(parentSectionId);
        }
      }

      return { ...prev, completedSections: Array.from(completedSet) };
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

  // Compute Volume Progress (based on independent topics across all subtopics)
  const volumeProgress = useMemo(() => {
    if (!sessionState.selectedSubject || !sessionState.selectedVolume) return 0;
    const isClean = sessionState.notesVersion === 'D';
    const subject = getSubjectSyllabus(sessionState.selectedSubject, isClean);
    if (!subject) return 0;
    const volume = subject.volumes.find(v => v.id === sessionState.selectedVolume) || subject.volumes[0];
    if (!volume) return 0;

    const completedSet = new Set(sessionState.completedSections || []);
    let totalTopics = 0;
    let completedCount = 0;

    volume.chapters.forEach(ch => {
      if (ch.subchapters) {
        ch.subchapters.forEach(sub => {
          if (sub.sections) {
            sub.sections.forEach(sec => {
              const topicIds = getSectionTopicIds(sec, sub.id, ch.id, sessionState.selectedSubject, isClean);
              topicIds.forEach(tId => {
                totalTopics++;
                if (isTopicCompleted(tId, sec.id, completedSet)) {
                  completedCount++;
                }
              });
            });
          }
        });
      }
    });

    if (totalTopics === 0) return 0;
    return Math.round((completedCount / totalTopics) * 100);
  }, [sessionState.selectedSubject, sessionState.selectedVolume, sessionState.completedSections, sessionState.notesVersion]);

  // Compute Active Subchapter Progress (based on independent topics 1, 2, 3...)
  const activeSubchapterStats = useMemo(() => {
    if (!sessionState.selectedSubject || !sessionState.selectedChapter || !sessionState.selectedSubchapter) {
      return { total: 0, completed: 0, percentage: 0, isAllCompleted: false };
    }

    const isClean = sessionState.notesVersion === 'D';
    const subject = getSubjectSyllabus(sessionState.selectedSubject, isClean);
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

    const completedSet = new Set(sessionState.completedSections || []);
    let total = 0;
    let completed = 0;

    foundSub.sections.forEach(sec => {
      const topicIds = getSectionTopicIds(sec, foundSub.id, sessionState.selectedChapter, sessionState.selectedSubject, isClean);
      topicIds.forEach(tId => {
        total++;
        if (isTopicCompleted(tId, sec.id, completedSet)) {
          completed++;
        }
      });
    });

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      total,
      completed,
      percentage,
      isAllCompleted: total > 0 && completed === total
    };
  }, [sessionState.selectedSubject, sessionState.selectedChapter, sessionState.selectedSubchapter, sessionState.completedSections, sessionState.notesVersion]);

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
      const subject = getSubjectSyllabus(subjectId, prev.notesVersion === 'D');
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
    setNotesVersion,
    setSelectedVolume,
    setSelectedChapter,
    setSelectedSubchapter,
    setChapterStudyMode,
    toggleSection,
    toggleTopic,
    toggleTopicGroup,
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
