import React, { useState } from 'react';

function PCSubCategorybar({ categories }) {
  return (
    <div className="hidden lg:block lg:w-1/4 bg-white p-6 shadow-lg rounded-lg ml-5">
      <div className="font-bold text-xl mb-4 border-b pb-2 text-gray-700">
        상의
      </div>
      <ul className="space-y-2">
        {categories.map(category => (
          <li
            key={category.id}
            className="py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors duration-200"
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PCSubCategorybar;
