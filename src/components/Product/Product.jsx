import React from 'react';

function Product({ product }) { // 인자로 product를 받음
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
    >
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.price}</p>
        <p className="text-gray-400 text-sm">{product.date}</p>
      </div>
    </div>
  );
}

export default Product;