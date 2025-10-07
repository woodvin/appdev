import Card from '@/components/ui/Card';
import { formatXp } from '@/utils/xpCalculator';
import type { XpInfo } from '@/utils/xpCalculator';

interface LevelProgressProps {
  xpInfo: XpInfo;
  totalXp: number;
}

export default function LevelProgress({ xpInfo, totalXp }: LevelProgressProps) {
  const progressWidth = Math.min(xpInfo.progressPercentage, 100);

  return (
    <Card variant="gradient" padding="lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Level {xpInfo.level}</h2>
            <p className="text-white/70 text-sm">
              {formatXp(xpInfo.currentXp)} / {formatXp(xpInfo.xpForNextLevel)} XP
            </p>
          </div>
          <div className="text-right">
            <p className="text-white/70 text-sm mb-1">Next Level</p>
            <p className="text-3xl font-bold text-white">{xpInfo.level + 1}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="h-4 bg-black/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-white/90 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
              style={{ width: `${progressWidth}%` }}
            >
              <div className="absolute inset-0 animate-shimmer"></div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-white drop-shadow-lg">
              {progressWidth.toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="text-center">
            <p className="text-white/60 text-xs mb-1">Total XP</p>
            <p className="text-white font-semibold text-sm">{formatXp(totalXp)}</p>
          </div>
          <div className="text-center border-x border-white/20">
            <p className="text-white/60 text-xs mb-1">Current Level</p>
            <p className="text-white font-semibold text-sm">Level {xpInfo.level}</p>
          </div>
          <div className="text-center">
            <p className="text-white/60 text-xs mb-1">XP Needed</p>
            <p className="text-white font-semibold text-sm">
              {formatXp(xpInfo.xpForNextLevel - xpInfo.currentXp)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
