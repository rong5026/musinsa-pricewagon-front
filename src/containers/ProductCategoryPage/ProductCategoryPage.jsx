import React, { useState, useEffect } from 'react';
import ProductDisplay from '../../components/Product/ProductDisplay';
import PCSubCategorybar from './PCSubCategorybar';
import MobileSubCategorybar from './MobileSubCategorybar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductCategoryPage() {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const { id, shoptype } = useParams(); // URL에서 상품 ID 추출
  // const products = [
  //   {
  //     id: 1,
  //     name: '커브드 오버핏 빅카라 집업 (피그먼트 ver.)_차콜',
  //     brand: '키뮤어',
  //     starScore: 5.0,
  //     reviewCount: 7,
  //     likeCount: 0,
  //     imgUrl:
  //       'https://image.msscdn.net/images/goods_img/20240806/4301498/4301498_17235982556321_500.jpg',
  //     shopType: 'MUSINSA',
  //     originPrice: 79000,
  //     salePrice: 59900,
  //     scrap: 1000,
  //     categoryName: '후드 집업',
  //     parentCategoryName: '아우터',
  //   },
  //   {
  //     id: 2,
  //     name: '라운드넥 스웻셔츠_블랙',
  //     brand: '무신사 스탠다드',
  //     starScore: 4.8,
  //     reviewCount: 145,
  //     likeCount: 120,
  //     imgUrl:
  //       'https://image.msscdn.net/images/goods_img/20240802/4292897/4292897_17230172044349_500.jpg',
  //     shopType: 'MUSINSA',
  //     originPrice: 45000,
  //     salePrice: 32000,
  //     scrap: 500,
  //     categoryName: '스웻셔츠',
  //     parentCategoryName: '상의',
  //   },
  //   {
  //     id: 3,
  //     name: '베이직 후드 집업_그레이',
  //     brand: '유니클로',
  //     starScore: 4.2,
  //     reviewCount: 80,
  //     likeCount: 300,
  //     imgUrl:
  //       'https://image.msscdn.net/images/goods_img/20231103/3682659/3682659_17002026452853_500.jpg',
  //     shopType: 'UNIQLO',
  //     originPrice: 59000,
  //     salePrice: 49000,
  //     scrap: 800,
  //     categoryName: '후드 집업',
  //     parentCategoryName: '아우터',
  //   },
  //   {
  //     id: 4,
  //     name: '슬림핏 청바지_다크블루',
  //     brand: '리바이스',
  //     starScore: 4.9,
  //     reviewCount: 220,
  //     likeCount: 450,
  //     imgUrl:
  //       'https://image.msscdn.net/images/goods_img/20210813/2062553/2062553_17243797971807_500.jpg',
  //     shopType: 'MUSINSA',
  //     originPrice: 99000,
  //     salePrice: 85000,
  //     scrap: 1000,
  //     categoryName: '청바지',
  //     parentCategoryName: '바지',
  //   },
  //   {
  //     id: 5,
  //     name: '에어맥스 97_화이트',
  //     brand: '나이키',
  //     starScore: 4.5,
  //     reviewCount: 400,
  //     likeCount: 950,
  //     imgUrl:
  //       'https://image.msscdn.net/images/goods_img/20210810/2056474/2056474_1_500.jpg',
  //     shopType: 'NIKE',
  //     originPrice: 210000,
  //     salePrice: 189000,
  //     scrap: 1500,
  //     categoryName: '스니커즈',
  //     parentCategoryName: '신발',
  //   },
  //   {
  //     id: 6,
  //     name: '트렌치코트_베이지',
  //     brand: '버버리',
  //     starScore: 4.7,
  //     reviewCount: 30,
  //     likeCount: 60,
  //     imgUrl:
  //       'https://image.msscdn.net/images/goods_img/20220905/2767927/2767927_1_500.jpg',
  //     shopType: 'MUSINSA',
  //     originPrice: 1200000,
  //     salePrice: 1100000,
  //     scrap: 200,
  //     categoryName: '트렌치코트',
  //     parentCategoryName: '아우터',
  //   },
  //   {
  //     id: 7,
  //     name: '슬림핏 드레스 셔츠_화이트',
  //     brand: '지오다노',
  //     starScore: 4.3,
  //     reviewCount: 90,
  //     likeCount: 180,
  //     imgUrl:
  //       'https://image.msscdn.net/thumbnails/images/goods_img/20240805/4296173/4296173_17240298450150_big.jpg?w=1200',
  //     shopType: 'GIORDANO',
  //     originPrice: 35000,
  //     salePrice: 25000,
  //     scrap: 300,
  //     categoryName: '드레스 셔츠',
  //     parentCategoryName: '상의',
  //   },
  //   {
  //     id: 8,
  //     name: '오리지널 푸퍼 자켓_카키',
  //     brand: '노스페이스',
  //     starScore: 4.6,
  //     reviewCount: 300,
  //     likeCount: 700,
  //     imgUrl:
  //       'https://image.msscdn.net/thumbnails/images/goods_img/20240314/3953402/3953402_17207547588419_big.jpg?w=1200',
  //     shopType: 'THE NORTH FACE',
  //     originPrice: 320000,
  //     salePrice: 290000,
  //     scrap: 500,
  //     categoryName: '푸퍼 자켓',
  //     parentCategoryName: '아우터',
  //   },
  //   {
  //     id: 9,
  //     name: '플리츠 스커트_블랙',
  //     brand: 'H&M',
  //     starScore: 4.4,
  //     reviewCount: 120,
  //     likeCount: 250,
  //     imgUrl:
  //       'https://image.msscdn.net/thumbnails/images/goods_img/20240314/3953402/3953402_17207547588419_big.jpg?w=1200',
  //     shopType: 'H&M',
  //     originPrice: 29000,
  //     salePrice: 25000,
  //     scrap: 400,
  //     categoryName: '플리츠 스커트',
  //     parentCategoryName: '하의',
  //   },
  //   {
  //     id: 10,
  //     name: '러닝화_네이비',
  //     brand: '아디다스',
  //     starScore: 4.8,
  //     reviewCount: 150,
  //     likeCount: 400,
  //     imgUrl:
  //       'https://image.msscdn.net/thumbnails/images/goods_img/20240314/3953402/3953402_17207547588419_big.jpg?w=1200',
  //     shopType: 'ADIDAS',
  //     originPrice: 130000,
  //     salePrice: 105000,
  //     scrap: 350,
  //     categoryName: '러닝화',
  //     parentCategoryName: '신발',
  //   },
  // ];

  useEffect(() => {
    // 하위 카테고리 조회, 카테고리 상품 조회
    const fetchCategoryDataList = async () => {
      try {
        // const response = await axios.get(
        //   `http://localhost:8080/api/v1/category/${id}`
        // );
        const [categoryResponse, productResponse] = await Promise.all([
          axios.get(`http://localhost:8080/api/v1/category/${id}`),
          axios.get(
            `http://localhost:8080/api/v1/products/${shoptype.toUpperCase()}/category/${id}`
          ),
        ]);
        setCategories(categoryResponse.data);
        setProducts(productResponse.data);
        console.log(productResponse.data)

        console.log('카테고리, 카테고리 상품 리스트 요청 성공');
      } catch (error) {
        console.log('카테고리, 카테고리 상품리스트 요청 오류:', error);
      }
    };

    fetchCategoryDataList();
  }, [id, shoptype]);

  // categories가 로드되지 않았다면 로딩 상태를 표시
  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <PCSubCategorybar categories={categories} />
      <MobileSubCategorybar categories={categories} />

      <div className="p-4">
        <ProductDisplay products={products} />
      </div>
    </div>
  );
}

export default ProductCategoryPage;
