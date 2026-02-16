'use client';

import React from 'react';
import StatCard from '@/components/dashboard/StatCard';
import CommitHistoryChart from '@/components/dashboard/CommitHistoryChart';
import RecentActivityFeed from '@/components/dashboard/RecentActivityFeed';
import { GitCommit, Code, AlertTriangle, Users } from 'lucide-react';

const DevDashboard = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Developer Dashboard</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Commits" value="142" icon={GitCommit} color="#34D399" />
        <StatCard title="Lines of Code" value="24.5k" icon={Code} color="#60A5FA" />
        <StatCard title="Open Issues" value="7" icon={AlertTriangle} color="#FBBF24" />
        <StatCard title="Active Users" value="3" icon={Users} color="#A78BFA" />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CommitHistoryChart />
        </div>
        <div>
          <RecentActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default DevDashboard;

