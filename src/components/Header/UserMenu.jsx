import React from 'react'
import UserButton from './Button/UserButton';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';

const UserMenu = () => {
    return (
      <div className="hidden lg:flex relative w-[300px]">
        <ul className="flex w-full text-sm font-medium list-none text-jnGray-900 break-keep">
          <UserButton Icon={IoChatbubbleEllipsesOutline} label="문의하기" />
          <UserButton Icon={AiOutlineAppstoreAdd} label="상품 등록" />
          <UserButton Icon={GoPerson} label="마이페이지" />
        </ul>
      </div>
    );
  };

export default UserMenu