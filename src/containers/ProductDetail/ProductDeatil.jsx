import React from 'react';
import {
  FaStar,
  FaHeart,
  FaBookmark,
  FaArrowUp,
  FaArrowDown,
  FaEquals,
} from 'react-icons/fa';
import PriceGraph from '../../components/Graph/PriceGraph';
import CustomButton from '../../components/Button/CustomButton';
import PriceInfoCard from './PriceInfoCard';

function ProductDetail() {
  return (
    <div className="bg-gray-100 max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
      {/* 상단 제품 이미지 및 설명 */}
      <div className="flex flex-col md:flex-row md:space-x-6 items-stretch">
        {/* 제품 이미지 */}
        <div className="flex-shrink-0 rounded-lg overflow-hidden md:w-1/2">
          <img
            src="https://image.msscdn.net/images/goods_img/20200818/1551840/1551840_1_500.jpg"
            alt="Pantene Biotin Treatment"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* 제품 설명 */}
        <div className="mt-6 md:mt-0 flex-grow flex flex-col justify-between">
          <div className="p-6 bg-white rounded-lg shadow-sm flex-grow">
            {/* 브랜드 및 상품명 */}
            <div className="mb-6">
              <h2 className="text-gray-500 text-sm">브랜드: 쿠팡</h2>
              <h1 className="text-2xl font-bold text-gray-800">
                [쿠팡] 🚀 팬틴 비오틴 볼륨 케어 트리트먼트, 220ml, 2개
              </h1>
            </div>

            {/* 가격 정보 및 할인율 */}
            <div className="flex items-center text-xl font-bold mb-10 mt-10">
              <span className="mr-2 text-2xl text-red-600">▼ 42%</span>
              <div className="ml-auto text-right">
                <span className="text-lg">현재가 </span>
                <span className="text-3xl text-gray-900">9,300원</span>
              </div>
            </div>

            {/* 별점, 리뷰 수, 좋아요 수 */}
            <div className="flex items-center space-x-6 mt-4 text-gray-700">
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
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

          {/* 가격 정보 카드 */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            <PriceInfoCard
              label="평균가"
              value="15,944원"
              icon={<FaEquals />}
              color="text-gray-800"
            />
            <PriceInfoCard
              label="역대 최고가"
              value="18,400원"
              icon={<FaArrowUp />}
              color="text-green-500"
            />
            <PriceInfoCard
              label="역대 최저가"
              value="8,100원"
              icon={<FaArrowDown />}
              color="text-red-500"
            />
          </div>

          {/* 구매 및 찜하기 버튼 */}
          <div className="bg-white mt-6 flex items-center justify-between space-x-4 p-4 rounded-lg shadow-md">
            <CustomButton label="구매하기" size="large" />
            <CustomButton label="찜하기" size="large" />
          </div>
        </div>
      </div>

      {/* 가격 그래프 */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">가격 그래프</h2>
        <PriceGraph />
      </div>
    </div>
  );
}

export default ProductDetail;
