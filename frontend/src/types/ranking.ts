/**
 * Ranking system types matching backend implementation.
 */

export enum RankTier {
  BRONZE = 'BRONZE',
  SILVER = 'SILVER',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM',
  DIAMOND = 'DIAMOND',
  MASTER = 'MASTER',
  GRANDMASTER = 'GRANDMASTER',
  LEGEND = 'LEGEND',
}

export enum Rank {
  // Bronze Tier
  BRONZE_III = 'BRONZE_III',
  BRONZE_II = 'BRONZE_II',
  BRONZE_I = 'BRONZE_I',

  // Silver Tier
  SILVER_III = 'SILVER_III',
  SILVER_II = 'SILVER_II',
  SILVER_I = 'SILVER_I',

  // Gold Tier
  GOLD_III = 'GOLD_III',
  GOLD_II = 'GOLD_II',
  GOLD_I = 'GOLD_I',

  // Platinum Tier
  PLATINUM_III = 'PLATINUM_III',
  PLATINUM_II = 'PLATINUM_II',
  PLATINUM_I = 'PLATINUM_I',

  // Diamond Tier
  DIAMOND_III = 'DIAMOND_III',
  DIAMOND_II = 'DIAMOND_II',
  DIAMOND_I = 'DIAMOND_I',

  // Master Tier
  MASTER = 'MASTER',

  // Grandmaster Tier
  GRANDMASTER = 'GRANDMASTER',

  // Legend Tier
  LEGEND = 'LEGEND',
}

export interface RankInfo {
  name: Rank;
  displayName: string;
  tier: string;
  division: string;
  minXp: number;
  color: string;
  xpMultiplier: number;
}

export interface RankProgress {
  currentRank: RankInfo;
  nextRank?: RankInfo;
  progressPercentage: number;
  effectiveXp: number;
  xpNeededForNext: number;
  isMaxRank: boolean;
}

export interface LeaderboardEntry {
  userId: number;
  username: string;
  totalXp: number;
  rank: Rank;
  level: number;
  winRate: number;
  gamesPlayed: number;
}

export interface RankDistribution {
  [rank: string]: number;
}

/**
 * Get rank display name.
 */
export function getRankDisplayName(rank: Rank): string {
  const rankNames: Record<Rank, string> = {
    [Rank.BRONZE_III]: 'Bronze III',
    [Rank.BRONZE_II]: 'Bronze II',
    [Rank.BRONZE_I]: 'Bronze I',
    [Rank.SILVER_III]: 'Silver III',
    [Rank.SILVER_II]: 'Silver II',
    [Rank.SILVER_I]: 'Silver I',
    [Rank.GOLD_III]: 'Gold III',
    [Rank.GOLD_II]: 'Gold II',
    [Rank.GOLD_I]: 'Gold I',
    [Rank.PLATINUM_III]: 'Platinum III',
    [Rank.PLATINUM_II]: 'Platinum II',
    [Rank.PLATINUM_I]: 'Platinum I',
    [Rank.DIAMOND_III]: 'Diamond III',
    [Rank.DIAMOND_II]: 'Diamond II',
    [Rank.DIAMOND_I]: 'Diamond I',
    [Rank.MASTER]: 'Master',
    [Rank.GRANDMASTER]: 'Grandmaster',
    [Rank.LEGEND]: 'Legend',
  };
  return rankNames[rank] || rank;
}

/**
 * Get rank color (hex).
 */
