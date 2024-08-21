import React, { useState, useEffect } from 'react';
import ProductList from '../../components/Product/ProductDisplay';

function AdditioanlButton() {
  return (
    <div className="flex justify-center w-full py-4">
      <button className="w-full px-6 py-2 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-all bg-white flex justify-between items-center">
        <span></span> {/* 왼쪽 여백 */}
        <span className="text-blue-600 font-medium">더보기</span>
        <span>›</span> {/* 오른쪽 화살표 */}
      </button>
    </div>
  );
}

function Title() {
  return (
    <h1 className="text-xl md:text-2xl font-bold pl-1 text-gray-800">
      오늘의 인기 상품
    </h1>
  );
}

function BestProductsList() {
 
  return (
    <div className="max-w-6xl mx-auto mt-9 pb-4">
      <Title />
      <div className="w-full pt-2">
        <ProductList />
        <AdditioanlButton />
      </div>
    </div>
  );
}

export default BestProductsList;
