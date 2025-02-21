import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CartPanelData = () => {
  const token = localStorage.getItem('accessToken');
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const getCartData = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/api/cart/get`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.status === 200) {
          setCartData(response.data.data);
        }
      } catch (error) {
        console.log("Error fetching cart data:", error);
      }
    };
    getCartData();
  }, []);
  console.log(cartData)

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:1000/api/cart/daleteCart`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data : { _id: id }
      });
      if (response.status === 200) {
        setCartData(cartData.filter(item => item._id !== id));
      }
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  return (
    <>
      <div className="scroll max-h-[300px] w-full overflow-y-auto">
        {cartData && cartData.map((item, index) => (
          <div key={index} className="cartItem w-full flex items-center gap-4 border-b border[rgba(0,0,0,0.2)] pb-4">
            <div className="img w-[30%] overflow-hidden h-[80px] rounded-md">
              <img
                src={`${item.productId?.images[0]}`} 
                alt="cartImg"
                className="w-[100px] h-full "
              />
            </div>
            <div className="info w-[70%] relative">
              <h4 className="text-[13px] w-[90%] font-[500]">
                {item.productId?.name}
              </h4>
              <p className="flex items-center mt-4 mb-4 gap-4">
                <span>
                  Qty : <span>1</span>
                </span>
                <span className="text-primary font-[500]">Price : {item.productId?.price}</span>
              </p>

              <MdOutlineDeleteOutline 
                className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all duration-300" 
                onClick={() => handleDelete(item?._id)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="bottomSection absolute bottom-[10px] left-[10px] w-full overflow-hidden pr-5">
        <div className="bottomInfo w-full border-t px-4 py-3 border-[rgba(0,0,0,0.2)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="font-[600] text-[14px]">{cartData.length} item(s)</span>
            <span className="text-primary font-bold">499</span>
          </div>
          <div className="flex justify-between w-full">
            <span className="font-[600] text-[14px]">Shipping</span>
            <span className="text-primary font-bold">99</span>
          </div>
        </div>

        <div className="bottomInfo w-full border-t px-4 gap-2 py-3 border-[rgba(0,0,0,0.2)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="font-[600] text-[14px]">Total(tax excl.)</span>
            <span className="text-primary font-bold">199</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="font-[600] text-[14px]">Total(tax incl.)</span>
            <span className="text-primary font-bold">199</span>
          </div>
          <div className="flex justify-between w-full">
            <span className="font-[600] text-[14px]">Taxes</span>
            <span className="text-primary font-bold">99</span>
          </div>
        </div>
        <br />
        <div className="container flex items-center justify-between gap-5">
          <Button className="btn-org btn-lg w-[50%]" >View Cart</Button>
          <Button className="btn-org btn-lg w-[50%]" >Check Out</Button>
        </div>
      </div>
    </>
  );
};

export default CartPanelData;