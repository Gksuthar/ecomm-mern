import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { useContext } from "react";
import { MyContext } from "../../App";
const ProductItem = () => {

  const context  = useContext(MyContext)
  return (
    <div className="productItem rounded-sm border-1 border-[rgba(0,0,0,0.1)] shadow-md">
      <div className="group imgWrapper  w-full   rounded-md relative">
        <Link to='/productDetails/1212'>
          <div className="img h-[220px] overflow-hidden relative">
            <img
            src="https://api.spicezgold.com/download/file_1734529876638_buynewtrend-women-maroon-cotton-blend-top-product-images-rvb22aqlk7-1-202201130044.jpg"
            className="w-full "
            alt=""
            />
            <img
            src="https://api.spicezgold.com/download/file_1734529876644_buynewtrend-women-maroon-cotton-blend-top-product-images-rvb22aqlk7-2-202201130044.jpg"
            className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            alt=""
            />
          </div>
          </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
          -$10
        </span>
        <div className="actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[10px] opacity-0 group-hover:opacity-100 ">
          <Button onClick={()=>context.handleOpenProductDetailsModal(true)} className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary  !text-black group">
            <MdOutlineZoomOutMap  className="text-[18px] text-black" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary  !text-black group">
            <GoGitCompare className="text-[18px] text-black" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary  !text-black group">
            <FaRegHeart className="text-[18px] text-black" />
          </Button>
        </div>
      </div>
      <div className="info p-3  py-3 bg-[#ecebeb] ">
        <h6 className="text-[14px] link transition-all">
          <Link to="/productListning">Sangria</Link>
        </h6>
        <h3 className="text-[13px] title font-[500] text-[#000] link transition-all mb-1">
          <Link to="/productListning">A-Line Kurti With Sharara & Dupatta.</Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <div className="flex items-center gap-4">
          <span className="price line-through text-gray-500 text-[15 px] font-[600]">
            $100.00
          </span>
          <span className="newPrice  text-primary font-bold">$100.00</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
