import React from 'react';
import MainBanner from '../../components/Banner/MainBanner'
import DiscountedProductsList from './DiscountedProduct';

function MainPage() {
 
  return (
    <div className="p-4 h-full">
      <MainBanner/>
      <DiscountedProductsList/>
      
    </div>
  );
}

export default MainPage;
