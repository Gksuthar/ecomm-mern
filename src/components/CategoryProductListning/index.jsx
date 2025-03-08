import React from "react";
// import "./style.css";
import { Link, useLocation, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { useContext } from "react";
import axios from "axios";
import { MyContext } from "../../App";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react";

const CategoryProductListning = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   let category = queryParams.get("category");

const {category} = useParams();



  const [filteredProducts, setFilteredProducts] = useState([]);
  const context = useContext(MyContext);

  useEffect(() => {
    //  let val = category
    if (context.allProduct && category) {
        const result = context.allProduct.filter(
          (pro) => pro.subCat === category

        );
        setFilteredProducts(result);
      }
      
    }, [category, context.allProduct]); 


  const url = context.AppUrl;
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
  console.log(filteredProducts  );


  return (
    <>
      { filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product._id}
            className="productItem rounded-sm border-1 border-[rgba(0,0,0,0.1)] shadow-md"
          >
            <div className="group imgWrapper w-full rounded-md relative">
              <Link to={`/productDetails/${product._id}`}>
                <div className="img h-[220px] overflow-hidden relative">
                  <img src={product.images[0]} className="w-full" alt="" />
                  <img
                    src={product.images[1]}
                    className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                    alt=""
                  />
                </div>
              </Link>
              <span className="discount flex productss-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
                -{product.discount}
              </span>
              <div className="actions absolute top-[-20px] right-[5px] z-50 flex productss-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[10px] opacity-0 group-hover:opacity-100 ">
                <Button
                  onClick={() => context.getProductById(product._id)}
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
                <Link to="/productListning">
                  {product.name.substring(0, 20)}...
                </Link>
              </h6>
              <h3 className="text-[13px] title font-[500] text-[#000] link transition-all mb-1">
                <Link to="/productListning">
                  {product.description.substring(0, 30)}...
                </Link>
              </h3>
              <Rating
                name="size-small"
                defaultValue={product.rating}
                size="small"
                readOnly
              />
              <div className="flex productss-center gap-4">
                <span className="price line-through text-gray-500 text-[15px] font-[600]">
                  ₹:{product.oldPrice}
                </span>
                <span className="newPrice text-primary font-bold">
                  ₹:{product.price}
                </span>
              </div>
            </div>
          </div>
        ))):
            (
                <p>No products found.</p>
              )
            }
    </>
  );
};

export default CategoryProductListning;
