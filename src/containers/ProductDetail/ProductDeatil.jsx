import React, { useEffect } from 'react';
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

function ProductDetail() {
  const { id } = useParams(); // URL에서 상품 ID 추출
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // 개별 상품 정보 요청 API
    async function fetchProductInfo() {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
      setProduct(data);

      } catch (error) {
        console.log('개별상품 데이터 오류:' , error);
      }
      fetchProductInfo();
    }
  }, [id]);
  
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
            <div className="mb-2 flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded">
                쿠팡
              </span>
              {/* 카테고리 */}

              <h2 className="text-gray-500 text-sm">바지 {">"} 반바지 </h2>
             
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              [쿠팡] 🚀 팬틴 비오틴 볼륨 케어 트리트먼트, 220ml, 2개
            </h1>
            {/* 가격 정보 및 할인율 */}
            <div className="flex items-center text-xl font-bold mb-10 mt-10">
              <span className="mr-2 text-2xl text-red-600">▼ 42%</span>
              <div className="ml-auto text-right">
                <span className="text-lg">현재가 </span>
                <span className="text-3xl text-gray-900">9,300원</span>
              </div>
            </div>

            {/* 별점, 리뷰 수, 좋아요 수 */}
            <RatingInfo
              rating={4.5}
              reviews={1234}
              likes={567}
              bookmarks={234}
            />

            {/* 가격 수집 일자 */}
            <div className="text-sm text-gray-500 text-left mt-2">
              가격 수집 일자:{' '}
              <span className="font-medium text-gray-700">
                2024년 7월 20일 14:30
              </span>
            </div>
          </div>

          {/* 가격 정보 카드 */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-2">
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
