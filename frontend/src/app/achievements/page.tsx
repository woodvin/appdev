'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';

interface Achievement {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  icon: string;
  unlocked: boolean;
  xp: number;
  unlockedDate?: string;
  progress?: number;
  category: string;
}

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    // Learning Achievements
    {
      id: 1,
      title: 'First Steps',
      description: 'Complete your first lesson',
      detailedDescription: 'Congratulations on completing your first lesson! This is just the beginning of your learning journey. Every expert was once a beginner, and you\'ve taken that crucial first step toward mastering financial trading concepts.',
      icon: '🎯',
      unlocked: true,
      xp: 50,
      unlockedDate: '2 days ago',
      category: 'Learning'
    },
    {
      id: 2,
      title: 'Knowledge Seeker',
      description: 'Complete 10 lessons',
      detailedDescription: 'You\'ve completed 10 lessons and are building a solid foundation of knowledge. Your dedication to learning shows great promise. Continue this momentum to unlock even greater achievements.',
      icon: '📖',
      unlocked: true,
      xp: 100,
      unlockedDate: '5 days ago',
      category: 'Learning'
    },
    {
      id: 3,
      title: 'Scholar',
      description: 'Complete 25 lessons',
      detailedDescription: 'With 25 lessons under your belt, you\'re becoming a true scholar. You\'ve covered substantial ground in your education and are well on your way to becoming an expert in financial trading.',
      icon: '📚',
      unlocked: true,
      xp: 300,
      unlockedDate: '4 days ago',
      category: 'Learning'
    },
    {
      id: 4,
      title: 'Master Student',
      description: 'Complete 50 lessons',
      detailedDescription: 'Completing 50 lessons is no small feat! You\'ve demonstrated exceptional commitment to your education and have acquired comprehensive knowledge across multiple trading topics.',
      icon: '🎓',
      unlocked: false,
      xp: 600,
      progress: 48,
      category: 'Learning'
    },
    {
      id: 5,
      title: 'Professor',
      description: 'Complete 100 lessons',
      detailedDescription: 'Reaching 100 lessons places you among the elite learners. Your extensive knowledge and unwavering dedication have earned you the title of Professor.',
      icon: '👨‍🏫',
      unlocked: false,
      xp: 1500,
      progress: 24,
      category: 'Learning'
    },

    // Streak Achievements
    {
      id: 6,
      title: 'Consistent Learner',
      description: 'Maintain a 3-day streak',
      detailedDescription: 'Three days in a row! You\'re building a habit that will serve you well. Consistency is the key to mastery, and you\'re proving you have what it takes.',
      icon: '🔥',
      unlocked: true,
      xp: 75,
      unlockedDate: '2 weeks ago',
      category: 'Streak'
    },
    {
      id: 7,
      title: 'Week Warrior',
      description: 'Maintain a 7-day streak',
      detailedDescription: 'A full week of consistent learning! You\'ve established a solid routine and are seeing the benefits of daily practice. Keep this momentum going!',
      icon: '⚡',
      unlocked: true,
      xp: 150,
      unlockedDate: '1 day ago',
      category: 'Streak'
    },
    {
      id: 8,
      title: 'Fortnight Fighter',
      description: 'Maintain a 14-day streak',
      detailedDescription: 'Two weeks of unbroken dedication! You\'re proving that learning is a priority in your life. Your discipline is truly commendable.',
      icon: '💪',
      unlocked: false,
      xp: 300,
      progress: 50,
      category: 'Streak'
    },
    {
      id: 9,
      title: 'Marathon Runner',
      description: 'Maintain a 30-day streak',
      detailedDescription: 'A full month of daily learning! This level of commitment is rare and impressive. You\'ve transformed learning into a lifestyle.',
      icon: '🏃',
      unlocked: false,
      xp: 750,
      progress: 23,
      category: 'Streak'
    },
    {
      id: 10,
      title: 'Unstoppable',
      description: 'Maintain a 100-day streak',
      detailedDescription: 'One hundred consecutive days! Your dedication is truly extraordinary. You\'ve achieved what few others can claim - genuine mastery through consistent effort.',
      icon: '🚀',
      unlocked: false,
      xp: 2500,
      progress: 7,
      category: 'Streak'
    },

    // Gaming Achievements
    {
      id: 11,
      title: 'First Victory',
      description: 'Win your first game',
      detailedDescription: 'Your first win! This is a memorable moment that marks the beginning of your competitive journey. Many more victories await you.',
      icon: '🎮',
      unlocked: true,
      xp: 50,
      unlockedDate: '1 week ago',
      category: 'Gaming'
    },
    {
      id: 12,
      title: 'Game Master',
      description: 'Win 10 games',
      detailedDescription: 'Ten victories demonstrate that your first win was no fluke. You\'re developing consistent skills and strategies that lead to success.',
      icon: '🎯',
      unlocked: true,
      xp: 200,
      unlockedDate: '5 hours ago',
      category: 'Gaming'
    },
    {
      id: 13,
      title: 'Dominator',
      description: 'Win 50 games',
      detailedDescription: 'Fifty wins! You\'re not just playing - you\'re dominating. Your strategic thinking and execution are at an elite level.',
      icon: '👑',
      unlocked: false,
      xp: 800,
      progress: 20,
      category: 'Gaming'
    },
    {
      id: 14,
      title: 'Legendary Gamer',
      description: 'Win 100 games',
      detailedDescription: 'One hundred victories cement your status as a legendary gamer. Few reach this milestone, and you\'ve earned your place among the best.',
      icon: '🏅',
      unlocked: false,
      xp: 2000,
      progress: 10,
      category: 'Gaming'
    },

    // Competition Achievements
    {
      id: 15,
      title: 'Competitor',
      description: 'Participate in 5 competitions',
      detailedDescription: 'You\'ve stepped into the arena and competed against others. Whether you won or lost, the courage to compete is what matters most.',
      icon: '⚔️',
      unlocked: true,
      xp: 200,
      unlockedDate: '3 days ago',
      category: 'Competition'
    },
    {
      id: 16,
      title: 'Tournament Fighter',
      description: 'Participate in 20 competitions',
      detailedDescription: 'Twenty competitions! You\'re a regular in the competitive scene. Your experience in high-pressure situations is invaluable.',
      icon: '🥊',
      unlocked: false,
      xp: 500,
      progress: 25,
      category: 'Competition'
    },
    {
      id: 17,
      title: 'Champion',
      description: 'Win a tournament',
      detailedDescription: 'Tournament champion! You\'ve proven yourself against the best and emerged victorious. This is a moment to be proud of.',
      icon: '🏆',
      unlocked: false,
      xp: 1000,
      progress: 30,
      category: 'Competition'
    },
    {
      id: 18,
      title: 'Grand Champion',
      description: 'Win 5 tournaments',
      detailedDescription: 'Five tournament victories! You\'re not just lucky - you\'re consistently excellent. Your name is becoming legendary in competitive circles.',
      icon: '🥇',
      unlocked: false,
      xp: 3000,
      progress: 6,
      category: 'Competition'
    },

    // Level Achievements
    {
      id: 19,
      title: 'Rising Star',
      description: 'Reach level 10',
      detailedDescription: 'Level 10 achieved! You\'re no longer a beginner. You\'ve proven you have the dedication and skill to progress in your trading journey.',
      icon: '⭐',
      unlocked: true,
      xp: 250,
      unlockedDate: '1 week ago',
      category: 'Level'
    },
    {
      id: 20,
      title: 'Experienced Trader',
      description: 'Reach level 25',
      detailedDescription: 'Level 25 marks significant progress. You\'re now an experienced trader with substantial knowledge and practical skills.',
      icon: '🌟',
      unlocked: false,
      xp: 750,
      progress: 48,
      category: 'Level'
    },
    {
      id: 21,
      title: 'Elite Trader',
      description: 'Reach level 50',
      detailedDescription: 'Level 50! You\'re among the elite. Your expertise and experience set you apart from the vast majority of traders.',
      icon: '💎',
      unlocked: false,
      xp: 2000,
      progress: 24,
      category: 'Level'
    },
    {
      id: 22,
      title: 'Master Trader',
      description: 'Reach level 75',
      detailedDescription: 'Level 75 represents true mastery. You\'ve dedicated countless hours to perfecting your craft and it shows.',
      icon: '👑',
      unlocked: false,
      xp: 4000,
      progress: 16,
      category: 'Level'
    },
    {
      id: 23,
      title: 'Trading Legend',
      description: 'Reach level 100',
      detailedDescription: 'Level 100 - the pinnacle of achievement. You\'ve reached the highest level possible and proven yourself as a true legend in the trading world.',
      icon: '🌌',
      unlocked: false,
      xp: 10000,
      progress: 12,
      category: 'Level'
    },

    // Performance Achievements
    {
      id: 24,
      title: 'Perfectionist',
      description: 'Score 100% on 10 lessons',
      detailedDescription: 'Perfect scores on 10 lessons! Your attention to detail and commitment to excellence are remarkable. You don\'t just learn - you master.',
      icon: '💯',
      unlocked: false,
      xp: 500,
      progress: 50,
      category: 'Performance'
    },
    {
      id: 25,
      title: 'Speed Demon',
      description: 'Complete a lesson in under 5 minutes',
      detailedDescription: 'Lightning fast! You completed a lesson in under 5 minutes while maintaining accuracy. Your efficiency is impressive.',
      icon: '⚡',
      unlocked: false,
      xp: 200,
      progress: 65,
      category: 'Performance'
    },
    {
      id: 26,
      title: 'Quick Learner',
      description: 'Complete 10 lessons in one day',
      detailedDescription: 'Ten lessons in a single day! Your learning capacity and focus are exceptional. This kind of intensive study leads to rapid progress.',
      icon: '🚄',
      unlocked: false,
      xp: 400,
      progress: 30,
      category: 'Performance'
    },
    {
      id: 27,
      title: 'Flawless Victory',
      description: 'Win a game without any mistakes',
      detailedDescription: 'A perfect game! No mistakes, complete dominance. This achievement showcases your mastery of strategy and execution.',
      icon: '✨',
      unlocked: false,
      xp: 300,
      progress: 45,
      category: 'Performance'
    },

    // Social Achievements
    {
      id: 28,
      title: 'Social Butterfly',
      description: 'Add 10 friends',
      detailedDescription: 'You\'ve built a network of 10 friends! Learning and competing together makes the journey more enjoyable and enriching.',
      icon: '🦋',
      unlocked: false,
      xp: 150,
      progress: 40,
      category: 'Social'
    },
    {
      id: 29,
      title: 'Community Leader',
      description: 'Add 50 friends',
      detailedDescription: 'Fifty friends! You\'re not just part of the community - you\'re a central figure. Your network is a valuable resource.',
      icon: '🌐',
      unlocked: false,
      xp: 500,
      progress: 8,
      category: 'Social'
    },
    {
      id: 30,
      title: 'Helpful Guide',
      description: 'Help 25 other players',
      detailedDescription: 'You\'ve helped 25 players on their journey. Your generosity and knowledge-sharing make the community better for everyone.',
      icon: '🤝',
      unlocked: false,
      xp: 400,
      progress: 12,
      category: 'Social'
    },

    // Special Achievements
    {
      id: 31,
      title: 'Night Owl',
      description: 'Complete a lesson between midnight and 4 AM',
      detailedDescription: 'Burning the midnight oil! Your dedication to learning knows no bounds, even in the quiet hours of the night.',
      icon: '🦉',
      unlocked: false,
      xp: 100,
      progress: 0,
      category: 'Special'
    },
    {
      id: 32,
      title: 'Early Bird',
      description: 'Complete a lesson before 6 AM',
      detailedDescription: 'The early bird catches the worm! Starting your day with learning sets a positive tone and demonstrates discipline.',
      icon: '🌅',
      unlocked: false,
      xp: 100,
      progress: 0,
      category: 'Special'
    },
    {
      id: 33,
      title: 'Comeback Kid',
      description: 'Win a game after being behind by 50%',
      detailedDescription: 'An incredible comeback! You never gave up and turned a losing situation into a victory. Your resilience is inspiring.',
      icon: '🔄',
      unlocked: false,
      xp: 350,
      progress: 15,
      category: 'Special'
    },
    {
      id: 34,
      title: 'Overachiever',
      description: 'Earn 10,000 total XP',
      detailedDescription: 'Ten thousand XP! Your cumulative achievements demonstrate sustained excellence over time. You\'re truly an overachiever.',
      icon: '🎖️',
      unlocked: false,
      xp: 1000,
      progress: 24,
      category: 'Special'
    },
    {
      id: 35,
      title: 'XP Millionaire',
      description: 'Earn 1,000,000 total XP',
      detailedDescription: 'One million XP! This is an extraordinary milestone that few ever reach. Your dedication and persistence are unmatched.',
      icon: '💰',
      unlocked: false,
      xp: 10000,
      progress: 1,
      category: 'Special'
    },

    // Lesson Mastery Achievements
    {
      id: 36,
      title: 'Technical Analyst',
      description: 'Complete all Technical Analysis lessons',
      detailedDescription: 'You\'ve mastered technical analysis! Charts, indicators, and patterns are now tools you can wield with confidence.',
      icon: '📈',
      unlocked: false,
      xp: 500,
      progress: 67,
      category: 'Mastery'
    },
    {
      id: 37,
      title: 'Fundamental Expert',
      description: 'Complete all Fundamental Analysis lessons',
      detailedDescription: 'Understanding financial statements and company valuation is your forte. You can now analyze businesses like a professional.',
      icon: '📊',
      unlocked: false,
      xp: 500,
      progress: 45,
      category: 'Mastery'
    },
    {
      id: 38,
      title: 'Risk Manager',
      description: 'Complete all Risk Management lessons',
      detailedDescription: 'You understand the importance of protecting your capital. Risk management is the foundation of long-term trading success.',
      icon: '🛡️',
      unlocked: false,
      xp: 500,
      progress: 58,
      category: 'Mastery'
    },
    {
      id: 39,
      title: 'Options Trader',
      description: 'Complete all Options Trading lessons',
      detailedDescription: 'Calls, puts, spreads - you understand them all. Options trading is a complex skill you\'ve now mastered.',
      icon: '🎲',
      unlocked: false,
      xp: 600,
      progress: 33,
      category: 'Mastery'
    },
    {
      id: 40,
      title: 'Psychology Master',
      description: 'Complete all Trading Psychology lessons',
      detailedDescription: 'The mind is the most important trading tool. You\'ve learned to control emotions and maintain discipline under pressure.',
      icon: '🧠',
      unlocked: false,
      xp: 500,
      progress: 72,
      category: 'Mastery'
    },
    {
      id: 41,
      title: 'Crypto Specialist',
      description: 'Complete all Cryptocurrency lessons',
      detailedDescription: 'Blockchain, DeFi, and digital assets hold no mysteries for you. You\'re ready for the future of finance.',
      icon: '₿',
      unlocked: false,
      xp: 600,
      progress: 28,
      category: 'Mastery'
    },
    {
      id: 42,
      title: 'Forex Expert',
      description: 'Complete all Forex Trading lessons',
      detailedDescription: 'Currency pairs, pips, and leverage are second nature to you. The largest financial market in the world is your playground.',
      icon: '💱',
      unlocked: false,
      xp: 600,
      progress: 41,
      category: 'Mastery'
    },

    // Speed and Efficiency
    {
      id: 43,
      title: 'Lightning Fast',
      description: 'Complete a lesson in under 3 minutes',
      detailedDescription: 'Incredible speed! You blazed through a lesson in under 3 minutes while maintaining perfect comprehension.',
      icon: '⚡',
      unlocked: false,
      xp: 250,
      progress: 40,
      category: 'Performance'
    },
    {
      id: 44,
      title: 'Marathon Session',
      description: 'Study for 5 hours in a single day',
      detailedDescription: 'Five consecutive hours of focused learning! Your concentration and endurance are remarkable.',
      icon: '🏃‍♂️',
      unlocked: false,
      xp: 600,
      progress: 20,
      category: 'Performance'
    },
    {
      id: 45,
      title: 'Weekend Warrior',
      description: 'Complete 20 lessons over a weekend',
      detailedDescription: 'You dedicated your entire weekend to learning! This kind of intensive study can lead to breakthrough moments.',
      icon: '🎯',
      unlocked: false,
      xp: 700,
      progress: 15,
      category: 'Performance'
    },

    // Win Streaks
    {
      id: 46,
      title: 'Hot Streak',
      description: 'Win 5 games in a row',
      detailedDescription: 'Five consecutive victories! You\'re in the zone and everything is clicking perfectly.',
      icon: '🔥',
      unlocked: false,
      xp: 300,
      progress: 60,
      category: 'Gaming'
    },
    {
      id: 47,
      title: 'Unstoppable Force',
      description: 'Win 10 games in a row',
      detailedDescription: 'Ten straight wins! This level of consistency is extraordinary. You\'re absolutely dominating the competition.',
      icon: '💪',
      unlocked: false,
      xp: 800,
      progress: 30,
      category: 'Gaming'
    },
    {
      id: 48,
      title: 'Godlike',
      description: 'Win 20 games in a row',
      detailedDescription: 'Twenty consecutive victories! This is the stuff of legends. Your skill level is truly godlike.',
      icon: '👑',
      unlocked: false,
      xp: 2000,
      progress: 15,
      category: 'Gaming'
    },

    // Time-based
    {
      id: 49,
      title: 'Year One',
      description: 'Use the platform for 365 days',
      detailedDescription: 'A full year of learning! You\'ve been on an incredible journey and have grown tremendously.',
      icon: '🎂',
      unlocked: false,
      xp: 5000,
      progress: 18,
      category: 'Milestone'
    },
    {
      id: 50,
      title: 'Veteran',
      description: 'Use the platform for 2 years',
      detailedDescription: 'Two years of dedication! You\'re a veteran trader and a pillar of this community.',
      icon: '🏛️',
      unlocked: false,
      xp: 10000,
      progress: 9,
      category: 'Milestone'
    },
    {
      id: 51,
      title: 'Legend',
      description: 'Use the platform for 5 years',
      detailedDescription: 'Five years! You\'ve witnessed the platform\'s evolution and have become a true legend.',
      icon: '🌟',
      unlocked: false,
      xp: 25000,
      progress: 3,
      category: 'Milestone'
    },

    // Rare Achievements
    {
      id: 52,
      title: 'First Blood',
      description: 'Be the first to complete a new lesson',
      detailedDescription: 'You were the very first person to complete a brand new lesson! You\'re a true pioneer and early adopter.',
      icon: '🥇',
      unlocked: false,
      xp: 1000,
      progress: 0,
      category: 'Rare'
    },
    {
      id: 53,
      title: 'Top 10',
      description: 'Reach the top 10 on the global leaderboard',
      detailedDescription: 'Top 10 in the world! You\'re competing at the highest level against thousands of traders.',
      icon: '🏆',
      unlocked: false,
      xp: 5000,
      progress: 8,
      category: 'Rare'
    },
    {
      id: 54,
      title: 'Number One',
      description: 'Reach #1 on the global leaderboard',
      detailedDescription: 'The top spot! You\'re the best trader on the entire platform. This is the ultimate achievement.',
      icon: '👑',
      unlocked: false,
      xp: 10000,
      progress: 2,
      category: 'Rare'
    },
    {
      id: 55,
      title: 'Perfect Month',
      description: 'Complete at least one lesson every day for a month',
      detailedDescription: 'Not a single day missed! A perfect month of learning demonstrates exceptional commitment.',
      icon: '📅',
      unlocked: false,
      xp: 1000,
      progress: 23,
      category: 'Rare'
    },

    // Competition Achievements
    {
      id: 56,
      title: 'Bronze Medalist',
      description: 'Finish in the top 3 of a competition',
      detailedDescription: 'A medal finish! You competed against many and secured a podium position.',
      icon: '🥉',
      unlocked: false,
      xp: 400,
      progress: 75,
      category: 'Competition'
    },
    {
      id: 57,
      title: 'Silver Medalist',
      description: 'Finish 2nd in a competition',
      detailedDescription: 'Second place! So close to the top, but this silver medal is still a tremendous achievement.',
      icon: '🥈',
      unlocked: false,
      xp: 600,
      progress: 50,
      category: 'Competition'
    },
    {
      id: 58,
      title: 'Gold Medalist',
      description: 'Finish 1st in a competition',
      detailedDescription: 'Gold! You were the best competitor and claimed the ultimate prize.',
      icon: '🥇',
      unlocked: false,
      xp: 1000,
      progress: 30,
      category: 'Competition'
    },
    {
      id: 59,
      title: 'Triple Crown',
      description: 'Win three different types of competitions',
      detailedDescription: 'A versatile champion! You\'ve proven your skills across multiple competition formats.',
      icon: '👑',
      unlocked: false,
      xp: 2000,
      progress: 33,
      category: 'Competition'
    },

    // Quiz and Test Achievements
    {
      id: 60,
      title: 'Quiz Master',
      description: 'Score 100% on 25 quizzes',
      detailedDescription: 'Perfect quiz scores, again and again! Your knowledge retention is exceptional.',
      icon: '📝',
      unlocked: false,
      xp: 800,
      progress: 48,
      category: 'Performance'
    },
    {
      id: 61,
      title: 'Test Ace',
      description: 'Pass all certification tests on first try',
      detailedDescription: 'No retakes needed! You passed every certification test on your first attempt.',
      icon: '🎓',
      unlocked: false,
      xp: 1500,
      progress: 62,
      category: 'Performance'
    },
    {
      id: 62,
      title: 'Certified Professional',
      description: 'Earn 5 certifications',
      detailedDescription: 'Five professional certifications! Your credentials speak to your expertise.',
      icon: '📜',
      unlocked: false,
      xp: 2500,
      progress: 40,
      category: 'Mastery'
    },

    // Helping Others
    {
      id: 63,
      title: 'Mentor',
      description: 'Help 10 beginners complete their first lesson',
      detailedDescription: 'You\'ve guided 10 newcomers on their first steps. Your mentorship is invaluable to the community.',
      icon: '🎓',
      unlocked: false,
      xp: 500,
      progress: 30,
      category: 'Social'
    },
    {
      id: 64,
      title: 'Teacher',
      description: 'Create and share 5 study guides',
      detailedDescription: 'Your study guides help others learn more effectively. You\'re giving back to the community in a meaningful way.',
      icon: '📚',
      unlocked: false,
      xp: 600,
      progress: 20,
      category: 'Social'
    },
    {
      id: 65,
      title: 'Ambassador',
      description: 'Refer 25 new users to the platform',
      detailedDescription: 'Twenty-five referrals! You\'re spreading the word and helping the community grow.',
      icon: '🌍',
      unlocked: false,
      xp: 1000,
      progress: 12,
      category: 'Social'
    },

    // Engagement
    {
      id: 66,
      title: 'Commentator',
      description: 'Leave 100 helpful comments on lessons',
      detailedDescription: 'Your insights and feedback help improve the learning experience for everyone.',
      icon: '💬',
      unlocked: false,
      xp: 300,
      progress: 43,
      category: 'Social'
    },
    {
      id: 67,
      title: 'Rating Expert',
      description: 'Rate 50 lessons',
      detailedDescription: 'Your ratings help others discover the best content. Thank you for your contributions!',
      icon: '⭐',
      unlocked: false,
      xp: 200,
      progress: 68,
      category: 'Social'
    },
    {
      id: 68,
      title: 'Discussion Leader',
      description: 'Start 25 discussion threads',
      detailedDescription: 'You spark meaningful conversations that enrich the entire community.',
      icon: '🗣️',
      unlocked: false,
      xp: 400,
      progress: 28,
      category: 'Social'
    },

    // Practice and Simulation
    {
      id: 69,
      title: 'Paper Trader',
      description: 'Execute 100 paper trades',
      detailedDescription: 'Practice makes perfect! You\'ve honed your skills through extensive paper trading.',
      icon: '📄',
      unlocked: false,
      xp: 400,
      progress: 81,
      category: 'Practice'
    },
    {
      id: 70,
      title: 'Simulation Pro',
      description: 'Achieve a 50% return in the trading simulator',
      detailedDescription: 'A 50% simulated return! Your strategy and execution are clearly working.',
      icon: '💹',
      unlocked: false,
      xp: 800,
      progress: 35,
      category: 'Practice'
    },
    {
      id: 71,
      title: 'Risk Master',
      description: 'Complete 50 trades without exceeding 2% risk',
      detailedDescription: 'Disciplined risk management! You never overextended yourself, showing true professionalism.',
      icon: '🎯',
      unlocked: false,
      xp: 1000,
      progress: 46,
      category: 'Practice'
    },

    // Exploration
    {
      id: 72,
      title: 'Explorer',
      description: 'Visit every section of the platform',
      detailedDescription: 'You\'ve explored every corner! You know your way around and can find anything you need.',
      icon: '🗺️',
      unlocked: false,
      xp: 200,
      progress: 88,
      category: 'Special'
    },
    {
      id: 73,
      title: 'Curious Mind',
      description: 'Try all available games at least once',
      detailedDescription: 'Curiosity is the mark of a great learner. You\'ve experienced everything the platform offers.',
      icon: '🔍',
      unlocked: false,
      xp: 300,
      progress: 72,
      category: 'Special'
    },

    // Comeback Achievements
    {
      id: 74,
      title: 'Phoenix',
      description: 'Return after 30 days of inactivity and complete 5 lessons',
      detailedDescription: 'Rising from the ashes! You came back stronger and ready to learn.',
      icon: '🔥',
      unlocked: false,
      xp: 400,
      progress: 0,
      category: 'Special'
    },
    {
      id: 75,
      title: 'Second Wind',
      description: 'Rebuild a broken streak to exceed the previous record',
      detailedDescription: 'You didn\'t let a broken streak stop you. Coming back stronger shows true character.',
      icon: '💨',
      unlocked: false,
      xp: 500,
      progress: 0,
      category: 'Special'
    },

    // Money and Trading
    {
      id: 76,
      title: 'Portfolio Builder',
      description: 'Create a diversified portfolio with 10+ assets',
      detailedDescription: 'Diversification is key to risk management. You\'ve built a well-balanced portfolio.',
      icon: '💼',
      unlocked: false,
      xp: 400,
      progress: 55,
      category: 'Practice'
    },
    {
      id: 77,
      title: 'Dividend Hunter',
      description: 'Collect dividends from 20 different stocks',
      detailedDescription: 'Passive income! You understand the power of dividend-paying investments.',
      icon: '💵',
      unlocked: false,
      xp: 500,
      progress: 25,
      category: 'Practice'
    },
    {
      id: 78,
      title: 'Day Trader',
      description: 'Execute 100 same-day trades in the simulator',
      detailedDescription: 'Fast-paced action! You\'ve mastered the art of day trading through practice.',
      icon: '⚡',
      unlocked: false,
      xp: 600,
      progress: 34,
      category: 'Practice'
    },
    {
      id: 79,
      title: 'Swing Trader',
      description: 'Hold 50 positions for 2-7 days',
      detailedDescription: 'Patience and timing! Swing trading requires a unique skill set you\'ve developed.',
      icon: '🎢',
      unlocked: false,
      xp: 600,
      progress: 42,
      category: 'Practice'
    },
    {
      id: 80,
      title: 'Long-term Investor',
      description: 'Hold a position for 365 days',
      detailedDescription: 'True patience! Long-term investing builds wealth steadily and surely.',
      icon: '🌱',
      unlocked: false,
      xp: 1000,
      progress: 18,
      category: 'Practice'
    },

    // Earnings
    {
      id: 81,
      title: 'First Thousand',
      description: 'Earn your first 1,000 XP',
      detailedDescription: 'Your first thousand XP! This is just the beginning of your journey.',
      icon: '🎖️',
      unlocked: true,
      xp: 100,
      unlockedDate: '3 weeks ago',
      category: 'Milestone'
    },
    {
      id: 82,
      title: 'Five K Club',
      description: 'Earn 5,000 total XP',
      detailedDescription: 'Five thousand XP shows serious commitment to your education and growth.',
      icon: '🏅',
      unlocked: false,
      xp: 500,
      progress: 48,
      category: 'Milestone'
    },
    {
      id: 83,
      title: 'Ten K Master',
      description: 'Earn 10,000 total XP',
      detailedDescription: 'Ten thousand XP! You\'ve put in significant time and effort to reach this milestone.',
      icon: '💎',
      unlocked: false,
      xp: 1000,
      progress: 24,
      category: 'Milestone'
    },
    {
      id: 84,
      title: 'Fifty K Elite',
      description: 'Earn 50,000 total XP',
      detailedDescription: 'Fifty thousand XP places you among the elite. Your dedication is extraordinary.',
      icon: '👑',
      unlocked: false,
      xp: 5000,
      progress: 4,
      category: 'Milestone'
    },
    {
      id: 85,
      title: 'Hundred K Legend',
      description: 'Earn 100,000 total XP',
      detailedDescription: 'One hundred thousand XP! You\'re a legend and an inspiration to others.',
      icon: '🌟',
      unlocked: false,
      xp: 10000,
      progress: 2,
      category: 'Milestone'
    },

    // Seasonal
    {
      id: 86,
      title: 'New Year, New You',
      description: 'Start a new streak on January 1st',
      detailedDescription: 'A fresh start! Beginning your journey on New Year\'s Day shows great motivation.',
      icon: '🎆',
      unlocked: false,
      xp: 200,
      progress: 0,
      category: 'Seasonal'
    },
    {
      id: 87,
      title: 'Summer Scholar',
      description: 'Complete 30 lessons during summer months',
      detailedDescription: 'While others relax, you learn! Your summer dedication sets you apart.',
      icon: '☀️',
      unlocked: false,
      xp: 500,
      progress: 0,
      category: 'Seasonal'
    },
    {
      id: 88,
      title: 'Holiday Hustler',
      description: 'Complete lessons on 5 different holidays',
      detailedDescription: 'Your dedication knows no holidays! This commitment to learning is admirable.',
      icon: '🎄',
      unlocked: false,
      xp: 400,
      progress: 40,
      category: 'Seasonal'
    },

    // Challenge Completions
    {
      id: 89,
      title: 'Challenge Accepted',
      description: 'Complete your first daily challenge',
      detailedDescription: 'You stepped up to the challenge! This is the first of many you\'ll conquer.',
      icon: '✅',
      unlocked: true,
      xp: 50,
      unlockedDate: '1 week ago',
      category: 'Challenge'
    },
    {
      id: 90,
      title: 'Challenge Seeker',
      description: 'Complete 50 daily challenges',
      detailedDescription: 'Fifty challenges completed! You actively seek out opportunities to test yourself.',
      icon: '🎯',
      unlocked: false,
      xp: 800,
      progress: 36,
      category: 'Challenge'
    },
    {
      id: 91,
      title: 'Challenge Champion',
      description: 'Complete 100 daily challenges',
      detailedDescription: 'One hundred challenges! Your consistency and determination are inspiring.',
      icon: '🏆',
      unlocked: false,
      xp: 2000,
      progress: 18,
      category: 'Challenge'
    },
    {
      id: 92,
      title: 'Weekly Winner',
      description: 'Win 10 weekly challenges',
      detailedDescription: 'Ten weekly challenge victories! You compete at the highest level week after week.',
      icon: '📅',
      unlocked: false,
      xp: 1500,
      progress: 20,
      category: 'Challenge'
    },

    // Multi-player
    {
      id: 93,
      title: 'Team Player',
      description: 'Win 5 team competitions',
      detailedDescription: 'A valuable team member! Your contributions helped lead your team to victory.',
      icon: '🤝',
      unlocked: false,
      xp: 600,
      progress: 40,
      category: 'Competition'
    },
    {
      id: 94,
      title: 'Squad Leader',
      description: 'Lead a team to 3 competition victories',
      detailedDescription: 'Leadership under pressure! You guided your team to victory through strategy and encouragement.',
      icon: '⭐',
      unlocked: false,
      xp: 1000,
      progress: 33,
      category: 'Competition'
    },
    {
      id: 95,
      title: 'Rival',
      description: 'Compete against the same person 10 times',
      detailedDescription: 'A rivalry forms! Competing repeatedly against the same opponent sharpens your skills.',
      icon: '⚔️',
      unlocked: false,
      xp: 400,
      progress: 50,
      category: 'Competition'
    },

    // Efficiency
    {
      id: 96,
      title: 'Efficient Learner',
      description: 'Maintain an 80%+ quiz average across 20 lessons',
      detailedDescription: 'Consistently excellent! Your high quiz scores show deep understanding.',
      icon: '📊',
      unlocked: false,
      xp: 600,
      progress: 75,
      category: 'Performance'
    },
    {
      id: 97,
      title: 'Retention Master',
      description: 'Retake and improve scores on 10 old lessons',
      detailedDescription: 'Learning is iterative! Reviewing and improving shows commitment to true mastery.',
      icon: '🔄',
      unlocked: false,
      xp: 500,
      progress: 30,
      category: 'Performance'
    },

    // Content Creation
    {
      id: 98,
      title: 'Content Creator',
      description: 'Share 10 trading strategies with the community',
      detailedDescription: 'Your strategies help others succeed! Content creation enriches the entire community.',
      icon: '✍️',
      unlocked: false,
      xp: 800,
      progress: 20,
      category: 'Social'
    },
    {
      id: 99,
      title: 'Video Producer',
      description: 'Create and upload 5 educational videos',
      detailedDescription: 'Video content is powerful! Your tutorials help visual learners succeed.',
      icon: '🎥',
      unlocked: false,
      xp: 1000,
      progress: 0,
      category: 'Social'
    },
    {
      id: 100,
      title: 'Influencer',
      description: 'Have your content viewed 10,000 times',
      detailedDescription: 'Ten thousand views! Your content resonates with the community and provides real value.',
      icon: '🌟',
      unlocked: false,
      xp: 2000,
      progress: 5,
      category: 'Social'
    },

    // Mathematics & Calculations
    {
      id: 101,
      title: 'Compound Interest Expert',
      description: 'Master compound interest calculations',
      detailedDescription: 'You understand the power of compound interest! This fundamental concept is essential for long-term wealth building. Einstein called it the eighth wonder of the world for good reason.',
      icon: '📈',
      unlocked: false,
      xp: 300,
      progress: 55,
      category: 'Mathematics'
    },
    {
      id: 102,
      title: 'Percentage Pro',
      description: 'Complete all percentage calculation lessons',
      detailedDescription: 'Percentages are the language of finance. From returns to risk, you can now calculate and interpret them fluently.',
      icon: '💯',
      unlocked: false,
      xp: 250,
      progress: 70,
      category: 'Mathematics'
    },
    {
      id: 103,
      title: 'Ratio Master',
      description: 'Learn all financial ratio analysis techniques',
      detailedDescription: 'P/E ratios, debt-to-equity, current ratios - you can analyze any company using these powerful tools.',
      icon: '⚖️',
      unlocked: false,
      xp: 400,
      progress: 48,
      category: 'Mathematics'
    },
    {
      id: 104,
      title: 'Probability Genius',
      description: 'Master probability and expected value',
      detailedDescription: 'Understanding probability gives you an edge in trading. You can now calculate odds and expected outcomes like a professional.',
      icon: '🎲',
      unlocked: false,
      xp: 500,
      progress: 35,
      category: 'Mathematics'
    },
    {
      id: 105,
      title: 'Statistics Scholar',
      description: 'Complete all statistics lessons',
      detailedDescription: 'Standard deviation, correlation, regression - statistical analysis is now part of your toolkit for understanding markets.',
      icon: '📊',
      unlocked: false,
      xp: 600,
      progress: 42,
      category: 'Mathematics'
    },
    {
      id: 106,
      title: 'Exponential Thinker',
      description: 'Understand exponential growth and decay',
      detailedDescription: 'Exponential functions govern everything from viral growth to radioactive decay. You now think in exponentials.',
      icon: '📈',
      unlocked: false,
      xp: 350,
      progress: 58,
      category: 'Mathematics'
    },
    {
      id: 107,
      title: 'Present Value Expert',
      description: 'Master time value of money calculations',
      detailedDescription: 'Money today is worth more than money tomorrow. You can now discount future cash flows and make informed investment decisions.',
      icon: '💰',
      unlocked: false,
      xp: 450,
      progress: 52,
      category: 'Mathematics'
    },
    {
      id: 108,
      title: 'Annuity Analyst',
      description: 'Learn annuity and perpetuity calculations',
      detailedDescription: 'From pension payments to dividend stocks, you can now value any stream of regular payments.',
      icon: '💳',
      unlocked: false,
      xp: 400,
      progress: 38,
      category: 'Mathematics'
    },
    {
      id: 109,
      title: 'Logarithm Legend',
      description: 'Master logarithmic scales and calculations',
      detailedDescription: 'Logarithms help you understand compounding, growth rates, and scale. You can now interpret log charts with ease.',
      icon: '📉',
      unlocked: false,
      xp: 350,
      progress: 28,
      category: 'Mathematics'
    },
    {
      id: 110,
      title: 'Volatility Calculator',
      description: 'Learn to calculate and interpret volatility',
      detailedDescription: 'Volatility measures risk and opportunity. You can now quantify market uncertainty using mathematical precision.',
      icon: '📊',
      unlocked: false,
      xp: 500,
      progress: 44,
      category: 'Mathematics'
    },

    // Trading Strategies
    {
      id: 111,
      title: 'Momentum Master',
      description: 'Learn momentum trading strategies',
      detailedDescription: 'The trend is your friend! You\'ve mastered the art of riding market momentum for profit.',
      icon: '🚀',
      unlocked: false,
      xp: 500,
      progress: 62,
      category: 'Strategy'
    },
    {
      id: 112,
      title: 'Mean Reversion Expert',
      description: 'Master mean reversion strategies',
      detailedDescription: 'What goes up must come down, and vice versa. You understand how to profit from markets returning to their average.',
      icon: '🔄',
      unlocked: false,
      xp: 500,
      progress: 48,
      category: 'Strategy'
    },
    {
      id: 113,
      title: 'Breakout Specialist',
      description: 'Learn breakout trading techniques',
      detailedDescription: 'You can identify when price breaks through resistance and capitalize on explosive moves.',
      icon: '💥',
      unlocked: false,
      xp: 450,
      progress: 55,
      category: 'Strategy'
    },
    {
      id: 114,
      title: 'Range Trader',
      description: 'Master range-bound trading strategies',
      detailedDescription: 'Not all markets trend. You can now profit from sideways markets by trading the range.',
      icon: '↔️',
      unlocked: false,
      xp: 450,
      progress: 41,
      category: 'Strategy'
    },
    {
      id: 115,
      title: 'Arbitrage Expert',
      description: 'Understand arbitrage opportunities',
      detailedDescription: 'You can spot price discrepancies across markets and profit from inefficiencies.',
      icon: '🔀',
      unlocked: false,
      xp: 600,
      progress: 32,
      category: 'Strategy'
    },
    {
      id: 116,
      title: 'Contrarian Thinker',
      description: 'Learn contrarian trading strategies',
      detailedDescription: 'When others are fearful, be greedy. You understand how to profit by going against the crowd.',
      icon: '🎭',
      unlocked: false,
      xp: 550,
      progress: 36,
      category: 'Strategy'
    },
    {
      id: 117,
      title: 'Pairs Trader',
      description: 'Master pairs trading techniques',
      detailedDescription: 'You can identify correlated assets and profit from their relative movements.',
      icon: '👯',
      unlocked: false,
      xp: 600,
      progress: 25,
      category: 'Strategy'
    },
    {
      id: 118,
      title: 'Event-Driven Specialist',
      description: 'Learn to trade around major events',
      detailedDescription: 'Earnings, mergers, economic reports - you know how to position yourself around market-moving events.',
      icon: '📰',
      unlocked: false,
      xp: 550,
      progress: 44,
      category: 'Strategy'
    },
    {
      id: 119,
      title: 'Scalping Expert',
      description: 'Master ultra-short-term trading',
      detailedDescription: 'Quick in, quick out. You\'ve learned to profit from tiny price movements with precision timing.',
      icon: '⚡',
      unlocked: false,
      xp: 500,
      progress: 38,
      category: 'Strategy'
    },
    {
      id: 120,
      title: 'Position Sizing Pro',
      description: 'Master position sizing techniques',
      detailedDescription: 'You know exactly how much to risk on each trade based on your account size and risk tolerance.',
      icon: '📏',
      unlocked: false,
      xp: 450,
      progress: 67,
      category: 'Strategy'
    },

    // Technical Indicators
    {
      id: 121,
      title: 'Moving Average Master',
      description: 'Learn all moving average strategies',
      detailedDescription: 'Simple, exponential, weighted - you understand how to use moving averages to identify trends and support/resistance.',
      icon: '📉',
      unlocked: false,
      xp: 350,
      progress: 72,
      category: 'Technical'
    },
    {
      id: 122,
      title: 'RSI Expert',
      description: 'Master the Relative Strength Index',
      detailedDescription: 'You can identify overbought and oversold conditions, and spot divergences that signal reversals.',
      icon: '📊',
      unlocked: false,
      xp: 400,
      progress: 58,
      category: 'Technical'
    },
    {
      id: 123,
      title: 'MACD Specialist',
      description: 'Master MACD indicator analysis',
      detailedDescription: 'Moving Average Convergence Divergence is a powerful tool you now wield with confidence.',
      icon: '📈',
      unlocked: false,
      xp: 400,
      progress: 51,
      category: 'Technical'
    },
    {
      id: 124,
      title: 'Bollinger Band Pro',
      description: 'Learn Bollinger Band strategies',
      detailedDescription: 'Volatility bands help you identify squeeze patterns and potential breakouts. You\'ve mastered this versatile tool.',
      icon: '🎚️',
      unlocked: false,
      xp: 400,
      progress: 46,
      category: 'Technical'
    },
    {
      id: 125,
      title: 'Fibonacci Trader',
      description: 'Master Fibonacci retracement and extension',
      detailedDescription: 'The golden ratio appears throughout markets. You can now use Fibonacci levels to predict support and resistance.',
      icon: '🌀',
      unlocked: false,
      xp: 450,
      progress: 39,
      category: 'Technical'
    },
    {
      id: 126,
      title: 'Volume Analysis Expert',
      description: 'Learn to analyze trading volume',
      detailedDescription: 'Volume confirms price action. You can now read the strength behind every move.',
      icon: '📊',
      unlocked: false,
      xp: 400,
      progress: 63,
      category: 'Technical'
    },
    {
      id: 127,
      title: 'Stochastic Master',
      description: 'Master stochastic oscillator',
      detailedDescription: 'You understand momentum and can identify potential reversal points using this powerful oscillator.',
      icon: '〰️',
      unlocked: false,
      xp: 400,
      progress: 42,
      category: 'Technical'
    },
    {
      id: 128,
      title: 'Ichimoku Cloud Expert',
      description: 'Learn Ichimoku cloud analysis',
      detailedDescription: 'This comprehensive indicator system reveals trend, momentum, and support/resistance at a glance.',
      icon: '☁️',
      unlocked: false,
      xp: 600,
      progress: 28,
      category: 'Technical'
    },

    // Chart Patterns
    {
      id: 129,
      title: 'Head and Shoulders Spotter',
      description: 'Master head and shoulders patterns',
      detailedDescription: 'You can identify this classic reversal pattern and profit from major trend changes.',
      icon: '👤',
      unlocked: false,
      xp: 350,
      progress: 56,
      category: 'Patterns'
    },
    {
      id: 130,
      title: 'Triangle Expert',
      description: 'Learn all triangle pattern formations',
      detailedDescription: 'Ascending, descending, symmetrical - you recognize triangles and know how to trade their breakouts.',
      icon: '🔺',
      unlocked: false,
      xp: 400,
      progress: 61,
      category: 'Patterns'
    },
    {
      id: 131,
      title: 'Double Top/Bottom Pro',
      description: 'Master double top and bottom patterns',
      detailedDescription: 'These powerful reversal patterns signal major trend changes. You spot them with ease.',
      icon: 'Ⓜ️',
      unlocked: false,
      xp: 350,
      progress: 53,
      category: 'Patterns'
    },
    {
      id: 132,
      title: 'Flag and Pennant Trader',
      description: 'Learn continuation patterns',
      detailedDescription: 'Flags and pennants signal trend continuation. You know when to jump back into a strong move.',
      icon: '🚩',
      unlocked: false,
      xp: 400,
      progress: 48,
      category: 'Patterns'
    },
    {
      id: 133,
      title: 'Candlestick Master',
      description: 'Master Japanese candlestick patterns',
      detailedDescription: 'Doji, hammer, engulfing - candlestick patterns reveal market psychology. You read them fluently.',
      icon: '🕯️',
      unlocked: false,
      xp: 500,
      progress: 68,
      category: 'Patterns'
    },
    {
      id: 134,
      title: 'Cup and Handle Specialist',
      description: 'Learn cup and handle patterns',
      detailedDescription: 'This bullish continuation pattern signals strong upside potential. You can identify it early.',
      icon: '☕',
      unlocked: false,
      xp: 350,
      progress: 44,
      category: 'Patterns'
    },
    {
      id: 135,
      title: 'Wedge Pattern Expert',
      description: 'Master rising and falling wedges',
      detailedDescription: 'Wedges signal potential reversals. You understand their implications and how to trade them.',
      icon: '📐',
      unlocked: false,
      xp: 400,
      progress: 37,
      category: 'Patterns'
    },

    // Economic Concepts
    {
      id: 136,
      title: 'Inflation Expert',
      description: 'Understand inflation and its market impact',
      detailedDescription: 'Inflation affects every asset class. You grasp how rising prices influence investment decisions.',
      icon: '💸',
      unlocked: false,
      xp: 400,
      progress: 71,
      category: 'Economics'
    },
    {
      id: 137,
      title: 'Interest Rate Master',
      description: 'Learn how interest rates drive markets',
      detailedDescription: 'Central bank policy shapes the investment landscape. You understand the far-reaching effects of rate changes.',
      icon: '🏦',
      unlocked: false,
      xp: 450,
      progress: 64,
      category: 'Economics'
    },
    {
      id: 138,
      title: 'GDP Analyst',
      description: 'Master GDP analysis and interpretation',
      detailedDescription: 'Gross Domestic Product measures economic health. You can analyze GDP data and its market implications.',
      icon: '📊',
      unlocked: false,
      xp: 400,
      progress: 52,
      category: 'Economics'
    },
    {
      id: 139,
      title: 'Employment Data Expert',
      description: 'Learn to interpret employment reports',
      detailedDescription: 'Jobs data moves markets. You understand unemployment rates, NFP, and their broader implications.',
      icon: '👷',
      unlocked: false,
      xp: 350,
      progress: 58,
      category: 'Economics'
    },
    {
      id: 140,
      title: 'Business Cycle Scholar',
      description: 'Master business cycle analysis',
      detailedDescription: 'Expansion, peak, contraction, trough - you understand where we are in the cycle and how to position accordingly.',
      icon: '🔄',
      unlocked: false,
      xp: 500,
      progress: 45,
      category: 'Economics'
    },
    {
      id: 141,
      title: 'Supply and Demand Expert',
      description: 'Master supply and demand principles',
      detailedDescription: 'The fundamental force driving all prices. You understand how supply and demand create market equilibrium.',
      icon: '⚖️',
      unlocked: false,
      xp: 350,
      progress: 77,
      category: 'Economics'
    },
    {
      id: 142,
      title: 'Market Efficiency Scholar',
      description: 'Learn efficient market hypothesis',
      detailedDescription: 'You understand market efficiency theories and their implications for active vs passive investing.',
      icon: '🎯',
      unlocked: false,
      xp: 400,
      progress: 41,
      category: 'Economics'
    },

    // Advanced Topics
    {
      id: 143,
      title: 'Derivatives Master',
      description: 'Master derivatives and their applications',
      detailedDescription: 'Futures, options, swaps - you understand these powerful instruments and how to use them strategically.',
      icon: '📜',
      unlocked: false,
      xp: 700,
      progress: 31,
      category: 'Advanced'
    },
    {
      id: 144,
      title: 'Portfolio Theory Expert',
      description: 'Master modern portfolio theory',
      detailedDescription: 'Efficient frontier, Sharpe ratio, optimal allocation - you can construct theoretically perfect portfolios.',
      icon: '📊',
      unlocked: false,
      xp: 600,
      progress: 38,
      category: 'Advanced'
    },
    {
      id: 145,
      title: 'Black-Scholes Scholar',
      description: 'Learn options pricing models',
      detailedDescription: 'The Black-Scholes model revolutionized options trading. You understand how options are priced mathematically.',
      icon: '🧮',
      unlocked: false,
      xp: 800,
      progress: 22,
      category: 'Advanced'
    },
    {
      id: 146,
      title: 'Greeks Master',
      description: 'Master option Greeks (Delta, Gamma, Theta, Vega)',
      detailedDescription: 'Delta, Gamma, Theta, Vega, Rho - you understand how options respond to market changes.',
      icon: 'Ω',
      unlocked: false,
      xp: 700,
      progress: 27,
      category: 'Advanced'
    },
    {
      id: 147,
      title: 'Algorithmic Trading Scholar',
      description: 'Learn algorithmic trading concepts',
      detailedDescription: 'You understand how algorithms trade markets and the basic principles of automated strategies.',
      icon: '🤖',
      unlocked: false,
      xp: 700,
      progress: 34,
      category: 'Advanced'
    },
    {
      id: 148,
      title: 'Market Microstructure Expert',
      description: 'Master market microstructure',
      detailedDescription: 'Order flow, bid-ask spreads, market makers - you understand the mechanics of how markets actually function.',
      icon: '🔬',
      unlocked: false,
      xp: 600,
      progress: 29,
      category: 'Advanced'
    },
    {
      id: 149,
      title: 'Quantitative Analyst',
      description: 'Master quantitative analysis techniques',
      detailedDescription: 'You can apply mathematical and statistical methods to analyze markets like a quant.',
      icon: '🔢',
      unlocked: false,
      xp: 800,
      progress: 24,
      category: 'Advanced'
    },
    {
      id: 150,
      title: 'Complete Scholar',
      description: 'Complete every single lesson on the platform',
      detailedDescription: 'Ultimate dedication! You\'ve completed every lesson available. Your knowledge is comprehensive and your commitment is unmatched. You are a true master of finance and trading.',
      icon: '🎓',
      unlocked: false,
      xp: 10000,
      progress: 15,
      category: 'Ultimate'
    },
  ];

  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const lockedAchievements = achievements.filter(a => !a.unlocked);
  const totalXP = unlockedAchievements.reduce((sum, a) => sum + a.xp, 0);

  return (
    <div className="min-h-screen p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Achievements</h1>
        <p className="text-gray-400">Track your progress and unlock rewards</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="gradient" padding="lg">
          <div className="space-y-2">
            <p className="text-white/60 text-sm">Achievements Unlocked</p>
            <p className="text-4xl font-bold text-white">{unlockedAchievements.length}/{achievements.length}</p>
            <p className="text-xs text-green-300">{Math.round((unlockedAchievements.length / achievements.length) * 100)}% complete</p>
          </div>
        </Card>

        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Total XP Earned</p>
            <p className="text-4xl font-bold text-white">{totalXP.toLocaleString()}</p>
            <p className="text-xs text-gray-500">From achievements</p>
          </div>
        </Card>

        <Card variant="elevated" padding="lg">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Latest Achievement</p>
            <p className="text-2xl font-bold text-white">{unlockedAchievements[0]?.title}</p>
            <p className="text-xs text-gray-500">{unlockedAchievements[0]?.unlockedDate}</p>
          </div>
        </Card>
      </div>

      {/* Unlocked Achievements */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Unlocked Achievements</h2>
          <span className="text-gray-400 text-sm">{unlockedAchievements.length} earned</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {unlockedAchievements.map((achievement) => (
            <button
              key={achievement.id}
              onClick={() => setSelectedAchievement(achievement)}
              className="text-left"
            >
              <Card variant="elevated" padding="lg" hover>
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="text-5xl">{achievement.icon}</div>
                    <div className="px-3 py-1 bg-green-500/20 rounded-full">
                      <span className="text-green-300 text-xs font-semibold">+{achievement.xp} XP</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">Unlocked {achievement.unlockedDate}</p>
                      <span className="text-xs text-purple-400 font-medium">{achievement.category}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </button>
          ))}
        </div>
      </div>

      {/* Locked Achievements */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D0F14] pointer-events-none h-32 -top-8"></div>
        <div className="pt-8 border-t-2 border-[#2D3139]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-500">Locked Achievements</h2>
            <span className="text-gray-600 text-sm">{lockedAchievements.length} remaining</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lockedAchievements.map((achievement) => (
              <Card key={achievement.id} variant="bordered" padding="lg">
                <div className="space-y-3 opacity-40">
                  <div className="flex items-start justify-between">
                    <div className="text-5xl grayscale">{achievement.icon}</div>
                    <div className="px-3 py-1 bg-gray-500/20 rounded-full">
                      <span className="text-gray-400 text-xs font-semibold">+{achievement.xp} XP</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600">{achievement.category}</span>
                    </div>
                    {achievement.progress !== undefined && (
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Progress</span>
                          <span className="text-gray-400">{achievement.progress}%</span>
                        </div>
                        <div className="h-2 bg-[#1C2028] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-primary rounded-full transition-all duration-300"
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="bg-[#21252E] border border-[#2D3139] rounded-2xl max-w-2xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#1C2028] transition-colors"
            >
              ×
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="text-8xl">{selectedAchievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold text-white">{selectedAchievement.title}</h2>
                    <div className="px-4 py-1.5 bg-green-500/20 rounded-full">
                      <span className="text-green-300 text-sm font-semibold">+{selectedAchievement.xp} XP</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-2">{selectedAchievement.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full font-medium">
                      {selectedAchievement.category}
                    </span>
                    {selectedAchievement.unlocked && (
                      <span className="text-gray-500">Unlocked {selectedAchievement.unlockedDate}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-[#2D3139] pt-6">
                <h3 className="text-lg font-semibold text-white mb-3">Achievement Details</h3>
                <p className="text-gray-300 leading-relaxed">{selectedAchievement.detailedDescription}</p>
              </div>

              {selectedAchievement.unlocked && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-green-300">
                    <span className="text-2xl">✓</span>
                    <span className="font-semibold">Achievement Unlocked!</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
