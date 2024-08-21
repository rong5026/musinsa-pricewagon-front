import React from 'react';
import MainBanner from '../../components/Banner/MainBanner'
import BestProductsList from './BestProductList';
import PromoBanner from '../../components/Banner/PromotionBanner';
import ProductRegistration from './ProductRegistration';
import UpdatedProductList from './UpdatedProductList';

function MainPage() {
 
  return (
    <div className="p-4 h-full">
      <MainBanner/>
      <BestProductsList/>
      <PromoBanner/>
      <ProductRegistration/>
      <UpdatedProductList/>
    </div>
  );
}

export default MainPage;
