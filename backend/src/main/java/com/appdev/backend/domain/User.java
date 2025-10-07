package com.appdev.backend.domain;

import com.appdev.backend.util.XpCalculator;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.Instant;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 100)
    @Column(unique = true, nullable = false)
    private String username;

    @NotBlank
    @Email
    @Size(max = 255)
    @Column(unique = true, nullable = false)
    private String email;

    @NotBlank
    @Size(max = 255)
    private String passwordHash;

    @Min(0)
    @Column(nullable = false)
    private long totalXp = 0;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Rank rank = Rank.BRONZE_III;

    @Min(0)
    @Column(nullable = false)
    private int totalGamesPlayed = 0;

    @Min(0)
    @Column(nullable = false)
    private int totalWins = 0;

    @Min(0)
    @Column(nullable = false)
    private int totalLosses = 0;

    @Min(0)
    @Column(nullable = false)
    private int streakDays = 0;

    @Column
    private Instant lastActivityDate;

    @Column(nullable = false)
    private Instant createdAt;

    @Column(nullable = false)
    private Instant updatedAt;

    public User() {
        this.createdAt = Instant.now();
        this.updatedAt = Instant.now();
    }

    // Core getters/setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public long getTotalXp() {
        return totalXp;
    }

    public void setTotalXp(long totalXp) {
        this.totalXp = Math.max(0, totalXp);
        this.updatedAt = Instant.now();
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }

    // XP-related convenience methods

    /**
     * Add XP to the user's total and return the new level.
     * @param xp Amount of XP to add (can be negative to subtract)
     * @return New level after adding XP
     */
    public int addXp(long xp) {
        setTotalXp(this.totalXp + xp);
        return getLevel();
    }

    /**
     * Get the user's current level based on total XP.
     * @return Current level
     */
    public int getLevel() {
        return XpCalculator.getLevelFromXp(this.totalXp);
    }

    /**
     * Get XP progress in current level.
     * @return XP accumulated in current level
     */
    public int getCurrentLevelXp() {
        return XpCalculator.getXpProgressInCurrentLevel(this.totalXp);
    }

    /**
     * Get XP required for next level.
     * @return XP needed to reach next level
     */
    public int getXpForNextLevel() {
        return XpCalculator.getXpNeededForNextLevel(getLevel());
    }

    /**
     * Get progress percentage towards next level.
     * @return Percentage (0.0 to 100.0)
     */
    public double getLevelProgressPercentage() {
        return XpCalculator.getXpInfo(this.totalXp).getProgressPercentage();
    }

    /**
     * Check if user leveled up after adding XP.
     * @param oldLevel Previous level
     * @param newLevel New level
     * @return true if leveled up
     */
    public static boolean hasLeveledUp(int oldLevel, int newLevel) {
        return newLevel > oldLevel;
    }

    // Ranking-related getters/setters

    public Rank getRank() {
        return rank;
    }

    public void setRank(Rank rank) {
        this.rank = rank;
        this.updatedAt = Instant.now();
    }

    public int getTotalGamesPlayed() {
        return totalGamesPlayed;
    }

    public void setTotalGamesPlayed(int totalGamesPlayed) {
        this.totalGamesPlayed = totalGamesPlayed;
        this.updatedAt = Instant.now();
    }

    public int getTotalWins() {
        return totalWins;
    }

    public void setTotalWins(int totalWins) {
        this.totalWins = totalWins;
        this.updatedAt = Instant.now();
    }

    public int getTotalLosses() {
        return totalLosses;
    }

    public void setTotalLosses(int totalLosses) {
        this.totalLosses = totalLosses;
        this.updatedAt = Instant.now();
    }

    public int getStreakDays() {
        return streakDays;
    }

    public void setStreakDays(int streakDays) {
        this.streakDays = streakDays;
        this.updatedAt = Instant.now();
    }

    public Instant getLastActivityDate() {
        return lastActivityDate;
    }

    public void setLastActivityDate(Instant lastActivityDate) {
        this.lastActivityDate = lastActivityDate;
        this.updatedAt = Instant.now();
    }

    /**
     * Get win rate as percentage (0-100).
     *
     * @return Win rate percentage
     */
    public double getWinRate() {
        if (totalGamesPlayed == 0) {
            return 0.0;
        }
        return ((double) totalWins / totalGamesPlayed) * 100.0;
    }

    /**
     * Record a game result.
     *
     * @param won Whether the user won
     */
    public void recordGameResult(boolean won) {
        this.totalGamesPlayed++;
        if (won) {
            this.totalWins++;
        } else {
            this.totalLosses++;
        }
        updateActivity();
    }

    /**
     * Update activity date and streak.
     */
    public void updateActivity() {
        Instant now = Instant.now();

        if (lastActivityDate != null) {
            // Check if it's a new day
            long hoursSinceLastActivity = java.time.Duration.between(lastActivityDate, now).toHours();

            if (hoursSinceLastActivity >= 24 && hoursSinceLastActivity < 48) {
                // Consecutive day - increase streak
                streakDays++;
            } else if (hoursSinceLastActivity >= 48) {
                // Streak broken - reset to 1
                streakDays = 1;
            }
            // If < 24 hours, same day, don't change streak
        } else {
            // First activity
            streakDays = 1;
        }

        this.lastActivityDate = now;
        this.updatedAt = now;
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = Instant.now();
    }
}
