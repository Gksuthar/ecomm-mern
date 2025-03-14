import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserSiteBarManager from "../../components/userSiteBarManager/index";
import { MyContext } from "../../App";

const MyAccount = () => {
  const [user, setUser] = useState({ name: "", email: "", mobile: "" });
  const context = useContext(MyContext);
  const url = context.AppUrl;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!context.isLogin) {
      navigate("/");
    } else {
      const getUserData = async () => {
        try {
          const token = localStorage.getItem("accessToken");
          const response = await axios.get(`${url}/api/user/user-details`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.status === 200) {
            setUser(response.data.data);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      getUserData();
    }
  }, [context?.isLogin]);

  return (
    <div className="py-10 w-full">
      <div className="container flex flex-col lg:flex-row gap-5">
        {/* <div className="w-full "> */}
          <UserSiteBarManager />
        {/* </div> */}

        {/* Profile Section - Full Width on Small Screens */}
        <div className="col2 w-full lg:w-[70%] mt-4">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="pb-3 text-[18px] font-[500]">My Profile</h2>
            <hr />
            <form className="mt-4">
              {/* Input Fields - Full Width on Small Screens */}
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="w-full sm:w-[50%]">
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
                <div className="w-full sm:w-[50%]">
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

              <div className="flex flex-col sm:flex-row mt-4 items-center gap-5">
                <div className="w-full sm:w-[50%]">
                  <TextField
                    name="mobile"
                    label="Phone Number"
                    className="w-full"
                    value={user.mobile}
                    onChange={handleInputChange}
                    size="small"
                    variant="outlined"
                  />
                </div>
              </div>

              <br />
              <div className="flex justify-center sm:justify-start">
                <Button className="btn-org btn-lg w-full sm:w-[150px]">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
