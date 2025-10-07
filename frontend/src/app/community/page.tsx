'use client';

import { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface ForumPost {
  id: number;
  title: string;
  author: string;
  authorAvatar: string;
  category: string;
  replies: number;
  views: number;
  lastActivity: string;
  isPinned?: boolean;
  isHot?: boolean;
}

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: '📋', count: 156 },
    { id: 'lessons', name: 'Lessons', icon: '📚', count: 42 },
    { id: 'games', name: 'Games', icon: '🎮', count: 28 },
    { id: 'competitions', name: 'Competitions', icon: '🏆', count: 19 },
    { id: 'trading', name: 'Trading Discussion', icon: '📈', count: 37 },
    { id: 'help', name: 'Help & Support', icon: '❓', count: 23 },
    { id: 'general', name: 'General', icon: '💬', count: 7 },
  ];

  const forumPosts: ForumPost[] = [
    {
      id: 1,
      title: 'Welcome to the AppDev Community! Read this first.',
      author: 'Admin',
      authorAvatar: 'AD',
      category: 'general',
      replies: 45,
      views: 1203,
      lastActivity: '2 hours ago',
      isPinned: true,
    },
    {
      id: 2,
      title: 'Best strategies for completing the "Week Warrior" achievement?',
      author: 'SarahChen',
      authorAvatar: 'SC',
      category: 'help',
      replies: 23,
      views: 456,
      lastActivity: '15 minutes ago',
      isHot: true,
    },
    {
      id: 3,
      title: 'Market Simulator Pro - Tips and Tricks',
      author: 'TradeKing',
      authorAvatar: 'TK',
      category: 'games',
      replies: 67,
      views: 892,
      lastActivity: '1 hour ago',
      isHot: true,
    },
    {
      id: 4,
      title: 'How to calculate Sharpe Ratio correctly?',
      author: 'QuantNerd',
      authorAvatar: 'QN',
      category: 'lessons',
      replies: 31,
      views: 721,
      lastActivity: '3 hours ago',
    },
    {
      id: 5,
      title: 'Weekly Tournament Discussion - June Week 2',
      author: 'CompeteMaster',
      authorAvatar: 'CM',
      category: 'competitions',
      replies: 89,
      views: 1567,
      lastActivity: '30 minutes ago',
      isHot: true,
    },
    {
      id: 6,
      title: 'Best lessons for beginners?',
      author: 'NewLearner',
      authorAvatar: 'NL',
      category: 'lessons',
      replies: 42,
      views: 634,
      lastActivity: '2 hours ago',
    },
    {
      id: 7,
      title: 'Black-Scholes model explanation - needs clarification',
      author: 'OptionsTrader',
      authorAvatar: 'OT',
      category: 'lessons',
      replies: 18,
      views: 289,
      lastActivity: '4 hours ago',
    },
    {
      id: 8,
      title: 'Looking for study partners for advanced quant lessons',
      author: 'StudyBuddy',
      authorAvatar: 'SB',
      category: 'general',
      replies: 12,
      views: 145,
      lastActivity: '5 hours ago',
    },
    {
      id: 9,
      title: 'Bug: XP not updating after lesson completion',
      author: 'BugFinder',
      authorAvatar: 'BF',
      category: 'help',
      replies: 5,
      views: 87,
      lastActivity: '6 hours ago',
    },
    {
      id: 10,
      title: 'Monthly leaderboard predictions - who will win?',
      author: 'LeaderboardWatcher',
      authorAvatar: 'LW',
      category: 'competitions',
      replies: 34,
      views: 512,
      lastActivity: '1 day ago',
    },
    {
      id: 11,
      title: 'Share your portfolio allocation strategies',
      author: 'PortfolioGuru',
      authorAvatar: 'PG',
      category: 'trading',
      replies: 56,
      views: 823,
      lastActivity: '1 day ago',
    },
    {
      id: 12,
      title: 'Risk management techniques discussion',
      author: 'RiskPro',
      authorAvatar: 'RP',
      category: 'trading',
      replies: 28,
      views: 445,
      lastActivity: '2 days ago',
    },
  ];

  const filteredPosts = selectedCategory === 'all'
    ? forumPosts
    : forumPosts.filter((post) => post.category === selectedCategory);

  const topContributors = [
    { name: 'TradeKing', posts: 234, avatar: 'TK', badge: '🥇' },
    { name: 'QuantNerd', posts: 189, avatar: 'QN', badge: '🥈' },
    { name: 'SarahChen', posts: 156, avatar: 'SC', badge: '🥉' },
    { name: 'CompeteMaster', posts: 142, avatar: 'CM', badge: '⭐' },
    { name: 'PortfolioGuru', posts: 128, avatar: 'PG', badge: '⭐' },
  ];

  return (
    <div className="min-h-screen p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Community Forum</h1>
          <p className="text-gray-400">Connect with learners, share knowledge, and get help</p>
        </div>
        <Button variant="primary">
          + New Discussion
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Total Discussions</p>
            <p className="text-3xl font-bold text-white">1,247</p>
          </div>
        </Card>
        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Active Members</p>
            <p className="text-3xl font-bold text-white">3,892</p>
          </div>
        </Card>
        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Posts Today</p>
            <p className="text-3xl font-bold text-green-400">124</p>
          </div>
        </Card>
        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Online Now</p>
            <p className="text-3xl font-bold text-purple-400">67</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card variant="default" padding="lg">
            <h2 className="text-lg font-bold text-white mb-4">Categories</h2>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all
                    ${selectedCategory === category.id
                      ? 'bg-gradient-primary text-white'
                      : 'text-gray-400 hover:text-white hover:bg-[#1C2028]'
                    }
                  `}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{category.icon}</span>
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  <span className="text-xs bg-[#1C2028] px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </Card>

          <Card variant="default" padding="lg">
            <h2 className="text-lg font-bold text-white mb-4">Top Contributors</h2>
            <div className="space-y-3">
              {topContributors.map((contributor, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                    {contributor.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold">{contributor.name}</p>
                    <p className="text-gray-500 text-xs">{contributor.posts} posts</p>
                  </div>
                  <span className="text-xl">{contributor.badge}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Forum Posts */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Discussions' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <select className="px-4 py-2 bg-[#151921] border border-[#2D3139] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Latest Activity</option>
              <option>Most Replies</option>
              <option>Most Views</option>
              <option>Newest</option>
            </select>
          </div>

          {filteredPosts.map((post) => (
            <Card key={post.id} variant="elevated" padding="lg" hover>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  {post.authorAvatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {post.isPinned && (
                          <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full">
                            PINNED
                          </span>
                        )}
                        {post.isHot && (
                          <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full flex items-center gap-1">
                            🔥 HOT
                          </span>
                        )}
                      </div>
                      <Link href={`/community/${post.id}`}>
                        <h3 className="text-lg font-semibold text-white hover:text-purple-400 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-3 mt-2 text-sm text-gray-400">
                        <span>by {post.author}</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 bg-[#1C2028] rounded text-xs">
                          {categories.find(c => c.id === post.category)?.icon} {categories.find(c => c.id === post.category)?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mt-3">
                    <div className="flex items-center gap-2">
                      <span>💬</span>
                      <span>{post.replies} replies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>👁️</span>
                      <span>{post.views} views</span>
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                      <span>🕒</span>
                      <span>{post.lastActivity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 pt-6">
            <Button variant="outline" size="sm">Previous</Button>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-lg bg-gradient-primary text-white font-semibold">1</button>
              <button className="w-10 h-10 rounded-lg bg-[#151921] text-gray-400 hover:text-white hover:bg-[#1C2028] transition-colors">2</button>
              <button className="w-10 h-10 rounded-lg bg-[#151921] text-gray-400 hover:text-white hover:bg-[#1C2028] transition-colors">3</button>
              <button className="w-10 h-10 rounded-lg bg-[#151921] text-gray-400 hover:text-white hover:bg-[#1C2028] transition-colors">4</button>
            </div>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
