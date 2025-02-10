import { Button } from "@mui/material";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import Sidebar from "./Sidebar";

const Navigation = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const openSidebarFunction = () => {
    console.log(isOpenSidebar);
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1  w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openSidebarFunction}
            >
              <RiMenu2Fill className="text-[18px]" />
              shop By Category{" "}
              <IoIosArrowDown className="text-[15px] ml-auto font-bold " /> |
            </Button>
          </div>

          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  Home
                </Link>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  Fashion
                </Link>
                <div className="submenu z-50 absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start rounded-none !text-left">
                          Men
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start rounded-none !text-left">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start rounded-none !text-left">
                          Boy
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start rounded-none !text-left">
                          girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start rounded-none !text-left">
                          Kids
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  Electronics
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  Bgas
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  Grocery
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  Beauty-wellness
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  Jawellery
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  Footwere
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" /> Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* sidebar component */}
      <Sidebar
        openSidebarFunction={openSidebarFunction}
        isOpenSidebar={isOpenSidebar}
      />
    </>
  );
};

export default Navigation;
