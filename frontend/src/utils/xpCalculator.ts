/**
 * XP system calculator - mirrors backend Java implementation.
 *
 * Progressive difficulty up to level 50, then constant requirements.
 * With 1000 XP being fairly common, this ensures meaningful grind.
 */

const BASE_XP = 1000;
const EXPONENT = 1.5;
const POST_50_XP = 75000;

export interface XpInfo {
  level: number;
  currentXp: number;
  xpForNextLevel: number;
  totalXp: number;
  progressPercentage: number;
}

/**
 * Calculate total XP required to reach a specific level from level 1.
 */
export function getTotalXpForLevel(level: number): number {
  if (level < 1) {
    throw new Error('Level must be >= 1');
  }
  if (level === 1) {
    return 0;
  }

  let totalXp = 0;

  // Calculate XP for levels 2-50
  const progressiveLevels = Math.min(level, 50);
  for (let i = 2; i <= progressiveLevels; i++) {
    totalXp += getXpForLevelUp(i);
  }

  // Calculate XP for levels 51+
  if (level > 50) {
    totalXp += (level - 50) * POST_50_XP;
  }

  return totalXp;
}

/**
 * Calculate XP required to level up FROM (level-1) TO level.
 */
export function getXpForLevelUp(level: number): number {
  if (level < 2) {
    throw new Error('Level must be >= 2 for level up calculation');
  }

  if (level <= 50) {
    return Math.round(BASE_XP * Math.pow(level, EXPONENT));
  } else {
    return POST_50_XP;
  }
}

/**
 * Calculate current level based on total XP.
 */
export function getLevelFromXp(totalXp: number): number {
  if (totalXp < 0) {
    throw new Error('Total XP must be >= 0');
  }

  if (totalXp === 0) {
    return 1;
  }

  let accumulatedXp = 0;
  let level = 1;

  // Calculate through progressive levels (2-50)
  for (let i = 2; i <= 50; i++) {
    const xpForLevel = getXpForLevelUp(i);
    if (accumulatedXp + xpForLevel > totalXp) {
      return i - 1;
    }
    accumulatedXp += xpForLevel;
    level = i;
  }

  // Level 50 or beyond
  const remainingXp = totalXp - accumulatedXp;
  const additionalLevels = Math.floor(remainingXp / POST_50_XP);

  return level + additionalLevels;
}

/**
 * Calculate XP progress towards next level.
 */
export function getXpProgressInCurrentLevel(totalXp: number): number {
  const currentLevel = getLevelFromXp(totalXp);
  const xpForCurrentLevel = getTotalXpForLevel(currentLevel);
  return totalXp - xpForCurrentLevel;
}

/**
 * Calculate XP needed for next level up.
 */
export function getXpNeededForNextLevel(currentLevel: number): number {
  return getXpForLevelUp(currentLevel + 1);
}

/**
 * Get complete XP progression info.
 */
export function getXpInfo(totalXp: number): XpInfo {
  const level = getLevelFromXp(totalXp);
  const currentXp = getXpProgressInCurrentLevel(totalXp);
  const xpForNextLevel = getXpNeededForNextLevel(level);
  const progressPercentage = (currentXp / xpForNextLevel) * 100;

  return {
    level,
    currentXp,
    xpForNextLevel,
    totalXp,
    progressPercentage,
  };
}

/**
 * Format XP number with commas for display.
 */
export function formatXp(xp: number): string {
  return xp.toLocaleString();
}

/**
 * Get XP milestones for display (useful for showing level progression).
 */
export function getXpMilestones(): Array<{ level: number; totalXp: number; xpForLevel: number }> {
  const milestones = [1, 5, 10, 20, 30, 40, 50, 60, 75, 100];

  return milestones.map(level => ({
    level,
    totalXp: getTotalXpForLevel(level),
    xpForLevel: level === 1 ? 0 : getXpForLevelUp(level),
  }));
}
