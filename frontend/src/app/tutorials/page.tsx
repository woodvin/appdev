'use client';

import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface Tutorial {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  thumbnail: string;
  views: number;
  publishedDate: string;
}

export default function TutorialsPage() {
  const tutorials: Tutorial[] = [
    {
      id: 1,
      title: 'Getting Started with AppDev - Complete Walkthrough',
      description: 'Learn how to navigate the platform, take your first lesson, and start earning XP. Perfect for new users!',
      duration: '12:34',
      difficulty: 'Beginner',
      category: 'Getting Started',
      thumbnail: '📱',
      views: 2845,
      publishedDate: '2025-05-15',
    },
    {
      id: 2,
      title: 'Understanding the XP System and Leveling',
      description: 'Deep dive into how XP works, level requirements, and strategies to level up quickly.',
      duration: '8:42',
      difficulty: 'Beginner',
      category: 'XP System',
      thumbnail: '⭐',
      views: 1923,
      publishedDate: '2025-05-20',
    },
    {
      id: 3,
      title: 'Portfolio Theory Basics - Lesson Walkthrough',
      description: 'Follow along as we complete the Modern Portfolio Theory lesson step by step.',
      duration: '15:28',
      difficulty: 'Intermediate',
      category: 'Lessons',
      thumbnail: '📊',
      views: 1456,
      publishedDate: '2025-05-22',
    },
    {
      id: 4,
      title: 'Trading Simulator Pro - Complete Strategy Guide',
      description: 'Master the trading simulator with proven strategies and tips to maximize your score.',
      duration: '18:15',
      difficulty: 'Advanced',
      category: 'Games',
      thumbnail: '🎮',
      views: 3201,
      publishedDate: '2025-05-25',
    },
    {
      id: 5,
      title: 'How to Win Your First Tournament',
      description: 'Preparation tips, competition strategies, and what to expect in your first tournament.',
      duration: '10:52',
      difficulty: 'Intermediate',
      category: 'Competitions',
      thumbnail: '🏆',
      views: 2134,
      publishedDate: '2025-05-28',
    },
    {
      id: 6,
      title: 'Unlocking All Achievement Categories',
      description: 'Comprehensive guide to every achievement type and how to unlock them efficiently.',
      duration: '14:07',
      difficulty: 'Intermediate',
      category: 'Achievements',
      thumbnail: '🎯',
      views: 1678,
      publishedDate: '2025-06-01',
    },
    {
      id: 7,
      title: 'Black-Scholes Model Explained',
      description: 'Visual breakdown of the Black-Scholes options pricing model with real examples.',
      duration: '22:45',
      difficulty: 'Advanced',
      category: 'Advanced Topics',
      thumbnail: '🧮',
      views: 892,
      publishedDate: '2025-06-03',
    },
    {
      id: 8,
      title: 'Building Your Perfect Study Routine',
      description: 'Time management tips and learning strategies to maximize your progress on AppDev.',
      duration: '9:33',
      difficulty: 'Beginner',
      category: 'Study Tips',
      thumbnail: '📅',
      views: 2567,
      publishedDate: '2025-06-05',
    },
    {
      id: 9,
      title: 'Risk Management Fundamentals',
      description: 'Essential risk management concepts every trader should know, with practical examples.',
      duration: '16:19',
      difficulty: 'Intermediate',
      category: 'Trading',
      thumbnail: '🛡️',
      views: 1734,
      publishedDate: '2025-06-07',
    },
    {
      id: 10,
      title: 'Premium Features Overview',
      description: 'Explore all premium features, exclusive lessons, and benefits of upgrading your account.',
      duration: '11:28',
      difficulty: 'Beginner',
      category: 'Premium',
      thumbnail: '💎',
      views: 1245,
      publishedDate: '2025-06-09',
    },
    {
      id: 11,
      title: 'Quantitative Finance Career Path',
      description: 'How AppDev prepares you for a career in quantitative finance and algorithmic trading.',
      duration: '19:41',
      difficulty: 'Advanced',
      category: 'Career',
      thumbnail: '💼',
      views: 1089,
      publishedDate: '2025-06-11',
    },
    {
      id: 12,
      title: 'Community Features and Networking',
      description: 'Learn how to use the forum, connect with other learners, and collaborate effectively.',
      duration: '7:56',
      difficulty: 'Beginner',
      category: 'Community',
      thumbnail: '💬',
      views: 945,
      publishedDate: '2025-06-13',
    },
  ];

  const categories = Array.from(new Set(tutorials.map(t => t.category)));
  const difficultyColors = {
    Beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
    Intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Advanced: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  return (
    <div className="min-h-screen p-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-white">Video Tutorials</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Learn visually with step-by-step video guides covering every aspect of AppDev
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card variant="elevated" padding="lg">
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">Total Tutorials</p>
            <p className="text-4xl font-bold text-white">{tutorials.length}</p>
          </div>
        </Card>
        <Card variant="elevated" padding="lg">
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">Total Watch Time</p>
            <p className="text-4xl font-bold text-purple-400">2.5 hrs</p>
          </div>
        </Card>
        <Card variant="elevated" padding="lg">
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">Total Views</p>
            <p className="text-4xl font-bold text-green-400">21.7k</p>
          </div>
        </Card>
      </div>

      {/* Featured Tutorial */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Featured Tutorial</h2>
        <Card variant="gradient" padding="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video bg-[#0B0E13] rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">{tutorials[3].thumbnail}</div>
                <div className="w-16 h-16 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center mx-auto cursor-pointer transition-colors">
                  <span className="text-white text-3xl">▶</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[tutorials[3].difficulty]}`}>
                  {tutorials[3].difficulty}
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold">
                  {tutorials[3].category}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white">{tutorials[3].title}</h3>
              <p className="text-gray-300 leading-relaxed">{tutorials[3].description}</p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span>🕒</span>
                  <span>{tutorials[3].duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>👁️</span>
                  <span>{tutorials[3].views.toLocaleString()} views</span>
                </div>
              </div>
              <Button variant="primary" className="mt-4">
                Watch Now
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* All Tutorials */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">All Tutorials</h2>
          <select className="px-4 py-2 bg-[#151921] border border-[#2D3139] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>All Categories</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} variant="elevated" padding="none" hover>
              <div className="aspect-video bg-[#0B0E13] rounded-t-xl flex items-center justify-center relative group">
                <div className="text-6xl">{tutorial.thumbnail}</div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center cursor-pointer">
                    <span className="text-white text-2xl">▶</span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white font-semibold">
                  {tutorial.duration}
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${difficultyColors[tutorial.difficulty]}`}>
                    {tutorial.difficulty}
                  </span>
                  <span className="text-xs text-gray-500">{tutorial.category}</span>
                </div>
                <h3 className="text-lg font-bold text-white line-clamp-2">{tutorial.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">{tutorial.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 pt-2 border-t border-[#2D3139]">
                  <div className="flex items-center gap-1">
                    <span>👁️</span>
                    <span>{tutorial.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📅</span>
                    <span>{new Date(tutorial.publishedDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto pt-8">
        <Card variant="gradient" padding="lg">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">Want More Tutorials?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Subscribe to our YouTube channel for new tutorials every week, or suggest topics you'd like to see covered!
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button variant="primary">
                📺 Subscribe on YouTube
              </Button>
              <Button variant="outline">
                💡 Suggest a Topic
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
