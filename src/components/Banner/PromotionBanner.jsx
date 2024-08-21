import React from 'react';
import Promotion from '../../assets/images/promotion.png';

function PromoBanner() {
  return (
    <div>
      <div className="w-full my-[1%] border-[1px] border-lightGray/30"></div>
      <div className="w-full h-40 md:h-full rounded-2xl mt-10">
        {/* 배경 이미지 */}

        <img
          src={Promotion}
          alt="배너"
          className="w-full h-full object-cover rounded-2xl "
        />
      </div>
    </div>
  );
}

export default PromoBanner;
