import React, { useState, useEffect } from 'react';
import ProductList from '../../components/Product/ProductDisplay';
import axios from 'axios';
// 더보기 버튼
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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // 상품 리스트 조회 API
    const fetchProductList = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/products/MUSINSA',
          {
            params: {
              page: 0,
              size: 8,
            },
          }
        );
        setProducts(response.data);
        console.log('상품 리스트 요청 성공');
        console.log(products)
      
      } catch (error) {
        console.log('상품 리스트 요청 오류:', error);
      }
    };

    fetchProductList();
  }, []);
  // const products = [
  //   {
  //     id: 1,
  //     name: "커브드 오버핏 빅카라 집업 (피그먼트 ver.)_차콜",
  //     brand: "키뮤어",
  //     starScore: 5.0,
  //     reviewCount: 7,
  //     likeCount: 0,
  //     imgUrl: "https://image.msscdn.net/images/goods_img/20240806/4301498/4301498_17235982556321_500.jpg",
  //     shopType: "MUSINSA",
  //     originPrice: 79000,
  //     salePrice: 59900,
  //     scrap: 1000,
  //     categoryName: "후드 집업",
  //     parentCategoryName: "아우터"
  //   },
  //   {
  //     id: 2,
  //     name: "라운드넥 스웻셔츠_블랙",
  //     brand: "무신사 스탠다드",
  //     starScore: 4.8,
  //     reviewCount: 145,
  //     likeCount: 120,
  //     imgUrl : "https://image.msscdn.net/images/goods_img/20240802/4292897/4292897_17230172044349_500.jpg",
  //     shopType: "MUSINSA",
  //     originPrice: 45000,
  //     salePrice: 32000,
  //     scrap: 500,
  //     categoryName: "스웻셔츠",
  //     parentCategoryName: "상의"
  //   },
  //   {
  //     id: 3,
  //     name: "베이직 후드 집업_그레이",
  //     brand: "유니클로",
  //     starScore: 4.2,
  //     reviewCount: 80,
  //     likeCount: 300,
  //     imgUrl: "https://image.msscdn.net/images/goods_img/20231103/3682659/3682659_17002026452853_500.jpg",
  //     shopType: "UNIQLO",
  //     originPrice: 59000,
  //     salePrice: 49000,
  //     scrap: 800,
  //     categoryName: "후드 집업",
  //     parentCategoryName: "아우터"
  //   },
  //   {
  //     id: 4,
  //     name: "슬림핏 청바지_다크블루",
  //     brand: "리바이스",
  //     starScore: 4.9,
  //     reviewCount: 220,
  //     likeCount: 450,
  //     imgUrl: "https://image.msscdn.net/images/goods_img/20210813/2062553/2062553_17243797971807_500.jpg",
  //     shopType: "MUSINSA",
  //     originPrice: 99000,
  //     salePrice: 85000,
  //     scrap: 1000,
  //     categoryName: "청바지",
  //     parentCategoryName: "바지"
  //   },
  //   {
  //     id: 5,
  //     name: "에어맥스 97_화이트",
  //     brand: "나이키",
  //     starScore: 4.5,
  //     reviewCount: 400,
  //     likeCount: 950,
  //     imgUrl: "https://image.msscdn.net/images/goods_img/20210810/2056474/2056474_1_500.jpg",
  //     shopType: "NIKE",
  //     originPrice: 210000,
  //     salePrice: 189000,
  //     scrap: 1500,
  //     categoryName: "스니커즈",
  //     parentCategoryName: "신발"
  //   },
  //   {
  //     id: 6,
  //     name: "트렌치코트_베이지",
  //     brand: "버버리",
  //     starScore: 4.7,
  //     reviewCount: 30,
  //     likeCount: 60,
  //     imgUrl: "https://image.msscdn.net/images/goods_img/20220905/2767927/2767927_1_500.jpg",
  //     shopType: "MUSINSA",
  //     originPrice: 1200000,
  //     salePrice: 1100000,
  //     scrap: 200,
  //     categoryName: "트렌치코트",
  //     parentCategoryName: "아우터"
  //   }
  // ];

  return (
    <div className="max-w-6xl mx-auto mt-9 pb-4">
      <Title />
      <div className="w-full pt-2">
        {/* products 배열이 비어있지 않을 때만 ProductList 컴포넌트를 렌더링합니다. */}
        {products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <p>Loading...</p> // 로딩 상태를 표시
        )}
        <AdditioanlButton />
      </div>
    </div>
  );
}

export default BestProductsList;
