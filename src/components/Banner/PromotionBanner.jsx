
import React from 'react';
import Promotion from '../../assets/images/promotion.png'

function PromoBanner() {
  return (
    <div className="w-full px-4 h-40 md:h-full rounded-2xl mt-10">
      {/* 배경 이미지 */}
      <img
        src={Promotion}
        alt="배너"
        className="w-full h-full object-cover rounded-2xl "
      />
    </div>
  );
}

export default PromoBanner;