import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function LeaderboardPage() {
  // Rank tier system
  const getRankTier = (xp: number) => {
    if (xp >= 100000) return { name: 'Legend', icon: '👑', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-500/50' };
    if (xp >= 50000) return { name: 'Diamond', icon: '💎', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20', borderColor: 'border-cyan-500/50' };
    if (xp >= 25000) return { name: 'Platinum', icon: '⭐', color: 'text-purple-400', bgColor: 'bg-purple-500/20', borderColor: 'border-purple-500/50' };
    if (xp >= 10000) return { name: 'Gold', icon: '🥇', color: 'text-yellow-300', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-500/50' };
    if (xp >= 5000) return { name: 'Silver', icon: '🥈', color: 'text-gray-300', bgColor: 'bg-gray-500/20', borderColor: 'border-gray-500/50' };
    return { name: 'Bronze', icon: '🥉', color: 'text-orange-400', bgColor: 'bg-orange-500/20', borderColor: 'border-orange-500/50' };
  };

  const leaderboard = Array.from({ length: 100 }, (_, i) => ({
    rank: i + 1,
    name: i === 283 ? 'You' : `User ${i + 1}`,
    avatar: i === 283 ? 'JD' : `U${i + 1}`,
    xp: 160000 - (i * 500),
    level: Math.floor((160000 - (i * 500)) / 1000),
    highlight: i === 283,
  }));

  const userTier = getRankTier(leaderboard[283].xp);

  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Global Leaderboard</h1>
            <p className="text-gray-400">Top players from around the world</p>
          </div>
          <Link href="/compete">
            <Button variant="outline">← Back to Compete</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card variant="gradient" padding="lg">
            <div className="space-y-2">
              <p className="text-white/60 text-sm">Your Rank Tier</p>
              <div className="flex items-center gap-2">
                <span className="text-3xl">{userTier.icon}</span>
                <p className={`text-2xl font-bold ${userTier.color}`}>{userTier.name}</p>
              </div>
              <p className="text-xs text-gray-400">Rank #284</p>
            </div>
          </Card>
          <Card variant="elevated" padding="lg">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Your XP</p>
              <p className="text-4xl font-bold text-white">{leaderboard[283].xp.toLocaleString()}</p>
              <p className="text-xs text-green-300">Top 0.3%</p>
            </div>
          </Card>
          <Card variant="elevated" padding="lg">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Total Players</p>
              <p className="text-4xl font-bold text-white">94,523</p>
            </div>
          </Card>
          <Card variant="elevated" padding="lg">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">XP to Next Rank</p>
              <p className="text-4xl font-bold text-purple-400">156</p>
            </div>
          </Card>
        </div>

        {/* Rank Tiers Info */}
        <Card variant="elevated" padding="lg" className="mb-8">
          <h3 className="text-lg font-bold text-white mb-4">🏆 Rank Tier System</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'Bronze', icon: '🥉', xp: '0-4.9k XP', color: 'text-orange-400', bgColor: 'bg-orange-500/10' },
              { name: 'Silver', icon: '🥈', xp: '5k-9.9k XP', color: 'text-gray-300', bgColor: 'bg-gray-500/10' },
              { name: 'Gold', icon: '🥇', xp: '10k-24.9k XP', color: 'text-yellow-300', bgColor: 'bg-yellow-500/10' },
              { name: 'Platinum', icon: '⭐', xp: '25k-49.9k XP', color: 'text-purple-400', bgColor: 'bg-purple-500/10' },
              { name: 'Diamond', icon: '💎', xp: '50k-99.9k XP', color: 'text-cyan-400', bgColor: 'bg-cyan-500/10' },
              { name: 'Legend', icon: '👑', xp: '100k+ XP', color: 'text-yellow-400', bgColor: 'bg-yellow-500/10' },
            ].map((tier) => (
              <div key={tier.name} className={`p-3 rounded-lg border border-[#2D3139] ${tier.bgColor} text-center`}>
                <div className="text-2xl mb-1">{tier.icon}</div>
                <p className={`text-sm font-bold ${tier.color}`}>{tier.name}</p>
                <p className="text-xs text-gray-500 mt-1">{tier.xp}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="default" padding="lg">
          <div className="space-y-3">
            {leaderboard.slice(0, 50).map((user) => {
              const tier = getRankTier(user.xp);
              return (
                <div
                  key={user.rank}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                    user.highlight
                      ? 'bg-purple-500/10 border-2 border-purple-500/50'
                      : 'bg-[#151921] hover:bg-[#1C2028]'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className={`text-xl font-bold w-12 text-center ${
                      user.rank === 1 ? 'text-yellow-400' :
                      user.rank === 2 ? 'text-gray-300' :
                      user.rank === 3 ? 'text-orange-400' :
                      user.highlight ? 'text-purple-400' : 'text-gray-500'
                    }`}>
                      {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : `#${user.rank}`}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                      {user.avatar.length > 3 ? user.avatar.slice(0, 2) : user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className={`font-semibold ${user.highlight ? 'text-white text-lg' : 'text-gray-300'}`}>
                          {user.name}
                        </p>
                        <span className={`text-lg ${tier.color}`}>{tier.icon}</span>
                      </div>
                      <p className="text-sm text-gray-500">Level {user.level} • {tier.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-bold ${user.highlight ? 'text-purple-400' : 'text-white'}`}>
                      {user.xp.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">XP</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-2 pt-6 mt-6 border-t border-[#2D3139]">
            <Button variant="outline" size="sm">Previous</Button>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-lg bg-gradient-primary text-white font-semibold">1</button>
              <button className="w-10 h-10 rounded-lg bg-[#151921] text-gray-400 hover:text-white hover:bg-[#1C2028] transition-colors">2</button>
              <button className="w-10 h-10 rounded-lg bg-[#151921] text-gray-400 hover:text-white hover:bg-[#1C2028] transition-colors">3</button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-600">...</span>
              <button className="w-10 h-10 rounded-lg bg-[#151921] text-gray-400 hover:text-white hover:bg-[#1C2028] transition-colors">10</button>
            </div>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
