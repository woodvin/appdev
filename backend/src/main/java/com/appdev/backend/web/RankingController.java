package com.appdev.backend.web;

import com.appdev.backend.domain.Rank;
import com.appdev.backend.domain.User;
import com.appdev.backend.repo.UserRepository;
import com.appdev.backend.service.RankingService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/ranking")
public class RankingController {

    private final UserRepository userRepository;
    private final RankingService rankingService;

    public RankingController(UserRepository userRepository, RankingService rankingService) {
        this.userRepository = userRepository;
        this.rankingService = rankingService;
    }

    /**
     * Get global leaderboard.
     */
    @GetMapping("/leaderboard")
    public ResponseEntity<Map<String, Object>> getLeaderboard(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "50") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        Page<User> leaderboard = userRepository.findLeaderboard(pageable);

        Map<String, Object> response = new HashMap<>();
        response.put("users", leaderboard.getContent());
        response.put("currentPage", leaderboard.getNumber());
        response.put("totalPages", leaderboard.getTotalPages());
        response.put("totalUsers", leaderboard.getTotalElements());

        return ResponseEntity.ok(response);
    }

    /**
     * Get leaderboard for specific rank.
     */
    @GetMapping("/leaderboard/{rank}")
    public ResponseEntity<Map<String, Object>> getLeaderboardByRank(
            @PathVariable String rank,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "50") int size
    ) {
        try {
            Rank rankEnum = Rank.valueOf(rank.toUpperCase());
            Pageable pageable = PageRequest.of(page, size);
            Page<User> leaderboard = userRepository.findLeaderboardByRank(rankEnum, pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("users", leaderboard.getContent());
            response.put("currentPage", leaderboard.getNumber());
            response.put("totalPages", leaderboard.getTotalPages());
            response.put("totalUsers", leaderboard.getTotalElements());
            response.put("rank", rankEnum.getDisplayName());

            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Get user's rank progress.
     */
    @GetMapping("/progress/{userId}")
    public ResponseEntity<Map<String, Object>> getRankProgress(@PathVariable Long userId) {
        return userRepository.findById(userId)
                .map(user -> {
                    RankingService.RankProgress progress = rankingService.getRankProgress(user);

                    Map<String, Object> response = new HashMap<>();
                    response.put("currentRank", progress.getCurrentRank());
                    response.put("nextRank", progress.getNextRank());
                    response.put("progressPercentage", progress.getProgressPercentage());
                    response.put("effectiveXp", progress.getEffectiveXp());
                    response.put("xpNeededForNext", progress.getXpNeededForNext());
                    response.put("isMaxRank", progress.isMaxRank());

                    return ResponseEntity.ok(response);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Get rank distribution statistics.
     */
    @GetMapping("/distribution")
    public ResponseEntity<Map<String, Object>> getRankDistribution() {
        List<Object[]> distribution = userRepository.getRankDistribution();

        Map<String, Long> rankCounts = new HashMap<>();
        for (Object[] row : distribution) {
            Rank rank = (Rank) row[0];
            Long count = (Long) row[1];
            rankCounts.put(rank.name(), count);
        }

        Map<String, Object> response = new HashMap<>();
        response.put("distribution", rankCounts);
        response.put("totalUsers", userRepository.count());

        return ResponseEntity.ok(response);
    }

    /**
     * Get all available ranks with requirements.
     */
    @GetMapping("/ranks")
    public ResponseEntity<List<Map<String, Object>>> getAllRanks() {
        List<Map<String, Object>> ranks = java.util.Arrays.stream(Rank.values())
                .map(rank -> {
                    Map<String, Object> rankInfo = new HashMap<>();
                    rankInfo.put("name", rank.name());
                    rankInfo.put("displayName", rank.getDisplayName());
                    rankInfo.put("tier", rank.getTier());
                    rankInfo.put("division", rank.getDivision());
                    rankInfo.put("minXp", rank.getMinXp());
                    rankInfo.put("color", rank.getColor());
                    rankInfo.put("xpMultiplier", rank.getXpMultiplier());
                    return rankInfo;
                })
                .toList();

        return ResponseEntity.ok(ranks);
    }

    /**
     * Get top players by win rate.
     */
    @GetMapping("/top-players")
    public ResponseEntity<Map<String, Object>> getTopPlayersByWinRate(
            @RequestParam(defaultValue = "50") int minGames,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        Page<User> topPlayers = userRepository.findTopPlayersByWinRate(minGames, pageable);

        Map<String, Object> response = new HashMap<>();
        response.put("users", topPlayers.getContent());
        response.put("currentPage", topPlayers.getNumber());
        response.put("totalPages", topPlayers.getTotalPages());
        response.put("totalUsers", topPlayers.getTotalElements());
        response.put("minGamesRequired", minGames);

        return ResponseEntity.ok(response);
    }

    /**
     * Get user's global rank position.
     */
    @GetMapping("/position/{userId}")
    public ResponseEntity<Map<String, Object>> getGlobalPosition(@PathVariable Long userId) {
        return userRepository.findById(userId)
                .map(user -> {
                    Long position = userRepository.findGlobalRank(user.getTotalXp());

                    Map<String, Object> response = new HashMap<>();
                    response.put("userId", userId);
                    response.put("username", user.getUsername());
                    response.put("globalRank", position);
                    response.put("totalXp", user.getTotalXp());
                    response.put("rank", user.getRank());

                    return ResponseEntity.ok(response);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
