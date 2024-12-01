import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, children, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-xl mx-auto">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-lg" />
      )}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      {children}
    </div>
  );
};

export default Card;

