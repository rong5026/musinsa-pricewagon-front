import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductCarousel.css';
import Product from '../../components/Product/Product';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const products = {
  increase: [
    {
      id: 1,
      name: "커브드 오버핏 빅카라 집업 (피그먼트 ver.)_차콜",
      brand: "키뮤어",
      starScore: 5.0,
      reviewCount: 7,
      likeCount: 0,
      imgUrl: "https://image.msscdn.net/images/goods_img/20240806/4301498/4301498_17235982556321_500.jpg",
      shopType: "MUSINSA",
      originPrice: 79000,
      salePrice: 59900,
      scrap: 1000,
      categoryName: "후드 집업",
      parentCategoryName: "아우터"
    },
    {
      id: 2,
      name: "라운드넥 스웻셔츠_블랙",
      brand: "무신사 스탠다드",
      starScore: 4.8,
      reviewCount: 145,
      likeCount: 120,
      imgUrl : "https://image.msscdn.net/images/goods_img/20240802/4292897/4292897_17230172044349_500.jpg",
      shopType: "MUSINSA",
      originPrice: 45000,
      salePrice: 32000,
      scrap: 500,
      categoryName: "스웻셔츠",
      parentCategoryName: "상의"
    }
  ],
  decrease: [
    {
      id: 3,
      name: "베이직 후드 집업_그레이",
      brand: "유니클로",
      starScore: 4.2,
      reviewCount: 80,
      likeCount: 300,
      imgUrl: "https://image.msscdn.net/images/goods_img/20231103/3682659/3682659_17002026452853_500.jpg",
      shopType: "UNIQLO",
      originPrice: 59000,
      salePrice: 49000,
      scrap: 800,
      categoryName: "후드 집업",
      parentCategoryName: "아우터"
    },
    {
      id: 4,
      name: "슬림핏 청바지_다크블루",
      brand: "리바이스",
      starScore: 4.9,
      reviewCount: 220,
      likeCount: 450,
      imgUrl: "https://image.msscdn.net/images/goods_img/20210813/2062553/2062553_17243797971807_500.jpg",
      shopType: "MUSINSA",
      originPrice: 99000,
      salePrice: 85000,
      scrap: 1000,
      categoryName: "청바지",
      parentCategoryName: "바지"
    }
  ],
};

const ProductCarousel = () => {
  const [selectedTab, setSelectedTab] = useState('increase');
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // 기본으로 4개 보여줌
    slidesToScroll: 4, // 화면에 보여지는 개수만큼 스크롤
    arrows: true,
    adaptiveHeight: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024, // 화면 너비 1024px 이하일 때
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3, // 3개씩 스크롤
        },
      },
      {
        breakpoint: 768, // 화면 너비 768px 이하일 때
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, // 2개씩 스크롤
        },
      },
      {
        breakpoint: 480, // 화면 너비 480px 이하일 때
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // 1개씩 스크롤
        },
      },
    ],
  };

  return (
    <div className=" max-w-6xl mx-auto text-center py-10">
      <div className=' flex flex-col md:flex-row  md:justify-between'>
        <h2 className="text-xl md:text-2xl md:pl-1 font-bold mb-3 text-gray-800">
          가격 변동 상품
        </h2>

         {/* 버튼부분 */}
        <div className="flex justify-center md:justify-center md:pr-4 mb-6 space-x-4">
          <button
            className={`flex items-center py-2 px-4 rounded-lg font-semibold space-x-2 ${
              selectedTab === 'increase'
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedTab('increase')}
          >
            <FaArrowUp
              className={`${
                selectedTab === 'increase' ? 'text-white' : 'text-green-500'
              }`}
            />
            <span>가격 상승</span>
          </button>

          <button
            className={`flex items-center py-2 px-4 rounded-lg font-semibold space-x-2 ${
              selectedTab === 'decrease'
                ? 'bg-red-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedTab('decrease')}
          >
            <FaArrowDown
              className={`${
                selectedTab === 'decrease' ? 'text-white' : 'text-red-500'
              }`}
            />
            <span>가격 하락</span>
          </button>
        </div>
      </div>

      <Slider {...settings}>
        {products[selectedTab].map(product => (
            <Product key={product.id} product={product} className="px-2"/>
   
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
