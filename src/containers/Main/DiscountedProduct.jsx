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
    <div className="max-w-6xl mx-auto p-2 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">카테고리별 급락 상품 목록</h1>
      <ProductList/>
    </div>
  );
}

export default DiscountedProductsList;