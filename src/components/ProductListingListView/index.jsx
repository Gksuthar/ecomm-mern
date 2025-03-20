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
import { useEffect } from "react";
import { useState } from "react";
import Pagination from '@mui/material/Pagination';

import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const ProductItemListView = ({category}) => {
   const [filteredProducts, setFilteredProducts] = useState([]);
    const context = useContext(MyContext);
    const url = context.AppUrl
    const productsPerPage = 3;

    const [currentPage,setCurrentPage] = useState(1)

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex,startIndex+productsPerPage)
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
    };
    useEffect(() => {
      if (context.allProduct && category) {
          const result = context.allProduct.filter(
            (pro) => pro.catName === category
  
          );
          setFilteredProducts(result);
        }
        
      }, [category, context.allProduct]); 
      const addProductInWichList = async (id, rating, price, oldPrice, brand, discount) => {
        try {
          const token = localStorage.getItem("accessToken");
          const response = await axios.post(
            `${url}/api/mylist/addToMyList`,
            { productId: id, rating, price, oldPrice, brand, discount },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.status === 201) {
            toast.success("The product is added in cart");
            // console.log("The product is added in cart");
          }
        } catch (error) {
          console.error(error);
        }
      };

      const addToCart=async(id,quantity)=>{
        try {
          const token = localStorage.getItem('accessToken')
          const response = await axios.post(`https://mernecommbackend-d6vr.onrender.com/api/cart/create`,  { productId: id,quantity },{
            headers:{
              Authorization : `Bearer ${token}`
            }
          })
          if (response.status===200) {
            toast.success(response.data.message)
            
          }else{
            toast.error(response.data.message)
          }
          
        } catch (error) {
          console.error(error)
          toast.error(error.response.data.message)
        }
      }
  
      return (
        <>
        {paginatedProducts &&
          paginatedProducts.map((item, indx) => (
        <div key={indx} className="productItem rounded-sm border border-[rgba(0,0,0,0.1)] shadow-md flex">
            <div  className="flex w-full">
              <div className="group h-[200px] imgWrapper w-[18%] rounded-md relative overflow-hidden">
                <Link to={``}>
                  <div className="h-full w-full relative">
                    <img
                      src={item.images[0]}
                      className="h-full w-full object-contain"
                      alt=""
                    />
                    <img
                      src={item.images[1]}
                      className="h-full w-full object-contain transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                      alt=""
                    />
                  </div>
                </Link>
                <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
                  -${item.discount}
                </span>
                <div className="actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[10px] opacity-0 group-hover:opacity-100">
                  <Button
                    onClick={() => context.handleOpenProductDetailsModal(true)}
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary !text-black"
                  >
                    <MdOutlineZoomOutMap className="text-[18px]" />
                  </Button>
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary !text-black">
                    <GoGitCompare className="text-[18px]" />
                  </Button>
                  <Button onClick={()=>addProductInWichList(item?._id,item?.rating,item?.price,item?.oldPrice,item?.brand,item?.discount)} className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary !text-black">
                    <FaRegHeart className="text-[18px]" />
                  </Button>
                </div>
              </div>
              <div className="info w-[82%] p-3 px-8 py-3 bg-[#ecebeb]">
                <h6 className="text-[15px] text-left">
                  <Link to="/">{item.name.substring(0, 100)}...</Link>
                </h6>
                <h3 className="text-[13px] font-[500] text-[#000] mt-2 mb-1">
                  <Link to="/">{item.title}</Link>
                </h3>
                <Rating name="size-small" defaultValue={item.rating} size="small" readOnly />
                <div className="flex items-center gap-4 !bg-[#ecebeb] !bg-gray-250">
                  <span className="price line-through text-gray-500 text-[15px] font-[600]">
                  ₹ {item.oldPrice}
                  </span>
                  <span className="newPrice text-primary font-bold">₹ {item.price}</span>
                </div>
                <p className="text-[12px] text-gray-500 mb-3">
                  {item.description.substring(0, 250)}...
                </p>
                <div className="mt-3 !bg-[#ecebeb]">
                  <Button onClick={()=>addToCart(item?._id)} className="btn-org hover:!bg-black transition-all duration-300 flex gap-1">
                    <IoCartOutline className="text-[16px]" />
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </div>
      </div>
          ))}
            <div className="flex items-center justify-end mt-10">
              <Pagination count={totalPages} page={currentPage}  onChange={handlePageChange} />
              {/* <Pagination count={totalPages} page={currentPage} onChange={se} color="primary" /> */}

            </div>
        </>
      
      );
    }
      
export default ProductItemListView;
