import React from 'react';
import Card from './Card';
import { GitCommit, AlertCircle, FileCode } from 'lucide-react';

const activities = [
  {
    icon: <GitCommit size={20} className="text-green-400" />,
    text: 'Pushed a commit with new dashboard components.',
    time: '2 hours ago',
  },
  {
    icon: <AlertCircle size={20} className="text-yellow-400" />,
    text: 'Fixed a critical bug in the authentication flow.',
    time: '1 day ago',
  },
  {
    icon: <FileCode size={20} className="text-blue-400" />,
    text: 'Refactored the main layout for better responsiveness.',
    time: '3 days ago',
  },
   {
    icon: <GitCommit size={20} className="text-green-400" />,
    text: 'Initial project setup and configuration.',
    time: '1 week ago',
  },
];

const RecentActivityFeed = () => {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-4 text-white">Recent Activity</h3>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-center space-x-4">
            <div>{activity.icon}</div>
            <div className="flex-1">
              <p className="text-white">{activity.text}</p>
              <p className="text-xs text-gray-400">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default RecentActivityFeed;
