# Ranking System Documentation

## Overview

The ranking system is a **performance-based competitive tier system** that rewards players not just for XP, but for **skill and consistency**. Players with higher win rates and more games earn bonuses that help them rank up faster.

## Key Features

- **18 Competitive Ranks** across 8 tiers
- **Performance Bonuses** up to 2x (100% bonus)
- **Effective XP** system combining raw XP with performance
- **Dynamic XP Multipliers** at each rank
- **Win Rate & Activity Rewards**

## Rank Tiers

### Bronze Tier (Beginner)
- **Bronze III** - 0 XP required
- **Bronze II** - 5,000 XP
- **Bronze I** - 15,000 XP
- **Multiplier**: 1.0x XP gain
- **Color**: #CD7F32 (Bronze)
- **Icon**: 🥉

### Silver Tier (Intermediate)
- **Silver III** - 35,000 XP
- **Silver II** - 75,000 XP
- **Silver I** - 150,000 XP
- **Multiplier**: 1.1x XP gain
- **Color**: #C0C0C0 (Silver)
- **Icon**: 🥈

### Gold Tier (Advanced)
- **Gold III** - 300,000 XP
- **Gold II** - 600,000 XP
- **Gold I** - 1,000,000 XP
- **Multiplier**: 1.2x XP gain
- **Color**: #FFD700 (Gold)
- **Icon**: 🥇

### Platinum Tier (Expert)
- **Platinum III** - 1,750,000 XP
- **Platinum II** - 3,000,000 XP
- **Platinum I** - 5,000,000 XP
- **Multiplier**: 1.3x XP gain
- **Color**: #E5E4E2 (Platinum)
- **Icon**: 💎

### Diamond Tier (Elite)
- **Diamond III** - 8,000,000 XP
- **Diamond II** - 12,000,000 XP
- **Diamond I** - 18,000,000 XP
- **Multiplier**: 1.4x XP gain
- **Color**: #B9F2FF (Diamond Blue)
- **Icon**: 💠

### Master Tier (Professional)
- **Master** - 25,000,000 XP
- **Multiplier**: 1.5x XP gain
- **Color**: #9D4EDD (Purple)
- **Icon**: 👑

### Grandmaster Tier (Champion)
- **Grandmaster** - 35,000,000 XP
- **Multiplier**: 1.6x XP gain
- **Color**: #FF006E (Pink)
- **Icon**: 🏆

### Legend Tier (Ultimate)
- **Legend** - 50,000,000 XP
- **Multiplier**: 1.75x XP gain
- **Color**: #FFB627 (Gold/Orange)
- **Icon**: ⭐

## Performance Bonus System

### Effective XP Formula
```
Effective XP = Total XP × (1.0 + Win Rate Bonus + Activity Bonus)
```

Your **rank** is determined by **Effective XP**, not just raw XP!

### Win Rate Bonuses
- **70%+ Win Rate**: +40% bonus
- **60-69% Win Rate**: +30% bonus
- **55-59% Win Rate**: +20% bonus
- **50-54% Win Rate**: +10% bonus
- **Below 50%**: No bonus

### Activity Bonuses
- **500+ Games**: +20% bonus
- **250-499 Games**: +15% bonus
- **100-249 Games**: +10% bonus
- **50-99 Games**: +5% bonus
- **Below 50 Games**: No bonus

### Maximum Bonus
The maximum total bonus is capped at **+100% (2.0x multiplier)**.

## XP Rewards System

### Base XP Multipliers by Rank
Each rank tier earns more XP per activity:
- Bronze: 1.0x
- Silver: 1.1x
- Gold: 1.2x
- Platinum: 1.3x
- Diamond: 1.4x
- Master: 1.5x
- Grandmaster: 1.6x
- Legend: 1.75x

### Win Bonus
Winners get **+50% more XP** than losers for the same activity.

### Streak Bonus
Maintain daily activity streaks for additional XP:
- **30+ Days**: +30% XP
- **14-29 Days**: +20% XP
- **7-13 Days**: +10% XP

### Example XP Calculation
```
Player Profile:
- Base XP Reward: 1000
- Rank: Gold II (1.2x multiplier)
- Win: Yes (+50%)
- Streak: 15 days (+20%)

Calculation:
1000 × 1.2 (rank) × 1.5 (win) × 1.2 (streak) = 2,160 XP
```

## Rank-Up Bonuses

