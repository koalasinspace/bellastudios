'use client';

import { useAuth } from '@/lib/firebase/auth';

export default function DeveloperPage() {
  const { user, role } = useAuth();

  if (!user) {
    return <div>Redirecting...</div>;
  }

  const isDeveloper = role === 'developer';

  if (!isDeveloper) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="text-white text-center">
          <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
          <p>You do not have permission to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Developer Portal</h1>
      <p>Welcome, {user.email}!</p>
      {/* Developer-specific content will go here */}
    </div>
  );
}
