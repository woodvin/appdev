'use client';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt?: string;
  progress?: number;
  maxProgress?: number;
}

interface AchievementShowcaseProps {
  limit?: number;
}

export default function AchievementShowcase({ limit }: AchievementShowcaseProps) {
  // TODO: Replace with actual achievements from API
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'First Steps',
      description: 'Complete your first lesson',
      icon: '🎓',
      rarity: 'common',
      unlockedAt: '2024-01-20',
    },
    {
      id: '2',
      title: 'Week Warrior',
      description: 'Maintain a 7-day streak',
      icon: '🔥',
      rarity: 'rare',
      unlockedAt: '2024-02-15',
    },
    {
      id: '3',
      title: 'Trading Master',
      description: 'Win 100 trading games',
      icon: '📈',
      rarity: 'epic',
      unlockedAt: '2024-03-10',
    },
    {
      id: '4',
      title: 'Top 100',
      description: 'Reach top 100 on the leaderboard',
      icon: '👑',
      rarity: 'legendary',
      unlockedAt: '2024-04-05',
    },
    {
      id: '5',
      title: 'Knowledge Seeker',
      description: 'Complete 50 lessons',
      icon: '📚',
      rarity: 'rare',
      progress: 47,
      maxProgress: 50,
    },
    {
      id: '6',
      title: 'Perfectionist',
      description: 'Get 100% on 10 lessons',
      icon: '💯',
      rarity: 'epic',
      progress: 6,
      maxProgress: 10,
    },
  ];

  const displayedAchievements = limit ? achievements.slice(0, limit) : achievements;

  const rarityStyles = {
    common: 'bg-gray-600 border-gray-500',
    rare: 'bg-blue-600 border-blue-500',
    epic: 'bg-purple-600 border-purple-500',
    legendary: 'bg-gradient-to-br from-yellow-500 to-orange-500 border-yellow-400',
  };

  const rarityGlow = {
    common: '',
    rare: 'shadow-lg shadow-blue-500/20',
    epic: 'shadow-lg shadow-purple-500/30',
    legendary: 'shadow-xl shadow-yellow-500/50',
  };

  return (
    <div className="space-y-3">
      {displayedAchievements.map((achievement) => (
        <div
          key={achievement.id}
          className={`
            relative p-4 rounded-xl border transition-all duration-300
            ${achievement.unlockedAt
              ? `${rarityStyles[achievement.rarity]} ${rarityGlow[achievement.rarity]} hover:scale-105`
              : 'bg-[#151921] border-[#2D3139] opacity-50'
            }
          `}
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className={`
                w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                ${achievement.unlockedAt ? 'bg-black/20' : 'bg-black/40'}
              `}
            >
              {achievement.unlockedAt ? achievement.icon : '🔒'}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="text-white font-bold text-sm mb-1">{achievement.title}</h3>
                  <p className={`text-xs ${achievement.unlockedAt ? 'text-white/80' : 'text-gray-500'}`}>
                    {achievement.description}
                  </p>
                </div>

                {/* Rarity Badge */}
                {achievement.unlockedAt && (
                  <span className="text-xs font-bold text-white/90 bg-black/30 px-2 py-1 rounded capitalize">
                    {achievement.rarity}
                  </span>
                )}
              </div>

              {/* Progress Bar (for locked achievements) */}
              {!achievement.unlockedAt && achievement.progress !== undefined && achievement.maxProgress !== undefined && (
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{achievement.progress}/{achievement.maxProgress}</span>
                  </div>
                  <div className="h-1.5 bg-black/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500 rounded-full transition-all duration-300"
                      style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Unlocked Date */}
              {achievement.unlockedAt && (
                <p className="text-xs text-white/60 mt-2">
                  Unlocked {new Date(achievement.unlockedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              )}
            </div>
          </div>

          {/* Legendary shimmer effect */}
          {achievement.unlockedAt && achievement.rarity === 'legendary' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer rounded-xl"></div>
          )}
        </div>
      ))}

      {!limit && displayedAchievements.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          <p className="text-4xl mb-2">🏆</p>
          <p className="text-sm">No achievements yet. Start your journey!</p>
        </div>
      )}
    </div>
  );
}
