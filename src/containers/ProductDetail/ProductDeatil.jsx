import React from 'react';
import PriceGraph from '../../components/Graph/PriceGraph';
import CustomButton from '../../components/Button/CustomButton';
import { FaStar, FaHeart, FaRegCommentDots } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';

function ProductDeatil() {
  return (
    <div className="bg-green-200 max-w-4xl mx-auto p-6 rounded-lg shadow-md min-h-full">
      {/* 상단 제품 이미지 및 설명 */}
      <div className="bg-slate-400 flex flex-col md:flex-row md:space-x-4">
        {/* 제품 이미지 */}
        <div className="flex-shrink-0 rounded-lg md:w-1/2">
          <img
            src="https://image.msscdn.net/images/goods_img/20200818/1551840/1551840_1_500.jpg"
            alt="Pantene Biotin Treatment"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
        {/* 제품 설명 */}
        <div className="bg-red-400 mt-1 md:mt-0 flex-grow flex flex-col justify-between md:w-1/2">
          <div className="p-4 bg-white rounded-lg shadow-lg">
            {/* 상단 브랜드 및 상품명 */}
            <div className="mb-4">
              <h2 className="text-gray-500 text-sm">쿠팡</h2>
              <h1 className="text-2xl font-bold">
                [쿠팡] 🚀 팬틴 비오틴 볼륨 케어 트리트먼트, 220ml, 2개
              </h1>
            </div>

            {/* 가격 정보 및 할인율 */}
            <div className="flex items-center  text-xl font-bold mb-2">
              <span className="mr-2 text-2xl text-red-600">▼ 42%</span>
              <div className="ml-auto">
                <span className="text-lg">현재가 </span>
                <span className="text-black text-3xl ">9,300원</span>
              </div>
            </div>

            {/* 별점, 리뷰 수, 좋아요 수 */}
            <div className="flex items-center space-x-6 mt-4 text-gray-700">
              <div className="flex items-center">
                <FaStar className="text-yellow-500 mr-1" />
                <span className="font-semibold">4.5</span>
                <span className="ml-1 text-sm">(1,234 리뷰)</span>
              </div>
              <div className="flex items-center">
                <FaHeart className="text-red-500 mr-1" />
                <span className="font-semibold">567</span>
              </div>
              <div className="flex items-center">
                <FaBookmark className="text-blue-500 mr-1" />
                <span className="font-semibold">234</span>
              </div>
            </div>
          </div>
          <div className="mt-6 border p-4 rounded-lg bg-gray-50">
            <div className="flex justify-between">
              <div className="text-gray-600">
                <p>평균가</p>
                <p>역대최고가</p>
                <p>역대최저가</p>
              </div>
              <div className="text-right">
                <p className="text-gray-800">15,944원</p>
                <p className="text-green-500">18,400원</p>
                <p className="text-red-500">8,100원</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-400 md:w-full pt-2 flex items-center justify-center space-x-1">
            <CustomButton label="구매하기" size="large"/>
            <CustomButton label="찜하기" size="large"/>
          </div>
        </div>
      </div>

      <PriceGraph />
    </div>
  );
}

export default ProductDeatil;
