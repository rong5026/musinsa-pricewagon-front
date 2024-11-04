import React, { useState, useEffect } from 'react';
import ProductList from '../../components/Product/ProductDisplay';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';

// 더보기 버튼
function AdditionalButton({ onClick, isLoading }) {
  return (
    <div className="flex justify-center w-full py-4">
      <button
        className="w-full px-6 py-2 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-all bg-white flex justify-between items-center"
        onClick={onClick}
        disabled={isLoading}
      >
        <span></span>
        <span className="text-blue-600 font-medium">
          {isLoading ? '로딩 중...' : '더보기'}
        </span>
        <span>›</span>
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
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductList = async (currentPage) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/products/MUSINSA`,
        {
          params: {
            page: currentPage,
            size: 8,
          },
        }
      );
      console.log(response.data)
      setProducts(prevProducts => [...prevProducts, ...response.data]);
      console.log('상품 리스트 요청 성공');
    } catch (error) {
      console.log('상품 리스트 요청 오류:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductList(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  

  return (
    <div className="max-w-6xl mx-auto mt-9 pb-4">
      <Title />
      <div className="w-full pt-2">
        {products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <Loading />
        )}
        <AdditionalButton onClick={handleLoadMore} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default BestProductsList;
