import React, { useState, useEffect } from 'react';
import ProductDisplay from '../../components/Product/ProductDisplay';
import PCSubCategorybar from './PCSubCategorybar';
import MobileSubCategorybar from './MobileSubCategorybar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductCategoryPage() {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const { id, shoptype, sub_category_id } = useParams(); // URL에서 상품 ID 추출

  // 하위 카테고리 조회 및 카테고리 상품 조회
  const fetchCategoryDataList = async () => {
    try {
      const [categoryResponse, productResponse] = await Promise.all([
        axios.get(`http://localhost:8080/api/v1/category/${id}`),
        axios.get(
          `http://localhost:8080/api/v1/products/${shoptype.toUpperCase()}/category/${id}`
        ),
      ]);
      setCategories(categoryResponse.data);
      setProducts(productResponse.data);

      console.log('카테고리, 카테고리 상품 리스트 요청 성공');
    } catch (error) {
      console.log('카테고리, 카테고리 상품리스트 요청 오류:', error);
    }
  };

  // 하위 카테고리 상품 리스트 조회
  const fetchSubProductList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/products/${shoptype.toUpperCase()}/category/${sub_category_id}`
      );

      setProducts(response.data);
      console.log('하위 카테고리 상품 리스트 요청 성공');
    } catch (error) {
      console.log('하위 카테고리 상품 리스트 요청 오류:', error);
    }
  };

  useEffect(() => {
    if (sub_category_id) {
      fetchSubProductList();
    } else {
      fetchCategoryDataList();
    }
  }, [id, shoptype, sub_category_id]);

  // categories가 로드되지 않았다면 로딩 상태를 표시
  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <PCSubCategorybar
        categories={categories}
        shoptype={'musinsa'}
        sub_category_id={sub_category_id}
      />
      <MobileSubCategorybar categories={categories} />

      <div className="p-4">
        <ProductDisplay products={products} />
      </div>
    </div>
  );
}

export default ProductCategoryPage;
