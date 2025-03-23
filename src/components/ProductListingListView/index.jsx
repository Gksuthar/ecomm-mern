import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MyContext } from "../../App";
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const ProductItemListView = ({ category, sortBy, priceRange, setPriceRange }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const context = useContext(MyContext);
  const url = context.AppUrl;
  const productsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (context.allProduct && category) {
      let result = context.allProduct.filter((pro) =>
        Array.isArray(category) ? category.includes(pro.catName) : pro.catName === category
      );
      result = getSortedProduct(result, sortBy);
      result = getShortbyPriceRange(result, priceRange);
      setFilteredProducts(result);
    } else {
      setFilteredProducts([]);
    }
  }, [category, context.allProduct, sortBy, priceRange]);

  const getShortbyPriceRange = (products, priceRange) => {
    const sorted = [...products];
    return sorted.filter((item) => item.price >= priceRange[0] && item.price <= priceRange[1]);
  };

  const getSortedProduct = (products, sortBy) => {
    const sorted = [...products];
    switch (sortBy) {
      case "Relevance":
        return sorted;
      case "Sales, highest to lowest":
        return sorted.sort((a, b) => (b.sales || 0) - (a.sales || 0));
      case "Price, high to low":
        return sorted.sort((a, b) => b.price - a.price);
      case "Price, low to high":
        return sorted.sort((a, b) => a.price - b.price);
      case "Name, A to Z":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "Name, Z to A":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  };

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
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async (id, quantity = 1) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.post(
        `https://mernecommbackend-d6vr.onrender.com/api/cart/create`,
        { productId: id, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      if (response.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {paginatedProducts && paginatedProducts.map((item, indx) => (
        <div key={indx} className="productItem rounded-sm border border-[rgba(0,0,0,0.1)] shadow-md flex flex-col md:flex-row w-full mb-4">
          <div className="group imgWrapper w-full md:w-[18%] h-[200px] md:h-auto rounded-md relative overflow-hidden">
            <Link to={`/productDetails/${item._id}`}>
              <div className="h-full w-full relative">
                <img
                  src={item.images[0]}
                  className="h-full w-full object-contain"
                  alt={item.name}
                />
                <img
                  src={item.images[1]}
                  className="h-full w-full object-contain transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                  alt={item.name}
                />
              </div>
            </Link>
            <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
              -${item.discount}
            </span>
            <div className="actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[10px] opacity-0 group-hover:opacity-100">
              <Button
                onClick={() => context.getProductById(item._id)}
                className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary !text-black"
              >
                <MdOutlineZoomOutMap className="text-[18px]" />
              </Button>
              <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary !text-black">
                <GoGitCompare className="text-[18px]" />
              </Button>
              <Button
                onClick={() => addProductInWichList(item?._id, item?.rating, item?.price, item?.oldPrice, item?.brand, item?.discount)}
                className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary !text-black"
              >
                <FaRegHeart className="text-[18px]" />
              </Button>
            </div>
          </div>
          <div className="info w-full md:w-[82%] p-3 bg-[#ecebeb] flex flex-col">
            <h6 className="text-[15px] md:text-[15px] text-left">
              <Link to={`/productDetails/${item._id}`}>{item.name.substring(0, 100)}...</Link>
            </h6>
            <h3 className="text-[13px] font-[500] text-[#000] mt-2 mb-1">
              <Link to={`/productDetails/${item._id}`}>{item.title}</Link>
            </h3>
            <Rating name="size-small" defaultValue={item.rating} size="small" readOnly />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 !bg-[#ecebeb]">
              <span className="price line-through text-gray-500 text-[15px] font-[600]">
                ₹ {item.oldPrice}
              </span>
              <span className="newPrice text-primary font-bold">₹ {item.price}</span>
            </div>
            <p className="text-[12px] text-gray-500 mb-3 hidden md:block">
              {item.description.substring(0, 250)}...
            </p>
            <p className="text-[12px] text-gray-500 mb-3 block md:hidden">
              {item.description.substring(0, 100)}...
            </p>
            <div className="mt-3 !bg-[#ecebeb]">
              <Button
                onClick={() => addToCart(item?._id)}
                className="btn-org hover:!bg-black transition-all duration-300 flex gap-1 w-full md:w-auto justify-center"
              >
                <IoCartOutline className="text-[16px]" />
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-end mt-10">
        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
      </div>
    </>
  );
};

export default ProductItemListView;