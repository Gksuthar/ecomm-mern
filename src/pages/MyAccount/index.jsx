import React, { useContext,useEffect } from "react";
import { Button } from "@mui/material";
import { MdOutlineCloudUpload } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import TextField from "@mui/material/TextField";
import { FaRegUserCircle } from "react-icons/fa";
import UserSiteBarManager from "../../components/userSiteBarManager/index";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const MyAccount = () => {
  const [user,setuser] = useState({name : '',email : '',mobile:''})
  const context = useContext(MyContext)
  const url = context.AppUrl
  const navigate  = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuser((prevUser) => ({
      // ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (context.isLogin !== true) {
      navigate('/');
    } else {
      const getUserData = async () => {
        try {
          const token = localStorage.getItem('accessToken');
          const response = await axios.get(`${url}/api/user/user-details`, {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          });
          if (response.status===200) {
            console.log(response.data.data);
            
            setuser(response.data.data)
          }
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      getUserData(); 
    }
  }, [context?.isLogin]); 


  
  return (
    <div className="py-10 w-full">
      <div className="container flex gap-5">
        <UserSiteBarManager/>
        <div className="col2 w-[50%] mt-4">
          <div className="card bg-white p-5 shadow-md rounded-md ">
            <h2 className="pb-3 text-[18px] font-[500]">My Profile</h2>
            <hr />
            <form action="" className="mt-4">
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    name="name"
                    className="w-full"
                    size="small"
                    onChange={handleInputChange}
                    value={user.name}
                    variant="outlined"
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                  name="email"
                    label="Email"
                    className="w-full"
                    value={user.email}
                    onChange={handleInputChange}
                    size="small"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="flex mt-4 items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                  name="mobile"
                    label="Phone Number "
                    className="w-full"
                    value={user.mobile}
                    onChange={handleInputChange}

                    size="small"
                    variant="outlined"
                  />
                </div>
                
              </div>
              <br />
              <div className="flex items-center">
                <Button className="btn-org btn-lg w-[150px]">Save</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
