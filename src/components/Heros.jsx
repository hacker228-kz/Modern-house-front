
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Rectangle from '../assets/Rectangle.svg';

const filters = [
  { label: 'Looking for', options: ['Buy', 'Rent'] },
  { label: 'Location', options: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'] },
  { label: 'Property Type', options: ['Apartment', 'House', 'Condo', 'Villa'] },
  { label: 'Price', options: ['100000-300000 $', '300000-600000 $', '600000-900000 $'] },
];

export default function Heros() {
  const [activeFilter, setActiveFilter] = useState(null);

  return (
    <section className="w-full h-full py-10 px-4 pr-[100px]">
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="mb-16 ml-15">
          <img src={Rectangle} alt="Rectangle" className="w-40 h-1 mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Find your next place to live
          </h1>
        </div>

     
        <div className="flex  bg-gray-100 p-1  w-[1120px] ml-[55px] ">
        
          <div className="flex border border-white rounded-2xl shadow bg-white w-[1440px] h-[120px] ">
            {filters.map((filter, index) => (
              <div
                key={filter.label}
                // Каждая "ячейка" занимает 1/4 контейнера, центрируем содержимое
                className={`relative flex items-left justify-left w-1/4 h-full ml-4
                  ${index < filters.length - 1 ? 'border-r border-gray-200' : ''}`}
              >
                <button
                  onClick={() => setActiveFilter(activeFilter === index ? null : index)}
                  className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-50 focus:outline-none"
                >
                  <span>{filter.label}</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {/* Выпадающий список для активного пункта */}
                {activeFilter === index && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-lg shadow-lg z-10">
                    {filter.options.map(option => (
                      <div
                        key={option}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
