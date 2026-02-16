import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
