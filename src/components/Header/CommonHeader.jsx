import React from 'react';
import MenuButton from './Button/Menu';
import MobileSearchButton from './Button/MobileSearchButton';
import Category from './Button/Category';
import ButtonGroup from './Button/Group';
import PCSearchBar from './PCSearchBar';
import Title from './Title';
import { useState } from 'react';
import MobileSidebar from '../Navbar/MobileSidebar'

function CommonHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <header className="bg-white px-4 w-full mt-20 sm:mt-0 sm:px-8 z-30 md:px-8 lg:px-6 h-16 sm:h-20 lg:h-36 xl:h-40 transition duration-200 ease-in-out border-b border-jnGray-300 fixed text-gray-700">
      <div className="bg-white h-full 2xl:px-8 lg:h-20 xl:h-[95px] px-0 lg:px-8 max-w-[1024px] flex items-center mx-auto box-content justify-between relative">
        <MenuButton toggleSidebar={toggleSidebar} />
        <MobileSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <Title />
        {/* PC 버전 상품 찾기 */}
        <PCSearchBar />
        {/* 문의하기, 상품등록, 마이페이지 */}
        <ButtonGroup /> 
        {/* 모바일 버전 상품 찾기  */}
        <MobileSearchButton />
      </div>

      <Category />
    </header>
  );
}

export default CommonHeader;
