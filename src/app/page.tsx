'use client';

import React from 'react';
import UserActivity from '@/components/dashboard/UserActivity';
import SurveyStatus from '@/components/dashboard/SurveyStatus';

const UserDashboard = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Your Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UserActivity />
        <SurveyStatus />
      </div>
    </div>
  );
};

export default UserDashboard;
