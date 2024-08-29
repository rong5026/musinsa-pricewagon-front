import React,  { useState } from 'react';

function MobileSubCategorybar({ categories }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = categoryId => {
    setActiveCategory(categoryId);
  };
  return (
    <div className="lg:hidden bg-white p-4">
      <div className="flex overflow-x-scroll scrollbar-hide space-x-2">
        {categories.categoryList.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 whitespace-nowrap rounded-xl transition-colors duration-300 ${
              activeCategory === category.id
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.cateroyName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MobileSubCategorybar;
