import React, { useState } from 'react';

function ProductRegistration() {
  const [selectedStore, setSelectedStore] = useState('');
  const [productUrl, setProductUrl] = useState('');

  const handleStoreChange = (e) => {
    setSelectedStore(e.target.value);
  };

  const handleUrlChange = (e) => {
    setProductUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 등록 로직 추가
    alert(`상품이 등록되었습니다: ${selectedStore}, ${productUrl}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">찾으시는 상품이 없으신가요?</h2>
      <p className="text-gray-600 mb-6">
        새로 등록하고 가격 알림을 받아보세요!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="store">
            쇼핑몰 선택
          </label>
          <select
            id="store"
            value={selectedStore}
            onChange={handleStoreChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>쇼핑몰을 선택하세요</option>
            <option value="coupang">쿠팡</option>
            <option value="naver">네이버 쇼핑</option>
            <option value="11st">11번가</option>
            <option value="gmarket">G마켓</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="productUrl">
            상품 URL 입력
          </label>
          <input
            id="productUrl"
            type="text"
            value={productUrl}
            onChange={handleUrlChange}
            placeholder="상품의 URL을 입력하세요"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          등록하기
        </button>
      </form>
    </div>
  );
}

export default ProductRegistration;