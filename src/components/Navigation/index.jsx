import { Button } from "@mui/material";
import React, { useContext } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import Sidebar from "./Sidebar";
import { MyContext } from "../../App";

const Navigation = () => {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);
  const [activeSubCategory, setActiveSubCategory] = React.useState(null);

  const context = useContext(MyContext);

  const openSidebarFunction = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const showMenuCategory = async (id, name) => {
    try {
      context.toggleCategory(id, name);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  return (
    <>
      <nav className="py-2 sticky top-0 bg-white z-50 ">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openSidebarFunction}
              aria-label="Shop By Category"
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop By Category
              <IoIosArrowDown className="text-[15px] ml-auto font-bold" /> |
            </Button>
          </div>

          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-5 nav">
              {context.categoryData &&
                context.categoryData.map((item, indx) => (
                  <li
                    key={indx}
                    className="list-none relative group"
                    onMouseEnter={() => showMenuCategory(item._id, item.name)}
                  >
                    <Link
                      to="/"
                      className="link transition text-[14px] font-[500]"
                    >
                      {item.name}
                    </Link>

                    <div className="submenu absolute top-full left-0 min-w-[200px] bg-white shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-50">
                      <ul className="relative">
                        {context.subCategory.map((subItem, subIndx) => (
                          <li
                            key={subIndx}
                            className="list-none w-full relative group"
                            onMouseEnter={() => setActiveSubCategory(subItem)}
                            onMouseLeave={() => setActiveSubCategory(null)}
                          >
                            <Button
                              className="!text-[rgba(0,0,0,0.8)] w-full !justify-start rounded-none !text-left"
                              aria-label={subItem.name}
                            >
                              {subItem.name}
                            </Button>

                            {activeSubCategory &&
                              activeSubCategory._id === subItem._id && (
                                <ul className="absolute left-full top-0 mt-0 bg-white shadow-md min-w-[200px] z-50">
                                  {subItem.children.map(
                                    (thirdItem, thirdIndx) => (
                                      <li
                                        key={thirdItem._id || thirdIndx}
                                        className="list-none"
                                      >
                                        <Link
                                          to={`${item.name}/${subItem.name}/${thirdItem.name}`}
                                          className="block w-full"
                                        >
                                          <Button
                                            className="!text-[rgba(0,0,0,0.8)] w-full !justify-start rounded-none !text-left"
                                            aria-label={thirdItem.name}
                                          >
                                            {thirdItem.name}
                                          </Button>
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          <div className="col_3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" /> Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      <Sidebar
        openSidebarFunction={openSidebarFunction}
        isOpenSidebar={isOpenSidebar}
      />
    </>
  );
};

export default Navigation;
