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

const MyAccount = () => {
  const context = useContext(MyContext)
  const navigate  = useNavigate()
  useEffect(() => {
    if (context.isLogin!==true) {
      navigate('/')
    }
  }, [context?.isLogin])
  
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
                    className="w-full"
                    size="small"
                    variant="outlined"
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    label="Email"
                    className="w-full"
                    size="small"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="flex mt-4 items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Phone Number "
                    className="w-full"
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
