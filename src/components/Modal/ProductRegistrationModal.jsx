import React, { useState } from 'react';
import Select from 'react-select';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';

const storeOptions = [
  { value: 'musinsa', label: '무신사' },
  { value: 'ably', label: '에이블리' },
  { value: 'brandi', label: '브랜디' },
  { value: 'zigzag', label: '지그재그' },
];

const ProductRegistrationModal = ({ isOpen, onClose }) => {
  const [selectedStore, setSelectedStore] = useState(null);
  const [productUrl, setProductUrl] = useState('');

  const handleStoreChange = selectedOption => {
    setSelectedStore(selectedOption);
  };

  const handleUrlChange = e => {
    setProductUrl(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // 등록 로직 추가
    alert(`상품이 등록되었습니다: ${selectedStore?.label}, ${productUrl}`);
  };

  if (!isOpen) return null;

  const CloseButton = () => {
    return (
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <FaTimes size={24} />
      </button>
    );
  };

  const RegisterHeader = () => {
    return (
      <div>
        <div className="flex items-center justify-center mb-6">
          <FaShoppingCart className="text-3xl text-green-600 mr-2" />
          <h2 className="text-3xl font-bold text-gray-800">상품 등록</h2>
        </div>
        <p className="text-gray-600 text-center mb-8">
          찾으시는 상품이 없으신가요? 새로 등록하고 가격 알림을 받아보세요!
        </p>
      </div>
    );
  };

  const SubmitForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="store"
          >
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
              control: base => ({
                ...base,
                borderColor: '#d1d5db',
                boxShadow: 'none',
                '&:hover': { borderColor: '#10b981' }, // Hover 색상 변경
              }),
            }}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="productUrl"
          >
            상품 ID 입력
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
    );
  };

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-7xl mx-auto my-12 relative">
            {/* 닫기 버튼 */}
            <CloseButton />
            <RegisterHeader />
            <SubmitForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRegistrationModal;
