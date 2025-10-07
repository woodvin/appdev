'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import { getXpInfo, formatXp, getXpMilestones } from '@/utils/xpCalculator';
import { Rank } from '@/types/ranking';
import ProfileStats from '@/components/profile/ProfileStats';
import AchievementShowcase from '@/components/profile/AchievementShowcase';
import ActivityFeed from '@/components/profile/ActivityFeed';
import LevelProgress from '@/components/profile/LevelProgress';
import ProfileSettings from '@/components/profile/ProfileSettings';
import RankProgress from '@/components/profile/RankProgress';
import RankBadge from '@/components/profile/RankBadge';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'achievements' | 'activity' | 'settings'>('overview');

  // TODO: Replace with actual user data from API/state management
  const userData = {
    username: 'JohnDoe',
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Finance enthusiast | Trading lover | Always learning',
    totalXp: 2500000, // ~Level 29
    joinedDate: '2024-01-15',
    avatar: 'JD',
    globalRank: 284,
    competitiveRank: Rank.GOLD_II, // Competitive rank based on performance
    streakDays: 7,
    streakBest: 12,
    totalGamesPlayed: 156,
    totalWins: 89,
    totalLessons: 47,
  };

  const xpInfo = getXpInfo(userData.totalXp);
  const winRate = ((userData.totalWins / userData.totalGamesPlayed) * 100);

  // Mock rank progress data (would come from API)
  const rankProgress = {
    currentRank: userData.competitiveRank,
    nextRank: Rank.GOLD_I,
    progressPercentage: 67.5,
    effectiveXp: 3200000, // totalXp * performance bonus
    xpNeededForNext: 800000,
  };

  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: '👤' },
    { id: 'achievements' as const, label: 'Achievements', icon: '🏆' },
    { id: 'activity' as const, label: 'Activity', icon: '📊' },
    { id: 'settings' as const, label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen p-8 space-y-8">
      {/* Profile Header */}
      <div className="relative">
        {/* Banner */}
        <div className="h-48 bg-gradient-primary rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="relative -mt-20 px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-gradient-primary flex items-center justify-center text-white text-4xl font-bold shadow-2xl border-4 border-[#0B0E13]">
                {userData.avatar}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                Level {xpInfo.level}
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 space-y-3">
              <div>
                <h1 className="text-3xl font-bold text-white">{userData.displayName}</h1>
                <p className="text-gray-400">@{userData.username}</p>
              </div>
              <p className="text-gray-300 max-w-2xl">{userData.bio}</p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 text-sm items-center">
                <div className="flex items-center gap-2">
                  <RankBadge rank={userData.competitiveRank} size="sm" showLabel={true} />
                </div>
                <div className="h-4 w-px bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Global Rank:</span>
                  <span className="text-white font-semibold">#{userData.globalRank}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Joined:</span>
                  <span className="text-white font-semibold">{new Date(userData.joinedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Win Rate:</span>
                  <span className="text-green-400 font-semibold">{winRate.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium">
                Edit Profile
              </button>
              <button className="px-4 py-2 bg-[#21252E] hover:bg-[#2D3139] text-white rounded-lg transition-colors border border-[#2D3139]">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-[#2D3139]">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-3 font-medium transition-all relative
                ${activeTab === tab.id
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-300'
                }
              `}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Dual Progress: Level + Rank */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LevelProgress xpInfo={xpInfo} totalXp={userData.totalXp} />
              <RankProgress
                currentRank={rankProgress.currentRank}
                nextRank={rankProgress.nextRank}
                progressPercentage={rankProgress.progressPercentage}
                effectiveXp={rankProgress.effectiveXp}
                xpNeededForNext={rankProgress.xpNeededForNext}
                winRate={winRate}
                gamesPlayed={userData.totalGamesPlayed}
              />
            </div>

            {/* Stats Grid */}
            <ProfileStats
              level={xpInfo.level}
              totalXp={userData.totalXp}
              rank={userData.globalRank}
              streakDays={userData.streakDays}
              streakBest={userData.streakBest}
              gamesPlayed={userData.totalGamesPlayed}
              wins={userData.totalWins}
              lessons={userData.totalLessons}
            />

            {/* Recent Achievements & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card variant="default" padding="lg">
                <h2 className="text-xl font-bold text-white mb-4">Recent Achievements</h2>
                <AchievementShowcase limit={3} />
              </Card>

              <Card variant="default" padding="lg">
                <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
                <ActivityFeed limit={5} />
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div>
            <AchievementShowcase />
          </div>
        )}

        {activeTab === 'activity' && (
          <div>
            <ActivityFeed />
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <ProfileSettings userData={userData} />
          </div>
        )}
      </div>
    </div>
  );
}
