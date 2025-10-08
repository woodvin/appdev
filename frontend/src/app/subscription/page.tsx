'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const tiers = [
    {
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for getting started',
      features: [
        'Access to beginner lessons',
        'Basic market analysis tools',
        'Community forum access',
        'Progress tracking',
        'Limited game modes',
        'Basic achievements',
      ],
      limitations: [
        'No advanced lessons',
        'Limited competitions',
        'Standard support',
      ],
      cta: 'Current Plan',
      highlighted: false,
      color: 'gray',
    },
    {
      name: 'Pro',
      price: { monthly: 2.49, yearly: 27.50 },
      description: 'For serious learners',
      features: [
        'Everything in Free',
        'Access to intermediate & advanced lessons',
        'Priority competition entry',
        'Advanced analytics dashboard',
        'Unlimited game modes',
        'Pro achievements & badges',
        'Ad-free experience',
        'Priority support',
      ],
      limitations: [],
      cta: 'Upgrade to Pro',
      highlighted: true,
      color: 'purple',
      badge: 'Most Popular',
    },
    {
      name: 'Elite',
      price: { monthly: 7.49, yearly: 80 },
      description: 'The ultimate finance mastery',
      features: [
        'Everything in Pro',
        'Exclusive elite-only content',
        'Personal learning path customization',
        'Live market simulations',
        'Expert mentorship sessions (monthly)',
        'Elite-only competitions with prizes',
        'Advanced portfolio tools',
        'API access for automation',
        'Premium achievement collection',
        'VIP support & early access',
      ],
      limitations: [],
      cta: 'Go Elite',
      highlighted: false,
      color: 'gold',
      badge: 'Best Value',
    },
  ];

  const getYearlySavings = (monthly: number, yearly: number) => {
    if (monthly === 0) return 0;
    const monthlyCost = monthly * 12;
    return Math.round(((monthlyCost - yearly) / monthlyCost) * 100);
  };

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Choose Your Path to <span className="text-gradient-primary">Financial Mastery</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Unlock premium content, advanced tools, and exclusive features
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center gap-4 bg-[#151921] p-2 rounded-xl border border-[#2D3139]">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              billingCycle === 'monthly'
                ? 'bg-gradient-primary text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all relative ${
              billingCycle === 'yearly'
                ? 'bg-gradient-primary text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Yearly
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
              Save 11%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {tiers.map((tier) => {
          const price = billingCycle === 'monthly' ? tier.price.monthly : tier.price.yearly;
          const savings = getYearlySavings(tier.price.monthly, tier.price.yearly);

          return (
            <div
              key={tier.name}
              className={`relative ${tier.highlighted ? 'md:-mt-4 md:mb-4' : ''} group`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="bg-gradient-primary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {tier.badge}
                  </span>
                </div>
              )}

              <Card
                variant={tier.highlighted ? 'gradient' : 'elevated'}
                padding="lg"
                className={`h-full ${tier.highlighted ? 'border-2 border-purple-500/50' : ''} transition-all duration-300 hover:scale-105 hover:shadow-2xl ${tier.highlighted ? 'hover:shadow-purple-500/30' : 'hover:shadow-purple-500/20'} cursor-pointer`}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className={`text-sm ${tier.highlighted ? 'text-white/90' : 'text-gray-400'}`}>{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center py-4">
                    <div className="flex items-start justify-center gap-1">
                      <span className={`text-2xl mt-2 ${tier.highlighted ? 'text-white/80' : 'text-gray-400'}`}>£</span>
                      <span className="text-6xl font-bold text-white">
                        {price === 0 ? '0' : price.toFixed(2).split('.')[0]}
                      </span>
                      {price > 0 && (
                        <span className={`text-2xl mt-2 ${tier.highlighted ? 'text-white/80' : 'text-gray-400'}`}>
                          .{price.toFixed(2).split('.')[1]}
                        </span>
                      )}
                    </div>
                    <p className={`mt-2 ${tier.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                      {price === 0 ? 'Forever free' : `per ${billingCycle === 'monthly' ? 'month' : 'year'}`}
                    </p>
                    {billingCycle === 'yearly' && savings > 0 && (
                      <p className="text-green-400 text-sm font-semibold mt-1">
                        Save {savings}% annually
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={tier.highlighted ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>

                  {/* Features */}
                  <div className={`space-y-3 pt-4 border-t ${tier.highlighted ? 'border-white/20' : 'border-[#2D3139]'}`}>
                    {tier.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                        <span className={`text-sm ${tier.highlighted ? 'text-white/90' : 'text-gray-300'}`}>{feature}</span>
                      </div>
                    ))}
                    {tier.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-gray-600 mt-0.5 flex-shrink-0">✗</span>
                        <span className="text-gray-500 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Can I switch plans anytime?',
              a: 'Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of your next billing cycle.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal for your convenience.',
            },
            {
              q: 'What happens to my progress if I downgrade?',
              a: 'Your progress is always saved. If you downgrade, you\'ll retain access to content available in your new tier, and your progress in premium content will be preserved if you upgrade again.',
            },
            {
              q: 'How do I cancel my subscription?',
              a: 'You can cancel anytime from your account settings. Your access will continue until the end of your current billing period.',
            },
          ].map((faq, index) => (
            <Card key={index} variant="elevated" padding="lg" hover>
              <details className="cursor-pointer group">
                <summary className="flex items-center justify-between text-white font-semibold list-none">
                  <span>{faq.q}</span>
                  <span className="text-purple-400 group-open:rotate-180 transition-transform ml-4">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            </Card>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="flex flex-wrap justify-center gap-8 items-center text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span className="text-sm font-medium">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span className="text-sm font-medium">Cancel Anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌟</span>
            <span className="text-sm font-medium">10K+ Happy Users</span>
          </div>
        </div>
      </div>
    </div>
  );
}
