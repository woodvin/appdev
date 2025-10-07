import { Rank, getRankDisplayName, getRankColor, getRankIcon, getRankGradient } from '@/types/ranking';

interface RankBadgeProps {
  rank: Rank;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
  animated?: boolean;
}

export default function RankBadge({ rank, size = 'md', showLabel = true, animated = false }: RankBadgeProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-24 h-24 text-2xl',
  };

  const iconSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-5xl',
  };

  const labelSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  };

  return (
    <div className="flex items-center gap-3">
      {/* Rank Badge */}
      <div className="relative">
        <div
          className={`
            ${sizeClasses[size]} rounded-xl flex items-center justify-center font-bold text-white
            shadow-lg relative overflow-hidden
            ${animated ? 'hover:scale-110 transition-transform duration-300' : ''}
          `}
          style={{ background: getRankGradient(rank) }}
        >
          <span className={iconSizes[size]}>{getRankIcon(rank)}</span>

          {/* Shimmer effect for high ranks */}
          {['MASTER', 'GRANDMASTER', 'LEGEND'].includes(rank) && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          )}
        </div>

        {/* Glow effect for legendary */}
        {rank === Rank.LEGEND && (
          <div
            className="absolute inset-0 rounded-xl blur-lg opacity-50 -z-10"
            style={{ background: getRankGradient(rank) }}
          ></div>
        )}
      </div>

      {/* Rank Label */}
      {showLabel && (
        <div>
          <p
            className={`font-bold ${labelSizes[size]}`}
            style={{ color: getRankColor(rank) }}
          >
            {getRankDisplayName(rank)}
          </p>
        </div>
      )}
    </div>
  );
}
