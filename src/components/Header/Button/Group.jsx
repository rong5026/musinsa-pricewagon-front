import React from 'react';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';

const ButtonGroup = () => {

  return (
    <div className="hidden lg:flex relative w-[300px]">
    <ul className="flex w-full text-sm font-medium list-none text-jnGray-900 break-keep">
      <li className="flex items-center justify-center pr-3">
        <button className="flex items-center justify-center group rounded-full bg-white p-2 hover:bg-gray-100 transition-colors duration-300">
          <div className="relative cursor-pointer group-hover:scale-105 transition-transform duration-300">
            <IoChatbubbleEllipsesOutline size={24} />
          </div>
          <p className="ml-1 group-hover:scale-105 transition-transform duration-300">
            문의하기
          </p>
        </button>
      </li>
      <li className="rounded-full hover:bg-gray-100 transition-colors duration-300 relative flex items-center justify-center px-3 before:content-[''] before:absolute before:h-4 before:w-[1px] before:bg-gray-300 before:-inset-1 before:top-1/2 before:transform before:-translate-y-1/2">
        <button className="group flex items-center justify-center [&>p]:ml-1 whitespace-nowrap">
          <div className="relative cursor-pointer group-hover:scale-105 transition-transform duration-300">
            <AiOutlineAppstoreAdd size={24} />
          </div>

          <p className="group-hover:scale-105 transition-transform duration-300">
            상품 등록
          </p>
        </button>
      </li>

      <li className="rounded-full hover:bg-gray-100 transition-colors duration-300 relative flex items-center justify-center px-3 before:content-[''] before:absolute before:h-4 before:w-[1px] before:bg-gray-300 before:-inset-1 before:top-1/2 before:transform before:-translate-y-1/2">
        <button className="group flex items-center justify-center [&>p]:ml-1 whitespace-nowrap">
          <div className="relative cursor-pointer group-hover:scale-105 transition-transform duration-300">
            <GoPerson size={24} />
          </div>

          <p className="group-hover:scale-105 transition-transform duration-300">
            마이페이지
          </p>
        </button>
      </li>
    </ul>
  </div>
  );
};

export default ButtonGroup;