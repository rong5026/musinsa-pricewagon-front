import React, { useState } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://example.com/your-image1.jpg',
    title: '얼리버드 특가 오픈',
    subtitle: '데일리쥬 ~62%',
    description: '가을 신상 스포 지금 보러가기',
  },
  {
    id: 2,
    image: 'https://example.com/your-image2.jpg',
    title: '특가 할인 혜택',
    subtitle: '최대 50% 할인',
    description: '지금 바로 만나보세요!',
  },
  // 추가적인 슬라이드 이미지와 내용을 여기에 추가하세요
];

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full h-96">
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6">
        <span className="bg-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
          직접 단독
        </span>
        <h2 className="text-white text-3xl font-bold mt-4">
          {slides[currentSlide].title}
        </h2>
        <p className="text-white text-lg mt-1">{slides[currentSlide].subtitle}</p>
        <p className="text-white text-sm mt-2">{slides[currentSlide].description}</p>
      </div>
      <div className="absolute bottom-4 right-4 text-white text-sm">
        {currentSlide + 1} | {slides.length}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-black"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-black"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Banner;