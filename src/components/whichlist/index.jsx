import React, { useContext, useState, useEffect } from "react";
import UserSiteBarManager from "../userSiteBarManager";
import axios from "axios";
import { MyContext } from "../../App.jsx";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import useFetch from '../../DataFetch/getDataContext.jsx';
import { InfinitySpin } from "react-loader-spinner";

const Wishlist = () => {
  const context = useContext(MyContext);
  const url = context.AppUrl;
  const token = localStorage.getItem("accessToken");

  const { data: fetchedData, loading, error } = useFetch(`${url}/api/mylist/getMyList`, token);

  const [wichListData, setWichListData] = useState([]);

  useEffect(() => {
    if (fetchedData) {
      setWichListData(fetchedData);
    }
  }, [fetchedData]);

  const removeWhichListItem = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/mylist/removeToMyList/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        toast.success(response.data.message);
        setWichListData(wichListData.filter((item) => item._id !== id));
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.error(error);
    }
  };

  if (loading) return    <div className="flex justify-center items-center h-screen">
  
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
        </div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <div className="conatainer flex">
        {context.windowWidth > 450 && <UserSiteBarManager />}
        <div className="p-4 mt-4 w-[100%] sm:w-[75%] bg-white">
          <h1 className="text-2xl font-bold mb-4">My Wishlist ({wichListData.length})</h1>
          <div className="space-y-4">
            {Array.isArray(wichListData) &&
              wichListData.map((item, indx) => (
                <div key={indx} className="flex border p-2 rounded-lg shadow-sm">
                  <div className="w-24 h-24">
                    <img
                      src={`${item.productId?.images[0]}`}
                      alt="product"
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <Link to={`/productDetails/${item.productId._id}`}>
                      <h2 className="text-lg font-semibold hover:text-primary transition-all duration-300">
                        {item.productId?.name}
                      </h2>
                    </Link>
                    <p className="text-sm text-gray-600">
                      {item.productId?.description.substring(0, 120)}...
                    </p>
                    <div className="mt-2">
                      <span className="text-lg font-bold">₹ {item.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ₹{item.oldPrice}
                      </span>
                      <span className="text-sm text-green-600 ml-2">{item.discount}%</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => removeWhichListItem(item._id)}
                    className="!min-w-0 !w-8 !h-8 !p-0 !text-black !rounded-full hover:!bg-gray-500 hover:!text-white"
                  >
                    <MdOutlineClose className="text-2xl" />
                  </Button>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Wishlist;