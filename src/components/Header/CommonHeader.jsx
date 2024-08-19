import React from 'react';
import MenuButton from './Button/Menu';
import SearchButton from './Button/Search';
import Category from './Button/Category';

function CommonHeader() {
  return (
    <header className="px-4 w-full  mt-20 sm:mt-0 sm:px-8 z-30 md:px-8 lg:px-6 h-16 sm:h-20 lg:h-36 xl:h-40 transition duration-200 ease-in-out border-b border-jnGray-300 fixed text-gray-700">
      <div className="bg-white h-full 2xl:px-8 lg:h-20 xl:h-24 px-0 lg:px-8 max-w-[1024px] flex items-center mx-auto box-content justify-between relative">
        <MenuButton />

        <div className="flex text-center font-bold text-lg justify-center">
          MUSINSAWAGON
        </div>
        
        <SearchButton />
      </div>
      <Category />
    </header>
  );
}

export default CommonHeader;