export function getRankColor(rank: Rank): string {
  const rankColors: Record<Rank, string> = {
    [Rank.BRONZE_III]: '#CD7F32',
    [Rank.BRONZE_II]: '#CD7F32',
    [Rank.BRONZE_I]: '#CD7F32',
    [Rank.SILVER_III]: '#C0C0C0',
    [Rank.SILVER_II]: '#C0C0C0',
    [Rank.SILVER_I]: '#C0C0C0',
    [Rank.GOLD_III]: '#FFD700',
    [Rank.GOLD_II]: '#FFD700',
    [Rank.GOLD_I]: '#FFD700',
    [Rank.PLATINUM_III]: '#E5E4E2',
    [Rank.PLATINUM_II]: '#E5E4E2',
    [Rank.PLATINUM_I]: '#E5E4E2',
    [Rank.DIAMOND_III]: '#B9F2FF',
    [Rank.DIAMOND_II]: '#B9F2FF',
    [Rank.DIAMOND_I]: '#B9F2FF',
    [Rank.MASTER]: '#9D4EDD',
    [Rank.GRANDMASTER]: '#FF006E',
    [Rank.LEGEND]: '#FFB627',
  };
  return rankColors[rank] || '#808080';
}

/**
 * Get rank tier from rank.
 */
export function getRankTier(rank: Rank): RankTier {
  const name = rank.toString();
  if (name.startsWith('BRONZE')) return RankTier.BRONZE;
  if (name.startsWith('SILVER')) return RankTier.SILVER;
  if (name.startsWith('GOLD')) return RankTier.GOLD;
  if (name.startsWith('PLATINUM')) return RankTier.PLATINUM;
  if (name.startsWith('DIAMOND')) return RankTier.DIAMOND;
  if (name === 'MASTER') return RankTier.MASTER;
  if (name === 'GRANDMASTER') return RankTier.GRANDMASTER;
  if (name === 'LEGEND') return RankTier.LEGEND;
  return RankTier.BRONZE;
}

/**
 * Get rank icon/emoji.
 */
export function getRankIcon(rank: Rank): string {
  const tier = getRankTier(rank);
  const rankIcons: Record<RankTier, string> = {
    [RankTier.BRONZE]: '🥉',
    [RankTier.SILVER]: '🥈',
    [RankTier.GOLD]: '🥇',
    [RankTier.PLATINUM]: '💎',
    [RankTier.DIAMOND]: '💠',
    [RankTier.MASTER]: '👑',
    [RankTier.GRANDMASTER]: '🏆',
    [RankTier.LEGEND]: '⭐',
  };
  return rankIcons[tier] || '🥉';
}

/**
 * Get rank gradient (for UI backgrounds).
 */
export function getRankGradient(rank: Rank): string {
  const tier = getRankTier(rank);
  const gradients: Record<RankTier, string> = {
    [RankTier.BRONZE]: 'linear-gradient(135deg, #CD7F32 0%, #8B4513 100%)',
    [RankTier.SILVER]: 'linear-gradient(135deg, #C0C0C0 0%, #808080 100%)',
    [RankTier.GOLD]: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    [RankTier.PLATINUM]: 'linear-gradient(135deg, #E5E4E2 0%, #A9A9A9 100%)',
    [RankTier.DIAMOND]: 'linear-gradient(135deg, #B9F2FF 0%, #00CED1 100%)',
    [RankTier.MASTER]: 'linear-gradient(135deg, #9D4EDD 0%, #7B2CBF 100%)',
    [RankTier.GRANDMASTER]: 'linear-gradient(135deg, #FF006E 0%, #C1121F 100%)',
    [RankTier.LEGEND]: 'linear-gradient(135deg, #FFB627 0%, #FF6B35 100%)',
  };
  return gradients[tier] || gradients[RankTier.BRONZE];
}

/**
 * Calculate performance bonus description.
 */
export function getPerformanceBonusDescription(winRate: number, gamesPlayed: number): string {
  let bonus = 0;

  if (winRate >= 70) bonus += 40;
  else if (winRate >= 60) bonus += 30;
  else if (winRate >= 55) bonus += 20;
  else if (winRate >= 50) bonus += 10;

  if (gamesPlayed >= 500) bonus += 20;
  else if (gamesPlayed >= 250) bonus += 15;
  else if (gamesPlayed >= 100) bonus += 10;
  else if (gamesPlayed >= 50) bonus += 5;

  return `+${bonus}% performance bonus`;
}
