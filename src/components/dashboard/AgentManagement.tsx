import React from 'react';
import Card from './Card';

const AgentManagement = () => {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-4 text-white">Agent Management</h3>
      <p className="text-gray-300">Agent management interface will go here. You will be able to view, edit, and manage all AI agents.</p>
       {/* Placeholder for agent list and actions */}
      <div className="mt-6">
        <div className="flex justify-between items-center bg-gray-800/50 p-4 rounded-lg mb-3">
          <span className="text-white">Bella (DEV)</span>
          <span className="text-green-400">Active</span>
          <div>
            <button className="text-blue-400 hover:text-blue-300 mr-4">View Details</button>
          </div>
        </div>
        <div className="flex justify-between items-center bg-gray-800/50 p-4 rounded-lg">
          <span className="text-white">Admin Agent</span>
          <span className="text-green-400">Active</span>
           <div>
            <button className="text-blue-400 hover:text-blue-300 mr-4">View Details</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AgentManagement;
