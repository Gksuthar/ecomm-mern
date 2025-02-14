import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import { Button, useColorScheme } from "@mui/material";
import { useState } from "react";
import QtyBox from "../../components/QtyBox";
import { MyContext } from "../../App";
import axios from "axios";
const ProductDetailsComponents = ({ data }) => {
  const [productActionIndex, setProActionIndex] = useState(null);
  const context = useColorScheme(MyContext)
  const url = context.AppUrl
  const setProductActionIndex = (index) => {
    setProActionIndex(index);
    console.log(productActionIndex);
  };
  const addToCart=async(id)=>{
    try {
      const token = localStorage.getItem('accessToken')
      const response = await axios.post(`http://localhost:1000/api/cart/create`,{productId:id},{
        headers:{
          Authorization : `Bearer ${token}`
        }
      })
      if (response.status===200) {
      }
      
    } catch (error) {
      console.error(error)
    }
    }
  return (
    <div>
      <h1 className="text-[22px] font-[600] mb-2"> {data?.name}</h1>

      <div className="flex item-center gap-3 items-center">
        <span className="text-gray-400">
          Brands :
          <span className="font-[500] text-black text-[13px] opacity-75">
            {" "}
            {data?.brand}
          </span>
        </span>
        <Rating name="size-small" value={data?.rating?? 0 } size="small" readOnly />
        <span className="text-[13px] cursor-pointer text-gray-400">
          Review (5)
        </span>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="price line-through text-gray-500 text-[18px] font-[600]">
        ₹ {data?.oldPrice}
        </span>
        <span className="newPrice  text-primary text-[18px] font-bold">
        ₹ {data?.price}
        </span>

        <span>
          Availible in Stock :{" "}
          <span className="text-green-400 text-[14px] font-bold">
            {" "}
            {data?.countInStock}
          </span>
        </span>
      </div>
      <br />
      <p className="mt-3 pr-[10px] text-[12px]">
        {data?.description}
      </p>

      <div className="flex items-center gap-2 mt-3">
        <span className="text-[13px] font-[600]">Size :</span>
        <div className="flex items-center gap-2 actions ">
          <Button
            onClick={() => setProductActionIndex(0)}
            className={`${
              productActionIndex === 0 ? "!bg-primary !text-white" : ""
            }  !text-[12px] !h-[30px] !w-[30px] !min-w-[30px]   `}
          >
            S
          </Button>
          <Button
            onClick={() => setProductActionIndex(1)}
            className={`${
              productActionIndex === 1 ? "!bg-primary !text-white" : ""
            }  !text-[12px] !h-[30px] !w-[30px] !min-w-[30px]  `}
          >
            M
          </Button>
          <Button
            onClick={() => setProductActionIndex(2)}
            className={`${
              productActionIndex === 2 ? "!bg-primary !text-white" : ""
            }  !text-[12px] !h-[30px] !w-[30px] !min-w-[30px]  `}
          >
            L
          </Button>
          <Button
            onClick={() => setProductActionIndex(3)}
            className={`${
              productActionIndex === 3 ? "!bg-primary !text-white" : ""
            }  !text-[12px] !h-[30px] !w-[20px] !min-w-[20px!] `}
          >
            XL
          </Button>
        </div>
      </div>
      <p className="mb-2 mt-4 text-[12px] text-gray-400">
        Free Shipping (Est. Delivery Time 2-3 Days)
      </p>

      <div className="flex items-center mt-4 gap-4">
        <div className="qtyBoxWrapper w-[70px]  ">
          <QtyBox />
        </div>
        <Button className="btn-org" onClick={()=>addToCart(data?._id)}>ADD TO CART</Button>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500] transition">
          <FaRegHeart />
          Add to Wishlist{" "}
        </span>
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500] transition">
          <IoGitCompareOutline />
          Add to Compare{" "}
        </span>
      </div>
    </div>
  );
};

export default ProductDetailsComponents;
