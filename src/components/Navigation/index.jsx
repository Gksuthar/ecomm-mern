import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import Sidebar from "./Sidebar";
import { MyContext } from "../../App";
import { useEffect } from "react";
const Navigation = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const openSidebarFunction = () => {
    console.log(isOpenSidebar);
    setIsOpenSidebar(!isOpenSidebar);
  };

  const context = useContext(MyContext)
  const url  = context.AppUrl
  const showMenuCategory=async(id,name)=>{
    // alert(JSON.stringify(context.subCategory))
    context.toggleCategory(id,name)
  }
  
  return (
    <>
      <nav className="py-2 sticky top-0 ">
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

          <div className="col_2 w-[60%] ">

            <ul  className="flex items-center gap-5 nav">
            {context.categoryData && context.categoryData.map((item,indx)=>(
              <li key={indx} className="list-none relative"  onMouseEnter={() => showMenuCategory(item._id,item.name)}>
                <Link to="/" className="link transition text-[14px] font-[500]">
                  {item.name}
                </Link>
                  {
                <div className="submenu z-50 absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full group relative">
                      {context.subCategory.map((item,indx)=>(
                        <div key={indx}>
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start rounded-none !text-left">
                          {item.name}
                        </Button> 
                        </div>
                      ))
                      }
                       {/* <ul className="absolute left-[100%] top-0 mt-1 hidden w-full bg-white shadow-md group-hover:block">
                        <li className="list-none w-full">
                          <Link to="/men/shirts" className="w-full">
                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start rounded-none !text-left">
                              Shirts
                            </Button>
                          </Link>
                        </li>
                        <li className="list-none w-full">
                          <Link to="/men/pants" className="w-full">
                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start rounded-none !text-left">
                              Pants
                            </Button>
                          </Link>
                        </li>
                        <li className="list-none w-full">
                          <Link to="/men/shoes" className="w-full">
                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start rounded-none !text-left">
                              Shoes
                            </Button>
                          </Link>
                        </li>
                      </ul>  */}
                    </li> 

                  
                  </ul> 
                 </div>}
              </li>
              
            ))  
          }
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
