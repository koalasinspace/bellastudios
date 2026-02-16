import React from 'react';
import Card from './Card';
import { MessageSquare, CheckSquare, Edit } from 'lucide-react';

const userActivities = [
  {
    icon: <MessageSquare size={20} className="text-blue-400" />,
    text: 'You started a new conversation with an agent.',
    time: '1 day ago',
  },
  {
    icon: <CheckSquare size={20} className="text-green-400" />,
    text: 'You completed the Customer Satisfaction Survey.',
    time: '3 days ago',
  },
  {
    icon: <Edit size={20} className="text-yellow-400" />,
    text: 'You updated your profile information.',
    time: '1 week ago',
  },
];

const UserActivity = () => {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-4 text-white">Your Recent Activity</h3>
      <ul className="space-y-4">
        {userActivities.map((activity, index) => (
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

export default UserActivity;
