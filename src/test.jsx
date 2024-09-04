import React, { useState, useEffect } from 'react';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  StarIcon,
  HeartIcon,
  BookmarkIcon,
  ShoppingBagIcon,
} from 'lucide-react';

const initialProducts = [
  {
    id: 1,
    name: '베이직 티셔츠',
    brand: '무신사 스탠다드',
    currentPrice: 19000,
    previousPrice: 20000,
    image: '/placeholder.svg?height=200&width=200',
    rating: 4.5,
    likes: 1200,
    scraps: 300,
  },
  {
    id: 2,
    name: '슬림핏 청바지',
    brand: '리바이스',
    currentPrice: 59000,
    previousPrice: 55000,
    image: '/placeholder.svg?height=200&width=200',
    rating: 4.2,
    likes: 890,
    scraps: 150,
  },
  {
    id: 3,
    name: '캔버스 스니커즈',
    brand: '컨버스',
    currentPrice: 45000,
    previousPrice: 45000,
    image: '/placeholder.svg?height=200&width=200',
    rating: 4.7,
    likes: 2100,
    scraps: 480,
  },
  {
    id: 4,
    name: '후드 집업',
    brand: '나이키',
    currentPrice: 39000,
    previousPrice: 42000,
    image: '/placeholder.svg?height=200&width=200',
    rating: 4.3,
    likes: 1500,
    scraps: 220,
  },
];

export default function ResponsiveFontPriceComparisonComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProducts(initialProducts);
    };
    fetchData();
  }, []);

  const getPriceChange = (current, previous) => {
    const diff = current - previous;
    const percentage = ((diff / previous) * 100).toFixed(1);
    return { diff, percentage };
  };

  const formatNumber = num => {
    return num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
  };

  return (
    <div className="container mx-auto p-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-slate-500 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="absolute top-0 left-0 bg-black bg-opacity-60 text-white px-2 py-1 text-xs sm:text-sm rounded-br-lg">
                {product.brand}
              </div>

            </div>
            <div className="p-3 sm:p-4">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                {product.name}
              </h2>
              <div className="flex justify-between items-center mb-2">

                <span className="text-lg sm:text-xl md:text-2xl font-bold">
                  {product.currentPrice.toLocaleString()}원
                </span>

                {getPriceChange(product.currentPrice, product.previousPrice)
                  .diff !== 0 && (
                  <span
                    className={`flex items-center text-xs sm:text-sm ${product.currentPrice > product.previousPrice ? 'text-red-500' : 'text-green-500'}`}
                  >
                    {product.currentPrice > product.previousPrice ? (
                      <ArrowUpIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    ) : (
                      <ArrowDownIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    )}
                    {Math.abs(
                      getPriceChange(
                        product.currentPrice,
                        product.previousPrice
                      ).diff
                    ).toLocaleString()}
                    원 (
                    {
                      getPriceChange(
                        product.currentPrice,
                        product.previousPrice
                      ).percentage
                    }
                    %)
                  </span>
                )}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mb-3">
                이전 가격: {product.previousPrice.toLocaleString()}원
              </div>
              <div className="flex items-center mb-3 text-xs sm:text-sm">
                <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-semibold">
                  {product.rating.toFixed(1)}
                </span>
                <div className="flex items-center ml-3 sm:ml-4">
                  <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  <span className="ml-1">{formatNumber(product.likes)}</span>
                </div>
                <div className="flex items-center ml-3 sm:ml-4">
                  <BookmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  <span className="ml-1">{formatNumber(product.scraps)}</span>
                </div>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center text-xs sm:text-sm">
                <ShoppingBagIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                장바구니에 담기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
