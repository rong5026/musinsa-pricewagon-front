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
import Loading from '../../components/Loading/Loading';

function ProductDetail() {
  const { id, shoptype } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [productDetail, setProductDetail] = useState(null);
  const [productHistoryList, setProductHistoryList] = useState(null);
  const [productCategoryList, setProductCategoryList] = useState(null);
  const [fullImageUrl, setFullImageUrl] = useState('');

  const getPriceChange = (current, previous) => {
    const diff = current - previous;
    const percentage = Math.floor((diff / previous) * 100); // 소수점 제거
    return { diff, percentage };
  };

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/products/${shoptype.toUpperCase()}/${id}`
        );

        const {
          basicProductInfo,
          productDetail,
          productHistoryList,
          parentAndChildCategoryDTO,
        } = response.data;

        setProductInfo(basicProductInfo);
        setProductDetail(productDetail);
        setProductCategoryList(parentAndChildCategoryDTO);
        // 날짜 형식 변환
        setProductHistoryList(
          productHistoryList.map(history => ({
            ...history,
            createdAt: new Date(history.createdAt)
              .toISOString() // ISO 8601 문자열로 변환
              .split('T')[0], // 날짜 부분만 추출 (YYYY-MM-DD 형식)
          }))
        );

        const baseImageUrl = getShopBaseUrl(shoptype.toUpperCase());
        setFullImageUrl(`${baseImageUrl}${basicProductInfo.imgUrl}`);

        console.log(response.data);
        console.log('개별 상품 요청 성공');
      } catch (error) {
        console.error('개별 상품 요청 오류:', error);
      }
    };

    fetchProductInfo();
  }, [id, shoptype]);

  if (!productInfo || !productDetail || !productHistoryList) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-50 max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row md:space-x-6 items-stretch">
        <div className="flex-shrink-0 rounded-lg overflow-hidden md:w-1/2">
          <img
            src={fullImageUrl}
            alt={productInfo.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="mt-6 md:mt-0 flex-grow flex flex-col justify-between">
          <div className="p-6 bg-white rounded-lg shadow-sm flex-grow">
            <div className="mb-2 flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded">
                {productInfo.brand}
              </span>
              {/* 카테고리 */}
              <h2 className="text-gray-500 text-sm">
                {productCategoryList.parentCategory.cateroyName}
                {' > '}
                {productCategoryList.childCategory.cateroyName}
              </h2>
            </div>
            {/* 상품 제목 */}
            <h1 className="text-2xl font-bold text-gray-800 mb-10">
              [{productInfo.brand}] {productInfo.name}
            </h1>

            <div className="text-end text-gray-400 line-through">
              {productInfo.previousPrice.toLocaleString()}원
            </div>
            <div className="flex items-center text-xl font-bold mb-5">
              <span
                className={`md:ml-auto sm:mr-5 text-2x
                ${
                  productInfo.salePrice >= productInfo.previousPrice
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {productInfo.salePrice >= productInfo.previousPrice ? (
                  <span>▲</span>
                ) : (
                  <span>▼</span>
                )}
                <span>
                  {' '}
                  (
                  {
                     getPriceChange(productInfo.salePrice, productInfo.previousPrice).percentage
                  }
                  %)
                </span>
              </span>
              <div className="text-left ml-auto">
                <span className="text-base ">현재가 </span>
                <span className="text-3xl text-gray-900">
                  {productHistoryList[0].price.toLocaleString()}원
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end">
              <RatingInfo
                rating={productInfo.starScore}
                reviews={productInfo.reviewCount}
                likes={productInfo.likeCount}
                bookmarks={234}
              />

              <div className="text-sm text-gray-500 text-left mt-2">
                가격 수집 일자:{' '}
                <span className="font-medium text-gray-700">
                  {productHistoryList[0].createdAt}
                </span>
              </div>
            </div>
          </div>

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

          <div className="bg-white mt-2 flex items-center justify-between space-x-4 p-4 rounded-lg shadow-md">
            <CustomButton
              label="구매하기"
              size="large"
              clickUrl={productDetail.productUrl}
            />
            <CustomButton label="찜하기" size="large" />
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">가격 그래프</h2>
        <PriceGraph data={productHistoryList} />
      </div>
    </div>
  );
}

export default ProductDetail;
