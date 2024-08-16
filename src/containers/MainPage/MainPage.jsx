import React from 'react'

function MainPage() {
  const products = [
    // 예시 상품 데이터
    { id: 1, name: "도호 간절기 여성 H라인 스커트", price: "65,000원", date: "1일 전", img: "https://image.msscdn.net/images/goods_img/20200818/1551840/1551840_1_500.jpg" },
    { id: 2, name: "S 아베크롬비 원피스 상태A", price: "20,000원", date: "10일 전", img: "https://image.msscdn.net/images/goods_img/20210825/2086653/2086653_17048764754484_500.jpg" },
    { id: 3, name: "아디다스 스웻반바지 해외라지", price: "20,000원", date: "2일 전", img: "https://image.msscdn.net/images/goods_img/20210928/2149254/2149254_17138588137724_500.jpg" },
    { id: 4, name: "기타 상품", price: "20,000원", date: "3일 전", img: "https://image.msscdn.net/images/goods_img/20240422/4074847/4074847_17205019513135_500.jpg" },
    { id: 5, name: "도호 간절기 여성 H라인 스커트", price: "65,000원", date: "1일 전", img: "https://image.msscdn.net/images/goods_img/20200818/1551840/1551840_1_500.jpg" },
    { id: 6, name: "S 아베크롬비 원피스 상태A", price: "20,000원", date: "10일 전", img: "https://image.msscdn.net/images/goods_img/20210825/2086653/2086653_17048764754484_500.jpg" },
    { id: 7, name: "아디다스 스웻반바지 해외라지", price: "20,000원", date: "2일 전", img: "https://image.msscdn.net/images/goods_img/20210928/2149254/2149254_17138588137724_500.jpg" },
    { id: 8, name: "기타 상품", price: "20,000원", date: "3일 전", img: "https://image.msscdn.net/images/goods_img/20240422/4074847/4074847_17205019513135_500.jpg" },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <p className="text-gray-400 text-sm">{product.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage