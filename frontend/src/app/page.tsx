'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Home() {
  const [count, setCount] = useState(0);
  const [portfolioValue, setPortfolioValue] = useState(0);

  // Animated counter effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < 10000) setCount(prev => Math.min(prev + 342, 10000));
      if (portfolioValue < 2000000) setPortfolioValue(prev => Math.min(prev + 68342, 2000000));
    }, 50);
    return () => clearTimeout(timer);
  }, [count, portfolioValue]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Clean and Focused */}
      <section className="px-8 py-32 max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Value Proposition */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Learn to invest like a
              <span className="block text-gradient-primary">quant.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Master portfolio analysis, risk management, and financial modeling through
              interactive lessons and real-time simulations
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center pt-4">
            <Link href="/dashboard">
              <Button variant="primary" size="lg">
                Start Learning — Free
              </Button>
            </Link>
            <Link href="/plans">
              <Button variant="outline" size="lg">
                Go Premium
              </Button>
            </Link>
          </div>

          {/* Live Stats Counter */}
          <div className="pt-20 pb-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="space-y-1">
              <p className="text-4xl font-bold text-gradient-primary font-numeric">
                {count.toLocaleString()}+
              </p>
              <p className="text-sm text-gray-500">Active Learners</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold text-gradient-primary font-numeric">
                £{(portfolioValue / 1000000).toFixed(1)}M+
              </p>
              <p className="text-sm text-gray-500">Assets Managed</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold text-gradient-primary font-numeric">500+</p>
              <p className="text-sm text-gray-500">Lessons</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <Card variant="elevated" padding="none">
          <div className="grid md:grid-cols-2">
            {/* Left: Chart/Visual */}
            <div className="p-8 bg-[#151921] border-r border-[#2D3139]">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm text-gray-500 uppercase tracking-wide">Portfolio Simulation</h3>
                  <p className="text-3xl font-bold text-white font-numeric">£24,532.48</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold">
                      +5.34%
                    </span>
                    <span className="text-sm text-gray-400">Today</span>
                  </div>
                </div>

                {/* Mock Chart */}
                <div className="h-48 bg-[#0B0E13] rounded-xl p-4 relative overflow-hidden">
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                    {[30, 45, 60, 55, 70, 65, 80, 75, 90, 85, 95].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-primary rounded-t transition-all duration-300 hover:opacity-80"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-500">ROI</p>
                    <p className="text-lg font-bold text-green-400 font-numeric">+18.4%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Sharpe</p>
                    <p className="text-lg font-bold text-white font-numeric">1.84</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Risk</p>
                    <p className="text-lg font-bold text-yellow-400">Medium</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Explanation */}
            <div className="p-8 flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Visualize your portfolio in real-time
              </h3>
              <p className="text-gray-400 leading-relaxed">
                See how your investments perform with interactive charts, risk metrics, and
                Monte Carlo simulations. Make data-driven decisions with confidence.
              </p>
              <Link href="/dashboard">
                <Button variant="ghost">
                  Explore Dashboard →
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* Learning Paths - Clean Icons */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">
            Choose your learning path
          </h2>
          <p className="text-xl text-gray-400">
            From beginner fundamentals to advanced quantitative finance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Beginner Path */}
          <Card variant="default" hover>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Beginner</h3>
                <p className="text-gray-400 text-sm">
                  Compound interest, budgeting, and basic portfolio concepts
                </p>
              </div>
              <div className="pt-2">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Topics include:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#151921] text-gray-400 text-xs">
                    Compound Interest
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#151921] text-gray-400 text-xs">
                    Budgeting
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#151921] text-gray-400 text-xs">
                    Risk Basics
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Intermediate Path */}
          <Card variant="default" hover>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Intermediate</h3>
                <p className="text-gray-400 text-sm">
                  Portfolio theory, asset allocation, and technical analysis
                </p>
              </div>
              <div className="pt-2">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Topics include:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#151921] text-gray-400 text-xs">
                    MPT
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#151921] text-gray-400 text-xs">
                    CAPM
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#151921] text-gray-400 text-xs">
                    Beta & Alpha
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Advanced Path */}
          <Card variant="default" hover>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Advanced</h3>
                <p className="text-gray-400 text-sm">
                  Stochastic calculus, derivatives, and algorithmic trading
                </p>
              </div>
              <div className="pt-2">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Topics include:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#151921] text-gray-400 text-xs">
                    Black-Scholes
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#151921] text-gray-400 text-xs">
                    Monte Carlo
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#151921] text-gray-400 text-xs">
                    Quant Models
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-8 py-24 bg-[#151921]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by investors worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary"></div>
                  <div>
                    <p className="font-semibold text-white">Sarah Chen</p>
                    <p className="text-sm text-gray-500">Portfolio Manager</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  &quot;AppDev transformed how I analyze risk. The Monte Carlo simulations helped me
                  optimize my portfolio and achieve a 23% better risk-adjusted return.&quot;
                </p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Portfolio Growth</p>
                    <p className="text-green-400 font-bold font-numeric">+32%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Time Saved</p>
                    <p className="text-purple-400 font-bold">15 hrs/week</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-secondary"></div>
                  <div>
                    <p className="font-semibold text-white">Marcus Johnson</p>
                    <p className="text-sm text-gray-500">Retail Investor</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  &quot;I went from knowing nothing about finance to building a diversified portfolio.
                  The interactive lessons made complex topics actually enjoyable to learn.&quot;
                </p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Lessons Completed</p>
                    <p className="text-purple-400 font-bold font-numeric">127</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Confidence Level</p>
                    <p className="text-green-400 font-bold">High</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-32 max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-white">
            Start learning today
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join 10,000+ investors improving their financial intelligence every day
          </p>
          <div className="flex gap-4 justify-center pt-6">
            <Link href="/dashboard">
              <Button variant="primary" size="lg">
                Start Free
              </Button>
            </Link>
            <Link href="/plans">
              <Button variant="secondary" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            Free tier includes 50+ lessons • Premium unlocks everything
          </p>
        </div>
      </section>
    </div>
  );
}