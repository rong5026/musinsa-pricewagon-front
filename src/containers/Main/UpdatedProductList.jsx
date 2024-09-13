import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductCarousel.css';
import Product from '../../components/Product/Product';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import VercelProduct from '../../components/Product/VercelProduct';

const products = {
  increase: [
    {
      productNumber: 2697813,
      name: 'PRDA DENIM PATCH CREWNECK SHIRT',
      brand: '프렌다',
      starScore: 4.8,
      reviewCount: 3543,
      likeCount: 0,
      imgUrl:
        '/images/goods_img/20220804/2697813/2697813_16759892051756_500.jpg',
      shopType: 'MUSINSA',
      currentPrice: 24150,
      previousPrice: 39900,
    },
    {
      productNumber: 2338457,
      name: '하트 벌룬 스웻 셔츠-3 Colors',
      brand: '비터셀즈',
      starScore: 4.8,
      reviewCount: 3845,
      likeCount: 0,
      imgUrl:
        '/images/goods_img/20220203/2338457/2338457_17254400814620_500.jpg',
      shopType: 'MUSINSA',
      currentPrice: 28000,
      previousPrice: 53200,
    },
    {
      productNumber: 3056893,
      name: '슈팅 로고 레글런 스웨트셔츠 베이지브라운',
      brand: '꼼파뇨',
      starScore: 4.9,
      reviewCount: 1982,
      likeCount: 0,
      imgUrl:
        '/images/goods_img/20230202/3056893/3056893_16759355110509_500.jpg',
      shopType: 'MUSINSA',
      currentPrice: 48240,
      previousPrice: 48240,
    },
    {
      productNumber: 3465073,
      name: 'SPACE CAT 특양면 맨투맨_B1',
      brand: '벤힛',
      starScore: 4.8,
      reviewCount: 1475,
      likeCount: 0,
      imgUrl:
        '/images/goods_img/20230814/3465073/3465073_16921554966152_500.jpg',
      shopType: 'MUSINSA',
      currentPrice: 32900,
      previousPrice: 32900,
    },
  ],
  decrease: [
    {
      productNumber: 1679943,
      name: 'RETRIEVER CREWNECK [NAVY]',
      brand: '비바스튜디오',
      starScore: 4.8,
      reviewCount: 9258,
      likeCount: 0,
      imgUrl:
        '/images/goods_img/20201105/1679943/1679943_17096910334702_500.jpg',
      shopType: 'MUSINSA',
      currentPrice: 34500,
      previousPrice: 34500,
    },
    {
      productNumber: 3791889,
      name: '오버핏 포레스트 체크 셔츠-핑크',
      brand: '필루미네이트',
      starScore: 4.8,
      reviewCount: 2547,
      likeCount: 0,
      imgUrl:
        '/images/goods_img/20240112/3791889/3791889_17061549687904_500.jpg',
      shopType: 'MUSINSA',
      currentPrice: 22000,
      previousPrice: 29900,
    },
    {
      productNumber: 3771912,
      name: '스튜피드 체크 셔츠 시리즈 - 8 COLOR',
      brand: '수아레',
      starScore: 4.9,
      reviewCount: 1884,
      likeCount: 0,
      imgUrl:
        '/images/goods_img/20240102/3771912/3771912_17096042993927_500.jpg',
      shopType: 'MUSINSA',
      currentPrice: 25895,
      previousPrice: 39900,
    },
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
      <div className=" flex flex-col md:flex-row  md:justify-between">
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
          <VercelProduct key={product.productNumber} product={product} className="px-2" />
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
