import React, { useState } from 'react';
import Select from 'react-select';
import { FaShoppingCart } from 'react-icons/fa';

const storeOptions = [
  { value: 'coupang', label: '쿠팡' },
  { value: 'naver', label: '네이버 쇼핑' },
  { value: '11st', label: '11번가' },
  { value: 'gmarket', label: 'G마켓' },
];

function ProductRegistration() {
  const [selectedStore, setSelectedStore] = useState(null);
  const [productUrl, setProductUrl] = useState('');

  const handleStoreChange = (selectedOption) => {
    setSelectedStore(selectedOption);
  };

  const handleUrlChange = (e) => {
    setProductUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 등록 로직 추가
    alert(`상품이 등록되었습니다: ${selectedStore?.label}, ${productUrl}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-7xl mx-auto my-12">
      <div className="flex items-center justify-center mb-6">
        <FaShoppingCart className="text-3xl text-green-600 mr-2" />
        <h2 className="text-3xl font-bold text-gray-800">상품 등록</h2>
      </div>
      <p className="text-gray-600 text-center mb-8">
        찾으시는 상품이 없으신가요? 새로 등록하고 가격 알림을 받아보세요!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="store">
            쇼핑몰 선택
          </label>
          <Select
            id="store"
            value={selectedStore}
            onChange={handleStoreChange}
            options={storeOptions}
            placeholder="쇼핑몰을 선택하세요"
            className="w-full text-gray-800"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: '#d1d5db',
                boxShadow: 'none',
                '&:hover': { borderColor: '#10b981' }, // Hover 색상 변경
              }),
            }}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="productUrl">
            상품 URL 입력
          </label>
          <input
            id="productUrl"
            type="text"
            value={productUrl}
            onChange={handleUrlChange}
            placeholder="상품의 URL을 입력하세요"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          등록하기
        </button>
      </form>
    </div>
  );
}

export default ProductRegistration;