import React from "react";
import { useState } from "react";
import SidebarListning from "../SidebarListning";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../productItem/index";
import { Button, Menu, MenuItem } from "@mui/material";
import { IoGrid } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import ProductItemListView from "../ProductListingListView";
import Pagination from '@mui/material/Pagination';
import { useLocation } from "react-router-dom";
import CategoryProductListning from "../CategoryProductListning";
const ProductListing = () => {
const [itmView,setItmView]  = useState('grid');
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const category = queryParams.get('category');
const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="py-4 bg-gray-100 min-h-screen pb-0">
      <div className="container">
        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb" className="mb-4">
          <Link underline="hover" color="inherit" href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/" className="text-blue-600 hover:underline">
            Fashion
          </Link>
        </Breadcrumbs>

        {/* Layout Wrapper */}
        <div className="bg-white p-4 rounded-md shadow-md flex gap-4">
          {/* Sidebar */}
          <div className="w-[20%] bg-white border-r border-gray-300 min-h-[80vh] p-3">
            <SidebarListning />
          </div>

          <div className="w-[80%] py-3">
            <div className="bg-[#f1f1f1] p-3 mb-4 rounded-md flex items-center justify-between">
              <div className="flex items-center gap-2 itemViewAction">
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-md bg-gray-200 hover:bg-gray-300 ${itmView==='grid' && 'active'} `} onClick={()=>setItmView('grid')}
                >
                  <IoGrid className="text-gray-600 text-[18px]" />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-md bg-gray-200 hover:bg-gray-300 ${itmView==='list' && 'active'} `} onClick={()=>setItmView('list')}
                >
                  <IoMdMenu className="text-gray-600 text-[20px]" />
                </Button>
                <span className="text-[14px] font-medium text-gray-700 pl-3">
                  There are 27 Products
                </span>
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-medium text-gray-700">Sort By:</span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!border !border-gray-400 !text-[12px] !text-[#000] !bg-white !px-4 !py-1 !rounded-md !hover:bg-gray-100"
                >
                  Dashboard ▼
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem  className='!text-[12px] !capitalize ' onClick={handleClose}>Relevance</MenuItem>
                  <MenuItem className='!text-[12px] !capitalize '  onClick={handleClose}>Sales, highest to lowest</MenuItem>
                  <MenuItem className='!text-[12px] !capitalize '  onClick={handleClose}>Name, A to Z</MenuItem>
                  <MenuItem className='!text-[12px] !capitalize '  onClick={handleClose}>Name, Z to A</MenuItem>
                  <MenuItem className='!text-[12px] !capitalize '  onClick={handleClose}>Price, low to high</MenuItem>
                  <MenuItem className='!text-[12px] !capitalize '  onClick={handleClose}>Price, high to low</MenuItem>
                </Menu>
              </div>
            </div>

            {/* Product Grid */}
            <div className={`grid ${itmView==='grid' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-1'}  gap-4`}>
              {itmView==='grid' ? (
                <>
                 
                  <CategoryProductListning/>
                </>
              ) : (
                <>
                  <ProductItemListView/>
                </>
              )
              }
            </div>
            <div className="flex items-center justify-center mt-10">
              <Pagination count={10} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductListing;
