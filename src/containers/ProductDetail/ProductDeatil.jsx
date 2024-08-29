import React, { useEffect, useState } from 'react';
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
import RatingInfo from './RatingInfo';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getShopBaseUrl } from '../../\butils/baseURL';

function ProductDetail() {
  const { id, shoptype } = useParams(); // URL에서 상품 ID 추출
  const [productInfo, setProductInfo] = useState(null);
  const [productDetail, setProductDetail] = useState(null);
  const [productHistoryList, setProductHistoryList] = useState(null);

  const [fullImageUrl, setFullImageUrl] = useState('');

  useEffect(() => {
    // 개별 상품 정보 요청 API

    const fetchProductInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/products/${shoptype.toUpperCase()}/${id}`
        );
        setProductInfo(response.data.basicProductInfo);
        setProductDetail(response.data.productDetail);
        setProductHistoryList(response.data.productHistoryList);

        console.log('개별 상품 요청 성공');

        // 통신 후 baseImageUrl 및 fullImageUrl 계산
        const baseImageUrl = getShopBaseUrl(shoptype.toUpperCase());
        const imgURL = response.data.basicProductInfo.imgUrl;
        setFullImageUrl(`${baseImageUrl}${imgURL}`);
      
      } catch (error) {
        console.log('개발 상품 요청 오류:', error);
      }
    };
    fetchProductInfo();
  }, [id, shoptype]);

  // 모든 데이터가 로드되지 않았을 때 로딩 표시
  if (!productInfo || !productDetail || !productHistoryList) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
      {/* 상단 제품 이미지 및 설명 */}
      <div className="flex flex-col md:flex-row md:space-x-6 items-stretch">
        {/* 제품 이미지 */}
        <div className="flex-shrink-0 rounded-lg overflow-hidden md:w-1/2">
          <img
            src={fullImageUrl}
            alt={productInfo.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* 제품 설명 */}
        <div className="mt-6 md:mt-0 flex-grow flex flex-col justify-between">
          <div className="p-6 bg-white rounded-lg shadow-sm flex-grow">
            {/* 브랜드 및 상품명 */}
            <div className="mb-2 flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded">
                {productInfo.brand}
              </span>
              {/* 카테고리 */}

              <h2 className="text-gray-500 text-sm">바지 {'>'} 반바지 </h2>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              [{productInfo.brand}] 🚀 {productInfo.name}
            </h1>
            {/* 가격 정보 및 할인율 */}
            <div className="flex items-center text-xl font-bold mb-10 mt-10">
              <span className="mr-2 text-2xl text-red-600">▼ 42%</span>
              <div className="ml-auto text-right">
                <span className="text-lg">현재가 </span>
                <span className="text-3xl text-gray-900">{productHistoryList[0].price.toLocaleString()}원</span>
              </div>
            </div>

            {/* 별점, 리뷰 수, 좋아요 수 */}
            <RatingInfo
              rating={productInfo.starScore}
              reviews={productInfo.reviewCount}
              likes={productInfo.likeCount}
              bookmarks={234}
            />

            {/* 가격 수집 일자 */}
            <div className="text-sm text-gray-500 text-left mt-2">
              가격 수집 일자:{' '}
              <span className="font-medium text-gray-700">
                {/* 2024년 7월 20일 14:30 */}
                {productHistoryList[0].createdAt}
              </span>
            </div>
          </div>

          {/* 가격 정보 카드 */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-2">
            <PriceInfoCard
              label="평균가"
              value={productDetail.middlePrice}
              icon={<FaEquals />}
              color="text-gray-800"
            />
            <PriceInfoCard
              label="역대 최고가"
              value={productDetail.highPrice}
              icon={<FaArrowUp />}
              color="text-green-500"
            />
            <PriceInfoCard
              label="역대 최저가"
              value={productDetail.lowPrice}
              icon={<FaArrowDown />}
              color="text-red-500"
            />
          </div>

          {/* 구매 및 찜하기 버튼 */}
          <div className="bg-white mt-2 flex items-center justify-between space-x-4 p-4 rounded-lg shadow-md">
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
