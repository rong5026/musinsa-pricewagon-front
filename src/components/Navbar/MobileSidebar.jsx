import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { PiPantsFill } from 'react-icons/pi';
import { GiMonclerJacket, GiConverseShoe } from 'react-icons/gi';
import {
  FaTimes,
  FaFemale,
  FaTshirt,
  FaShoppingBag,
  FaHatCowboy,
  FaHeartbeat,
  FaPlus,
  FaCommentDots,
  FaUserCircle,
  FaSignInAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaBoxOpen,
  FaChevronDown,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductRegistrationModal from '../Modal/ProductRegistrationModal';

const menuItems = [
  {
    name: '상품종류',
    icon: <FaBoxOpen />,
    categories: [
      { id: 2, name: '상의', icon: <FaTshirt /> },
      { id: 10, name: '아우터', icon: <GiMonclerJacket /> },
      { id: 9, name: '바지', icon: <PiPantsFill /> },
      { id: 11, name: '원피스', icon: <FaFemale /> },
      { id: 12, name: '신발', icon: <GiConverseShoe /> },
      { id: 13, name: '가방', icon: <FaShoppingBag /> },
      { id: 14, name: '패션소품', icon: <FaHatCowboy /> },
      { id: 15, name: '뷰티', icon: <FaHeartbeat /> },
    ],
  },
  { name: '상품 등록', icon: <FaPlus /> },
  { name: '문의하기', icon: <FaCommentDots /> },
  { name: '마이페이지', icon: <FaUserCircle /> },
  { name: '로그인', icon: <FaSignInAlt /> },
];

function MobileSidebar({ isSidebarOpen, toggleSidebar, onProductRegistrationClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // react-spring 애니메이션 설정
  const dropdownAnimation = useSpring({
    height: isDropdownOpen ? 'auto' : 0,
    opacity: isDropdownOpen ? 1 : 0,
    overflow: 'hidden',
  });

  const Header = ({ toggleSidebar }) => (
    <div className="p-6 flex justify-between items-center border-b border-gray-500">
      <h2 className="text-lg font-bold tracking-wider">MUSINSAWAGON</h2>
      <button onClick={toggleSidebar} className="hover:text-gray-300">
        <FaTimes size={24} />
      </button>
    </div>
  );

  return (
    <div
      className={`fixed inset-y-0 left-0 w-full lg:w-1/3 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 text-white shadow-lg transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <Header toggleSidebar={toggleSidebar} />

      <nav className="mt-6 flex-grow">
        <ul className="space-y-2">
          {menuItems.map(item =>
            item.categories ? (
              <li
                key={item.name}
                className="px-4 rounded-lg cursor-pointer transition-colors duration-200"
              >
                <div
                  className="flex items-center justify-between hover:bg-gray-700 rounded-lg"
                  onClick={toggleDropdown}
                >
                  <div className="flex items-center py-1">
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </div>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      isDropdownOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>

                {/* 하위 카테고리 */}
                <animated.ul
                  style={dropdownAnimation}
                  className="mt-2 ml-4 space-y-2 max-h-840:grid max-h-840:grid-cols-2 max-h-840:gap-4"
                >
                  {item.categories.map(category => (
                    <Link
                      to={`musinsa/category/${category.id}`} // 카테고리 id에 따라 페이지 이동
                      key={category.name}
                      onClick={toggleSidebar}
                      className="flex items-center px-4 py-2 hover:bg-gray-600 rounded-lg cursor-pointer transition-colors duration-300"
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </Link>
                  ))}
                </animated.ul>
              </li>
            ) : (
              <li
                key={item.name}
                className="flex items-center px-4 py-3 hover:bg-gray-700 rounded-lg cursor-pointer  duration-200"
                onClick={() => {
             
                  if (item.name === '상품 등록') {
                    onProductRegistrationClick();
                  } else {
                    toggleSidebar(); 
                    console.log(`${item.name} clicked`);
                  }
                  
                }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </li>
            )
          )}
        </ul>
      </nav>

      {/* SNS 버튼 */}
      <div className="max-h-720:hidden absolute bottom-0 left-0 w-full">
        <div className="flex justify-center items-center space-x-6 p-10 border-t border-gray-500">
          <FaTwitter className="cursor-pointer hover:text-gray-400" size={20} />
          <FaFacebookF
            className="cursor-pointer hover:text-gray-400"
            size={20}
          />
          <FaInstagram
            className="cursor-pointer hover:text-gray-400"
            size={20}
          />
          <FaGithub className="cursor-pointer hover:text-gray-400" size={20} />
          <FaEnvelope
            className="cursor-pointer hover:text-gray-400"
            size={20}
          />
        </div>
      </div>

    </div>
  );
}

export default MobileSidebar;
