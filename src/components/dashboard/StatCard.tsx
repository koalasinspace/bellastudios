import React from 'react';
import Card from './Card'; // Using the new Card component
import { LucideProps } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<LucideProps>;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, color }) => {
  return (
    <Card className="p-6 flex flex-col justify-between h-full">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
        <div className={`p-2 rounded-full`} style={{ backgroundColor: `${color}1A` }}>
           <Icon size={24} style={{ color }} />
        </div>
      </div>
      <div>
        <p className="text-4xl font-bold text-white mt-4">{value}</p>
      </div>
    </Card>
  );
};

export default StatCard;
