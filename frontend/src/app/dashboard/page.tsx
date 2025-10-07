import Link from 'next/link';
import Card from '@/components/ui/Card';

export default function DashboardPage() {
  const recentActivity = [
    { action: 'Completed lesson', title: 'Introduction to Trading', time: '2 hours ago', icon: '📚' },
    { action: 'Won game', title: 'Market Simulator Pro', time: '5 hours ago', icon: '🎮' },
    { action: 'Achievement unlocked', title: 'Week Warrior', time: '1 day ago', icon: '🏆' },
  ];

  const upcomingChallenges = [
    { title: 'Weekly Tournament', starts: 'In 2 days', reward: '500 XP', icon: '⚔️' },
    { title: 'Speed Trading Challenge', starts: 'In 5 days', reward: '1000 XP', icon: '⚡' },
  ];

  return (
    <div className="min-h-screen p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back, John</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card variant="gradient" padding="lg">
          <div className="space-y-2">
            <p className="text-white/60 text-sm">Total XP</p>
            <p className="text-3xl font-bold text-white">12,450</p>
            <p className="text-xs text-green-300">+250 this week</p>
          </div>
        </Card>

        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Current Streak</p>
            <p className="text-3xl font-bold text-white">7 days</p>
            <p className="text-xs text-gray-500">Personal best: 12</p>
          </div>
        </Card>

        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Rank</p>
            <p className="text-3xl font-bold text-white">#284</p>
            <p className="text-xs text-purple-400">Top 5%</p>
          </div>
        </Card>

        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Achievements</p>
            <p className="text-3xl font-bold text-white">24/50</p>
            <p className="text-xs text-gray-500">48% complete</p>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/compete">
                <Card variant="elevated" padding="lg" hover>
                  <div className="space-y-3">
                    <div className="text-3xl">🏆</div>
                    <h3 className="text-lg font-bold text-white">Compete</h3>
                    <p className="text-sm text-gray-400">Challenge others in real-time</p>
                  </div>
                </Card>
              </Link>

              <Link href="/games">
                <Card variant="elevated" padding="lg" hover>
                  <div className="space-y-3">
                    <div className="text-3xl">🎮</div>
                    <h3 className="text-lg font-bold text-white">Play Games</h3>
                    <p className="text-sm text-gray-400">Practice your skills</p>
                  </div>
                </Card>
              </Link>

              <Link href="/lessons">
                <Card variant="elevated" padding="lg" hover>
                  <div className="space-y-3">
                    <div className="text-3xl">📚</div>
                    <h3 className="text-lg font-bold text-white">Continue Learning</h3>
                    <p className="text-sm text-gray-400">Resume your lessons</p>
                  </div>
                </Card>
              </Link>

              <Link href="/achievements">
                <Card variant="elevated" padding="lg" hover>
                  <div className="space-y-3">
                    <div className="text-3xl">⭐</div>
                    <h3 className="text-lg font-bold text-white">Achievements</h3>
                    <p className="text-sm text-gray-400">View your badges</p>
                  </div>
                </Card>
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <Card variant="default" padding="lg">
            <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-[#151921] rounded-lg border border-[#2D3139]">
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">{activity.action}</p>
                    <p className="text-white font-medium">{activity.title}</p>
                  </div>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Daily Goal */}
          <Card variant="bordered" padding="lg">
            <h3 className="text-lg font-bold text-white mb-4">Daily Goal</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Complete 3 lessons</span>
                  <span className="text-purple-400">2/3</span>
                </div>
                <div className="h-2 bg-[#1C2028] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary rounded-full" style={{ width: '66%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Earn 100 XP</span>
                  <span className="text-purple-400">85/100</span>
                </div>
                <div className="h-2 bg-[#1C2028] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Upcoming Challenges */}
          <Card variant="default" padding="lg">
            <h3 className="text-lg font-bold text-white mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingChallenges.map((challenge, index) => (
                <div key={index} className="p-3 bg-[#151921] rounded-lg border border-[#2D3139]">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{challenge.icon}</div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">{challenge.title}</p>
                      <p className="text-xs text-gray-400">{challenge.starts}</p>
                      <p className="text-xs text-purple-400 mt-1">{challenge.reward}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Leaderboard Preview */}
          <Card variant="elevated" padding="lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Leaderboard</h3>
              <Link href="/compete" className="text-xs text-purple-400 hover:text-purple-300">View all</Link>
            </div>
            <div className="space-y-2">
              {[
                { name: 'Alex Johnson', xp: 15240, rank: 1 },
                { name: 'Sarah Chen', xp: 14820, rank: 2 },
                { name: 'You', xp: 12450, rank: 284, highlight: true },
              ].map((user, index) => (
                <div key={index} className={`flex items-center justify-between p-2 rounded ${user.highlight ? 'bg-purple-500/10 border border-purple-500/30' : ''}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm w-6">#{user.rank}</span>
                    <span className={`text-sm ${user.highlight ? 'text-white font-semibold' : 'text-gray-400'}`}>{user.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{user.xp.toLocaleString()} XP</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}