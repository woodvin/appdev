import Card from '@/components/ui/Card';
import { formatXp } from '@/utils/xpCalculator';

interface ProfileStatsProps {
  level: number;
  totalXp: number;
  rank: number;
  streakDays: number;
  streakBest: number;
  gamesPlayed: number;
  wins: number;
  lessons: number;
}

export default function ProfileStats({
  level,
  totalXp,
  rank,
  streakDays,
  streakBest,
  gamesPlayed,
  wins,
  lessons,
}: ProfileStatsProps) {
  const winRate = gamesPlayed > 0 ? ((wins / gamesPlayed) * 100).toFixed(1) : '0.0';
  const topPercentage = ((rank / 10000) * 100).toFixed(1); // Assuming 10k total users

  const stats = [
    {
      label: 'Total XP',
      value: formatXp(totalXp),
      icon: '⭐',
      gradient: true,
      subtext: `Level ${level}`,
    },
    {
      label: 'Global Rank',
      value: `#${rank}`,
      icon: '🏆',
      subtext: `Top ${topPercentage}%`,
      color: 'text-yellow-400',
    },
    {
      label: 'Current Streak',
      value: `${streakDays} days`,
      icon: '🔥',
      subtext: `Best: ${streakBest} days`,
      color: 'text-orange-400',
    },
    {
      label: 'Games Played',
      value: gamesPlayed.toString(),
      icon: '🎮',
      subtext: `${wins} wins`,
      color: 'text-blue-400',
    },
    {
      label: 'Win Rate',
      value: `${winRate}%`,
      icon: '📈',
      subtext: `${wins}/${gamesPlayed}`,
      color: 'text-green-400',
    },
    {
      label: 'Lessons Completed',
      value: lessons.toString(),
      icon: '📚',
      subtext: 'Keep learning!',
      color: 'text-purple-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          variant={stat.gradient ? 'gradient' : 'elevated'}
          padding="lg"
          hover
        >
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className={stat.gradient ? 'text-white/70 text-sm' : 'text-gray-400 text-sm'}>
                {stat.label}
              </p>
              <p className={`text-2xl font-bold ${stat.gradient ? 'text-white' : stat.color || 'text-white'}`}>
                {stat.value}
              </p>
              <p className={`text-xs ${stat.gradient ? 'text-white/60' : 'text-gray-500'}`}>
                {stat.subtext}
              </p>
            </div>
            <div className="text-3xl opacity-80">{stat.icon}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
