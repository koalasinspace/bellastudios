'use client';

import { DashboardLayout } from '@/components/ui/ZeroUI';

export default function MessagesPage() {
  return (
    <DashboardLayout role="ADMIN" user="TyCorp" onLogout={() => {}}>
      <h1 className="text-2xl font-bold text-white">Messages</h1>
      <p className="text-sm text-[#a1a1a1]">This is where you will find the messaging system between registered users and agents.</p>
    </DashboardLayout>
  );
}