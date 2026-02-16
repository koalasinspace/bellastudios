'use client';

import React, { useState } from 'react';
import TabButton from '@/components/dashboard/TabButton';
import UserManagement from '@/components/dashboard/UserManagement';
import AgentManagement from '@/components/dashboard/AgentManagement';
import SurveyManagement from '@/components/dashboard/SurveyManagement';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UserManagement />;
      case 'agents':
        return <AgentManagement />;
      case 'surveys':
        return <SurveyManagement />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Admin Control Center</h1>
      
      <div className="flex border-b border-white/20 mb-6">
        <TabButton label="Users" isActive={activeTab === 'users'} onClick={() => setActiveTab('users')} />
        <TabButton label="Agents" isActive={activeTab === 'agents'} onClick={() => setActiveTab('agents')} />
        <TabButton label="Surveys" isActive={activeTab === 'surveys'} onClick={() => setActiveTab('surveys')} />
      </div>

      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
