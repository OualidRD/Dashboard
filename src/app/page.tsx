'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

export default function Home() {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded) {
      if (user) {
        router.push('/dashboard/agencies');
      } else {
        router.push('/sign-in');
      }
    }
  }, [isLoaded, user, router]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <p>Redirecting...</p>
    </div>
  );
}