When you rank up, you receive bonus XP:
- **Bronze**: 1,000 XP
- **Silver**: 2,500 XP
- **Gold**: 5,000 XP
- **Platinum**: 10,000 XP
- **Diamond**: 20,000 XP
- **Master**: 50,000 XP
- **Grandmaster**: 100,000 XP
- **Legend**: 250,000 XP

## Examples

### Example 1: Skilled Player
```
Player A:
- Total XP: 800,000
- Win Rate: 65%
- Games Played: 300

Performance Bonus: +30% (win rate) + 15% (activity) = +45%
Effective XP: 800,000 × 1.45 = 1,160,000
Rank: Gold I (requires 1,000,000 effective XP)
```

### Example 2: Casual Player
```
Player B:
- Total XP: 1,200,000
- Win Rate: 45%
- Games Played: 80

Performance Bonus: 0% (win rate) + 5% (activity) = +5%
Effective XP: 1,200,000 × 1.05 = 1,260,000
Rank: Gold I (barely qualified)
```

### Example 3: Pro Player
```
Player C:
- Total XP: 5,000,000
- Win Rate: 72%
- Games Played: 600

Performance Bonus: +40% (win rate) + 20% (activity) = +60%
Effective XP: 5,000,000 × 1.60 = 8,000,000
Rank: Diamond III (jumped ahead!)
```

## Strategy Tips

### For Fast Rank Progression:
1. **Maintain High Win Rate** (60%+) for massive bonuses
2. **Play Consistently** to build activity bonus
3. **Focus on Winning** over grinding losses
4. **Build Streaks** for compounding XP gains
5. **Play at Higher Ranks** to earn more XP per win

### For Competitive Players:
- A 70% win rate with 500 games = **2x effective XP**
- This means you rank up **twice as fast** as someone with the same XP but poor performance
- Winners with streaks can earn **3x+ XP per activity**

## Implementation Files

### Backend (Java)
- **Rank.java**: Enum with all ranks, colors, requirements
- **RankingService.java**: XP calculation, rank updates, progress tracking
- **User.java**: Updated with rank fields, win/loss tracking, streak tracking
- **UserRepository.java**: Queries for leaderboards, rank distribution
- **RankingController.java**: REST endpoints for ranking data

### Frontend (TypeScript)
- **types/ranking.ts**: Type definitions, utility functions
- **RankBadge.tsx**: Visual rank display component
- **RankProgress.tsx**: Rank progression card with progress bar
- **Profile page**: Updated with rank display and progress

## API Endpoints

### Get Leaderboard
```
GET /api/ranking/leaderboard?page=0&size=50
```

### Get Rank Progress
```
GET /api/ranking/progress/{userId}
```

### Get Rank Distribution
```
GET /api/ranking/distribution
```

### Get All Ranks Info
```
GET /api/ranking/ranks
```

### Get Top Players by Win Rate
```
GET /api/ranking/top-players?minGames=50&page=0&size=20
```

### Get Global Rank Position
```
GET /api/ranking/position/{userId}
```

## Database Schema Updates

New fields added to `users` table:
```sql
rank VARCHAR(50) NOT NULL DEFAULT 'BRONZE_III'
total_games_played INT NOT NULL DEFAULT 0
total_wins INT NOT NULL DEFAULT 0
total_losses INT NOT NULL DEFAULT 0
streak_days INT NOT NULL DEFAULT 0
last_activity_date TIMESTAMP
```

## Balancing Notes

### Current Balance:
- Progression feels rewarding for both casual and competitive players
- High skill = faster progression (up to 2x)
- Activity is rewarded but not required for rank
- Ranks are prestigious and visible

### If Ranks Feel Too Easy:
1. Increase XP requirements for higher tiers
2. Reduce performance bonus caps
3. Add minimum win rate requirements per rank

### If Ranks Feel Too Hard:
1. Increase performance bonus percentages
2. Lower XP requirements for lower tiers
3. Add more bonus sources (achievements, lessons, etc.)

## Future Enhancements

### Potential Additions:
- **Seasonal Rankings**: Reset ranks each season with special rewards
- **Decay System**: Lose rank if inactive for too long (Master+)
- **Placement Matches**: Initial calibration games for new players
- **Rank-Specific Rewards**: Exclusive avatars, titles, cosmetics
- **Tier Promotions**: Special rewards for crossing tier boundaries
- **MMR System**: Hidden matchmaking rating separate from visible rank
