import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineCloudUpload } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import axios from "axios";
import { MyContext } from '../../App';

const UserSiteBarManager = () => {
  const context = useContext(MyContext);
  const url = context.AppUrl;
  const token = localStorage.getItem('accessToken');
  
  const [avatar, setAvatar] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch user data on component mount
  useEffect(() => {
    if (context.isLogin) {
      const getUserData = async () => {
        try {
          const response = await axios.get(`${url}/api/user/user-details`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          const userAvatar = response.data.data.avatar;
          setAvatar(Array.isArray(userAvatar) ? userAvatar[0] : userAvatar);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      getUserData();
    }
  }, [context?.isLogin, url, token]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);

      await changeProfile(file); 
    }
  };

  const changeProfile = async (file) => {
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const response = await axios.post(
        `${url}/api/user/user-avatar`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setAvatar(response.data.data.avatar[0]);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="w-full md:w-1/4 p-4">
      <div className="bg-white shadow-md rounded-md p-5">
        <div className="w-full p-5 flex items-center justify-center flex-col">
          <div className="w-28 h-28 rounded-full overflow-hidden relative group">
            <img
              className="w-full h-full object-container"
              src={avatar || "/default-avatar.png"}
              alt="User"
            />
            <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] cursor-pointer flex justify-center items-center transition-all opacity-0 group-hover:opacity-100">
              <MdOutlineCloudUpload className="text-[#fff] text-[20px]" />
              <input
                type="file"
                name="avatar"
                onChange={handleFileChange}
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0"
              />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-5 space-y-4">
          <Link to="/my-account" className="flex items-center gap-3 p-3 rounded-md bg-gray-100 hover:bg-gray-200">
            <FaRegUserCircle size={20} /> Profile
          </Link>
          <Link to="/orders" className="flex items-center gap-3 p-3 rounded-md bg-gray-100 hover:bg-gray-200">
            <IoBagCheckOutline size={20} /> Orders
          </Link>
          <Link to="/myList" className="flex items-center gap-3 p-3 rounded-md bg-gray-100 hover:bg-gray-200">
            <CiHeart size={20} /> Listings
          </Link>
          <Link to="/logout" className="flex items-center gap-3 p-3 rounded-md bg-red-100 hover:bg-red-200 text-red-600">
            <IoIosLogOut size={20} /> Logout
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default UserSiteBarManager;