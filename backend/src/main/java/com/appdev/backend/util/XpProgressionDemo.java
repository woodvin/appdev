package com.appdev.backend.util;

/**
 * Demo class to visualize XP progression.
 * Run this to see the XP requirements for each level.
 */
public class XpProgressionDemo {

    public static void main(String[] args) {
        System.out.println("=== XP PROGRESSION SYSTEM ===\n");
        System.out.println("Formula:");
        System.out.println("  Levels 1-50: 1000 × (level ^ 1.5)");
        System.out.println("  Levels 51+:  75,000 XP (constant)\n");
        System.out.println("With 1000 XP rewards being common:\n");

        System.out.printf("%-8s %-18s %-20s %-15s%n",
                "Level", "XP for This Level", "Total XP Required", "Tasks @ 1000XP");
        System.out.println("─".repeat(70));

        // Key milestones
        int[] milestones = {1, 2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 51, 52, 60, 75, 100};

        for (int level : milestones) {
            long totalXp = XpCalculator.getTotalXpForLevel(level);
            int xpForLevel = level == 1 ? 0 : XpCalculator.getXpForLevelUp(level);
            int tasks = xpForLevel / 1000;

            String marker = "";
            if (level == 50) marker = " ◄── Last progressive";
            if (level == 51) marker = " ◄── First constant";

            System.out.printf("%-8d %-18s %-20s %-15s%s%n",
                    level,
                    formatNumber(xpForLevel),
                    formatNumber(totalXp),
                    tasks,
                    marker);
        }

        System.out.println("\n=== GRIND ANALYSIS ===\n");

        long level10Total = XpCalculator.getTotalXpForLevel(10);
        long level30Total = XpCalculator.getTotalXpForLevel(30);
        long level50Total = XpCalculator.getTotalXpForLevel(50);
        long level100Total = XpCalculator.getTotalXpForLevel(100);

        System.out.println("Early Game (1→10):   " + formatNumber(level10Total) + " XP (" + (level10Total/1000) + " tasks)");
        System.out.println("Mid Game (10→30):    " + formatNumber(level30Total - level10Total) + " XP (" + ((level30Total - level10Total)/1000) + " tasks)");
        System.out.println("Late Game (30→50):   " + formatNumber(level50Total - level30Total) + " XP (" + ((level50Total - level30Total)/1000) + " tasks)");
        System.out.println("Endgame (50→100):    " + formatNumber(level100Total - level50Total) + " XP (" + ((level100Total - level50Total)/1000) + " tasks)");

        System.out.println("\n=== EXAMPLE PROGRESSION ===\n");

        // Simulate gaining XP
        long[] xpExamples = {0, 5000, 50000, 500000, 2000000, 5000000, 9437615, 9512615, 13187615};

        System.out.printf("%-15s %-8s %-15s %-20s %-12s%n",
                "Total XP", "Level", "Progress", "Next Level Needs", "% Complete");
        System.out.println("─".repeat(75));

        for (long xp : xpExamples) {
            XpCalculator.XpInfo info = XpCalculator.getXpInfo(xp);
            System.out.printf("%-15s %-8d %-15s %-20s %-12.1f%%%n",
                    formatNumber(xp),
                    info.getLevel(),
                    formatNumber(info.getCurrentXp()) + " XP",
                    formatNumber(info.getXpForNextLevel()) + " XP",
                    info.getProgressPercentage());
        }

        System.out.println("\n=== RECOMMENDATION ===");
        System.out.println("• Levels 1-10: Quick progression, hooks players");
        System.out.println("• Levels 11-30: Steady growth, builds investment");
        System.out.println("• Levels 31-50: Serious grind, prestigious achievement");
        System.out.println("• Levels 51+: Constant 75k XP = ~75 tasks per level");
        System.out.println("• At 1000 XP per task, reaching level 50 takes ~9,438 tasks");
        System.out.println("• Post-50 grind is sustainable and predictable");
    }

    private static String formatNumber(long number) {
        return String.format("%,d", number);
    }
}
