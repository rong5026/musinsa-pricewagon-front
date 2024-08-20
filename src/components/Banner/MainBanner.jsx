import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    image: 'https://cf.image-farm.s.zigzag.kr/original/cms/2024/08/13/202408131316526207_048625.jpg?width=1029&height=1029&quality=100&format=webp&transparent=true',
    title: '얼리버드 특가 오픈',
    subtitle: '데일리쥬 ~62%',
    description: '가을 신상 스포 지금 보러가기',
  },
  {
    id: 2,
    image: 'https://cf.image-farm.s.zigzag.kr/original/cms/2024/08/16/202408160649120556_045474.jpg?width=1029&height=1029&quality=95&format=webp&transparent=true',
    title: '특가 할인 혜택',
    subtitle: '최대 50% 할인',
    description: '지금 바로 만나보세요!',
  },
  {
    id: 3,
    image: 'https://cf.image-farm.s.zigzag.kr/original/cms/2024/08/17/202408171420488367_093241.jpg',
    title: '신상품 출시!',
    subtitle: '놓치지 마세요',
    description: '최신 트렌드를 지금 만나보세요!',
  },
];

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0); // 여기에서 currentSlide 변수를 정의합니다.
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3초마다 자동 슬라이드
    pauseOnHover: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // 슬라이드가 변경될 때 currentSlide 업데이트
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full h-96">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-96 relative">
            <div
              style={{ backgroundImage: `url(${slide.image})` }}
              className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6">
                <span className="bg-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  직접 단독
                </span>
                <h2 className="text-white text-3xl font-bold mt-4">{slide.title}</h2>
                <p className="text-white text-lg mt-1">{slide.subtitle}</p>
                <p className="text-white text-sm mt-2">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* 페이지 인디케이터 */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Banner;