import Card from '@/components/ui/Card';
import RankBadge from './RankBadge';
import { Rank, getRankDisplayName, getPerformanceBonusDescription } from '@/types/ranking';
import { formatXp } from '@/utils/xpCalculator';

interface RankProgressProps {
  currentRank: Rank;
  nextRank?: Rank;
  progressPercentage: number;
  effectiveXp: number;
  xpNeededForNext: number;
  winRate: number;
  gamesPlayed: number;
}

export default function RankProgress({
  currentRank,
  nextRank,
  progressPercentage,
  effectiveXp,
  xpNeededForNext,
  winRate,
  gamesPlayed,
}: RankProgressProps) {
  const isMaxRank = !nextRank;
  const performanceBonus = getPerformanceBonusDescription(winRate, gamesPlayed);

  return (
    <Card variant="bordered" padding="lg">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Competitive Rank</h2>
          <p className="text-gray-400 text-sm">{performanceBonus} from performance</p>
        </div>

        {/* Current and Next Rank */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-gray-400 text-sm mb-2">Current Rank</p>
            <RankBadge rank={currentRank} size="lg" showLabel={true} animated={true} />
          </div>

          {!isMaxRank && nextRank && (
            <>
              <div className="flex-shrink-0 px-8">
                <div className="text-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-2"></div>
                  <p className="text-xs text-gray-500">{progressPercentage.toFixed(1)}%</p>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-gray-400 text-sm mb-2">Next Rank</p>
                <RankBadge rank={nextRank} size="lg" showLabel={true} />
              </div>
            </>
          )}

          {isMaxRank && (
            <div className="flex-1 text-center">
              <div className="text-4xl mb-2">👑</div>
              <p className="text-yellow-400 font-bold">Maximum Rank Achieved!</p>
              <p className="text-gray-500 text-sm">You've reached the pinnacle</p>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {!isMaxRank && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Rank Progress</span>
              <span className="text-white font-semibold">
                {formatXp(effectiveXp)} / {formatXp(effectiveXp + xpNeededForNext)} Effective XP
              </span>
            </div>

            <div className="h-4 bg-[#1C2028] rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500 relative overflow-hidden"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              >
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-white drop-shadow-lg">
                  {progressPercentage.toFixed(1)}%
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center">
              {formatXp(xpNeededForNext)} effective XP needed to rank up
            </p>
          </div>
        )}

        {/* Performance Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2D3139]">
          <div className="text-center p-3 bg-[#151921] rounded-lg">
            <p className="text-gray-400 text-xs mb-1">Win Rate</p>
            <p className="text-white font-bold text-lg">{winRate.toFixed(1)}%</p>
            <p className="text-xs text-gray-500">{gamesPlayed} games</p>
          </div>

          <div className="text-center p-3 bg-[#151921] rounded-lg">
            <p className="text-gray-400 text-xs mb-1">Effective XP</p>
            <p className="text-white font-bold text-lg">{formatXp(effectiveXp)}</p>
            <p className="text-xs text-purple-400">With bonuses applied</p>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm mb-1">How Ranking Works</p>
              <p className="text-gray-300 text-xs leading-relaxed">
                Your rank is determined by <strong>Effective XP</strong>, which combines your total XP
                with performance bonuses. Win more games and maintain activity to earn up to{' '}
                <strong className="text-purple-400">2x bonus</strong> towards your rank!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
