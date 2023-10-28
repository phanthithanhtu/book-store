import React, { useState, useEffect } from 'react';
import data from '../../data/items.json';
import Browse from '../../components/Browse/browse'; // Sửa tên component và import đúng cách

interface Item {
  id: number;
  description: string;
  image: string;
  name: string;
  url: string;
  theloai: string;
  author: string;
}

const TheloaiPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('male');

  useEffect(() => {
    setItems(data);
  }, []);

  const filteredItems = items.filter((item) => item.theloai === selectedCategory);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setSelectedCategory('male')}
        >
          Male
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setSelectedCategory('female')}
        >
          Female
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <Browse key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TheloaiPage;
