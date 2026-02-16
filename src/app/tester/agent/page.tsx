'use client';

import { DashboardLayout } from '@/components/ui/ZeroUI';

export default function TesterAgentPage() {
  return (
    <DashboardLayout role="TESTER" user="GUEST" onLogout={() => {}}>
      <h1 className="text-2xl font-bold text-white">Tester Agent</h1>
      <p className="text-sm text-[#a1a1a1]">This is where the tester agent will assist testers and poll for product feedback.</p>
    </DashboardLayout>
  );
}