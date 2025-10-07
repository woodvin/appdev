'use client';

import { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';

interface DocSection {
  id: string;
  title: string;
  icon: string;
  articles: {
    title: string;
    description: string;
    slug: string;
  }[];
}

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const docSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: '🚀',
      articles: [
        {
          title: 'Introduction to AppDev',
          description: 'Learn about the platform and what you can achieve',
          slug: 'introduction',
        },
        {
          title: 'Creating Your Account',
          description: 'Step-by-step guide to signing up and setting up your profile',
          slug: 'account-setup',
        },
        {
          title: 'Understanding the Dashboard',
          description: 'Navigate the dashboard and track your progress',
          slug: 'dashboard-guide',
        },
        {
          title: 'Your First Lesson',
          description: 'How to start learning and earn your first XP',
          slug: 'first-lesson',
        },
      ],
    },
    {
      id: 'learning',
      title: 'Learning & Lessons',
      icon: '📚',
      articles: [
        {
          title: 'Lesson Structure',
          description: 'How lessons are organized and what to expect',
          slug: 'lesson-structure',
        },
        {
          title: 'Taking Quizzes',
          description: 'Tips for acing quizzes and retaking them',
          slug: 'quizzes',
        },
        {
          title: 'Learning Paths',
          description: 'Beginner, Intermediate, and Advanced tracks explained',
          slug: 'learning-paths',
        },
        {
          title: 'Certificates & Completion',
          description: 'Earn certificates for completed lesson tracks',
          slug: 'certificates',
        },
      ],
    },
    {
      id: 'xp-system',
      title: 'XP & Leveling System',
      icon: '⭐',
      articles: [
        {
          title: 'How XP Works',
          description: 'Everything you need to know about earning experience points',
          slug: 'xp-explained',
        },
        {
          title: 'Leveling Up',
          description: 'Level requirements and benefits of higher levels',
          slug: 'leveling',
        },
        {
          title: 'XP Multipliers & Bonuses',
          description: 'Earn bonus XP through streaks and events',
          slug: 'xp-bonuses',
        },
        {
          title: 'Leaderboards',
          description: 'How rankings work and how to climb the leaderboard',
          slug: 'leaderboards',
        },
      ],
    },
    {
      id: 'games',
      title: 'Games & Simulations',
      icon: '🎮',
      articles: [
        {
          title: 'Available Games',
          description: 'Overview of all game types and simulations',
          slug: 'game-types',
        },
        {
          title: 'Multiplayer Games',
          description: 'How to play against friends and other users',
          slug: 'multiplayer',
        },
        {
          title: 'Trading Simulator',
          description: 'Complete guide to the portfolio trading simulator',
          slug: 'trading-sim',
        },
        {
          title: 'Game Strategies',
          description: 'Tips and strategies for each game type',
          slug: 'game-strategies',
        },
      ],
    },
    {
      id: 'competitions',
      title: 'Competitions & Tournaments',
      icon: '🏆',
      articles: [
        {
          title: 'Competition Types',
          description: 'Daily, weekly, and monthly competitions explained',
          slug: 'competition-types',
        },
        {
          title: 'Joining Tournaments',
          description: 'How to enter and what to expect',
          slug: 'joining-tournaments',
        },
        {
          title: 'Scoring & Rankings',
          description: 'How winners are determined in each competition',
          slug: 'scoring',
        },
        {
          title: 'Prizes & Rewards',
          description: 'What you can win from competitions',
          slug: 'prizes',
        },
      ],
    },
    {
      id: 'achievements',
      title: 'Achievements',
      icon: '🎯',
      articles: [
        {
          title: 'Achievement Categories',
          description: 'All achievement types and how to unlock them',
          slug: 'achievement-categories',
        },
        {
          title: 'Tracking Progress',
          description: 'Monitor your progress toward locked achievements',
          slug: 'tracking-achievements',
        },
        {
          title: 'Rare Achievements',
          description: 'Special achievements and how to earn them',
          slug: 'rare-achievements',
        },
        {
          title: 'Achievement Rewards',
          description: 'XP and benefits from unlocking achievements',
          slug: 'achievement-rewards',
        },
      ],
    },
    {
      id: 'premium',
      title: 'Premium Features',
      icon: '💎',
      articles: [
        {
          title: 'Premium Plans Overview',
          description: 'Compare free and premium subscription tiers',
          slug: 'premium-plans',
        },
        {
          title: 'Exclusive Content',
          description: 'Premium-only lessons and advanced courses',
          slug: 'premium-content',
        },
        {
          title: 'Billing & Subscriptions',
          description: 'Managing your subscription and payment methods',
          slug: 'billing',
        },
        {
          title: 'Cancellation Policy',
          description: 'How to cancel or pause your subscription',
          slug: 'cancellation',
        },
      ],
    },
    {
      id: 'api',
      title: 'API & Integrations',
      icon: '🔌',
      articles: [
        {
          title: 'API Overview',
          description: 'Introduction to the AppDev API',
          slug: 'api-overview',
        },
        {
          title: 'Authentication',
          description: 'API keys and authentication methods',
          slug: 'api-auth',
        },
        {
          title: 'Endpoints Reference',
          description: 'Complete API endpoint documentation',
          slug: 'api-reference',
        },
        {
          title: 'Third-Party Integrations',
          description: 'Connect with other platforms and tools',
          slug: 'integrations',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-white">Documentation</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive guides and resources to help you master AppDev
        </p>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
            🔍
          </div>
          <Input
            type="text"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 py-4 text-lg"
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        <Link href="/docs/introduction">
          <Card variant="elevated" padding="lg" hover>
            <div className="text-center space-y-2">
              <div className="text-3xl">📖</div>
              <h3 className="text-sm font-bold text-white">Quick Start</h3>
            </div>
          </Card>
        </Link>
        <Link href="/docs/xp-explained">
          <Card variant="elevated" padding="lg" hover>
            <div className="text-center space-y-2">
              <div className="text-3xl">⭐</div>
              <h3 className="text-sm font-bold text-white">XP System</h3>
            </div>
          </Card>
        </Link>
        <Link href="/docs/api-overview">
          <Card variant="elevated" padding="lg" hover>
            <div className="text-center space-y-2">
              <div className="text-3xl">🔌</div>
              <h3 className="text-sm font-bold text-white">API Docs</h3>
            </div>
          </Card>
        </Link>
        <Link href="/support">
          <Card variant="elevated" padding="lg" hover>
            <div className="text-center space-y-2">
              <div className="text-3xl">❓</div>
              <h3 className="text-sm font-bold text-white">Get Help</h3>
            </div>
          </Card>
        </Link>
      </div>

      {/* Documentation Sections */}
      <div className="max-w-6xl mx-auto space-y-8">
        {docSections.map((section) => (
          <div key={section.id}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{section.icon}</span>
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.articles.map((article, index) => (
                <Link key={index} href={`/docs/${article.slug}`}>
                  <Card variant="elevated" padding="lg" hover>
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center justify-between">
                      {article.title}
                      <span className="text-purple-400 text-sm">→</span>
                    </h3>
                    <p className="text-sm text-gray-400">{article.description}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="max-w-6xl mx-auto pt-8">
        <h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="gradient" padding="lg">
            <div className="space-y-3">
              <div className="text-3xl">📹</div>
              <h3 className="text-lg font-bold text-white">Video Tutorials</h3>
              <p className="text-sm text-gray-300">Watch video guides and walkthroughs</p>
              <Link href="/tutorials" className="text-sm text-purple-400 hover:text-purple-300 inline-block">
                View Tutorials →
              </Link>
            </div>
          </Card>

          <Card variant="gradient" padding="lg">
            <div className="space-y-3">
              <div className="text-3xl">💬</div>
              <h3 className="text-lg font-bold text-white">Community Forum</h3>
              <p className="text-sm text-gray-300">Ask questions and share knowledge</p>
              <Link href="/community" className="text-sm text-purple-400 hover:text-purple-300 inline-block">
                Visit Forum →
              </Link>
            </div>
          </Card>

          <Card variant="gradient" padding="lg">
            <div className="space-y-3">
              <div className="text-3xl">📧</div>
              <h3 className="text-lg font-bold text-white">Contact Support</h3>
              <p className="text-sm text-gray-300">Get personalized help from our team</p>
              <Link href="/support" className="text-sm text-purple-400 hover:text-purple-300 inline-block">
                Get Support →
              </Link>
            </div>
          </Card>
        </div>
      </div>

      {/* Last Updated */}
      <div className="text-center pt-8 border-t border-[#2D3139]">
        <p className="text-sm text-gray-500">Documentation last updated: June 2025</p>
        <p className="text-xs text-gray-600 mt-2">
          Found an error or have a suggestion?{' '}
          <Link href="/support" className="text-purple-400 hover:text-purple-300">
            Let us know
          </Link>
        </p>
      </div>
    </div>
  );
}
