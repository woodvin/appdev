package com.appdev.backend.util;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class XpCalculatorTest {

    @Test
    void testLevelOne() {
        assertEquals(1, XpCalculator.getLevelFromXp(0));
        assertEquals(0, XpCalculator.getTotalXpForLevel(1));
    }

    @Test
    void testProgressiveLevels() {
        // Level 2 requires ~2,828 XP (1000 * 2^1.5)
        int level2Xp = XpCalculator.getXpForLevelUp(2);
        assertEquals(2828, level2Xp, 10); // Allow small rounding difference

        // Level 10 requires ~31,623 XP (1000 * 10^1.5)
        int level10Xp = XpCalculator.getXpForLevelUp(10);
        assertEquals(31623, level10Xp, 10);

        // Level 50 requires ~353,553 XP (1000 * 50^1.5)
        int level50Xp = XpCalculator.getXpForLevelUp(50);
        assertEquals(353553, level50Xp, 10);
    }

    @Test
    void testConstantLevelsAfter50() {
        // Level 51 and beyond should all require 75,000 XP
        assertEquals(75000, XpCalculator.getXpForLevelUp(51));
        assertEquals(75000, XpCalculator.getXpForLevelUp(52));
        assertEquals(75000, XpCalculator.getXpForLevelUp(100));
    }

    @Test
    void testGetLevelFromXp() {
        // Start at level 1
        assertEquals(1, XpCalculator.getLevelFromXp(0));

        // Just before level 2
        int level2Requirement = XpCalculator.getXpForLevelUp(2);
        assertEquals(1, XpCalculator.getLevelFromXp(level2Requirement - 1));

        // Exactly at level 2
        assertEquals(2, XpCalculator.getLevelFromXp(level2Requirement));

        // At level 50
        long level50Total = XpCalculator.getTotalXpForLevel(50);
        assertEquals(50, XpCalculator.getLevelFromXp(level50Total));

        // At level 51
        long level51Total = level50Total + 75000;
        assertEquals(51, XpCalculator.getLevelFromXp(level51Total));
    }

    @Test
    void testXpInfo() {
        // Test at mid-progress
        int level2Requirement = XpCalculator.getXpForLevelUp(2);
        long totalXp = level2Requirement / 2; // Halfway to level 2

        XpCalculator.XpInfo info = XpCalculator.getXpInfo(totalXp);

        assertEquals(1, info.getLevel());
        assertEquals(totalXp, info.getCurrentXp());
        assertEquals(level2Requirement, info.getXpForNextLevel());
        assertTrue(info.getProgressPercentage() > 49 && info.getProgressPercentage() < 51);
    }

    @Test
    void testTotalXpCalculation() {
        // Total XP for level 10 should be sum of all level-ups from 2 to 10
        long expectedTotal = 0;
        for (int i = 2; i <= 10; i++) {
            expectedTotal += XpCalculator.getXpForLevelUp(i);
        }
        assertEquals(expectedTotal, XpCalculator.getTotalXpForLevel(10));
    }

    @Test
    void testPost50Scaling() {
        long level50Total = XpCalculator.getTotalXpForLevel(50);
        long level60Total = XpCalculator.getTotalXpForLevel(60);

        // Level 60 should be level 50 total + (10 * 75000)
        assertEquals(level50Total + (10 * 75000), level60Total);
    }

    @Test
    void testXpProgressInLevel() {
        int level2Requirement = XpCalculator.getXpForLevelUp(2);
        long totalXp = level2Requirement + 500; // 500 XP into level 2

        assertEquals(500, XpCalculator.getXpProgressInCurrentLevel(totalXp));
        assertEquals(2, XpCalculator.getLevelFromXp(totalXp));
    }

    @Test
    void testDifficultyProgression() {
        // Verify that difficulty increases progressively
        for (int i = 2; i < 50; i++) {
            int currentLevelXp = XpCalculator.getXpForLevelUp(i);
            int nextLevelXp = XpCalculator.getXpForLevelUp(i + 1);
            assertTrue(nextLevelXp > currentLevelXp,
                    "Level " + (i + 1) + " should require more XP than level " + i);
        }
    }
}
