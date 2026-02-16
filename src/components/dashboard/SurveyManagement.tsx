import React from 'react';
import Card from './Card';

const SurveyManagement = () => {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-4 text-white">Survey Management</h3>
      <p className="text-gray-300">Survey management interface will go here. You will be able to create, view, and analyze surveys.</p>
      {/* Placeholder for survey list and actions */}
            <div className="mt-6">
        <div className="flex justify-between items-center bg-gray-800/50 p-4 rounded-lg mb-3">
          <span className="text-white">Customer Satisfaction Survey</span>
          <span className="text-blue-400">In Progress</span>
          <div>
            <button className="text-blue-400 hover:text-blue-300 mr-4">View Results</button>
             <button className="text-red-400 hover:text-red-300">Close Survey</button>
          </div>
        </div>
        <div className="flex justify-between items-center bg-gray-800/50 p-4 rounded-lg">
          <span className="text-white">Employee Feedback Survey</span>
          <span className="text-green-400">Completed</span>
          <div>
            <button className="text-blue-400 hover:text-blue-300 mr-4">View Results</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SurveyManagement;
