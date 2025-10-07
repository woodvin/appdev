'use client';

interface Activity {
  id: string;
  type: 'lesson' | 'game' | 'achievement' | 'level_up' | 'streak' | 'rank';
  title: string;
  description: string;
  icon: string;
  timestamp: string;
  xpGained?: number;
  metadata?: {
    gameResult?: 'win' | 'loss';
    streakDays?: number;
    newLevel?: number;
    newRank?: number;
  };
}

interface ActivityFeedProps {
  limit?: number;
}

export default function ActivityFeed({ limit }: ActivityFeedProps) {
  // TODO: Replace with actual activity data from API
  const activities: Activity[] = [
    {
      id: '1',
      type: 'level_up',
      title: 'Level Up!',
      description: 'Reached Level 29',
      icon: '🎉',
      timestamp: '2024-04-10T14:30:00Z',
      metadata: { newLevel: 29 },
    },
    {
      id: '2',
      type: 'achievement',
      title: 'Achievement Unlocked',
      description: 'Trading Master',
      icon: '🏆',
      timestamp: '2024-04-10T12:15:00Z',
      xpGained: 1000,
    },
    {
      id: '3',
      type: 'game',
      title: 'Won Game',
      description: 'Market Simulator Pro',
      icon: '🎮',
      timestamp: '2024-04-10T10:45:00Z',
      xpGained: 500,
      metadata: { gameResult: 'win' },
    },
    {
      id: '4',
      type: 'lesson',
      title: 'Completed Lesson',
      description: 'Advanced Trading Strategies',
      icon: '📚',
      timestamp: '2024-04-09T16:20:00Z',
      xpGained: 250,
    },
    {
      id: '5',
      type: 'streak',
      title: 'Streak Extended',
      description: '7 day streak',
      icon: '🔥',
      timestamp: '2024-04-09T09:00:00Z',
      metadata: { streakDays: 7 },
    },
    {
      id: '6',
      type: 'game',
      title: 'Played Game',
      description: 'Quick Trade Challenge',
      icon: '🎮',
      timestamp: '2024-04-08T19:30:00Z',
      xpGained: 100,
      metadata: { gameResult: 'loss' },
    },
    {
      id: '7',
      type: 'rank',
      title: 'Rank Changed',
      description: 'Climbed to #284',
      icon: '📈',
      timestamp: '2024-04-08T15:00:00Z',
      metadata: { newRank: 284 },
    },
    {
      id: '8',
      type: 'lesson',
      title: 'Completed Lesson',
      description: 'Risk Management Basics',
      icon: '📚',
      timestamp: '2024-04-07T11:10:00Z',
      xpGained: 250,
    },
  ];

  const displayedActivities = limit ? activities.slice(0, limit) : activities;

  const getTimeAgo = (timestamp: string): string => {
    const now = new Date();
    const activityTime = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - activityTime.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;

    return activityTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getActivityColor = (type: Activity['type']) => {
    switch (type) {
      case 'level_up':
        return 'bg-gradient-primary';
      case 'achievement':
        return 'bg-yellow-500';
      case 'game':
        return 'bg-blue-500';
      case 'lesson':
        return 'bg-purple-500';
      case 'streak':
        return 'bg-orange-500';
      case 'rank':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-3">
      {displayedActivities.map((activity, index) => (
        <div
          key={activity.id}
          className="relative pl-8 pb-4 last:pb-0"
        >
          {/* Timeline line */}
          {index < displayedActivities.length - 1 && (
            <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-[#2D3139]"></div>
          )}

          {/* Timeline dot */}
          <div className={`absolute left-0 top-1 w-6 h-6 rounded-full ${getActivityColor(activity.type)} flex items-center justify-center text-xs shadow-lg`}>
            {activity.icon}
          </div>

          {/* Content */}
          <div className="bg-[#151921] rounded-lg p-4 border border-[#2D3139] hover:border-[#3A3F4B] transition-colors">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h4 className="text-white font-semibold text-sm">{activity.title}</h4>
                <p className="text-gray-400 text-sm">{activity.description}</p>
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {getTimeAgo(activity.timestamp)}
              </span>
            </div>

            {/* Metadata */}
            <div className="flex items-center gap-3 text-xs">
              {activity.xpGained && (
                <span className="text-green-400 font-semibold">
                  +{activity.xpGained} XP
                </span>
              )}

              {activity.metadata?.gameResult && (
                <span className={activity.metadata.gameResult === 'win' ? 'text-green-400' : 'text-red-400'}>
                  {activity.metadata.gameResult === 'win' ? '✓ Victory' : '✗ Defeat'}
                </span>
              )}

              {activity.metadata?.streakDays && (
                <span className="text-orange-400">
                  🔥 {activity.metadata.streakDays} days
                </span>
              )}

              {activity.metadata?.newLevel && (
                <span className="text-purple-400">
                  Level {activity.metadata.newLevel}
                </span>
              )}

              {activity.metadata?.newRank && (
                <span className="text-blue-400">
                  Rank #{activity.metadata.newRank}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}

      {displayedActivities.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-4xl mb-2">📊</p>
          <p className="text-sm">No activity yet. Start your journey!</p>
        </div>
      )}
    </div>
  );
}
