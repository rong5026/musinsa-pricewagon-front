import React from 'react';
import { FaStar, FaHeart, FaBookmark } from 'react-icons/fa';

const RatingInfo = ({ rating, reviews, likes, bookmarks }) => {
  return (
    <div className="flex items-center space-x-6 mt-4 text-gray-700">
      <div className="flex items-center">
        <FaStar className="text-yellow-400 mr-1" />
        <span className="font-semibold">{rating}</span>
        <span className="ml-1 text-sm">({reviews} 리뷰)</span>
      </div>
      <div className="flex items-center">
        <FaHeart className="text-red-500 mr-1" />
        <span className="font-semibold">{likes}</span>
      </div>
      <div className="flex items-center">
        <FaBookmark className="text-blue-500 mr-1" />
        <span className="font-semibold">{bookmarks}</span>
      </div>
    </div>
  );
};

export default RatingInfo;