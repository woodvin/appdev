'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface UserData {
  username: string;
  displayName: string;
  email: string;
  bio: string;
}

interface ProfileSettingsProps {
  userData: UserData;
}

export default function ProfileSettings({ userData }: ProfileSettingsProps) {
  const [formData, setFormData] = useState({
    displayName: userData.displayName,
    username: userData.username,
    email: userData.email,
    bio: userData.bio,
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    weeklyReport: true,
    achievements: true,
    levelUps: true,
    leaderboardUpdates: false,
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public' as 'public' | 'friends' | 'private',
    showActivity: true,
    showAchievements: true,
    showStats: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key],
    });
  };

  const handlePrivacyChange = (key: keyof typeof privacy, value: any) => {
    setPrivacy({
      ...privacy,
      [key]: value,
    });
  };

  const handleSave = () => {
    // TODO: Implement API call to save settings
    console.log('Saving settings:', { formData, notifications, privacy });
    alert('Settings saved! (This is a demo - API integration pending)');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Profile Information */}
      <Card variant="default" padding="lg">
        <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Display Name
            </label>
            <Input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleInputChange}
              placeholder="Your display name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Your username"
            />
            <p className="text-xs text-gray-500 mt-1">This will be visible in your profile URL</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Tell us about yourself..."
              rows={4}
              className="w-full px-4 py-3 bg-[#151921] border border-[#2D3139] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">{formData.bio.length}/200 characters</p>
          </div>
        </div>
      </Card>

      {/* Notifications */}
      <Card variant="default" padding="lg">
        <h2 className="text-2xl font-bold text-white mb-6">Notifications</h2>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between py-2">
              <div>
                <p className="text-white font-medium">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </p>
                <p className="text-xs text-gray-400">
                  {getNotificationDescription(key as keyof typeof notifications)}
                </p>
              </div>
              <button
                onClick={() => handleNotificationChange(key as keyof typeof notifications)}
                className={`
                  relative w-12 h-6 rounded-full transition-colors
                  ${value ? 'bg-purple-600' : 'bg-gray-600'}
                `}
              >
                <div
                  className={`
                    absolute top-1 w-4 h-4 rounded-full bg-white transition-transform
                    ${value ? 'translate-x-7' : 'translate-x-1'}
                  `}
                />
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* Privacy */}
      <Card variant="default" padding="lg">
        <h2 className="text-2xl font-bold text-white mb-6">Privacy</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Profile Visibility
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['public', 'friends', 'private'] as const).map((visibility) => (
                <button
                  key={visibility}
                  onClick={() => handlePrivacyChange('profileVisibility', visibility)}
                  className={`
                    py-3 px-4 rounded-lg border transition-all
                    ${privacy.profileVisibility === visibility
                      ? 'bg-purple-600 border-purple-500 text-white'
                      : 'bg-[#151921] border-[#2D3139] text-gray-400 hover:border-[#3A3F4B]'
                    }
                  `}
                >
                  {visibility.charAt(0).toUpperCase() + visibility.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#2D3139]">
            {Object.entries(privacy)
              .filter(([key]) => key !== 'profileVisibility')
              .map(([key, value]) => (
                <div key={key} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-white font-medium">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </p>
                    <p className="text-xs text-gray-400">
                      {getPrivacyDescription(key as keyof typeof privacy)}
                    </p>
                  </div>
                  <button
                    onClick={() => handlePrivacyChange(key as keyof typeof privacy, !value)}
                    className={`
                      relative w-12 h-6 rounded-full transition-colors
                      ${value ? 'bg-purple-600' : 'bg-gray-600'}
                    `}
                  >
                    <div
                      className={`
                        absolute top-1 w-4 h-4 rounded-full bg-white transition-transform
                        ${value ? 'translate-x-7' : 'translate-x-1'}
                      `}
                    />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card variant="bordered" padding="lg">
        <h2 className="text-2xl font-bold text-red-400 mb-6">Danger Zone</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-white font-medium">Change Password</p>
              <p className="text-xs text-gray-400">Update your account password</p>
            </div>
            <button className="px-4 py-2 bg-[#21252E] hover:bg-[#2D3139] text-white rounded-lg transition-colors border border-[#2D3139]">
              Change
            </button>
          </div>

          <div className="flex items-center justify-between py-3 border-t border-[#2D3139]">
            <div>
              <p className="text-white font-medium">Delete Account</p>
              <p className="text-xs text-gray-400">Permanently delete your account and all data</p>
            </div>
            <button className="px-4 py-2 bg-red-600/10 hover:bg-red-600/20 text-red-400 rounded-lg transition-colors border border-red-500/30">
              Delete
            </button>
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <button className="px-6 py-3 bg-[#21252E] hover:bg-[#2D3139] text-white rounded-lg transition-colors border border-[#2D3139]">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-gradient-primary hover:opacity-90 text-white rounded-lg transition-opacity font-medium shadow-lg"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

function getNotificationDescription(key: string): string {
  const descriptions: Record<string, string> = {
    emailNotifications: 'Receive notifications via email',
    pushNotifications: 'Receive push notifications in browser',
    weeklyReport: 'Get weekly progress summaries',
    achievements: 'Get notified when you unlock achievements',
    levelUps: 'Get notified when you level up',
    leaderboardUpdates: 'Get updates about leaderboard position changes',
  };
  return descriptions[key] || '';
}

function getPrivacyDescription(key: string): string {
  const descriptions: Record<string, string> = {
    showActivity: 'Allow others to see your recent activity',
    showAchievements: 'Display your achievements on your profile',
    showStats: 'Show your stats and progress to others',
  };
  return descriptions[key] || '';
}
