'use client';

import { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<'account' | 'notifications' | 'privacy' | 'appearance'>('account');

  const sections = [
    { id: 'account' as const, label: 'Account', icon: '👤' },
    { id: 'notifications' as const, label: 'Notifications', icon: '🔔' },
    { id: 'privacy' as const, label: 'Privacy', icon: '🔒' },
    { id: 'appearance' as const, label: 'Appearance', icon: '🎨' },
  ];

  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account preferences and settings</p>
        </div>
        <Link href="/profile">
          <Button variant="outline">Back to Profile</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <Card variant="default" padding="lg">
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                    ${activeSection === section.id
                      ? 'bg-gradient-primary text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-[#1C2028]'
                    }
                  `}
                >
                  <span className="text-xl">{section.icon}</span>
                  <span className="font-medium">{section.label}</span>
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeSection === 'account' && (
            <>
              <Card variant="elevated" padding="lg">
                <h2 className="text-2xl font-bold text-white mb-6">Account Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
                    <Input type="text" placeholder="JohnDoe" defaultValue="JohnDoe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Display Name</label>
                    <Input type="text" placeholder="John Doe" defaultValue="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <Input type="email" placeholder="john.doe@example.com" defaultValue="john.doe@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Bio</label>
                    <textarea
                      className="w-full px-4 py-3 bg-[#151921] border border-[#2D3139] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      rows={4}
                      placeholder="Tell us about yourself..."
                      defaultValue="Finance enthusiast | Trading lover | Always learning"
                    />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button variant="primary">Save Changes</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </div>
              </Card>

              <Card variant="elevated" padding="lg">
                <h2 className="text-2xl font-bold text-white mb-6">Change Password</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Current Password</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">New Password</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Confirm New Password</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <Button variant="primary">Update Password</Button>
                </div>
              </Card>

              <Card variant="bordered" padding="lg">
                <h2 className="text-2xl font-bold text-red-400 mb-4">Danger Zone</h2>
                <p className="text-gray-400 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10">
                  Delete Account
                </Button>
              </Card>
            </>
          )}

          {activeSection === 'notifications' && (
            <Card variant="elevated" padding="lg">
              <h2 className="text-2xl font-bold text-white mb-6">Notification Preferences</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-3 border-b border-[#2D3139]">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Notifications</h3>
                    <p className="text-sm text-gray-400">Receive updates via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-[#2D3139]">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Achievement Alerts</h3>
                    <p className="text-sm text-gray-400">Get notified when you unlock achievements</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-[#2D3139]">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Competition Updates</h3>
                    <p className="text-sm text-gray-400">Stay informed about tournaments and challenges</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-[#2D3139]">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Friend Requests</h3>
                    <p className="text-sm text-gray-400">Notifications when someone wants to connect</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-[#2D3139]">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Weekly Reports</h3>
                    <p className="text-sm text-gray-400">Get a summary of your weekly progress</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Marketing Emails</h3>
                    <p className="text-sm text-gray-400">Receive news about features and promotions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            </Card>
          )}

          {activeSection === 'privacy' && (
            <Card variant="elevated" padding="lg">
              <h2 className="text-2xl font-bold text-white mb-6">Privacy Settings</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-3 border-b border-[#2D3139]">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Public Profile</h3>
                    <p className="text-sm text-gray-400">Make your profile visible to everyone</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-[#2D3139]">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Show Activity</h3>
                    <p className="text-sm text-gray-400">Let others see your recent activity</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-[#2D3139]">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Show Stats on Leaderboard</h3>
                    <p className="text-sm text-gray-400">Display your stats publicly</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Allow Friend Requests</h3>
                    <p className="text-sm text-gray-400">Let others send you friend requests</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="pt-4">
                  <h3 className="text-white font-semibold mb-3">Data Management</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      📥 Download My Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🗑️ Request Data Deletion
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeSection === 'appearance' && (
            <Card variant="elevated" padding="lg">
              <h2 className="text-2xl font-bold text-white mb-6">Appearance Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-3">Theme</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <button className="p-4 bg-[#151921] border-2 border-purple-500 rounded-xl hover:border-purple-400 transition-colors">
                      <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded mb-2"></div>
                      <p className="text-white text-sm font-medium">Dark</p>
                    </button>
                    <button className="p-4 bg-[#151921] border-2 border-[#2D3139] rounded-xl hover:border-purple-400 transition-colors opacity-50">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-white rounded mb-2"></div>
                      <p className="text-gray-400 text-sm font-medium">Light (Coming Soon)</p>
                    </button>
                    <button className="p-4 bg-[#151921] border-2 border-[#2D3139] rounded-xl hover:border-purple-400 transition-colors opacity-50">
                      <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 rounded mb-2"></div>
                      <p className="text-gray-400 text-sm font-medium">Auto (Coming Soon)</p>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-3">Accent Color</h3>
                  <div className="flex gap-3">
                    <button className="w-12 h-12 rounded-lg bg-gradient-primary ring-2 ring-white ring-offset-2 ring-offset-[#0B0E13]"></button>
                    <button className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-[#0B0E13] transition-all"></button>
                    <button className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-[#0B0E13] transition-all"></button>
                    <button className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-[#0B0E13] transition-all"></button>
                    <button className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-[#0B0E13] transition-all"></button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-t border-[#2D3139] pt-4">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Animations</h3>
                    <p className="text-sm text-gray-400">Enable smooth transitions and effects</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Reduce Motion</h3>
                    <p className="text-sm text-gray-400">Minimize animations for accessibility</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
