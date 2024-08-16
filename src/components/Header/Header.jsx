import React from 'react';
import MobileHeader from './MobileHeader';
import CommonHeader from './CommonHeader';

function Header() {
  return (
    <div className="w-full">
      <MobileHeader />
      <CommonHeader />
    </div>
  );
}

export default Header;
