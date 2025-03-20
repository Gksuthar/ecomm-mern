import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MyContext } from "../../App";
import axios from "axios";
import toast from "react-hot-toast";
import { CiShoppingCart } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import QtyBox from "../QtyBox";
const ProductItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [count, setCount] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [cartData, setCartData] = useState([]);
  const context = useContext(MyContext);
  const url = context.AppUrl;
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    setLoading(true);
    if (item) {
      setLoading(false);
    }
  }, );

  const addToCart = async (id) => {
    try {
      setLoading(true)
      const token = localStorage.getItem("accessToken");
      const response = await axios.post(
        `${url}/api/cart/create`,
        { productId: id, quantity: quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(true)
    }
  };

  useEffect(() => {
    const getCartData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${url}/api/cart/get`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setCartData(response.data.data);
        }
      } catch (error) {
        console.log("Error fetching cart data:", error);
      }
      finally{
        setLoading(false)
      }
    };
    getCartData();
  }, [url, token, cartData, setCartData]);

  const isProductInCart = cartData.some(
    (cartItem) => cartItem?.productId?._id === item?._id
  );

  const productQuantityInCart = cartData.find(
    (cartItem) => cartItem?.productId?._id === item._id
  )?.quantity;

  const updateQty = async (id, qty) => {
    setLoading(true)
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.put(
        `${url}/api/cart/update-cart`,

        { productId: id, qty },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        setCartData((prevCart) =>
          prevCart.map((cartItem) =>
            cartItem.productId._id === id
              ? { ...cartItem, quantity: qty }
              : cartItem
          )
        );
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }finally{
      setLoading(false)
    }
  };

  const addProductInWichList = async (
    id,
    rating,
    price,
    oldPrice,
    brand,
    discount
  ) => {
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
        toast.success("The product is added to the wishlist");
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (isLoading) {
    return (
      <div className="productItem rounded-sm border-1 border-[rgba(0,0,0,0.1)] border border-gray-300 shadow-md animate-pulse">
        <div className="imgWrapper w-full rounded-md relative shadow-sm h-[220px] bg-gray-300"></div>
        <div className="info p-3 py-3 bg-[#ecebeb]">
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="flex items-center gap-4">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          </div>
          <div className="h-10 bg-gray-300 rounded-full mt-2"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="productItem rounded-sm border-1 border-[rgba(0,0,0,0.1)] border border-gray-300 shadow-md">
      <div className="group imgWrapper w-full rounded-md relative shadow-sm">
        <Link to={`/productDetails/${item?._id}`}>
          <div className="img h-[220px] overflow-hidden relative">
            <img src={`${item?.images[0]}`} className="w-full" alt="" />
            <img
              src={`${item?.images[1]}`}
              className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
              alt=""
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
          -{item?.discount}%
        </span>
        <div className="actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[10px] opacity-0 group-hover:opacity-100">
          <Button
            onClick={() => context.getProductById(item?._id)}
            className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary !text-black group"
          >
            <MdOutlineZoomOutMap className="text-[18px] text-black" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary !text-black group">
            <GoGitCompare className="text-[18px] text-black" />
          </Button>
          <Button
            onClick={() =>
              addProductInWichList(
                item._id,
                item.rating,
                item.price,
                item.oldPrice,
                item.brand,
                item.discount
              )
            }
            className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary !text-black group"
          >
            <FaRegHeart className="text-[18px] text-black" />
          </Button>
        </div>
      </div>
      <div className="info p-3 py-3 bg-[#ecebeb]">
        <h6 className="text-[14px] link transition-all">
          <Link to="/productListning">{item?.brand.substring(0,8)}</Link>
        </h6>
        <h3 className="text-[13px] title font-[500] text-[#000] link transition-all mb-1">
          <Link to="/productListning">{item?.name.substring(0, 15)}...</Link>
        </h3>
        <Rating
          name="size-small"
          defaultValue={item?.rating}
          size="small"
          readOnly
        />
        <div className="flex items-center justify-between  !bg-[#ecebeb]">
          <span className="price line-through text-gray-500 text-[15px] font-[600]">
            ₹{item?.oldPrice}
          </span>
          <span className="newPrice text-primary font-bold">
            ₹{item?.price}
          </span>
        </div>
        {isProductInCart && productQuantityInCart > 0 ? (
          <div className="flex items-center mt-2 w-full border border-gray-300 rounded-full overflow-hidden">
            <button
              onClick={() => updateQty(item?._id, productQuantityInCart - 1)}
              className="bg-gray-200 text-gray-700 w-10 h-10 flex items-center justify-center"
            >
              <CiCircleMinus className="text-xl" />
            </button>

            <span className="flex-1 text-center text-lg">
              {productQuantityInCart}
            </span>

            <button
              onClick={() => updateQty(item?._id, productQuantityInCart + 1)}
              className="bg-gray-900 text-white w-10 h-10 flex items-center justify-center"
            >
              <CiCirclePlus className="text-xl" />
            </button>
          </div>
        ) : (
          <Button
            onClick={() => addToCart(item._id)}
            className="btn-org sm:w-full !mt-2 flex gap-1 sm:gap-3"
          >
            <CiShoppingCart className="text-xl sm:text-2xl" />
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
