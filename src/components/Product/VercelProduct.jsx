import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getShopBaseUrl } from '../../\butils/baseURL';
import { FaStar, FaHeart, FaBookmark } from 'react-icons/fa';

import {
  ArrowUpIcon,
  ArrowDownIcon,
  StarIcon,
  HeartIcon,
  BookmarkIcon,
  ShoppingBagIcon,
} from 'lucide-react';

function VercelProduct({ product, className }) {
  const navigate = useNavigate();

  const formatNumber = num => {
    return num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
  };

  const handleProductClick = () => {
    navigate(
      `/${product.shopType.toLowerCase()}/products/${product.productNumber}`
    );
  };

  const baseImageUrl = getShopBaseUrl(product.shopType);
  const fullImageUrl = `${baseImageUrl}${product.imgUrl}`;

  return (
    <div
    className={`bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-lg ${className}`}
    onClick={handleProductClick}
  >
    <div className="relative">
      <img
        src={fullImageUrl}
        alt={product.name}
        className="w-full h-36 sm:h-48 object-cover"
      />
      <div className="absolute top-0 left-0 bg-black bg-opacity-60 text-white px-2 py-1 text-xs sm:text-sm rounded-br-lg">
        {product.brand}
      </div>
    </div>
    <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-9rem)] sm:h-[calc(100%-12rem)]">
      <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-2 leading-tight h-12 sm:h-14 overflow-hidden">
        <span className="line-clamp-2">{product.name}</span>
      </h2>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 flex-grow">
        <span className="text-base sm:text-lg md:text-xl font-bold">
          {product.originPrice.toLocaleString()}원
        </span>
        {0 == 0 && (
          <span
            className={`flex items-center text-xs ${
              product.currentPrice > product.previousPrice
                ? 'text-red-500'
                : 'text-green-500'
            }`}
          >
            {product.currentPrice > product.previousPrice ? (
              <ArrowUpIcon className="w-3 h-3 mr-1" />
            ) : (
              <ArrowDownIcon className="w-3 h-3 mr-1" />
            )}
            {Math.abs(0)}원 ({20}%)
          </span>
        )}
      </div>
      <div className="text-xs text-gray-500 mb-2">
        이전 가격: {product.salePrice.toLocaleString()}원
      </div>
      <div className="flex items-center mb-3 text-xs">
        <FaStar className="w-4 h-4 text-yellow-400 fill-current" />
        <span className="ml-1 font-semibold">
          {product.starScore.toFixed(1)}
        </span>
        <div className="flex items-center ml-2">
          <FaHeart className="w-4 h-4 text-red-500" />
          <span className="ml-1">{formatNumber(product.likeCount)}</span>
        </div>
        <div className="flex items-center ml-2">
          <BookmarkIcon className="w-4 h-4 text-blue-500" />
          <span className="ml-1">{10}</span>
        </div>
      </div>
      <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center text-xs mt-auto">
        <ShoppingBagIcon className="w-4 h-4 mr-2" />
        알림 등록하기
      </button>
    </div>
  </div>
  );
}

export default VercelProduct;
