import React, { useState } from 'react';

function PCSubCategorybar({ categories }) {
    return (
      <div className="hidden lg:block lg:w-1/4 bg-white p-6 shadow-md rounded-lg ml-5 border border-gray-100">
        <div className="font-extrabold text-2xl mb-6 text-gray-800 border-b-2 border-gray-200 pb-3">
          {categories.parentCateroyName}
        </div>
        <ul className="space-y-3">
          {categories.categoryList.map(category => (
            <li
              key={category.id}
              className="py-3 px-5 bg-gradient-to-r from-white to-gray-50 hover:from-gray-100 hover:to-gray-200 hover:shadow-  border-gray-200 rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
            >
              {category.cateroyName}
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default PCSubCategorybar;
