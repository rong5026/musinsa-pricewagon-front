import React from 'react';
import PriceGraph from '../../components/Graph/PriceGraph';

function ProductDeatil() {
  return (
    <div className="bg-green-200 max-w-4xl mx-auto p-6 rounded-lg shadow-md">
      {/* 상단 제품 이미지 및 설명 */}
      <div className="bg-slate-400 flex flex-col md:flex-row">
        {/* 제품 이미지 */}
        <div className="flex-shrink-0 rounded-lg">
          <img
            src="https://image.msscdn.net/images/goods_img/20200818/1551840/1551840_1_500.jpg"
            alt="Pantene Biotin Treatment"
            className="w-full md:w-64 h-auto object-contain rounded-lg"
          />
        </div>

        {/* 제품 설명 */}
        <div className="bg-red-400 mt-6 md:mt-0 md:ml-8 flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-bold">
              [쿠팡] 🚀 팬틴 비오틴 볼륨 케어 트리트먼트, 220ml, 2개
            </h1>
            <p className="text-gray-500 mt-2">
              팬틴 비오틴 볼륨 케어 트리트먼트, 2개, 220ml
            </p>
            <div className="mt-4 flex items-center text-red-600 text-lg font-bold">
              <span className="mr-2">▼ 42%</span>
              <span className="text-black">현재가 9,300원</span>
            </div>
          </div>

          <div className="mt-6 border p-4 rounded-lg bg-gray-50">
            <div className="flex justify-between">
              <div className="text-gray-600">
                <p>평균가</p>
                <p>역대최고가</p>
                <p>역대최저가</p>
              </div>
              <div className="text-right">
                <p className="text-gray-800">15,944원</p>
                <p className="text-green-500">18,400원</p>
                <p className="text-red-500">8,100원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDeatil;
