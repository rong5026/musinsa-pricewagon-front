import React, { useState } from 'react';
import ProductDisplay from '../../components/Product/ProductDisplay';

function ProductList() {
  const categories = [
    { id: 1, name: '코트' },
    { id: 2, name: '점퍼' },
    { id: 3, name: '자켓' },
    { id: 4, name: '트렌치코트' },
    { id: 5, name: '플리스' },
    { id: 6, name: '패딩' },
    { id: 7, name: '무스탕/퍼' },
    { id: 8, name: '레더' },
    // 필요한 만큼 카테고리를 추가합니다.
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = categoryId => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* 큰 화면에서의 카테고리 사이드바 */}
      <div className="hidden lg:block lg:w-1/4 bg-white p-6 shadow-lg rounded-lg">
        <div className="font-bold text-xl mb-4 border-b pb-2 text-gray-700">
          하위 카테고리
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

      {/* 작은 화면에서의 카테고리 네비게이션 바 */}
      <div className="lg:hidden bg-white p-4">
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 whitespace-nowrap rounded-full transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <ProductDisplay />
      </div>
    </div>
  );
}

export default ProductList;
