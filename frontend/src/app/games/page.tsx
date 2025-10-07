'use client';

import { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface Game {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  players: 'Single' | 'Multiplayer';
  duration: string;
  xpReward: number;
  playCount: number;
  icon: string;
  featured?: boolean;
}

export default function GamesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Games', icon: '🎮', count: 18 },
    { id: 'trading', name: 'Trading Sims', icon: '📈', count: 5 },
    { id: 'quiz', name: 'Quick Quiz', icon: '❓', count: 4 },
    { id: 'strategy', name: 'Strategy', icon: '♟️', count: 4 },
    { id: 'portfolio', name: 'Portfolio', icon: '💼', count: 3 },
    { id: 'prediction', name: 'Prediction', icon: '🔮', count: 2 },
  ];

  const games: Game[] = [
    {
      id: 1,
      title: 'Market Simulator Pro',
      description: 'Trade stocks in real-time market conditions. Build your portfolio and maximize returns.',
      category: 'trading',
      difficulty: 'Hard',
      players: 'Single',
      duration: '15-20 min',
      xpReward: 500,
      playCount: 12847,
      icon: '📊',
      featured: true,
    },
    {
      id: 2,
      title: 'Quick Finance Quiz',
      description: 'Test your knowledge with rapid-fire questions on financial concepts.',
      category: 'quiz',
      difficulty: 'Easy',
      players: 'Single',
      duration: '5 min',
      xpReward: 100,
      playCount: 34521,
      icon: '⚡',
    },
    {
      id: 3,
      title: 'Portfolio Builder Challenge',
      description: 'Construct the perfect diversified portfolio within budget constraints.',
      category: 'portfolio',
      difficulty: 'Medium',
      players: 'Single',
      duration: '10 min',
      xpReward: 250,
      playCount: 8934,
      icon: '💼',
    },
    {
      id: 4,
      title: 'Options Strategy Battle',
      description: 'Choose the best options strategy for different market scenarios.',
      category: 'strategy',
      difficulty: 'Hard',
      players: 'Multiplayer',
      duration: '12 min',
      xpReward: 400,
      playCount: 5623,
      icon: '🎯',
    },
    {
      id: 5,
      title: 'Market Crash Survival',
      description: 'Manage risk during a market crash. Protect your portfolio from massive losses.',
      category: 'trading',
      difficulty: 'Hard',
      players: 'Single',
      duration: '10 min',
      xpReward: 350,
      playCount: 7142,
      icon: '📉',
    },
    {
      id: 6,
      title: 'Crypto Trading Simulator',
      description: 'Navigate the volatile crypto markets and build wealth.',
      category: 'trading',
      difficulty: 'Medium',
      players: 'Single',
      duration: '15 min',
      xpReward: 300,
      playCount: 15234,
      icon: '₿',
    },
    {
      id: 7,
      title: 'Technical Analysis Challenge',
      description: 'Identify chart patterns and predict price movements.',
      category: 'quiz',
      difficulty: 'Medium',
      players: 'Single',
      duration: '8 min',
      xpReward: 200,
      playCount: 9876,
      icon: '📈',
    },
    {
      id: 8,
      title: 'Risk vs Reward',
      description: 'Balance risk and return to achieve optimal portfolio performance.',
      category: 'strategy',
      difficulty: 'Medium',
      players: 'Single',
      duration: '10 min',
      xpReward: 250,
      playCount: 6543,
      icon: '⚖️',
    },
    {
      id: 9,
      title: 'IPO Valuation Game',
      description: 'Determine fair valuations for companies going public.',
      category: 'strategy',
      difficulty: 'Hard',
      players: 'Single',
      duration: '15 min',
      xpReward: 400,
      playCount: 3421,
      icon: '🏢',
    },
    {
      id: 10,
      title: 'Bull vs Bear Battle',
      description: 'Multiplayer showdown: compete to profit in bull or bear markets.',
      category: 'trading',
      difficulty: 'Medium',
      players: 'Multiplayer',
      duration: '12 min',
      xpReward: 350,
      playCount: 11234,
      icon: '🐂',
    },
    {
      id: 11,
      title: 'Economics Trivia',
      description: 'Answer questions about macroeconomics and market theory.',
      category: 'quiz',
      difficulty: 'Easy',
      players: 'Multiplayer',
      duration: '7 min',
      xpReward: 150,
      playCount: 21345,
      icon: '🌍',
    },
    {
      id: 12,
      title: 'Asset Allocation Optimizer',
      description: 'Find the perfect asset mix for different investor profiles.',
      category: 'portfolio',
      difficulty: 'Medium',
      players: 'Single',
      duration: '10 min',
      xpReward: 280,
      playCount: 5634,
      icon: '🎚️',
    },
    {
      id: 13,
      title: 'Market Prediction Challenge',
      description: 'Predict whether stocks will go up or down based on news and data.',
      category: 'prediction',
      difficulty: 'Hard',
      players: 'Single',
      duration: '15 min',
      xpReward: 450,
      playCount: 7823,
      icon: '🔮',
    },
    {
      id: 14,
      title: 'Dividend Hunter',
      description: 'Build a portfolio of dividend-paying stocks for passive income.',
      category: 'portfolio',
      difficulty: 'Medium',
      players: 'Single',
      duration: '12 min',
      xpReward: 300,
      playCount: 4532,
      icon: '💵',
    },
    {
      id: 15,
      title: 'Bond Pricing Challenge',
      description: 'Calculate bond prices and yields under various conditions.',
      category: 'quiz',
      difficulty: 'Hard',
      players: 'Single',
      duration: '10 min',
      xpReward: 350,
      playCount: 2134,
      icon: '📜',
    },
    {
      id: 16,
      title: 'Futures Trading Showdown',
      description: 'Trade futures contracts and profit from leverage.',
      category: 'trading',
      difficulty: 'Hard',
      players: 'Multiplayer',
      duration: '18 min',
      xpReward: 500,
      playCount: 6234,
      icon: '📅',
    },
    {
      id: 17,
      title: 'Economic Indicator Predictor',
      description: 'Forecast economic data releases and their market impact.',
      category: 'prediction',
      difficulty: 'Hard',
      players: 'Single',
      duration: '12 min',
      xpReward: 400,
      playCount: 3845,
      icon: '📊',
    },
    {
      id: 18,
      title: 'Merger Arbitrage Master',
      description: 'Profit from M&A announcements using arbitrage strategies.',
      category: 'strategy',
      difficulty: 'Hard',
      players: 'Single',
      duration: '15 min',
      xpReward: 450,
      playCount: 2943,
      icon: '🤝',
    },
  ];

  const filteredGames = selectedCategory === 'all'
    ? games
    : games.filter(g => g.category === selectedCategory);

  const difficultyColors = {
    Easy: 'bg-green-500/20 text-green-400 border-green-500/30',
    Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Hard: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  return (
    <div className="min-h-screen p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Games & Simulations</h1>
        <p className="text-gray-400">Learn through interactive challenges and trading simulations</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card variant="gradient" padding="lg">
          <div className="space-y-2">
            <p className="text-white/60 text-sm">Games Played</p>
            <p className="text-4xl font-bold text-white">156</p>
          </div>
        </Card>
        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Wins</p>
            <p className="text-4xl font-bold text-green-400">89</p>
          </div>
        </Card>
        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Win Rate</p>
            <p className="text-4xl font-bold text-white">57%</p>
          </div>
        </Card>
        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">High Score</p>
            <p className="text-4xl font-bold text-purple-400">9,842</p>
          </div>
        </Card>
      </div>

      {/* Featured Game */}
      {games.find(g => g.featured) && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Featured Game</h2>
          <Card variant="gradient" padding="lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-[#0B0E13] rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-4">{games.find(g => g.featured)!.icon}</div>
                  <Link href={`/games/${games.find(g => g.featured)!.id}`}>
                    <Button variant="primary" size="lg">
                      Play Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[games.find(g => g.featured)!.difficulty]}`}>
                    {games.find(g => g.featured)!.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold">
                    {games.find(g => g.featured)!.players}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white">{games.find(g => g.featured)!.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{games.find(g => g.featured)!.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span>🕒</span>
                    <span>{games.find(g => g.featured)!.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⭐</span>
                    <span>{games.find(g => g.featured)!.xpReward} XP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>👥</span>
                    <span>{games.find(g => g.featured)!.playCount.toLocaleString()} plays</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories */}
        <div className="lg:col-span-1">
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
        </div>

        {/* Games Grid */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Games' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <select className="px-4 py-2 bg-[#151921] border border-[#2D3139] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Most Popular</option>
              <option>Newest First</option>
              <option>Highest XP</option>
              <option>Quickest</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGames.map((game) => (
              <Link key={game.id} href={`/games/${game.id}`}>
                <Card variant="elevated" padding="none" hover>
                  <div className="aspect-video bg-[#0B0E13] rounded-t-xl flex items-center justify-center border-b border-[#2D3139]">
                    <div className="text-6xl">{game.icon}</div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${difficultyColors[game.difficulty]}`}>
                        {game.difficulty}
                      </span>
                      <span className="text-xs text-gray-500">{game.players}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{game.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{game.description}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-[#2D3139] text-xs">
                      <div className="flex items-center gap-3 text-gray-500">
                        <div className="flex items-center gap-1">
                          <span>🕒</span>
                          <span>{game.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>⭐</span>
                          <span>{game.xpReward}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Play →
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}