import React, { useContext, useState } from "react";
import UserSiteBarManager from "../userSiteBarManager";
import { useEffect } from "react";
import axios from 'axios'
import {MyContext} from '../../App.jsx'
import { MdOutlineClose } from "react-icons/md";
import { Button } from "@mui/material";
import toast, { Toaster } from 'react-hot-toast';

const Wishlist = () => {
  const context = useContext(MyContext)
  const url = context.AppUrl;
  const [wichListData,setWichListData] = useState([])
  const token = localStorage.getItem('accessToken')
  useEffect(() => {

    const getallWichListData=async()=>{
      try {
        const response = await axios.get(`${url}/api/mylist/getMyList`,{
          headers :{
            Authorization : `Bearer ${token}`
          }
        })
        if (response.status===200) {
          console.log(response.data.data)
          setWichListData(response.data.data)
        }
      } catch (error) {
        console.error(error)
      }
    }
    getallWichListData()
  }, [])


  const removeWhichListItem=async(id)=>{
    try {
      const resposne  = await axios.delete(`${url}/api/mylist/removeToMyList/${id}`,{
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      if (resposne.status===201) {
        toast.success(resposne.data.message)
        setWichListData(wichListData.filter((item)=>item._id!==id))
      }
    } catch (error) {
      toast.success(response.data.message)
      console.error(error);
      
    }
  }
  

  return (
    <div className=" p-4     ">
      <div className="conatainer flex ">
          <UserSiteBarManager/>
      <div className="p-4 mt-4 w-[75%] bg-white  ">

        <h1 className="text-2xl font-bold mb-4 ">My Wishlist ({wichListData.length})</h1>
        <div className="space-y-4 ">
          {  Array.isArray(wichListData) && wichListData.map((item,indx)=>(

          <div key={indx} className="flex border p-2 rounded-lg shadow-sm ">
            <div className="w-24 h-24  ">

            <img
              src={`${item.productId?.images[0]}`}
              alt=" afdas"
              className="w-full h-full object-contain  rounded-md  "
              />
              </div>
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-semibold">{item.productId?.name}</h2>
              <p className="text-sm text-gray-600">{item.productId?.description.substring(0,120)}...</p>
              <div className="mt-2">
                <span className="text-lg font-bold">₹ {item.price}
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                ₹{item.oldPrice}
                </span>
                <span className="text-sm text-green-600 ml-2">
                {item.discount}%
                </span>
              </div>
            </div>
            <Button onClick={()=>removeWhichListItem(item._id)}className="!min-w-0 !w-8 !h-8 !p-0 !text-black !rounded-full  hover:!bg-gray-300">
            <MdOutlineClose className="text-2xl "/>
              </Button>
          </div>
          ))
          }
        </div>
      </div>
      </div>
    </div>
  );
};

export default Wishlist;
