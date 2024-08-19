import React from 'react';

function SearchBar() {
  return (
    <div className=" relative hidden ms-7 me-7 xl:ms-9 lg:block flex-1">
      <form className="w-full relative flex items-center h-10 overflow-hidden rounded-md bg-gray-100 px-3 py-[10px] lg:px-5 space-x-2">
        <label className="flex items-center py-0.5 flex-none w-4 h-4">
          <svg
            className="w-[16px] h-[16px] text-[#9CA3AF]"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </label>
        <input
          autoComplete="off"
          placeholder="어떤 상품을 찾으시나요?"
          className="flex-auto text-sm bg-transparent placeholder-[#9CA3AF] overflow-hidden text-ellipsis whitespace-nowrap outline-none"
        />
      </form>
    </div>
  );
}

export default SearchBar;
