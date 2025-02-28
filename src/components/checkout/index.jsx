import { Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
const Checkout = () => {
    const [cartData,setCartData] = useState([])
    const [totalPrice,setTotalPrice] = useState(0) 
    const [totalDiscountPrice,setTotalDiscountPrice] = useState(0) 
    const token = localStorage.getItem('accessToken')
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

      useEffect(() => {
        if (cartData.length > 0) {
            const total = cartData.reduce((acc, item) => acc + (item.productId.oldPrice * item.quantity), 0);
            const totalDiscountPrice = cartData.reduce((acc, item) => acc + (item.productId.price * item.quantity), 0);
            setTotalPrice(parseFloat(total.toFixed(2)));
            setTotalDiscountPrice(parseFloat(totalDiscountPrice.toFixed(2)))
          }
    }, [cartData]);
  return (
    <div className='py-4'>
        <div className="container w-[100%] flex bg-white gap-3">
            <div className=' w-[70%] flex flex-col'>

                <div  className="productsInCart h-[100vh]   mt-3 gap-2 overflow-y-scroll">
                {cartData && cartData.map((item,indx)=>(
                    <div key={indx} className="container shadow-md flex border mb-3  ">
                        <div className="image w-[10%] h-[150px]  flex justify-center items-center">
                            <img src={`${item.productId.images[0]}`} alt="productImage" />
                        </div>
                        <div className="description mt-4 ml-4">
                            <h2 className='text-[14px] font-[500]'>{item.productId.name}</h2>
                            <p className='text-[12px] font-[400]'>{item.productId.description.substring(0,200)}...</p>
                            <span className='text-[12px] text-[#000] font-[500]'>Sold by: Ganesh Suthar </span>
                            <div className="price flex gap-3">
                                <p>₹ {item.productId.price}</p>
                                <p className='line-through'>₹ {item.productId.oldPrice}</p>
                                <span className='text-green-400'>{item.productId.discount}%</span>
                            </div>
                            <h4 className='font-[600] text-[12px]'>Not Returnable</h4>
                        </div>  

                    </div>
                ))
                }
                </div>
                
               
                
                
            </div>
            <div className='placeOrder w-[30%] h-[50vh] mt-[100px] px-2 border border-[rgba(0,0,0,0.2)] shadow-md'>
                    <div className="container"><h2 className='text-[14px] font-[600]'>Price Details</h2>
                    <hr />
                    <div className='flex justify-between items-center mb-3'>
                        <p className='text-[14px] font-[500]'>Total Mrp  </p>
                        <span className='text-[15px] font-[500]'>{totalPrice}</span>
                    </div>
                    <div className='flex justify-between items-center mb-3'>
                        <p className='text-[14px] font-[500]'>Discount Price  </p>
                        <span className='text-[15px] font-[500]'>{totalDiscountPrice}</span>
                    </div>
                    <div className='flex justify-between items-center mb-3'>
                        <p className='text-[14px] font-[500]'>Plateform Price  </p>
                        <span className='text-[15px] font-[500]'>100</span>
                    </div>
                    <div className='flex justify-between items-center mb-3'>
                        <p className='text-[14px] font-[500]'>Shipping Price  </p>
                        <span className='text-[15px] font-[500]'>100</span>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center mb-3'>
                        <p className='text-[14px] font-[500]'>Total Amount  </p>
                        <span className='text-[15px] font-[500]'>{totalDiscountPrice+200}</span>
                    </div>
                    <Button className='btn-org w-full'>PLACE ORDER</Button></div>

                </div>
        </div>
    </div>
  )
}

export default Checkout