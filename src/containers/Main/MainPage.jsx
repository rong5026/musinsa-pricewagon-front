import React from 'react';
import MainBanner from '../../components/Banner/MainBanner'
import BestProductsList from './BestProductList';
import PromoBanner from '../../components/Banner/PromotionBanner';
import ProductRegistration from './ProductRegistration';
import UpdatedProductList from './UpdatedProductList';
import DivideLine from '../../components/DivideLine';

function MainPage() {
 
  return (
    <div className="p-4 h-full">
      <MainBanner/>
      <BestProductsList/>
      <DivideLine/>
      {/* <ProductRegistration/>
      <DivideLine/> */}
      <UpdatedProductList/>
      <PromoBanner/>

    </div>
  );
}

export default MainPage;
