package com.appdev.backend.repo;

import com.appdev.backend.domain.Rank;
import com.appdev.backend.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    /**
     * Find users by rank.
     */
    List<User> findByRank(Rank rank);

    /**
     * Get leaderboard ordered by total XP.
     */
    @Query("SELECT u FROM User u ORDER BY u.totalXp DESC")
    Page<User> findLeaderboard(Pageable pageable);

    /**
     * Get leaderboard by rank (only users of specific rank).
     */
    @Query("SELECT u FROM User u WHERE u.rank = :rank ORDER BY u.totalXp DESC")
    Page<User> findLeaderboardByRank(@Param("rank") Rank rank, Pageable pageable);

    /**
     * Get user's global rank position.
     */
    @Query("SELECT COUNT(u) + 1 FROM User u WHERE u.totalXp > :totalXp")
    Long findGlobalRank(@Param("totalXp") long totalXp);

    /**
     * Get users with win rate above threshold.
     */
    @Query("SELECT u FROM User u WHERE u.totalGamesPlayed > 0 AND (CAST(u.totalWins AS double) / u.totalGamesPlayed) * 100 >= :minWinRate ORDER BY (CAST(u.totalWins AS double) / u.totalGamesPlayed) DESC")
    List<User> findByMinWinRate(@Param("minWinRate") double minWinRate);

    /**
     * Get top players by win rate (minimum games required).
     */
    @Query("SELECT u FROM User u WHERE u.totalGamesPlayed >= :minGames ORDER BY (CAST(u.totalWins AS double) / u.totalGamesPlayed) DESC")
    Page<User> findTopPlayersByWinRate(@Param("minGames") int minGames, Pageable pageable);

    /**
     * Get users with active streaks.
     */
    @Query("SELECT u FROM User u WHERE u.streakDays >= :minStreak ORDER BY u.streakDays DESC")
    List<User> findByMinStreak(@Param("minStreak") int minStreak);

    /**
     * Count users by rank.
     */
    long countByRank(Rank rank);

    /**
     * Get rank distribution.
     */
    @Query("SELECT u.rank, COUNT(u) FROM User u GROUP BY u.rank ORDER BY u.rank")
    List<Object[]> getRankDistribution();
}
