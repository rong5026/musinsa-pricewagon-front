import React,  { useState } from 'react';
import { Link } from 'react-router-dom'; 

function MobileSubCategorybar({ categories, shoptype, sub_category_id}) {
  const [activeCategoryId, setActiveCategoryId] = useState(sub_category_id || null);

  const handleCategoryClick = categoryId => {
    setActiveCategoryId(categoryId);
  };
  return (
    <div className="lg:hidden bg-white p-4">
      <div className="flex overflow-x-scroll scrollbar-hide space-x-2">
        {categories.categoryList.map(category => (
          <Link
            key={category.id}
            to={`/${shoptype}/category/${categories.id}/sub_category/${category.id}`}
            className={`px-4 py-2 whitespace-nowrap rounded-xl transition-colors duration-300 ${
              activeCategoryId === category.id
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.cateroyName}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileSubCategorybar;
