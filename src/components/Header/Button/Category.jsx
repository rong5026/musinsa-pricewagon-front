import React from 'react';
import { FaTshirt, FaFemale, FaShoePrints, FaShoppingBag, FaHatCowboy, FaHeartbeat } from 'react-icons/fa';
import { PiPantsFill } from "react-icons/pi";
import { GiMonclerJacket, GiConverseShoe } from "react-icons/gi";

const categories = [
  { name: '상의', icon: <FaTshirt /> },
  { name: '아우터', icon: <GiMonclerJacket /> },
  { name: '바지', icon: <PiPantsFill /> },
  { name: '원피스', icon: <FaFemale /> },
  { name: '신발', icon: <GiConverseShoe /> },
  { name: '가방', icon: <FaShoppingBag /> },
  { name: '패션소품', icon: <FaHatCowboy /> },
  { name: '뷰티', icon: <FaHeartbeat /> },
];

function Category() {
  return (
    <div className="bg-white md:px-8 2xl:px-8 lg:flex lg:h-16 items-center max-w-[1024px] hidden headerBottom mx-auto box-content ease-in-out border-b border-jnGray-300">
      <nav className="-ml-7 flex w-full relative lg:flex ps-3.5">
        {categories.map((category, index) => (
          <div key={index} className="cursor-pointer flex items-center group relative">
            <a
              href="#"
              className="relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 group-hover:text-green-600"
            >
              <span className="mr-2 text-xl group-hover:rotate-12 transition-transform duration-300">{category.icon}</span>
              {category.name}
            </a>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Category;