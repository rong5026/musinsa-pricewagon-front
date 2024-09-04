import React from 'react';
import { FaArrowUp, FaArrowDown, FaEquals } from 'react-icons/fa';

const PriceInfoCard = ({ label, value, icon, color }) => {
  const formatNumber = num => {
    return num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* md 사이즈 이상일 때 적용되는 구조 */}
      <div className="hidden md:flex md:flex-col items-center justify-center text-center">
        <div className="flex items-center">
          {icon && (
            <span
              className={`flex justify-center items-center text-lg ${color} mr-2`}
            >
              {icon}
            </span>
          )}
          <p className="text-gray-500 text-sm">{label}</p>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <p className={`text-xl font-bold ${color}`}>{value.toLocaleString()}</p>
        </div>
      </div>

      {/* md보다 작은 사이즈에서 적용되는 구조 */}
      <div className="flex md:hidden items-center justify-between">
        <div className="flex items-center space-x-4">
          {icon && <span className={`text-lg ${color}`}>{icon}</span>}
          <div>
            <p className="text-gray-500">{label}</p>
            <p className={`text-xl font-bold ${color}`}>{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceInfoCard;
