'use client';

import { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const faqCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: '🚀',
      faqs: [
        {
          question: 'How do I create an account?',
          answer: 'Click on the "Start Learning — Free" button on the homepage. Fill in your email, username, and password to create your account. You\'ll receive a verification email to complete the signup process.',
        },
        {
          question: 'Is AppDev really free?',
          answer: 'Yes! We offer a generous free tier with access to 50+ lessons and basic features. Premium plans unlock advanced lessons, exclusive games, and priority support.',
        },
        {
          question: 'What are XP points and how do I earn them?',
          answer: 'XP (Experience Points) are earned by completing lessons, playing games, winning competitions, and achieving milestones. XP determines your level and unlocks achievements.',
        },
        {
          question: 'How does the leveling system work?',
          answer: 'Your level increases as you earn XP. Each level requires more XP than the previous one. Higher levels unlock exclusive content and showcase your expertise.',
        },
      ],
    },
    {
      id: 'lessons',
      title: 'Lessons & Learning',
      icon: '📚',
      faqs: [
        {
          question: 'What topics are covered in the lessons?',
          answer: 'We cover a wide range of finance topics including compound interest, portfolio theory, risk management, technical analysis, options trading, and advanced quantitative finance.',
        },
        {
          question: 'Can I retake lessons?',
          answer: 'Absolutely! You can retake any lesson as many times as you want to improve your score or refresh your knowledge. Retaking lessons can also help you earn achievements.',
        },
        {
          question: 'How long does each lesson take?',
          answer: 'Most lessons take 10-20 minutes to complete. Some advanced topics may take longer. You can pause and resume lessons at any time.',
        },
        {
          question: 'Are there prerequisites for advanced lessons?',
          answer: 'Some advanced lessons recommend completing foundational lessons first, but you\'re free to take any lesson you want at any time.',
        },
      ],
    },
    {
      id: 'games',
      title: 'Games & Simulations',
      icon: '🎮',
      faqs: [
        {
          question: 'What types of games are available?',
          answer: 'We offer trading simulations, market prediction challenges, portfolio optimization games, risk assessment scenarios, and quick quiz battles.',
        },
        {
          question: 'Do game results affect my stats?',
          answer: 'Yes! Game wins and performance contribute to your overall stats, XP earnings, and achievement progress.',
        },
        {
          question: 'Can I play games with friends?',
          answer: 'Yes! Many games support multiplayer mode where you can compete against friends or random opponents.',
        },
        {
          question: 'Are there time limits on games?',
          answer: 'Some games have time limits to add challenge, while others let you play at your own pace. Each game clearly indicates its format.',
        },
      ],
    },
    {
      id: 'compete',
      title: 'Competitions & Tournaments',
      icon: '🏆',
      faqs: [
        {
          question: 'How do I join a competition?',
          answer: 'Visit the Compete page to see available tournaments and challenges. Click "Join" on any active competition to participate. Some competitions may have entry requirements.',
        },
        {
          question: 'What are the different competition types?',
          answer: 'We offer daily challenges, weekly tournaments, monthly championships, and special themed events. Each has different rules and rewards.',
        },
        {
          question: 'How are winners determined?',
          answer: 'Winners are determined by XP earned, accuracy, speed, or other metrics depending on the competition type. All rules are clearly stated before you join.',
        },
        {
          question: 'What prizes can I win?',
          answer: 'Competitions award XP bonuses, exclusive achievements, leaderboard positions, and for premium tournaments, special badges and prizes.',
        },
      ],
    },
    {
      id: 'achievements',
      title: 'Achievements & Progression',
      icon: '⭐',
      faqs: [
        {
          question: 'How many achievements are there?',
          answer: 'There are over 150 achievements to unlock across categories like Learning, Gaming, Competition, Streaks, Performance, and Special achievements.',
        },
        {
          question: 'Do achievements give rewards?',
          answer: 'Yes! Each achievement awards XP when unlocked. Some rare achievements also unlock exclusive content or features.',
        },
        {
          question: 'Can I track my progress toward locked achievements?',
          answer: 'Most achievements show a progress percentage so you can see how close you are to unlocking them.',
        },
        {
          question: 'What are streaks and how do they work?',
          answer: 'A streak is the number of consecutive days you\'ve completed at least one lesson. Streaks earn you special achievements and bonus XP.',
        },
      ],
    },
    {
      id: 'account',
      title: 'Account & Billing',
      icon: '💳',
      faqs: [
        {
          question: 'How do I upgrade to Premium?',
          answer: 'Visit the Plans page to see all available subscription tiers. Choose a plan and follow the checkout process. You can upgrade, downgrade, or cancel anytime.',
        },
        {
          question: 'Can I cancel my subscription?',
          answer: 'Yes, you can cancel your subscription at any time from the Settings page. You\'ll retain premium access until the end of your billing period.',
        },
        {
          question: 'How do I change my email or password?',
          answer: 'Go to Settings > Account to update your email, password, and other account information.',
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes, you can request account deletion from Settings > Account > Danger Zone. Please note this action is permanent and cannot be undone.',
        },
      ],
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: '🔧',
      faqs: [
        {
          question: 'The app is running slowly. What should I do?',
          answer: 'Try refreshing the page, clearing your browser cache, or using an updated browser. If issues persist, contact support with details about your device and browser.',
        },
        {
          question: 'I found a bug. How do I report it?',
          answer: 'Use the "Report a Bug" form below or email support@appdev.com with detailed steps to reproduce the issue, including screenshots if possible.',
        },
        {
          question: 'Which browsers are supported?',
          answer: 'AppDev works best on the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience.',
        },
        {
          question: 'Is there a mobile app?',
          answer: 'The web app is fully responsive and works great on mobile browsers. Native iOS and Android apps are currently in development!',
        },
      ],
    },
  ];

  const filteredFaqs = selectedCategory
    ? faqCategories.filter((cat) => cat.id === selectedCategory)
    : faqCategories;

  return (
    <div className="min-h-screen p-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-white">Help & Support</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Find answers to common questions or get in touch with our team
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
            🔍
          </div>
          <Input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 py-4 text-lg"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Link href="/dashboard">
          <Card variant="elevated" padding="lg" hover>
            <div className="text-center space-y-3">
              <div className="text-4xl">📖</div>
              <h3 className="text-lg font-bold text-white">Browse Lessons</h3>
              <p className="text-sm text-gray-400">Start learning today</p>
            </div>
          </Card>
        </Link>

        <Link href="/profile">
          <Card variant="elevated" padding="lg" hover>
            <div className="text-center space-y-3">
              <div className="text-4xl">👤</div>
              <h3 className="text-lg font-bold text-white">My Profile</h3>
              <p className="text-sm text-gray-400">View your progress</p>
            </div>
          </Card>
        </Link>

        <Link href="/settings">
          <Card variant="elevated" padding="lg" hover>
            <div className="text-center space-y-3">
              <div className="text-4xl">⚙️</div>
              <h3 className="text-lg font-bold text-white">Settings</h3>
              <p className="text-sm text-gray-400">Manage your account</p>
            </div>
          </Card>
        </Link>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`p-3 rounded-lg border-2 transition-all ${
              selectedCategory === null
                ? 'bg-purple-500/20 border-purple-500 text-white'
                : 'bg-[#151921] border-[#2D3139] text-gray-400 hover:border-purple-500/50'
            }`}
          >
            <div className="text-2xl mb-1">📋</div>
            <div className="text-xs font-medium">All Topics</div>
          </button>
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedCategory === category.id
                  ? 'bg-purple-500/20 border-purple-500 text-white'
                  : 'bg-[#151921] border-[#2D3139] text-gray-400 hover:border-purple-500/50'
              }`}
            >
              <div className="text-2xl mb-1">{category.icon}</div>
              <div className="text-xs font-medium">{category.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto space-y-8">
        {filteredFaqs.map((category) => (
          <div key={category.id}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{category.icon}</span>
              <h2 className="text-2xl font-bold text-white">{category.title}</h2>
            </div>
            <div className="space-y-3">
              {category.faqs.map((faq, index) => (
                <Card key={index} variant="elevated" padding="lg">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      <span className="text-gray-400 group-open:rotate-180 transition-transform text-2xl">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-[#2D3139]">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Support Form */}
      <div className="max-w-3xl mx-auto pt-8">
        <Card variant="gradient" padding="lg">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">Still Need Help?</h2>
            <p className="text-gray-300">Send us a message and we'll get back to you within 24 hours</p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <Input type="text" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <Input type="text" placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 bg-[#151921] border border-[#2D3139] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={6}
                placeholder="Describe your issue or question in detail..."
              />
            </div>
            <div className="flex gap-3">
              <Button variant="primary" className="flex-1">
                Send Message
              </Button>
              <Button variant="outline">
                Report a Bug
              </Button>
            </div>
          </form>
        </Card>
      </div>

      {/* Additional Resources */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        <Card variant="bordered" padding="lg" hover>
          <div className="text-center space-y-3">
            <div className="text-4xl">📧</div>
            <h3 className="text-lg font-bold text-white">Email Support</h3>
            <p className="text-sm text-gray-400">support@appdev.com</p>
            <p className="text-xs text-gray-500">Response within 24 hours</p>
          </div>
        </Card>

        <Card variant="bordered" padding="lg" hover>
          <div className="text-center space-y-3">
            <div className="text-4xl">💬</div>
            <h3 className="text-lg font-bold text-white">Community Forum</h3>
            <p className="text-sm text-gray-400">Ask the community</p>
            <Link href="/community" className="text-xs text-purple-400 hover:text-purple-300">
              Visit Forum →
            </Link>
          </div>
        </Card>

        <Card variant="bordered" padding="lg" hover>
          <div className="text-center space-y-3">
            <div className="text-4xl">📚</div>
            <h3 className="text-lg font-bold text-white">Documentation</h3>
            <p className="text-sm text-gray-400">Detailed guides</p>
            <Link href="/docs" className="text-xs text-purple-400 hover:text-purple-300">
              Read Docs →
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
