import React from 'react';
import { FaTimes } from 'react-icons/fa';

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-full  lg:w-2/5 bg-white shadow-lg transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="p-6 flex justify-between items-center ">
        <h2 className="text-lg font-semibold">MUSINSAWAGON</h2>

        <button onClick={toggleSidebar}>
          <FaTimes size={24} />
        </button>
      </div>
      <nav className="mt-8">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">카테고리</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">이벤트</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">J쿠폰</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">사기조회</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">시세조회</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">출석체크</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">찜한 상품</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">로그인</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;