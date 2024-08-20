import React from 'react';
import MainBanner from '../../components/Banner/MainBanner'
import DiscountedProductsList from './DiscountedProduct';
import PromoBanner from '../../components/Banner/PromotionBanner';

function MainPage() {
 
  return (
    <div className="p-4 h-full">
      <MainBanner/>
      <DiscountedProductsList/>
      <PromoBanner/>
    </div>
  );
}

export default MainPage;
