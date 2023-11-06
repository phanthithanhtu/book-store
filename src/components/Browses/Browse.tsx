import React from 'react';

export interface ItemType {
  id: number;
  description: string;
  image: string;
  name: string;
  url: string;
  theloai: string;
  author: string;
}

interface CardProps {
  item: ItemType;
}

const Browse: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-center">
      <img className="w-32 h-32 rounded-md object-cover" src={item.image} alt={item.name} />
      <div className="ml-4">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        <p className="text-sm text-gray-500">{item.author}</p>
      </div>
    </div>
  );
};

export default Browse;
