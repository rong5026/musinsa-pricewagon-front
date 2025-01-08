import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PCSubCategorybar({ categories, shoptype, sub_category_id }) {
  const [activeCategoryId, setActiveCategoryId] = useState(
    sub_category_id || null
  );

  return (
    <div className="pt-4">
      <div className="hidden lg:block w-44 max-w-44 min-w-44 bg-white p-4 shadow-md rounded-lg ml-5 border border-gray-100">
        <div className="font-extrabold text-2xl mb-6 text-gray-800 border-b-2 border-gray-200 pb-3">
          {categories.parentCateroyName}
        </div>
        <ul className="space-y-3">
          {categories.categoryList.map(category => (
            <li key={category.id} className="rounded-lg">
              <Link
                to={`/${shoptype}/category/${categories.id}/sub_category/${category.id}`}
                className={`block py-3 px-2 border-gray-200 transition-all duration-300 ease-in-out ${
                  activeCategoryId === category.id
                    ? 'bg-gray-200 font-bold'
                    : 'bg-gradient-to-r from-white to-gray-50 hover:from-gray-100 hover:to-gray-200'
                }`}
                onClick={() => setActiveCategoryId(category.id)}
              >
                {category.cateroyName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PCSubCategorybar;
