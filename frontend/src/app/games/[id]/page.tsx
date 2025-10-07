import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function GamePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/games" className="hover:text-purple-400">Games</Link>
          <span>→</span>
          <span className="text-white">Market Simulator Pro</span>
        </div>

        {/* Game Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card variant="gradient" padding="lg">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-6xl">📊</span>
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Market Simulator Pro</h1>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full border border-red-500/30 font-semibold">Hard</span>
                    <span className="text-gray-300">Single Player</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Trade stocks in real-time market conditions. Build your portfolio and maximize returns while managing risk. This advanced simulation tests your trading skills under pressure.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Duration</p>
                  <p className="text-white font-semibold">15-20 min</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">XP Reward</p>
                  <p className="text-purple-400 font-semibold">500 XP</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Total Plays</p>
                  <p className="text-white font-semibold">12,847</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Your Best Score</p>
                  <p className="text-green-400 font-semibold">8,432</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Leaderboard */}
          <Card variant="elevated" padding="lg">
            <h3 className="text-xl font-bold text-white mb-4">Top Scores</h3>
            <div className="space-y-3">
              {[
                { rank: 1, name: 'Alex J.', score: 9842, avatar: 'AJ' },
                { rank: 2, name: 'Sarah C.', score: 9721, avatar: 'SC' },
                { rank: 3, name: 'Marcus L.', score: 9654, avatar: 'ML' },
                { rank: 4, name: 'Emma W.', score: 9543, avatar: 'EW' },
                { rank: 5, name: 'David K.', score: 9432, avatar: 'DK' },
              ].map((player) => (
                <div key={player.rank} className="flex items-center gap-3 p-3 bg-[#151921] rounded-lg">
                  <span className="text-gray-500 text-sm w-8">#{player.rank}</span>
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                    {player.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold">{player.name}</p>
                  </div>
                  <p className="text-purple-400 font-bold">{player.score.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Game Interface Placeholder */}
        <Card variant="default" padding="none">
          <div className="aspect-video bg-[#0B0E13] flex items-center justify-center border-b border-[#2D3139]">
            <div className="text-center space-y-6">
              <div className="text-8xl">📊</div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Game Interface</h2>
                <p className="text-gray-400">The interactive game would load here</p>
              </div>
              <Button variant="primary" size="lg">
                Start Game
              </Button>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-white mb-4">How to Play</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Objective</h4>
                <p className="text-gray-400">
                  Build the highest-value portfolio within the time limit while managing risk.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Controls</h4>
                <p className="text-gray-400">
                  Click stocks to buy/sell, drag to rebalance, monitor real-time price changes.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Scoring</h4>
                <p className="text-gray-400">
                  Points based on portfolio return, risk-adjusted metrics, and trading efficiency.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Tips</h4>
                <p className="text-gray-400">
                  Diversify your holdings, watch for trends, and don't over-leverage your positions.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link href="/games">
            <Button variant="outline">← Back to Games</Button>
          </Link>
          <Link href={`/games/${Number(params.id) + 1}`}>
            <Button variant="ghost">Next Game →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}