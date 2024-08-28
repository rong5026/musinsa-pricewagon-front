import React, { useState } from 'react';
import ProductDisplay from '../../components/Product/ProductDisplay';
import PCSubCategorybar from './PCSubCategorybar';
import MobileSubCategorybar from './MobileSubCategorybar';

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



  return (
    <div className="flex flex-col lg:flex-row">
      <PCSubCategorybar categories={categories}/>
      <MobileSubCategorybar categories={categories}/>

      <div className="p-4">
        <ProductDisplay />
      </div>
    </div>
  );
}

export default ProductList;
