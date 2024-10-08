import React from 'react';
import Product from './Product';
import VercelProduct from './VercelProduct';

function ProductDisplay({products}) {

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:pt-1 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <VercelProduct key={product.productNumber} product={product} />
      ))}
    </div>
  );
}

export default ProductDisplay;
