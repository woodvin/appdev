package com.appdev.backend.service;

import com.appdev.backend.domain.Rank;
import com.appdev.backend.domain.User;
import org.springframework.stereotype.Service;

/**
 * Service for calculating and managing user rankings.
 * Combines XP, win rate, and activity to determine rank.
 */
@Service
public class RankingService {

    /**
     * Calculate XP reward with rank-based multipliers.
     *
     * @param baseXp Base XP amount
     * @param user User receiving XP
     * @param isWin Whether this was a win (for additional bonus)
     * @return Final XP amount with all multipliers applied
     */
    public int calculateXpReward(int baseXp, User user, boolean isWin) {
        double multiplier = 1.0;

        // Rank multiplier - higher ranks earn more XP
        Rank currentRank = user.getRank();
        if (currentRank != null) {
            multiplier *= currentRank.getXpMultiplier();
        }

        // Win bonus - winners get 50% more XP
        if (isWin) {
            multiplier *= 1.5;
        }

        // Streak bonus - rewards consistent play
        int streakDays = user.getStreakDays();
        if (streakDays >= 30) {
            multiplier *= 1.3;
        } else if (streakDays >= 14) {
            multiplier *= 1.2;
        } else if (streakDays >= 7) {
            multiplier *= 1.1;
        }

        return (int) Math.round(baseXp * multiplier);
    }

    /**
     * Update user's rank based on their stats.
     *
     * @param user User to update
     * @return New rank (may be same as before)
     */
    public Rank updateUserRank(User user) {
        double winRate = user.getWinRate();
        int gamesPlayed = user.getTotalGamesPlayed();
        long totalXp = user.getTotalXp();

        Rank newRank = Rank.calculateRank(totalXp, winRate, gamesPlayed);
        Rank oldRank = user.getRank();

        // Update rank if changed
        if (oldRank == null || !oldRank.equals(newRank)) {
            user.setRank(newRank);

            // Rank up reward - bonus XP for ranking up
            if (oldRank != null && newRank.isHigherThan(oldRank)) {
                int rankUpBonus = calculateRankUpBonus(newRank);
                user.addXp(rankUpBonus);
            }
        }

        return newRank;
    }

    /**
     * Calculate bonus XP for ranking up.
     *
     * @param newRank Rank achieved
     * @return Bonus XP amount
     */
    private int calculateRankUpBonus(Rank newRank) {
        // Higher ranks give more bonus XP
        switch (newRank.getTier()) {
            case "BRONZE": return 1000;
            case "SILVER": return 2500;
            case "GOLD": return 5000;
            case "PLATINUM": return 10000;
            case "DIAMOND": return 20000;
            case "MASTER": return 50000;
            case "GRANDMASTER": return 100000;
            case "LEGEND": return 250000;
            default: return 1000;
        }
    }

    /**
     * Get rank progress information.
     *
     * @param user User to check
     * @return RankProgress object
     */
    public RankProgress getRankProgress(User user) {
        Rank currentRank = user.getRank();
        if (currentRank == null) {
            currentRank = Rank.BRONZE_III;
        }

        Rank nextRank = Rank.getNextRank(currentRank);
        double progress = Rank.getProgressToNextRank(
            user.getTotalXp(),
            user.getWinRate(),
            user.getTotalGamesPlayed()
        );

        long effectiveXp = calculateEffectiveXp(user);
        long xpNeeded = nextRank != null ? nextRank.getMinXp() - effectiveXp : 0;

        return new RankProgress(
            currentRank,
            nextRank,
            progress,
            effectiveXp,
            xpNeeded
        );
    }

    /**
     * Calculate effective XP (raw XP * performance bonus).
     *
     * @param user User to calculate for
     * @return Effective XP
     */
    public long calculateEffectiveXp(User user) {
        double performanceBonus = calculatePerformanceBonus(
            user.getWinRate(),
            user.getTotalGamesPlayed()
        );
        return (long) (user.getTotalXp() * performanceBonus);
    }

    /**
     * Calculate performance bonus multiplier.
     *
     * @param winRate Win rate (0-100)
     * @param gamesPlayed Total games played
     * @return Multiplier (1.0 to 2.0)
     */
    private double calculatePerformanceBonus(double winRate, int gamesPlayed) {
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

        // Activity bonus (up to +20%)
        if (gamesPlayed >= 500) {
            bonus += 0.2;
        } else if (gamesPlayed >= 250) {
            bonus += 0.15;
        } else if (gamesPlayed >= 100) {
            bonus += 0.1;
        } else if (gamesPlayed >= 50) {
            bonus += 0.05;
        }

        return Math.min(bonus, 2.0);
    }

    /**
     * Data class for rank progression information.
     */
    public static class RankProgress {
        private final Rank currentRank;
        private final Rank nextRank;
        private final double progressPercentage;
        private final long effectiveXp;
        private final long xpNeededForNext;

        public RankProgress(Rank currentRank, Rank nextRank, double progressPercentage,
                          long effectiveXp, long xpNeededForNext) {
            this.currentRank = currentRank;
            this.nextRank = nextRank;
            this.progressPercentage = progressPercentage;
            this.effectiveXp = effectiveXp;
            this.xpNeededForNext = xpNeededForNext;
        }

        public Rank getCurrentRank() {
            return currentRank;
        }

        public Rank getNextRank() {
            return nextRank;
        }

        public double getProgressPercentage() {
            return progressPercentage;
        }

        public long getEffectiveXp() {
            return effectiveXp;
        }

        public long getXpNeededForNext() {
            return xpNeededForNext;
        }

        public boolean isMaxRank() {
            return nextRank == null;
        }
    }
}
