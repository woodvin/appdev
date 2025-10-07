package com.appdev.backend.domain;

/**
 * Ranking tiers based on XP and performance metrics.
 * Each rank has minimum requirements and visual styling.
 */
public enum Rank {
    // Bronze Tier
    BRONZE_III("Bronze III", 0, "#CD7F32", 1.0),
    BRONZE_II("Bronze II", 5000, "#CD7F32", 1.0),
    BRONZE_I("Bronze I", 15000, "#CD7F32", 1.0),

    // Silver Tier
    SILVER_III("Silver III", 35000, "#C0C0C0", 1.1),
    SILVER_II("Silver II", 75000, "#C0C0C0", 1.1),
    SILVER_I("Silver I", 150000, "#C0C0C0", 1.1),

    // Gold Tier
    GOLD_III("Gold III", 300000, "#FFD700", 1.2),
    GOLD_II("Gold II", 600000, "#FFD700", 1.2),
    GOLD_I("Gold I", 1000000, "#FFD700", 1.2),

    // Platinum Tier
    PLATINUM_III("Platinum III", 1750000, "#E5E4E2", 1.3),
    PLATINUM_II("Platinum II", 3000000, "#E5E4E2", 1.3),
    PLATINUM_I("Platinum I", 5000000, "#E5E4E2", 1.3),

    // Diamond Tier
    DIAMOND_III("Diamond III", 8000000, "#B9F2FF", 1.4),
    DIAMOND_II("Diamond II", 12000000, "#B9F2FF", 1.4),
    DIAMOND_I("Diamond I", 18000000, "#B9F2FF", 1.4),

    // Master Tier - Elite players
    MASTER("Master", 25000000, "#9D4EDD", 1.5),

    // Grandmaster Tier - Top 100
    GRANDMASTER("Grandmaster", 35000000, "#FF006E", 1.6),

    // Legend Tier - Top 10
    LEGEND("Legend", 50000000, "#FFB627", 1.75);

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
     * Get the division within the tier (e.g., "III", "II", "I")
     * Returns empty string for single-tier ranks like MASTER
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
        Rank currentRank = BRONZE_III;
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
