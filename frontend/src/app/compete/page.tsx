'use client';

import { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function CompetePage() {
  const [selectedTab, setSelectedTab] = useState<'active' | 'upcoming' | 'past'>('active');

  // Rank tier system
  const getRankTier = (xp: number) => {
    if (xp >= 100000) return { name: 'Legend', icon: '👑', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-500/50' };
    if (xp >= 50000) return { name: 'Diamond', icon: '💎', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20', borderColor: 'border-cyan-500/50' };
    if (xp >= 25000) return { name: 'Platinum', icon: '⭐', color: 'text-purple-400', bgColor: 'bg-purple-500/20', borderColor: 'border-purple-500/50' };
    if (xp >= 10000) return { name: 'Gold', icon: '🥇', color: 'text-yellow-300', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-500/50' };
    if (xp >= 5000) return { name: 'Silver', icon: '🥈', color: 'text-gray-300', bgColor: 'bg-gray-500/20', borderColor: 'border-gray-500/50' };
    return { name: 'Bronze', icon: '🥉', color: 'text-orange-400', bgColor: 'bg-orange-500/20', borderColor: 'border-orange-500/50' };
  };

  const leaderboard = [
    { rank: 1, name: 'Alex Johnson', avatar: 'AJ', xp: 152400, badge: '🥇', trend: '+234' },
    { rank: 2, name: 'Sarah Chen', avatar: 'SC', xp: 148200, badge: '🥈', trend: '+189' },
    { rank: 3, name: 'Marcus Lee', avatar: 'ML', xp: 142100, badge: '🥉', trend: '+156' },
    { rank: 4, name: 'Emma Wilson', avatar: 'EW', xp: 138900, badge: '⭐', trend: '+201' },
    { rank: 5, name: 'David Kim', avatar: 'DK', xp: 135200, badge: '⭐', trend: '+178' },
    { rank: 284, name: 'You', avatar: 'JD', xp: 12450, badge: '', trend: '+45', highlight: true },
  ];

  const userTier = getRankTier(12450);

  const activeCompetitions = [
    {
      id: 1,
      title: 'Weekly XP Challenge',
      description: 'Earn the most XP this week to claim the top prize!',
      participants: 1243,
      timeLeft: '2 days 4 hours',
      prize: '1000 XP + Badge',
      icon: '🏆',
      joined: true,
      yourRank: 47,
    },
    {
      id: 2,
      title: 'Trading Simulator Tournament',
      description: 'Achieve the highest portfolio return in the trading simulator.',
      participants: 856,
      timeLeft: '5 days 12 hours',
      prize: '2000 XP + Premium Week',
      icon: '📈',
      joined: false,
      yourRank: null,
    },
    {
      id: 3,
      title: 'Perfect Quiz Streak',
      description: 'Score 100% on 5 quizzes in a row.',
      participants: 432,
      timeLeft: '3 days 8 hours',
      prize: '500 XP + Achievement',
      icon: '💯',
      joined: true,
      yourRank: 12,
    },
  ];

  const upcomingCompetitions = [
    {
      id: 4,
      title: '💰 Monthly Cash Championship',
      description: 'Compete for REAL MONEY prizes! Top 10 finishers split $5,000 in cash rewards.',
      startsIn: '5 days',
      prize: '$5,000 Cash Prize Pool',
      prizeBreakdown: ['1st: $2,000', '2nd: $1,000', '3rd: $500', 'Top 10: Share $1,500'],
      icon: '💵',
      minLevel: 10,
      featured: true,
    },
    {
      id: 5,
      title: 'Options Trading Challenge',
      description: 'Master complex options strategies in high-pressure scenarios.',
      startsIn: '1 week',
      prize: '1500 XP + Special Badge',
      icon: '🎯',
      minLevel: 15,
    },
  ];

  const pastCompetitions = [
    {
      id: 6,
      title: 'May Week 3 Challenge',
      winner: 'Sarah Chen',
      yourRank: 52,
      participants: 987,
      prize: '1000 XP',
      icon: '🏆',
    },
    {
      id: 7,
      title: 'Portfolio Optimization Sprint',
      winner: 'Alex Johnson',
      yourRank: 23,
      participants: 654,
      prize: '750 XP',
      icon: '💼',
    },
  ];

  return (
    <div className="min-h-screen p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Compete</h1>
          <p className="text-gray-400">Challenge yourself and climb the leaderboard</p>
        </div>
        <Link href="/community">
          <Button variant="outline">View Community</Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card variant="gradient" padding="lg">
          <div className="space-y-2">
            <p className="text-white/60 text-sm">Your Rank Tier</p>
            <div className="flex items-center gap-2">
              <span className="text-3xl">{userTier.icon}</span>
              <p className={`text-2xl font-bold ${userTier.color}`}>{userTier.name}</p>
            </div>
            <p className="text-xs text-gray-400">Global Rank: #284</p>
          </div>
        </Card>
        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Competitions Won</p>
            <p className="text-4xl font-bold text-green-400">3</p>
          </div>
        </Card>
        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Active Competitions</p>
            <p className="text-4xl font-bold text-purple-400">2</p>
          </div>
        </Card>
        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Total Earned</p>
            <p className="text-4xl font-bold text-white">7.2k XP</p>
          </div>
        </Card>
      </div>

      {/* Rank Tiers Interactive */}
      <Card variant="elevated" padding="lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">🏆 Competitive Ranks</h3>
          <p className="text-xs text-gray-500">Hover to explore each tier</p>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {[
            { name: 'Bronze', icon: '🥉', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30', gradient: 'from-orange-500/20 to-orange-600/5', xp: '0 - 50k', tagline: 'Everyone starts here', divisions: 'V - I' },
            { name: 'Silver', icon: '🥈', color: 'text-gray-300', bg: 'bg-gray-500/10', border: 'border-gray-500/30', gradient: 'from-gray-500/20 to-gray-600/5', xp: '50k - 150k', tagline: 'Rising through the ranks', divisions: 'V - I' },
            { name: 'Gold', icon: '🥇', color: 'text-yellow-300', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', gradient: 'from-yellow-500/20 to-yellow-600/5', xp: '150k - 400k', tagline: 'Skill meets dedication', divisions: 'V - I' },
            { name: 'Platinum', icon: '⭐', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30', gradient: 'from-purple-500/20 to-purple-600/5', xp: '400k - 1M', tagline: 'Elite performance unlocked', divisions: 'III - I' },
            { name: 'Diamond', icon: '💎', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', gradient: 'from-cyan-500/20 to-cyan-600/5', xp: '1M - 2.5M', tagline: 'Unbreakable determination', divisions: 'III - I' },
            { name: 'Legend', icon: '⚡', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', gradient: 'from-yellow-500/20 to-yellow-600/5', xp: '2.5M - 5M', tagline: 'Where myths are born', divisions: 'III - I' },
            { name: 'Elite', icon: '👑', color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/30', gradient: 'from-pink-500/20 to-pink-600/5', xp: '5M+', tagline: 'The absolute pinnacle', divisions: 'None' },
          ].map((tier, index) => (
            <div
              key={tier.name}
              className="group relative"
            >
              {/* Expandable Card */}
              <div className={`${tier.bg} ${tier.border} bg-gradient-to-br ${tier.gradient} border rounded-lg overflow-hidden transition-all duration-500 cursor-pointer group-hover:shadow-2xl group-hover:scale-105 h-auto`}>
                {/* Collapsed State - Icon & Name */}
                <div className="p-3 text-center">
                  <div className="text-3xl mb-1 transition-transform duration-300 group-hover:scale-110">{tier.icon}</div>
                  <p className={`text-xs font-bold ${tier.color} transition-all duration-300`}>{tier.name}</p>
                </div>

                {/* Expanded Details - Slides down on hover */}
                <div className="max-h-0 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                  <div className="px-3 pb-3 space-y-2">
                    {/* Divider */}
                    <div className={`h-px ${tier.bg} opacity-50`}></div>

                    {/* Tier Number */}
                    <p className="text-xs text-gray-500 text-center">Tier {index + 1} of 7</p>

                    {/* Tagline */}
                    <p className="text-xs text-white font-medium italic text-center leading-relaxed">"{tier.tagline}"</p>

                    {/* Stats */}
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">XP</span>
                        <span className={`font-bold ${tier.color}`}>{tier.xp}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Divs</span>
                        <span className={`font-bold ${tier.color}`}>{tier.divisions}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tabs */}
          <div className="border-b border-[#2D3139]">
            <div className="flex gap-1">
              {(['active', 'upcoming', 'past'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`
                    px-6 py-3 font-medium transition-all relative capitalize
                    ${selectedTab === tab ? 'text-white' : 'text-gray-400 hover:text-gray-300'}
                  `}
                >
                  {tab} Competitions
                  {selectedTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active Competitions */}
          {selectedTab === 'active' && (
            <div className="space-y-4">
              {activeCompetitions.map((comp) => (
                <Card key={comp.id} variant="elevated" padding="lg" hover>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{comp.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{comp.title}</h3>
                          <p className="text-sm text-gray-400">{comp.description}</p>
                        </div>
                        {comp.joined && (
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                            ✓ Joined
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                        <div>
                          <p className="text-gray-500 text-xs mb-1">Participants</p>
                          <p className="text-white font-semibold">{comp.participants.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs mb-1">Time Left</p>
                          <p className="text-orange-400 font-semibold">{comp.timeLeft}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs mb-1">Prize</p>
                          <p className="text-purple-400 font-semibold">{comp.prize}</p>
                        </div>
                      </div>
                      {comp.joined && comp.yourRank && (
                        <div className="flex items-center gap-4 p-3 bg-purple-500/10 rounded-lg border border-purple-500/30 mb-3">
                          <p className="text-sm text-purple-300">
                            <span className="font-semibold">Your Current Rank:</span> #{comp.yourRank}
                          </p>
                        </div>
                      )}
                      <div className="flex gap-3">
                        {comp.joined ? (
                          <Button variant="primary" size="sm">View Details</Button>
                        ) : (
                          <Button variant="primary" size="sm">Join Competition</Button>
                        )}
                        <Button variant="outline" size="sm">Leaderboard</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Upcoming Competitions */}
          {selectedTab === 'upcoming' && (
            <div className="space-y-4">
              {upcomingCompetitions.map((comp) => (
                <Card
                  key={comp.id}
                  variant={comp.featured ? "gradient" : "elevated"}
                  padding="lg"
                  hover
                  className={comp.featured ? "border-2 border-green-500/50 shadow-lg shadow-green-500/20" : ""}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{comp.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">{comp.title}</h3>
                        {comp.featured && (
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/50 animate-pulse">
                            💰 CASH PRIZES
                          </span>
                        )}
                      </div>
                      <p className={`text-sm mb-4 ${comp.featured ? 'text-white font-semibold' : 'text-gray-400'}`}>
                        {comp.description}
                      </p>

                      {comp.prizeBreakdown && (
                        <div className="mb-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                          <p className="text-green-400 font-bold text-sm mb-2">💵 Prize Breakdown:</p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            {comp.prizeBreakdown.map((prize, i) => (
                              <div key={i} className="text-gray-200">• {prize}</div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                        <div>
                          <p className="text-gray-500 text-xs mb-1">Starts In</p>
                          <p className="text-green-400 font-semibold">{comp.startsIn}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs mb-1">Min Level</p>
                          <p className="text-white font-semibold">Level {comp.minLevel}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs mb-1">Total Prize</p>
                          <p className={`font-semibold text-sm ${comp.featured ? 'text-green-400' : 'text-purple-400'}`}>
                            {comp.prize}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button variant={comp.featured ? "primary" : "outline"} size="sm">
                          {comp.featured ? '💰 Join Cash Competition' : 'Set Reminder'}
                        </Button>
                        {comp.featured && (
                          <Button variant="outline" size="sm">View Rules</Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Past Competitions */}
          {selectedTab === 'past' && (
            <div className="space-y-4">
              {pastCompetitions.map((comp) => (
                <Card key={comp.id} variant="bordered" padding="lg">
                  <div className="flex items-start gap-4 opacity-75">
                    <div className="text-4xl">{comp.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{comp.title}</h3>
                      <div className="grid grid-cols-4 gap-4 mt-3 text-sm">
                        <div>
                          <p className="text-gray-500 text-xs mb-1">Winner</p>
                          <p className="text-white font-semibold text-xs">{comp.winner}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs mb-1">Your Rank</p>
                          <p className="text-gray-400 font-semibold">#{comp.yourRank}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs mb-1">Participants</p>
                          <p className="text-gray-400 font-semibold">{comp.participants}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs mb-1">Prize</p>
                          <p className="text-gray-400 font-semibold text-xs">{comp.prize}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Leaderboard Sidebar */}
        <div className="lg:col-span-1">
          <Card variant="default" padding="lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Global Leaderboard</h2>
              <Link href="/compete/leaderboard" className="text-xs text-purple-400 hover:text-purple-300">
                View All
              </Link>
            </div>
            <div className="space-y-3">
              {leaderboard.map((user) => {
                const tier = getRankTier(user.xp);
                return (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      user.highlight
                        ? 'bg-purple-500/10 border border-purple-500/30'
                        : 'bg-[#151921]'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className={`text-2xl ${user.rank <= 3 ? '' : 'text-gray-600'}`}>
                        {user.badge || `#${user.rank}`}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                        {user.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className={`text-sm font-semibold truncate ${user.highlight ? 'text-white' : 'text-gray-300'}`}>
                            {user.name}
                          </p>
                          <span className={`text-xs ${tier.color}`}>{tier.icon}</span>
                        </div>
                        <p className="text-xs text-gray-500">{user.xp.toLocaleString()} XP</p>
                      </div>
                    </div>
                    <span className="text-xs text-green-400">+{user.trend}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card variant="gradient" padding="lg" className="mt-6">
            <div className="text-center space-y-4">
              <div className="text-4xl">🏆</div>
              <h3 className="text-lg font-bold text-white">Climb the Ranks!</h3>
              <p className="text-sm text-gray-300">
                Complete lessons, win games, and participate in competitions to rise up the leaderboard.
              </p>
              <Link href="/lessons">
                <Button variant="primary" className="w-full">
                  Start Learning
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
