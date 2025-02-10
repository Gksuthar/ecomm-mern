import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "@mui/material";
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

const Sidebar = ({ openSidebarFunction, isOpenSidebar }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [subOpenIndex, setSubOpenIndex] = useState(null);

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleSubCategory = (index) => {
    setSubOpenIndex(subOpenIndex === index ? null : index);
  };

  return (
    <Drawer anchor="left" open={isOpenSidebar} onClose={openSidebarFunction}>
      <Box sx={{ width: 250, p: 2 }} className="categoryPanel">
        <h3 className="text-[16px] font-[500] flex items-center justify-between">
          Shop By Category
          <MdOutlineClose className="hover:cursor-pointer text-[20px] font-[500] mr-1" onClick={openSidebarFunction} />
        </h3>
        <div className="scroll">
          <ul className="w-full">
            <li className="list-none relative">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]" onClick={() => toggleCategory(0)}>
                Fashion
              </Button>
              {openIndex === 0 ? (
                <FaRegMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleCategory(0)} />
              ) : (
                <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleCategory(0)} />
              )}
              {openIndex === 0 && (
                <ul className="submenu w-full pl-4">
                  <li className="list-none relative">
                    <Button className="w-full !text-left !justify-start !px-3 text-[14px] font-[500] !text-[rgba(0,0,0,0.8)]" onClick={() => toggleSubCategory(0)}>
                      Apparel
                    </Button>
                    {subOpenIndex === 0 ? (
                      <FaRegMinusSquare className="absolute top-[8px] right-[15px] cursor-pointer" onClick={() => toggleSubCategory(0)} />
                    ) : (
                      <FaRegPlusSquare className="absolute top-[8px] right-[15px] cursor-pointer" onClick={() => toggleSubCategory(0)} />
                    )}
                    {subOpenIndex === 0 && (
                      <ul className="inner_submenu w-full pl-5">
                        <li className="list-none mb-1">
                          <Link to="/" className="link w-full !text-left !justify-start !px-3 text-[14px] font-[500]">
                            Smart-Tablets
                          </Link>
                        </li>
                        <li className="list-none mb-1">
                          <Link to="/" className="link w-full !text-left !justify-start !px-3 text-[14px] font-[500]">
                            T-shirts
                          </Link>
                        </li>
                        <li className="list-none mb-1">
                          <Link to="/" className="link w-full !text-left !justify-start !px-3 text-[14px] font-[500]">
                            Leather watch
                          </Link>
                        </li>
                        <li className="list-none mb-1">
                          <Link to="/" className="link w-full !text-left !justify-start !px-3 text-[14px] font-[500]">
                            Rolling Diamond
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li className="list-none relative">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]" onClick={() => toggleCategory(1)}>
                Fashion
              </Button>
              {openIndex === 1 ? (
                <FaRegMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleCategory(1)} />
              ) : (
                <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleCategory(1)} />
              )}
              {openIndex === 1 && (
                <ul className="submenu w-full pl-4">
                  <li className="list-none relative">
                    <Button className="w-full !text-left !justify-start !px-3 text-[14px] font-[500] !text-[rgba(0,0,0,0.8)]" onClick={() => toggleSubCategory(1)}>
                      Apparel
                    </Button>
                    {subOpenIndex === 1 ? (
                      <FaRegMinusSquare className="absolute top-[8px] right-[15px] cursor-pointer" onClick={() => toggleSubCategory(1)} />
                    ) : (
                      <FaRegPlusSquare className="absolute top-[8px] right-[15px] cursor-pointer" onClick={() => toggleSubCategory(1)} />
                    )}
                    {subOpenIndex === 1 && (
                      <ul className="inner_submenu w-full pl-5">
                        <li className="list-none mb-1">
                          <Link to="/" className="link w-full !text-left !justify-start !px-3 text-[14px] font-[500]">
                            Smart-Tablets
                          </Link>
                        </li>
                        <li className="list-none mb-1">
                          <Link to="/" className="link w-full !text-left !justify-start !px-3 text-[14px] font-[500]">
                            T-shirts
                          </Link>
                        </li>
                        <li className="list-none mb-1">
                          <Link to="/" className="link w-full !text-left !justify-start !px-3 text-[14px] font-[500]">
                            Leather watch
                          </Link>
                        </li>
                        <li className="list-none mb-1">
                          <Link to="/" className="link w-full !text-left !justify-start !px-3 text-[14px] font-[500]">
                            Rolling Diamond
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
