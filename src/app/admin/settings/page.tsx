'use client';

import { DashboardLayout } from '@/components/ui/ZeroUI';

export default function SettingsPage() {
  return (
    <DashboardLayout role="ADMIN" user="TyCorp" onLogout={() => {}}>
      <h1 className="text-2xl font-bold text-white">Settings</h1>
       <p className="text-sm text-[#a1a1a1]">Settings page placeholder.</p>
    </DashboardLayout>
  );
}