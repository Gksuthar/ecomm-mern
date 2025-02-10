import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import { Button } from '@mui/material';
import { useState } from 'react';
import QtyBox from "../../components/QtyBox";
const ProductDetailsComponents = () => {
      const [productActionIndex, setProActionIndex] = useState(null);
    
    const setProductActionIndex = (index) => {
        setProActionIndex(index);
        console.log(productActionIndex);
      };
  return (
    <div>
            <h1 className="text-[22px] font-[600] mb-2">
              {" "}
              A-Line Kurti With Sharara & Dupatta.
            </h1>

            <div className="flex item-center gap-3 items-center">
              <span className="text-gray-400">
                Brands :
                <span className="font-[500] text-black text-[13px] opacity-75">
                  {" "}
                  Sangria
                </span>
              </span>
              <Rating
                name="size-small"
                defaultValue={4}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer text-gray-400">
                Review (5)
              </span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span className="price line-through text-gray-500 text-[18px] font-[600]">
                $100.00
              </span>
              <span className="newPrice  text-primary text-[18px] font-bold">
                $100.00
              </span>

              <span>
                Availible in Stock :{" "}
                <span className="text-green-400 text-[14px] font-bold">
                  {" "}
                  147 Items
                </span>
              </span>
            </div>
            <br />
            <p className="mt-3 pr-[10px] text-[12px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <div className="flex items-center gap-3 mt-3">
              <span className="text-[13px] font-[600]">Size :</span>
              <div className="flex items-center gap-1 actions ">
                <Button
                  onClick={() => setProductActionIndex(0)}
                  className={`${
                    productActionIndex === 0 ? "!bg-primary !text-white" : ""
                  }`}
                >
                  S
                </Button>
                <Button
                  onClick={() => setProductActionIndex(1)}
                  className={`${
                    productActionIndex === 1 ? "!bg-primary !text-white" : ""
                  }`}
                >
                  M
                </Button>
                <Button
                  onClick={() => setProductActionIndex(2)}
                  className={`${
                    productActionIndex === 2 ? "!bg-primary !text-white" : ""
                  }`}
                >
                  L
                </Button>
                <Button
                  onClick={() => setProductActionIndex(3)}
                  className={`${
                    productActionIndex === 3 ? "!bg-primary !text-white" : ""
                  }`}
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
              <Button className="btn-org">ADD TO CART</Button>
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
  )
}

export default ProductDetailsComponents
