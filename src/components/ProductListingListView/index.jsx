import React, { useContext } from "react";
// import "./style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MyContext } from "../../App";
const ProductItemListView = () => {
  const context = useContext(MyContext)
  return (
    <div className="productItem rounded-sm border-1 border-[rgba(0,0,0,0.1)] shadow-md flex ">
      <div className="group imgWrapper w-[25%]   rounded-md relative">
        <Link>
          <div className="img h-[220px]  overflow-hidden relative">
            <img
            src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
            className="w-full "
            alt=""
            />
            <img
            src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg"
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
            <MdOutlineZoomOutMap className="text-[18px] text-black" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary  !text-black group">
            <GoGitCompare className="text-[18px] text-black" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary  !text-black group">
            <FaRegHeart className="text-[18px] text-black" />
          </Button>
        </div>
      </div>
      <div className="info w-[75%] p-3 px-8 py-3 px-5 bg-[#ecebeb] ">
        <h6 className="text-[15px] link transition-all text-left ">
          <Link to="/">Sangria</Link>
        </h6>
        <h3 className="text-[13px] title font-[500] text-[#000] mt-2 mb-1 link transition-all ">
          <Link to="/">A-Line Kurti With Sharara & Dupatta.</Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <div className="flex items-center gap-4">
          <span className="price line-through text-gray-500 text-[15 px] font-[600]">
            $100.00
          </span>
          <span className="newPrice  text-primary font-bold">$100.00</span>
        </div>
        <p className="text-[12px] text-gray-500 mb-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  when an unknown printer took a galley of type and scrambled
        </p>
        <div className="mt-3">
            <Button className="btn-org hover:!bg-black transition-all duration-300 flex gap-2"><IoCartOutline className="text-[18px] "/>ADD TO CART</Button>
        </div>
      </div>


    </div>
  );
};

export default ProductItemListView;
