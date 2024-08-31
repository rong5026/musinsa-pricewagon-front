import React from 'react';
import MenuButton from './Button/Menu';
import MobileSearchButton from './Button/MobileSearchButton';
import PCTopNavbar from '../Navbar/PCTopNavbar';
import PCSearchBar from './PCSearchBar';
import Title from './Title';
import { useState } from 'react';
import MobileSidebar from '../Navbar/MobileSidebar';
import UserMenu from './UserMenu';
import ProductRegistrationModal from '../Modal/ProductRegistrationModal';

function CommonHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 모달창
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };
  const closeModal = () => {
    setIsRegisterModalOpen(false);
  };
  const handleProductRegistrationClick = () => {
    toggleSidebar(); // Close the sidebar first
    setTimeout(() => {
      openRegisterModal(); // Then open the modal after the sidebar closes
    }, 300); // 300ms is the duration of the sidebar closing animation
  };

  return (
    <header className="bg-white px-4 w-full mt-20 sm:mt-0 sm:px-8 z-30 md:px-8 lg:px-6 h-16 sm:h-20 lg:h-36 xl:h-40 transition duration-200 ease-in-out border-b border-jnGray-300 fixed text-gray-700">
      <div className="bg-white h-full 2xl:px-8 lg:h-20 xl:h-[95px] px-0 lg:px-8 max-w-[1024px] flex items-center mx-auto box-content justify-between relative">
        <MenuButton toggleSidebar={toggleSidebar} />
        <MobileSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onProductRegistrationClick={handleProductRegistrationClick}
        />
        <Title />
        {/* PC 버전 상품 찾기 */}
        <PCSearchBar />
        {/* 문의하기, 상품등록, 마이페이지 */}
        <UserMenu />
        {/* 모바일 버전 상품 찾기  */}
        <MobileSearchButton />
      </div>
      <PCTopNavbar />
      <ProductRegistrationModal isOpen={isRegisterModalOpen} onClose={closeModal} />
    </header>
  );
}

export default CommonHeader;
