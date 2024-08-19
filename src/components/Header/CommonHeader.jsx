import React from 'react';
import MenuButton from './Button/Menu';
import SearchButton from './Button/Search';
import Category from './Button/Category';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

function CommonHeader() {
  return (
    <header className="px-4 w-full  mt-20 sm:mt-0 sm:px-8 z-30 md:px-8 lg:px-6 h-16 sm:h-20 lg:h-36 xl:h-40 transition duration-200 ease-in-out border-b border-jnGray-300 fixed text-gray-700">
      <div className="bg-white h-full 2xl:px-8 lg:h-20 xl:h-24 px-0 lg:px-8 max-w-[1024px] flex items-center mx-auto box-content justify-between relative">
        <MenuButton />

        <div className="bg-slate-500 flex text-center font-bold text-lg justify-center">
          MUSINSAWAGON
        </div>

        <div className=" relative hidden ms-7 me-7 xl:ms-9 lg:block flex-1">
          <form className="w-full relative flex items-center h-10 overflow-hidden rounded-md bg-gray-100 px-3 py-[10px] lg:px-5 space-x-2">
            <label className="flex items-center py-0.5 flex-none w-4 h-4">
              <svg
                className="w-[16px] h-[16px] text-[#9CA3AF]"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </label>
            <input
              autoComplete="off"
              placeholder="어떤 상품을 찾으시나요?"
              className="flex-auto text-sm bg-transparent placeholder-[#9CA3AF] overflow-hidden text-ellipsis whitespace-nowrap outline-none"
            />
          </form>
        </div>

        <div className="hidden lg:flex relative w-[300px]">
          <ul className="flex w-full text-sm font-medium list-none text-jnGray-900 break-keep">
            <li className="flex items-center justify-center pr-3">
              <button className="flex items-center justify-center group rounded-full bg-white p-2 hover:bg-gray-200 transition-colors duration-300">
                <div className="relative cursor-pointer group-hover:scale-105 transition-transform duration-300">
                  <IoChatbubbleEllipsesOutline size={24} />
                </div>
                <p className="ml-1 group-hover:scale-105 transition-transform duration-300">
                  문의하기
                </p>
              </button>
            </li>
          </ul>
        </div>

        <SearchButton />
      </div>
      <Category />
    </header>
  );
}

export default CommonHeader;
