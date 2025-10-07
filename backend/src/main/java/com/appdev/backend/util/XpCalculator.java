package com.appdev.backend.util;

/**
 * XP system calculator with progressive difficulty up to level 50,
 * then constant requirements after that.
 *
 * Formula for levels 1-50: XP = baseXp * (level ^ exponent)
 * Formula for levels 51+: XP = constant amount
 *
 * With 1000 XP being fairly common, this ensures meaningful grind.
 */
public class XpCalculator {

    // Base XP required for level 1
    private static final int BASE_XP = 1000;

    // Exponential growth factor (controls difficulty curve)
    private static final double EXPONENT = 1.5;

    // Constant XP required for each level after 50
    private static final int POST_50_XP = 75000;

    /**
     * Calculate total XP required to reach a specific level from level 1.
     *
     * @param level Target level (must be >= 1)
     * @return Total XP required to reach that level
     */
    public static long getTotalXpForLevel(int level) {
        if (level < 1) {
            throw new IllegalArgumentException("Level must be >= 1");
        }
        if (level == 1) {
            return 0; // Level 1 is the starting level
        }

        long totalXp = 0;

        // Calculate XP for levels 2-50 (or up to target if target < 50)
        int progressiveLevels = Math.min(level, 50);
        for (int i = 2; i <= progressiveLevels; i++) {
            totalXp += getXpForLevelUp(i);
        }

        // Calculate XP for levels 51+ if applicable
        if (level > 50) {
            totalXp += (level - 50) * POST_50_XP;
        }

        return totalXp;
    }

    /**
     * Calculate XP required to level up FROM level (level-1) TO level.
     * For example, getXpForLevelUp(2) returns XP needed to go from level 1 to level 2.
     *
     * @param level Target level to reach
     * @return XP required for that specific level up
     */
    public static int getXpForLevelUp(int level) {
        if (level < 2) {
            throw new IllegalArgumentException("Level must be >= 2 for level up calculation");
        }

        if (level <= 50) {
            // Progressive formula: baseXp * (level ^ exponent)
            return (int) Math.round(BASE_XP * Math.pow(level, EXPONENT));
        } else {
            // Constant XP after level 50
            return POST_50_XP;
        }
    }

    /**
     * Calculate current level based on total XP.
     *
     * @param totalXp Total accumulated XP
     * @return Current level
     */
    public static int getLevelFromXp(long totalXp) {
        if (totalXp < 0) {
            throw new IllegalArgumentException("Total XP must be >= 0");
        }

        // Start at level 1
        if (totalXp == 0) {
            return 1;
        }

        long accumulatedXp = 0;
        int level = 1;

        // Calculate through progressive levels (2-50)
        for (int i = 2; i <= 50; i++) {
            int xpForLevel = getXpForLevelUp(i);
            if (accumulatedXp + xpForLevel > totalXp) {
                return i - 1;
            }
            accumulatedXp += xpForLevel;
            level = i;
        }

        // If we're here, we're at level 50 or beyond
        long remainingXp = totalXp - accumulatedXp;
        int additionalLevels = (int) (remainingXp / POST_50_XP);

        return level + additionalLevels;
    }

    /**
     * Calculate XP progress towards next level.
     *
     * @param totalXp Total accumulated XP
     * @return XP progress towards next level (0 to xpRequiredForNextLevel-1)
     */
    public static int getXpProgressInCurrentLevel(long totalXp) {
        int currentLevel = getLevelFromXp(totalXp);
        long xpForCurrentLevel = getTotalXpForLevel(currentLevel);
        return (int) (totalXp - xpForCurrentLevel);
    }

    /**
     * Calculate XP needed for next level up.
     *
     * @param currentLevel Current level
     * @return XP required to reach next level
     */
    public static int getXpNeededForNextLevel(int currentLevel) {
        return getXpForLevelUp(currentLevel + 1);
    }

    /**
     * Get XP progression info for a user.
     *
     * @param totalXp Total accumulated XP
     * @return XpInfo object with level, progress, and next level requirements
     */
    public static XpInfo getXpInfo(long totalXp) {
        int level = getLevelFromXp(totalXp);
        int currentProgress = getXpProgressInCurrentLevel(totalXp);
        int xpForNextLevel = getXpNeededForNextLevel(level);

        return new XpInfo(level, currentProgress, xpForNextLevel, totalXp);
    }

    /**
     * Data class containing XP progression information.
     */
    public static class XpInfo {
        private final int level;
        private final int currentXp;
        private final int xpForNextLevel;
        private final long totalXp;

        public XpInfo(int level, int currentXp, int xpForNextLevel, long totalXp) {
            this.level = level;
            this.currentXp = currentXp;
            this.xpForNextLevel = xpForNextLevel;
            this.totalXp = totalXp;
        }

        public int getLevel() {
            return level;
        }

        public int getCurrentXp() {
            return currentXp;
        }

        public int getXpForNextLevel() {
            return xpForNextLevel;
        }

        public long getTotalXp() {
            return totalXp;
        }

        public double getProgressPercentage() {
            return (double) currentXp / xpForNextLevel * 100.0;
        }
    }
}
