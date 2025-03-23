import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MyContext } from "../../App";
import axios from "axios";
import toast from "react-hot-toast";
import Pagination from "@mui/material/Pagination";
import { CiShoppingCart } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const CategoryProductListning = ({ category,sortBy,priceRange,setPriceRange,selectedSubCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingStates, setLoadingStates] = useState({});
  const [isCartLoading, setCartLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const context = useContext(MyContext);
  const url = context.AppUrl;
  const token = localStorage.getItem("accessToken");
  const productsPerPage = 8;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  useEffect(() => {
    if (context.allProduct && category) {
      let result = context.allProduct.filter((pro) =>
        Array.isArray(category) 
          ? category.includes(pro.catName) 
          : pro.catName === category
      );

      
  
      if (selectedSubCategory) {
        result = result.filter((pro) => 
          pro.subCat === selectedSubCategory
        );
      }
  
      result = getSortedProduct(result, sortBy);
      
      result = shortProductByPriceRange(result, priceRange);
      
      setFilteredProducts(result);
    } else {
      setFilteredProducts([]);
    }
  }, [category, selectedSubCategory, context.allProduct, sortBy, priceRange]);

  const shortProductByPriceRange=(products,price)=>{
    const sortedPro = [...products]
    return sortedPro.filter((item)=>item.price>=price[0] && item.price<=price[1])
  }

  const getSortedProduct=(products,sortBy)=>{
    const sorted= [...products]
    switch(sortBy){
      case "Relevance":
        return sorted;
      case "Sales, highest to lowest":
        return sorted.sort((a,b)=>(b.sales || 0) - (a.sales || 0))
      case "Price, high to low" :
        return sorted.sort((a,b)=>b.price-a.price)
      case "Price, low to high" :
        return sorted.sort((a,b)=>a.price-b.price)
      case "Name, A to Z":
        return sorted.sort((a,b)=>a.name.localeCompare(b.name))
      case "Name, Z to A" :
        return sorted.sort((a,b)=>b.name.localeCompare(a.name))
      default:
        return sorted;        

    }
  }

  useEffect(() => {
    const getCartData = async () => {
      setCartLoading(true);
      try {
        const response = await axios.get(`${url}/api/cart/get`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          setCartData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching cart data: " + error.message);
        toast.error("Failed to fetch cart data");
      } finally {
        setCartLoading(false);
      }
    };
    getCartData();
  }, [url, token]);

  const addToCart = async (id) => {
    setLoadingStates((prev) => ({ ...prev, [id]: true }));
    try {
      const response = await axios.post(
        `${url}/api/cart/create`,
        { productId: id, quantity: quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        setCartData([...cartData, { productId: { _id: id }, quantity }]);
      }
    } catch (error) {
      toast.error("Failed to add to cart");
    } finally {
      setLoadingStates((prev) => ({ ...prev, [id]: false }));
    }
  };

  const updateQty = async (id, qty) => {
    setLoadingStates((prev) => ({ ...prev, [id]: true }));
    try {
      const response = await axios.put(
        `${url}/api/cart/update-cart`,
        { productId: id, qty },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        toast.success("Quantity updated");
        setCartData((prevCart) =>
          prevCart.map((cartItem) =>
            cartItem.productId._id === id ? { ...cartItem, quantity: qty } : cartItem
          )
        );
      }
    } catch (error) {
      toast.error("Error updating quantity");
    } finally {
      setLoadingStates((prev) => ({ ...prev, [id]: false }));
    }
  };

  const addProductInWishlist = async (id, rating, price, oldPrice, brand, discount) => {
    try {
      const response = await axios.post(
        `${url}/api/mylist/addToMyList`,
        { productId: id, rating, price, oldPrice, brand, discount },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 201) {
        toast.success("Added to wishlist");
      }
    } catch (error) {
      toast.error("Failed to add to wishlist");
    }
  };

  const handlePageChange = (e, value) => {
    setCurrentPage(value);
  };

  if (isCartLoading) {
    return (
      <table className="w-full border-collapse animate-pulse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 h-10 bg-gray-300"></th>
            <th className="p-3 h-10 bg-gray-300"></th>
            <th className="p-3 h-10 bg-gray-300"></th>
            <th className="p-3 h-10 bg-gray-300"></th>
          </tr>
        </thead>
        <tbody>
          {Array(8).fill().map((_, index) => (
            <tr key={index} className="border-b">
              <td className="p-3 h-12 bg-gray-300"></td>
              <td className="p-3 h-12 bg-gray-300"></td>
              <td className="p-3 h-12 bg-gray-300"></td>
              <td className="p-3 h-12 bg-gray-300"></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <>
      {paginatedProducts.length > 0 ? (
        paginatedProducts.map((product) => {
          const isProductInCart = cartData.some(
            (cartItem) => cartItem?.productId?._id === product?._id
          );
          const productQuantityInCart = cartData.find(
            (cartItem) => cartItem?.productId?._id === product._id
          )?.quantity;
          const isLoading = loadingStates[product._id] || false;

          if (isLoading) {
            return (
              <div
                key={product._id}
                className="productItem rounded-sm border-1 border-[rgba(0,0,0,0.1)] border border-gray-300 shadow-md animate-pulse"
              >
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
            <div
              key={product._id}
              className="productItem rounded-sm border-1 border-[rgba(0,0,0,0.1)] border border-gray-300 shadow-md"
            >
              <div className="group imgWrapper w-full rounded-md relative shadow-sm">
                <Link to={`/productDetails/${product?._id}`}>
                  <div className="img h-[220px] overflow-hidden relative">
                    <img src={`${product?.images[0]}`} className="w-full" alt="" />
                    <img
                      src={`${product?.images[1]}`}
                      className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                      alt=""
                    />
                  </div>
                </Link>
                <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
                  -{product?.discount}%
                </span>
                <div className="actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[10px] opacity-0 group-hover:opacity-100">
                  <Button
                    onClick={() => context.getProductById(product?._id)}
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary !text-black group"
                  >
                    <MdOutlineZoomOutMap className="text-[18px] text-black" />
                  </Button>
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary !text-black group">
                    <GoGitCompare className="text-[18px] text-black" />
                  </Button>
                  <Button
                    onClick={() =>
                      addProductInWishlist(
                        product._id,
                        product.rating,
                        product.price,
                        product.oldPrice,
                        product.brand,
                        product.discount
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
                  <Link to="/productListning">{product?.brand.substring(0, 8)}</Link>
                </h6>
                <h3 className="text-[13px] title font-[500] text-[#000] link transition-all mb-1">
                  <Link to="/productListning">{product?.name.substring(0, 15)}...</Link>
                </h3>
                <Rating
                  name="size-small"
                  defaultValue={product?.rating}
                  size="small"
                  readOnly
                />
                <div className="flex items-center justify-between !bg-[#ecebeb]">
                  <span className="price line-through text-gray-500 text-[15px] font-[600]">
                    ₹{product?.oldPrice}
                  </span>
                  <span className="newPrice text-primary font-bold">₹{product?.price}</span>
                </div>
                {isProductInCart && productQuantityInCart > 0 ? (
                  <div className="flex items-center mt-2 w-full border border-gray-300 rounded-full overflow-hidden">
                    <button
                      onClick={() => updateQty(product?._id, productQuantityInCart - 1)}
                      className="bg-gray-200 text-gray-700 w-10 h-10 flex items-center justify-center"
                    >
                      <CiCircleMinus className="text-xl" />
                    </button>
                    <span className="flex-1 text-center text-lg">{productQuantityInCart}</span>
                    <button
                      onClick={() => updateQty(product?._id, productQuantityInCart + 1)}
                      className="bg-gray-900 text-white w-10 h-10 flex items-center justify-center"
                    >
                      <CiCirclePlus className="text-xl" />
                    </button>
                  </div>
                ) : (
                  <Button
                    onClick={() => addToCart(product._id)}
                    className="btn-org sm:w-full !mt-2 flex gap-1 sm:gap-3"
                  >
                    <CiShoppingCart className="text-xl sm:text-2xl" />
                    Add Cart
                  </Button>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <p>No products found.</p>
      )}
      <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
    </>
  );
};

export default CategoryProductListning;