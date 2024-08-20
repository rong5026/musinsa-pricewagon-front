import React, { useState, useEffect } from 'react';

const data = [
  {
    id: 1,
    category: '패션',
    name: '패딩',
    price: 50000,
    discount: 30,
    image: 'https://example.com/padding.jpg',
  },
  {
    id: 2,
    category: '전자제품',
    name: '노트북',
    price: 900000,
    discount: 15,
    image: 'https://example.com/laptop.jpg',
  },
  {
    id: 3,
    category: '패션',
    name: '신발',
    price: 40000,
    discount: 50,
    image: 'https://example.com/shoes.jpg',
  },
  {
    id: 4,
    category: '생활용품',
    name: '청소기',
    price: 120000,
    discount: 40,
    image: 'https://example.com/vacuum.jpg',
  },
  // 추가 데이터 생략
];

function DiscountedProductsList() {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    const categorizedProducts = data.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});

    setCategories(Object.keys(categorizedProducts));
    setProductsByCategory(categorizedProducts);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">카테고리별 급락 상품 목록</h1>
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsByCategory[category]
              .filter((product) => product.discount >= 30) // 30% 이상 할인된 상품만 필터링
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-500 line-through">
                        {Math.round(product.price / ((100 - product.discount) / 100)).toLocaleString()}원
                      </span>
                      <span className="text-red-500 font-bold text-lg">
                        {product.price.toLocaleString()}원
                      </span>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-xs font-semibold">
                        ▼ {product.discount}%
                      </span>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-600">
                        구매하기
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DiscountedProductsList;