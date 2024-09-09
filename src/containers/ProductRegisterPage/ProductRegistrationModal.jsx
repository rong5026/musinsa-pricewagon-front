import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaTimes, FaStore, FaLink, FaCheckCircle } from 'react-icons/fa';

const storeOptions = [
  { value: 'musinsa', label: '무신사', color: '#0078FF' },
  { value: 'ably', label: '에이블리', color: '#FF3478' },
  { value: 'brandi', label: '브랜디', color: '#7000FF' },
  { value: 'zigzag', label: '지그재그', color: '#FF4E50' },
];

const RegistrationStep = ({ icon, title, description, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
    style={{ borderTop: `4px solid ${color}` }}
  >
    <div className="text-3xl sm:text-4xl mb-2 sm:mb-4" style={{ color }}>{icon}</div>
    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 text-center">{title}</h3>
    <p className="text-xs sm:text-sm text-gray-600 text-center">{description}</p>
  </motion.div>
);

export default function Component({ isOpen, onClose }) {
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
    alert(`상품이 등록되었습니다: ${selectedStore}, ${productUrl}`);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm p-4 sm:p-0"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden"
          >
            <div className="p-4 sm:p-8">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes size={24} />
              </motion.button>
              
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center mb-4 sm:mb-8"
              >
                <FaShoppingCart className="text-4xl sm:text-5xl text-green-500 mr-2 sm:mr-4" />
                <h2 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  상품 등록
                </h2>
              </motion.div>
              
              <motion.p 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 text-center mb-6 sm:mb-10 text-sm sm:text-lg"
              >
                찾으시는 상품이 없으신가요? 새로 등록하고 가격 알림을 받아보세요!
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
                <RegistrationStep 
                  icon={<FaStore />}
                  title="Step 1: 쇼핑몰 선택"
                  description="원하는 상품이 있는 쇼핑몰을 선택해주세요."
                  color="#3B82F6"
                />
                <RegistrationStep 
                  icon={<FaLink />}
                  title="Step 2: 상품 URL 입력"
                  description="선택한 쇼핑몰에서 상품의 URL을 복사하여 입력해주세요."
                  color="#8B5CF6"
                />
                <RegistrationStep 
                  icon={<FaCheckCircle />}
                  title="Step 3: 등록 완료"
                  description="입력한 정보를 확인하고 등록 버튼을 클릭하세요."
                  color="#10B981"
                />
              </div>
              
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-4 sm:space-y-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="store">
                    쇼핑몰 선택
                  </label>
                  <select
                    id="store"
                    value={selectedStore}
                    onChange={handleStoreChange}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 bg-white text-sm sm:text-base"
                  >
                    <option value="">쇼핑몰을 선택하세요</option>
                    {storeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="productUrl">
                    상품 URL 입력
                  </label>
                  <input
                    id="productUrl"
                    type="text"
                    value={productUrl}
                    onChange={handleUrlChange}
                    placeholder="상품의 URL을 입력하세요"
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 text-sm sm:text-base"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm sm:text-base"
                >
                  등록하기
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}