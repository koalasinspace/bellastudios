import React from 'react';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-lg font-semibold rounded-t-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-500 ${
        isActive
          ? 'bg-white/20 text-white border-b-2 border-pink-500'
          : 'text-gray-400 hover:bg-white/10 hover:text-white'
      }`}>
      {label}
    </button>
  );
};

export default TabButton;
