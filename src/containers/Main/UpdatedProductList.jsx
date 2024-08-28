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
      name: '도호 간절기 여성 H라인 스커트',
      originalPrice: 80000,
      price: 65000,
      discount: 19,
      rating: 4.3,
      reviews: 150,
      likes: 300,
      scrap: 140,
      date: '1일 전',
      img: 'https://image.msscdn.net/images/goods_img/20200818/1551840/1551840_1_500.jpg',
    },
    {
      id: 2,
      name: 'S 아베크롬비 원피스 상태A',
      originalPrice: 30000,
      price: 20000,
      discount: 33,
      rating: 4.5,
      reviews: 80,
      likes: 120,
      scrap: 140,
      date: '10일 전',
      img: 'https://image.msscdn.net/images/goods_img/20210825/2086653/2086653_17048764754484_500.jpg',
    },
    {
      id: 3,
      name: '아디다스 스웻반바지 해외라지',
      originalPrice: 25000,
      price: 20000,
      discount: 20,
      rating: 4.7,
      reviews: 60,
      likes: 200,
      scrap: 140,
      date: '2일 전',
      img: 'https://image.msscdn.net/images/goods_img/20210928/2149254/2149254_17138588137724_500.jpg',
    },
    {
      id: 4,
      name: '기타 상품',
      originalPrice: 25000,
      price: 20000,
      discount: 20,
      rating: 4.1,
      reviews: 45,
      scrap: 140,
      likes: 90,
      date: '3일 전',
      img: 'https://image.msscdn.net/images/goods_img/20240422/4074847/4074847_17205019513135_500.jpg',
    },
    {
      id: 5,
      name: '도호 간절기 여성 H라인 스커트',
      originalPrice: 80000,
      price: 65000,
      discount: 19,
      rating: 4.3,
      reviews: 150,
      likes: 300,
      scrap: 140,
      date: '1일 전',
      img: 'https://image.msscdn.net/images/goods_img/20200818/1551840/1551840_1_500.jpg',
    },
    {
      id: 6,
      name: 'S 아베크롬비 원피스 상태A',
      originalPrice: 30000,
      price: 20000,
      discount: 33,
      rating: 4.5,
      reviews: 80,
      likes: 120,
      scrap: 140,
      date: '10일 전',
      img: 'https://image.msscdn.net/images/goods_img/20210825/2086653/2086653_17048764754484_500.jpg',
    },
    {
      id: 7,
      name: '아디다스 스웻반바지 해외라지',
      originalPrice: 25000,
      price: 20000,
      discount: 20,
      rating: 4.7,
      reviews: 60,
      likes: 200,
      scrap: 140,
      date: '2일 전',
      img: 'https://image.msscdn.net/images/goods_img/20210928/2149254/2149254_17138588137724_500.jpg',
    },
    {
      id: 8,
      name: '기타 상품',
      originalPrice: 25000,
      price: 20000,
      discount: 20,
      rating: 4.1,
      reviews: 45,
      likes: 90,
      scrap: 140,
      date: '3일 전',
      img: 'https://image.msscdn.net/images/goods_img/20240422/4074847/4074847_17205019513135_500.jpg',
    },
  ],
  decrease: [
    {
      id: 1,
      name: '도호 간절기 여성 H라인 스커트',
      originalPrice: 80000,
      price: 65000,
      discount: 19,
      rating: 4.3,
      reviews: 150,
      likes: 300,
      scrap: 140,
      date: '1일 전',
      img: 'https://image.msscdn.net/images/goods_img/20200818/1551840/1551840_1_500.jpg',
    },
    {
      id: 2,
      name: 'S 아베크롬비 원피스 상태A',
      originalPrice: 30000,
      price: 20000,
      discount: 33,
      rating: 4.5,
      reviews: 80,
      likes: 120,
      scrap: 140,
      date: '10일 전',
      img: 'https://image.msscdn.net/images/goods_img/20210825/2086653/2086653_17048764754484_500.jpg',
    },
    {
      id: 3,
      name: '아디다스 스웻반바지 해외라지',
      originalPrice: 25000,
      price: 20000,
      discount: 20,
      rating: 4.7,
      reviews: 60,
      likes: 200,
      scrap: 140,
      date: '2일 전',
      img: 'https://image.msscdn.net/images/goods_img/20210928/2149254/2149254_17138588137724_500.jpg',
    },
    {
      id: 4,
      name: '기타 상품',
      originalPrice: 25000,
      price: 20000,
      discount: 20,
      rating: 4.1,
      reviews: 45,
      scrap: 140,
      likes: 90,
      date: '3일 전',
      img: 'https://image.msscdn.net/images/goods_img/20240422/4074847/4074847_17205019513135_500.jpg',
    },
    {
      id: 5,
      name: '도호 간절기 여성 H라인 스커트',
      originalPrice: 80000,
      price: 65000,
      discount: 19,
      rating: 4.3,
      reviews: 150,
      likes: 300,
      scrap: 140,
      date: '1일 전',
      img: 'https://image.msscdn.net/images/goods_img/20200818/1551840/1551840_1_500.jpg',
    },
    {
      id: 6,
      name: 'S 아베크롬비 원피스 상태A',
      originalPrice: 30000,
      price: 20000,
      discount: 33,
      rating: 4.5,
      reviews: 80,
      likes: 120,
      scrap: 140,
      date: '10일 전',
      img: 'https://image.msscdn.net/images/goods_img/20210825/2086653/2086653_17048764754484_500.jpg',
    },
    {
      id: 7,
      name: '아디다스 스웻반바지 해외라지',
      originalPrice: 25000,
      price: 20000,
      discount: 20,
      rating: 4.7,
      reviews: 60,
      likes: 200,
      scrap: 140,
      date: '2일 전',
      img: 'https://image.msscdn.net/images/goods_img/20210928/2149254/2149254_17138588137724_500.jpg',
    },
    {
      id: 8,
      name: '기타 상품',
      originalPrice: 25000,
      price: 20000,
      discount: 20,
      rating: 4.1,
      reviews: 45,
      likes: 90,
      scrap: 140,
      date: '3일 전',
      img: 'https://image.msscdn.net/images/goods_img/20240422/4074847/4074847_17205019513135_500.jpg',
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
