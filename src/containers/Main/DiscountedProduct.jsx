import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';

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
    <div className="max-w-6xl mx-auto mt-5">
      <h1 className="text-2xl font-bold pl-1 md:pl-4 text-gray-800">
        오늘의 득템 상품
      </h1>
      <ProductList />
      <div className="flex justify-center w-full py-4">
        <button className="w-full flex justify-between items-center px-6 py-2 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-all bg-white">
          <span></span> {/* 왼쪽에 빈 공간으로 여유를 줄 수 있습니다. */}
          <span className="text-blue-600 font-medium">더보기</span>
          <span>›</span> {/* 오른쪽에 화살표를 추가 */}
        </button>
      </div>
    </div>
  );
}

export default DiscountedProductsList;
