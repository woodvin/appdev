'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PlansPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/subscription');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-400">Redirecting to subscription page...</p>
    </div>
  );
}
