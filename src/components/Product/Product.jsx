import React from 'react';
import { FaStar, FaHeart, FaBookmark} from 'react-icons/fa';

function Product({ product }) {
  // 원래 가격 계산
  const originalPrice = Math.round(product.price / ((100 - product.discount) / 100)).toLocaleString();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">{originalPrice}원</span>
          <span className="text-red-500 font-bold text-xl">{product.price.toLocaleString()}원</span>
          <span className="ml-2 text-sm text-red-500">▼ {product.discount}%</span>
        </div>
        
        {/* 별점, 리뷰 수, 좋아요 수 */}
        <div className="flex items-center space-x-4 mt-2 text-gray-700 text-sm">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-semibold">{product.rating}</span>
            <span className="ml-1">({product.reviews})</span>
          </div>
          <div className="flex items-center">
            <FaHeart className="text-red-500 mr-1" />
            <span className="font-semibold">{product.likes}</span>
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