import React from 'react';

function CommonHeader() {
  return (
    <header className="px-4 md:px-8 lg:px-0 h-16 sm:h-20 lg:h-36 xl:h-40 w-full transition duration-200 ease-in-out border-b border-jnGray-300 fixed z-20 text-gray-700 bg-white">
      <div className="h-full lg:h-20 xl:h-24 px-0 lg:px-8 2xl:px-16 max-w-[1024px] min-[1600px]:max-w-[1280px] flex items-center mx-auto box-content justify-between relative  bg-[#ffffff]">
        <button className="flex flex-col items-center justify-center flex-shrink-0 outline-none menuBtn start-0 focus:outline-none lg:hidden basis-[24px] w-[24px] h-[24px]">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path
              d="M5 18H19"
              stroke="#141313"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M5 12H19"
              stroke="#141313"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M5 6L19 6"
              stroke="#141313"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>

        <div className="flex text-center ml-3 lg:ml-0 lg:max-w-[200px] font-bold text-lg">
            PRICEWAGON
        </div>
        <button className="flex items-center justify-center flex-shrink-0 ga4_main_top_search end-0 focus:outline-none lg:hidden basis-[24px] w-[24px] h-[24px]">
        <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>

        </button>
      </div>
    </header>
  );
}

export default CommonHeader;
