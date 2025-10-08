package com.appdev.backend.domain;

/**
 * Ranking tiers based on XP and performance metrics.
 * Each rank has minimum requirements and visual styling.
 *
 * Division Structure:
 * - Bronze, Silver, Gold: 5 divisions each (V, IV, III, II, I)
 * - Platinum, Diamond, Legend: 3 divisions each (III, II, I)
 * - Elite: Single tier (no divisions)
 */
public enum Rank {
    // Bronze Tier - 5 Divisions (0 - 50k XP, 10k per division)
    BRONZE_V("Bronze V", 0, "#CD7F32", 1.0),
    BRONZE_IV("Bronze IV", 10000, "#CD7F32", 1.0),
    BRONZE_III("Bronze III", 20000, "#CD7F32", 1.0),
    BRONZE_II("Bronze II", 30000, "#CD7F32", 1.0),
    BRONZE_I("Bronze I", 40000, "#CD7F32", 1.0),

    // Silver Tier - 5 Divisions (50k - 150k XP, 20k per division)
    SILVER_V("Silver V", 50000, "#C0C0C0", 1.05),
    SILVER_IV("Silver IV", 70000, "#C0C0C0", 1.05),
    SILVER_III("Silver III", 90000, "#C0C0C0", 1.05),
    SILVER_II("Silver II", 110000, "#C0C0C0", 1.05),
    SILVER_I("Silver I", 130000, "#C0C0C0", 1.05),

    // Gold Tier - 5 Divisions (150k - 400k XP, 50k per division)
    GOLD_V("Gold V", 150000, "#FFD700", 1.1),
    GOLD_IV("Gold IV", 200000, "#FFD700", 1.1),
    GOLD_III("Gold III", 250000, "#FFD700", 1.1),
    GOLD_II("Gold II", 300000, "#FFD700", 1.1),
    GOLD_I("Gold I", 350000, "#FFD700", 1.1),

    // Platinum Tier - 3 Divisions (400k - 1M XP, 200k per division)
    PLATINUM_III("Platinum III", 400000, "#E5E4E2", 1.15),
    PLATINUM_II("Platinum II", 600000, "#E5E4E2", 1.15),
    PLATINUM_I("Platinum I", 800000, "#E5E4E2", 1.15),

    // Diamond Tier - 3 Divisions (1M - 2.5M XP, 500k per division)
    DIAMOND_III("Diamond III", 1000000, "#B9F2FF", 1.2),
    DIAMOND_II("Diamond II", 1500000, "#B9F2FF", 1.2),
    DIAMOND_I("Diamond I", 2000000, "#B9F2FF", 1.2),

    // Legend Tier - 3 Divisions (2.5M - 5M XP, ~833k per division)
    LEGEND_III("Legend III", 2500000, "#FFB627", 1.25),
    LEGEND_II("Legend II", 3333333, "#FFB627", 1.3),
    LEGEND_I("Legend I", 4166666, "#FFB627", 1.35),

    // Elite Tier - Top players (5M+ XP)
    ELITE("Elite", 5000000, "#FF006E", 1.5);

    private final String displayName;
    private final long minXp;
    private final String color; // Hex color for UI
    private final double xpMultiplier; // Bonus XP multiplier for this rank

    Rank(String displayName, long minXp, String color, double xpMultiplier) {
        this.displayName = displayName;
        this.minXp = minXp;
        this.color = color;
        this.xpMultiplier = xpMultiplier;
    }

    public String getDisplayName() {
        return displayName;
    }

    public long getMinXp() {
        return minXp;
    }

    public String getColor() {
        return color;
    }

    public double getXpMultiplier() {
        return xpMultiplier;
    }

    /**
     * Get the tier name (e.g., "Bronze", "Silver")
     */
    public String getTier() {
        String name = this.name();
        int underscoreIndex = name.indexOf('_');
        if (underscoreIndex > 0) {
            return name.substring(0, underscoreIndex);
        }
        return name;
    }

