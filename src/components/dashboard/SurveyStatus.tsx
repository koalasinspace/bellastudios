import React from 'react';
import Card from './Card';
import { CheckCircle, AlertCircle, PlayCircle } from 'lucide-react';

const SurveyStatus = () => {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-4 text-white">Survey Status</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
          <div>
            <p className="font-semibold text-white">Customer Satisfaction</p>
            <p className="text-sm text-gray-400">Completed</p>
          </div>
          <CheckCircle size={24} className="text-green-400" />
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
          <div>
            <p className="font-semibold text-white">Employee Feedback</p>
            <p className="text-sm text-gray-400">In Progress</p>
          </div>
          <PlayCircle size={24} className="text-blue-400" />
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
          <div>
            <p className="font-semibold text-white">New Feature Survey</p>
            <p className="text-sm text-gray-400">Not Started</p>
          </div>
          <AlertCircle size={24} className="text-yellow-400" />
        </div>
      </div>
    </Card>
  );
};

export default SurveyStatus;
