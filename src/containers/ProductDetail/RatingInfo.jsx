import React from 'react';
import { FaStar, FaHeart, FaBookmark, FaBell } from 'react-icons/fa';

const RatingInfo = ({ rating, reviews, likes, bookmarks }) => {
  const formatNumber = num => {
    return num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
  };
  

  return (
    <div className="flex items-center space-x-6 mt-4 text-gray-700">
      <div className="flex items-center">
        <FaStar className="text-yellow-400 mr-1" />
        <span className="font-semibold">{rating}</span>
        <span className="ml-1 text-sm">({formatNumber(reviews)})</span>
      </div>
      <div className="flex items-center">
        <FaHeart className="text-red-500 mr-1" />
        <span className="font-semibold">{formatNumber(likes)}</span>
      </div>
      <div className="flex items-center">
        <FaBell className="text-blue-500 mr-1" />
        <span className="font-semibold">{formatNumber(bookmarks)}</span>
      </div>
    </div>
  );
};

export default RatingInfo;