    /**
     * Get the division within the tier (e.g., "V", "IV", "III", "II", "I")
     * Returns empty string for single-tier ranks like ELITE
     */
    public String getDivision() {
        String name = this.name();
        int underscoreIndex = name.indexOf('_');
        if (underscoreIndex > 0) {
            return name.substring(underscoreIndex + 1);
        }
        return "";
    }

    /**
     * Calculate rank from XP and performance metrics.
     *
     * @param totalXp Total XP accumulated
     * @param winRate Win rate percentage (0-100)
     * @param gamesPlayed Total games played
     * @return Appropriate rank
     */
    public static Rank calculateRank(long totalXp, double winRate, int gamesPlayed) {
        // Performance multiplier based on win rate and activity
        double performanceBonus = calculatePerformanceBonus(winRate, gamesPlayed);

        // Effective XP considers both raw XP and performance
        long effectiveXp = (long) (totalXp * performanceBonus);

        // Find the highest rank the user qualifies for
        Rank currentRank = BRONZE_V;
        for (Rank rank : Rank.values()) {
            if (effectiveXp >= rank.getMinXp()) {
                currentRank = rank;
            } else {
                break;
            }
        }

        return currentRank;
    }

    /**
     * Calculate performance bonus multiplier.
     * Players with high win rates and more games get bonus rank advancement.
     *
     * @param winRate Win rate (0-100)
     * @param gamesPlayed Total games played
     * @return Multiplier (1.0 to 2.0)
     */
    private static double calculatePerformanceBonus(double winRate, int gamesPlayed) {
        double bonus = 1.0;

        // Win rate bonus (up to +40%)
        if (winRate >= 70) {
            bonus += 0.4;
        } else if (winRate >= 60) {
            bonus += 0.3;
        } else if (winRate >= 55) {
            bonus += 0.2;
        } else if (winRate >= 50) {
            bonus += 0.1;
        }

        // Activity bonus - rewards consistent play (up to +20%)
        if (gamesPlayed >= 500) {
            bonus += 0.2;
        } else if (gamesPlayed >= 250) {
            bonus += 0.15;
        } else if (gamesPlayed >= 100) {
            bonus += 0.1;
        } else if (gamesPlayed >= 50) {
            bonus += 0.05;
        }

        // Cap at 2.0x (100% bonus max)
        return Math.min(bonus, 2.0);
    }

    /**
     * Get progress to next rank.
     *
     * @param totalXp Current total XP
     * @param winRate Current win rate
     * @param gamesPlayed Total games played
     * @return Progress percentage (0-100)
     */
    public static double getProgressToNextRank(long totalXp, double winRate, int gamesPlayed) {
        Rank currentRank = calculateRank(totalXp, winRate, gamesPlayed);
        Rank nextRank = getNextRank(currentRank);

        if (nextRank == null) {
            return 100.0; // Already at max rank
        }

        double performanceBonus = calculatePerformanceBonus(winRate, gamesPlayed);
        long effectiveXp = (long) (totalXp * performanceBonus);

        long currentMin = currentRank.getMinXp();
        long nextMin = nextRank.getMinXp();
        long progress = effectiveXp - currentMin;
        long required = nextMin - currentMin;

        return Math.min(100.0, (double) progress / required * 100.0);
    }

    /**
     * Get the next rank in progression.
     *
     * @param current Current rank
     * @return Next rank, or null if at max
     */
    public static Rank getNextRank(Rank current) {
        Rank[] ranks = Rank.values();
        for (int i = 0; i < ranks.length - 1; i++) {
            if (ranks[i] == current) {
                return ranks[i + 1];
            }
        }
        return null; // Already at highest rank
    }

    /**
     * Check if this rank is higher than another.
     */
    public boolean isHigherThan(Rank other) {
        return this.ordinal() > other.ordinal();
    }
}
