import React from 'react';

function CommonHeader() {
  return (
    <header className="px-4 w-full bg-slate-400 mt-20 sm:mt-0 sm:px-8 z-30 md:px-8 lg:px-6 h-16 sm:h-20 lg:h-36 xl:h-40 transition duration-200 ease-in-out border-b border-jnGray-300 fixed text-gray-700">
      <div className="bg-white h-full lg:h-20 xl:h-24 px-0 lg:px-8 2xl:px-8 max-w-[1024px] flex items-center mx-auto box-content justify-between relative">
        <button className="flex flex-col items-center justify-center flex-shrink-0 outline-none start-0 focus:outline-none lg:hidden basis-[24px] w-[24px] h-[24px]">
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

        <div className="flex text-center font-bold text-lg justify-center">
          MUSINSAWAGON
        </div>
        <button className="flex items-center justify-center flex-shrink-0 ga4_main_top_search end-0 focus:outline-none lg:hidden basis-[24px] w-[24px] h-[24px]">
          <svg
            className="h-8 w-8 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <circle cx="11" cy="11" r="8" />{' '}
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default CommonHeader;
