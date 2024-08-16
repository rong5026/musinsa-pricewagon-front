import React from 'react';
import hamster from '../../assets/images/hamster.png'

function Header() {
  return (
    <header className="h-20 w-full bg-[#F1F4F6] z-10 items-center justify-between px-4 flex header-hide">
    <img alt='pricewagon' src={hamster} width={42} height={42} loading="lazy" />
    <div className="flex flex-col justify-center pl-4">
      <span className="font-bold leading-5">빠르고 간편하게 비교하기</span>
      <span className="text-[12px] leading-4 text-gray-500">앱에서 더 쉽고 빠르게 이용해보세요!</span>
    </div>
    <div className="bg-green-400 text-white font-bold px-3 py-[6px] text-[12px] rounded-full">
      <span>앱 다운로드</span>
    </div>
  </header>
  );
}

export default Header;
