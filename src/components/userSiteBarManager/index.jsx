import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineCloudUpload } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const UserSiteBarManager = () => {
  return (
    <div className="w-full md:w-1/4 p-4">
      <div className="bg-white shadow-md rounded-md p-5">
        <div className="w-full p-5 flex items-center justify-center flex-col">
          <div className="w-28 h-28 rounded-full overflow-hidden relative group">
            <img
              className="w-full h-full object-cover"
              src="data:image/jpeg;base64,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"
              alt="User"
            />
            <div className=" overlay w-[100%] h-[100%]  absolute  top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] cursor-pointer flex justify-center items-center transition-all opacity-0 group-hover:opacity-100">
              <MdOutlineCloudUpload className="text-[#fff] text-[20px] " />
              <input
                type="file"
                className="absolute top-0 left-0 w-full h-full opacity-0"
              />
            </div>
          </div>
        </div>
        <nav className="mt-5 space-y-4">
          <Link
            to="/my-account"
            className="flex items-center gap-3 p-3 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            <FaRegUserCircle size={20} /> Profile
          </Link>
          <Link
            to="/orders"
            className="flex items-center gap-3 p-3 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            <IoBagCheckOutline size={20} /> Orders
          </Link>
         
          <Link
            to="/myList"
            className="flex items-center gap-3 p-3 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            <CiHeart size={20} /> Listings
          </Link>
          <Link
            to="/logout"
            className="flex items-center gap-3 p-3 rounded-md bg-red-100 hover:bg-red-200 text-red-600"
          >
            <IoIosLogOut size={20} /> Logout
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default UserSiteBarManager;
