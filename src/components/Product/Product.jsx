import React from 'react';
import { FaStar, FaHeart, FaBookmark } from 'react-icons/fa';

function Product({ product, className }) {
  // 원래 가격 계산
  const discount = Math.round(
    ((product.originPrice - product.salePrice) / product.originPrice) * 100
  );

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg ${className}`}
    >
      <img
        src={product.imgUrl}
        alt={product.name}
        className="w-full h-36 md:h-40 lg:h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-4 sm:p-3 md:p-4">
        <div className="text-sm md:text-base text-gray-700">
          {product.brand}
        </div>
        {/* 제목 컨테이너에 고정 높이 설정 */}
        <div className="h-12 sm:h-16 md:h-20">
          <h2 className="text-base md:text-lg font-semibold leading-tight">
            {product.name}
          </h2>
        </div>

        {/* 가격 정보 */}
        <div className="flex flex-col items-end mt-2">
          <span className="text-gray-500 line-through text-sm sm:mr-2 ">
            {product.originPrice.toLocaleString()}원
          </span>
          <div className="flex items-baseline">
            <span className="mr-2 text-xs text-red-500 lg:text-base">
              ▼ {discount}%
            </span>
            <span className="text-red-500 font-bold text-base md:text-lg lg:text-xl">
              {product.salePrice.toLocaleString()}원
            </span>
          </div>
        </div>

        {/* 별점, 리뷰 수, 좋아요 수 */}
        <div className="flex items-center justify-between mt-2 text-gray-700 text-xs sm:text-sm">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-semibold">{product.starScore}</span>
            <span className="ml-0 md:ml-1">({product.reviewCount})</span>
          </div>
          <div className="flex items-center">
            <FaHeart className="text-red-500 mr-1" />
            <span className="font-semibold">{product.likeCount}</span>
          </div>
          <div className="flex items-center">
            <FaBookmark className="text-blue-500 mr-1" />
            <span className="font-semibold">{product.scrap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
