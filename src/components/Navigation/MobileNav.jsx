import { Button } from "@mui/material";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const MobileNav = () => {
  return (
    <div className="mobileNav fixed bottom-0 left-0 p-1 px-2  w-full bg-white z-[999] shadow-md border-t">
      <Button
        className="flex flex-col items-center !p-0 !w-[50px] !min-w-[50px] !capitalize !text-gray-600"
        disableRipple
      >
        <IoHomeOutline size={20} className="mb-1" />
        <span className="text-[14px] leading-none">Home</span>
      </Button>
      <Button
        className="flex flex-col items-center !p-0 !w-[50px] !min-w-[50px] !capitalize !text-gray-600"
        disableRipple
      >
        <IoSearchOutline  size={20} className="mb-1" />
        <span className="text-[14px] leading-none">Search</span>
      </Button>
      <Button
        className="flex flex-col items-center !p-0 !w-[50px] !min-w-[50px] !capitalize !text-gray-600"
        disableRipple
      >
        <CiHeart size={20} className="mb-1" />
        <span className="text-[14px] leading-none">WhichLst</span>
      </Button>
      <Button
        className="flex flex-col items-center !p-0 !w-[50px] !min-w-[50px] !capitalize !text-gray-600"
        disableRipple
      >
        <IoHomeOutline size={20} className="mb-1" />
        <span className="text-[14px] leading-none">Orders</span>
      </Button>
      <Button
        className="flex flex-col items-center !p-0 !w-[50px] !min-w-[50px] !capitalize !text-gray-600"
        disableRipple
      >
        <IoHomeOutline size={20} className="mb-1" />
        <span className="text-[14px] leading-none">Account</span>
      </Button>
    </div>
  );
};

export default MobileNav;
