'use client';

import { useEffect, useState } from 'react';
import { planService } from '@/lib/services/planService';
import { Plan } from '@/types/api';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function PlansPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    planService.getAll()
      .then(setPlans)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-12">Loading plans...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Subscription Plans</h1>
      <p className="text-gray-600 mb-8">Choose the plan that works best for you.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id}>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">
              £{plan.priceMonthly.toFixed(2)}<span className="text-sm text-gray-600">/month</span>
            </p>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <p className="text-sm text-gray-500 mb-6">
              Max users: {plan.maxUsers}
            </p>
            <Button variant="primary" className="w-full">
              Select Plan
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}