# XP System Documentation

## Overview

The XP system features **progressive difficulty** from levels 1-50, then **constant requirements** from level 51 onwards. This ensures meaningful progression while maintaining grind after level 50.

## Formula

- **Levels 1-50**: `XP = 1000 × (level ^ 1.5)`
- **Levels 51+**: `75,000 XP` per level (constant)

## Key XP Milestones

| Level | XP for This Level | Total XP Required | Notes |
|-------|------------------|-------------------|-------|
| 1 | 0 | 0 | Starting level |
| 2 | 2,828 | 2,828 | Early progression |
| 5 | 11,180 | 33,484 | |
| 10 | 31,623 | 172,547 | Mid-game |
| 20 | 89,443 | 902,382 | |
| 30 | 164,317 | 2,489,916 | |
| 40 | 252,982 | 5,215,601 | Late-game |
| 50 | 353,553 | 9,437,615 | **Last progressive level** |
| 51 | 75,000 | 9,512,615 | **First constant level** |
| 60 | 75,000 | 10,187,615 | Constant grind |
| 75 | 75,000 | 11,312,615 | |
| 100 | 75,000 | 13,187,615 | Endgame |

## Progression Curve Analysis

### Early Game (Levels 1-10)
- Total XP needed: **~172,547**
- Average per level: **~17,255**
- With 1000 XP rewards: **~173 tasks**
- Time to complete: Fast, encouraging early engagement

### Mid Game (Levels 11-30)
- Total XP needed: **~2.3M additional**
- Average per level: **~116,000**
- With 1000 XP rewards: **~2,317 tasks**
- Time to complete: Moderate, builds commitment

### Late Game (Levels 31-50)
- Total XP needed: **~6.9M additional**
- Average per level: **~347,000**
- With 1000 XP rewards: **~6,948 tasks**
- Time to complete: Significant grind, rewarding dedication

### Endgame (Levels 51+)
- XP per level: **75,000 (constant)**
- With 1000 XP rewards: **75 tasks per level**
- Time to complete: Predictable grind, sustainable long-term

## Design Rationale

### Why Progressive Until Level 50?
- Creates natural progression curve
- Players feel accomplishment as they advance
- Each level feels more prestigious
- Prevents trivializing high levels

### Why Constant After Level 50?
- Prevents exponential grind becoming unreasonable
- Gives players predictable goals
- Makes each post-50 level equally valuable
- Sustainable for long-term engagement

### Why 75,000 XP Post-50?
- With 1000 XP rewards being common:
  - **75 tasks per level** = meaningful grind
  - Not too easy: prevents inflation
  - Not too hard: remains achievable
  - Roughly equivalent to level 40-45 difficulty

## Implementation Files

### Backend (Java)
- **XpCalculator.java**: Core XP calculation logic
  - `getTotalXpForLevel(level)`: Total XP needed for level
  - `getXpForLevelUp(level)`: XP for specific level-up
  - `getLevelFromXp(totalXp)`: Calculate level from XP
  - `getXpInfo(totalXp)`: Get complete progression info

- **User.java**: User entity with XP tracking
  - `addXp(xp)`: Add/subtract XP and return new level
  - `getLevel()`: Get current level
  - `getCurrentLevelXp()`: Progress in current level
  - `getXpForNextLevel()`: XP needed for next level

- **XpCalculatorTest.java**: Comprehensive unit tests

### Frontend (TypeScript)
- **xpCalculator.ts**: TypeScript implementation
  - Mirrors backend functionality
  - Client-side XP calculations
  - Display formatting utilities

- **Sidebar.tsx**: Updated to use XP system
  - Dynamic level display
  - Progress bar calculation
  - XP formatting

## Usage Examples

### Backend (Java)
```java
// Get user's XP info
User user = userRepository.findById(userId);
int level = user.getLevel(); // e.g., 42
int currentXp = user.getCurrentLevelXp(); // e.g., 150,000
int xpNeeded = user.getXpForNextLevel(); // e.g., 252,982

// Award XP
int newLevel = user.addXp(1000);
if (User.hasLeveledUp(level, newLevel)) {
    // Trigger level-up celebration!
    notificationService.sendLevelUpNotification(user, newLevel);
}

// Get detailed info
XpCalculator.XpInfo info = XpCalculator.getXpInfo(user.getTotalXp());
System.out.println("Level: " + info.getLevel());
System.out.println("Progress: " + info.getProgressPercentage() + "%");
```

### Frontend (TypeScript)
```typescript
import { getXpInfo, formatXp } from '@/utils/xpCalculator';

const xpInfo = getXpInfo(userTotalXp);

console.log(`Level: ${xpInfo.level}`);
console.log(`Progress: ${formatXp(xpInfo.currentXp)}/${formatXp(xpInfo.xpForNextLevel)}`);
console.log(`Percentage: ${xpInfo.progressPercentage.toFixed(1)}%`);
```

## Balancing Considerations

### If Progression Is Too Fast:
1. Reduce base XP rewards (from 1000 to 500-750)
2. Increase exponent (from 1.5 to 1.6-1.7)
3. Increase post-50 constant (from 75k to 100k)

### If Progression Is Too Slow:
1. Increase base XP rewards
2. Decrease exponent (from 1.5 to 1.3-1.4)
3. Decrease post-50 constant (from 75k to 50k)
4. Add bonus XP events/multipliers

### Engagement Strategies:
- **Daily bonuses**: First win of the day = 2x XP
- **Streaks**: Consecutive days multiply XP
- **Challenges**: Special tasks with bonus XP
- **Level-up rewards**: Unlock features at milestones
- **Prestige system**: Reset at level 100 with permanent bonuses

## Testing

Run backend tests:
```bash
./gradlew test --tests XpCalculatorTest
```

The test suite covers:
- Basic level calculations
- Progressive scaling (levels 1-50)
- Constant scaling (levels 51+)
- Edge cases and boundaries
- Total XP accumulation
- Progress tracking
