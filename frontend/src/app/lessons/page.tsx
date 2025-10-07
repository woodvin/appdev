'use client';

import { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { lessons } from '@/data/lessons';

export default function LessonsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
  const [sortBy, setSortBy] = useState<'recommended' | 'newest' | 'easiest' | 'hardest' | 'shortest'>('recommended');

  const categories = [
    { id: 'all', name: 'All Lessons', icon: '📚', count: 156 },
    { id: 'fundamentals', name: 'Fundamentals', icon: '🏛️', count: 28 },
    { id: 'portfolio', name: 'Portfolio Theory', icon: '📊', count: 22 },
    { id: 'technical', name: 'Technical Analysis', icon: '📈', count: 26 },
    { id: 'risk', name: 'Risk Management', icon: '🛡️', count: 20 },
    { id: 'options', name: 'Options Trading', icon: '🎲', count: 18 },
    { id: 'quant', name: 'Quantitative Finance', icon: '🔢', count: 16 },
    { id: 'crypto', name: 'Cryptocurrency', icon: '₿', count: 14 },
    { id: 'psychology', name: 'Trading Psychology', icon: '🧠', count: 12 },
  ];

  const filteredLessons = lessons.filter((lesson) => {
    const matchesCategory = selectedCategory === 'all' || lesson.category === selectedCategory;
    const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lesson.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort lessons based on selected sort option
  const sortedLessons = [...filteredLessons].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.id - a.id; // Higher IDs are newer
      case 'easiest':
        const difficultyOrder = { Beginner: 1, Intermediate: 2, Advanced: 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      case 'hardest':
        const difficultyOrderDesc = { Beginner: 1, Intermediate: 2, Advanced: 3 };
        return difficultyOrderDesc[b.difficulty] - difficultyOrderDesc[a.difficulty];
      case 'shortest':
        const getDuration = (duration: string) => parseInt(duration.replace(' min', ''));
        return getDuration(a.duration) - getDuration(b.duration);
      case 'recommended':
      default:
        return a.id - b.id; // Default order by ID
    }
  });

  // Show only first 12 lessons initially unless "show all" is clicked
  const INITIAL_DISPLAY_COUNT = 12;
  const displayedLessons = showAll ? sortedLessons : sortedLessons.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreLessons = sortedLessons.length > INITIAL_DISPLAY_COUNT;

  const completedCount = lessons.filter(l => l.completed).length;
  const totalXP = lessons.filter(l => l.completed).reduce((sum, l) => sum + l.xp, 0);

  const difficultyColors = {
    Beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
    Intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Advanced: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  return (
    <div className="min-h-screen p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Lessons</h1>
        <p className="text-gray-400">Master finance from beginner to advanced topics</p>
      </div>

      {/* Search */}
      <div className="max-w-2xl">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
            🔍
          </div>
          <Input
            type="text"
            placeholder="Search lessons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="gradient" padding="lg">
          <div className="space-y-2">
            <p className="text-white/60 text-sm">Lessons Completed</p>
            <p className="text-4xl font-bold text-white">{completedCount}/{lessons.length}</p>
            <p className="text-xs text-green-300">{Math.round((completedCount / lessons.length) * 100)}% complete</p>
          </div>
        </Card>

        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">XP Earned from Lessons</p>
            <p className="text-4xl font-bold text-white">{totalXP.toLocaleString()}</p>
          </div>
        </Card>

        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Current Streak</p>
            <p className="text-4xl font-bold text-white">7 days</p>
            <p className="text-xs text-gray-500">Keep it going!</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
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

        {/* Lessons Grid */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Lessons' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="flex items-center gap-3">
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-[#151921] rounded-lg p-1 border border-[#2D3139]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-gradient-primary text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('compact')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    viewMode === 'compact'
                      ? 'bg-gradient-primary text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Compact
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 bg-[#151921] border border-[#2D3139] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="recommended">Recommended</option>
                <option value="newest">Newest First</option>
                <option value="easiest">Easiest First</option>
                <option value="hardest">Hardest First</option>
                <option value="shortest">Shortest First</option>
              </select>
            </div>
          </div>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedLessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={lesson.locked ? '#' : `/lessons/${lesson.id}`}
                className={lesson.locked ? 'cursor-not-allowed' : ''}
              >
                <Card variant="elevated" padding="lg" hover={!lesson.locked}>
                  <div className={`space-y-3 ${lesson.locked ? 'opacity-40' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="text-4xl">{lesson.icon}</div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[lesson.difficulty]}`}>
                          {lesson.difficulty}
                        </span>
                        {lesson.completed && (
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                            ✓ Completed
                          </span>
                        )}
                        {lesson.locked && (
                          <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs font-semibold">
                            🔒 Locked
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{lesson.title}</h3>
                      <p className="text-sm text-gray-400">{lesson.description}</p>
                    </div>
                    {lesson.progress !== undefined && lesson.progress > 0 && lesson.progress < 100 && (
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">In Progress</span>
                          <span className="text-purple-400">{lesson.progress}%</span>
                        </div>
                        <div className="h-2 bg-[#1C2028] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-primary rounded-full transition-all"
                            style={{ width: `${lesson.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-2 border-t border-[#2D3139]">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <span>🕒</span>
                          <span>{lesson.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>⭐</span>
                          <span>{lesson.xp} XP</span>
                        </div>
                      </div>
                      {!lesson.locked && (
                        <Button variant="ghost" size="sm">
                          {lesson.completed ? 'Review' : lesson.progress ? 'Continue' : 'Start'} →
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

          {/* Compact View */}
          {viewMode === 'compact' && (
            <div className="space-y-2">
              {displayedLessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={lesson.locked ? '#' : `/lessons/${lesson.id}`}
                  className={lesson.locked ? 'cursor-not-allowed' : ''}
                >
                  <Card variant="default" padding="none" hover={!lesson.locked}>
                    <div className={`flex items-center gap-4 p-4 ${lesson.locked ? 'opacity-40' : ''}`}>
                      {/* Icon */}
                      <div className="text-3xl flex-shrink-0">{lesson.icon}</div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-white truncate">{lesson.title}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border flex-shrink-0 ${difficultyColors[lesson.difficulty]}`}>
                            {lesson.difficulty}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 line-clamp-1">{lesson.description}</p>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 flex-shrink-0">
                        <div className="flex items-center gap-1">
                          <span>🕒</span>
                          <span>{lesson.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>⭐</span>
                          <span>{lesson.xp} XP</span>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="flex-shrink-0">
                        {lesson.completed && (
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                            ✓
                          </span>
                        )}
                        {lesson.locked && (
                          <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs font-semibold">
                            🔒
                          </span>
                        )}
                        {!lesson.locked && !lesson.completed && lesson.progress && (
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold">
                            {lesson.progress}%
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar for In-Progress Lessons */}
                    {lesson.progress !== undefined && lesson.progress > 0 && lesson.progress < 100 && (
                      <div className="px-4 pb-3">
                        <div className="h-1.5 bg-[#1C2028] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-primary rounded-full transition-all"
                            style={{ width: `${lesson.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Show More/Less Button */}
          {hasMoreLessons && !showAll && (
            <Card variant="bordered" padding="lg">
              <div className="text-center space-y-4">
                <p className="text-gray-400">
                  Showing {displayedLessons.length} of {filteredLessons.length} lessons
                </p>
                <Button
                  variant="primary"
                  onClick={() => setShowAll(true)}
                  className="w-full md:w-auto"
                >
                  Show All {filteredLessons.length - INITIAL_DISPLAY_COUNT} More Lessons →
                </Button>
              </div>
            </Card>
          )}

          {showAll && hasMoreLessons && (
            <Card variant="bordered" padding="lg">
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowAll(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full md:w-auto"
                >
                  ← Show Less
                </Button>
              </div>
            </Card>
          )}

          {filteredLessons.length === 0 && (
            <Card variant="bordered" padding="lg">
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No lessons found matching your search.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSearchQuery('')}>
                  Clear Search
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}