import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {

  return (
    <nav className="w-full h-20 bg-gray-800 text-white flex justify-around items-center z-10">
      <Link to="/" className="flex flex-col items-center">
        <span>🏠</span>
        <span>Home</span>
      </Link>
      <Link to="/other" className="flex flex-col items-center">
        <span>📁</span>
        <span>Other</span>
      </Link>
      <Link to="/profile" className="flex flex-col items-center">
        <span>👤</span>
        <span>Profile</span>
      </Link>
    </nav>
  );
}

export default Footer