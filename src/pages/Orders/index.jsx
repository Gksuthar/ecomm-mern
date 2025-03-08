import React, { useState, useEffect, useContext } from 'react';
import UserSiteBarManager from '../../components/userSiteBarManager/index';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import { MyContext } from '../../App';

const Orders = () => {
  const [isOpenProductDetails, setIsOpenProductDetails] = useState(false);
  const context = useContext(MyContext);
  const url = context.AppUrl;

  const [orders, setOrders] = useState([]);
  const [perticulerOrder, setPerticulerOrder] = useState(null);

  const handleOpenProductDetails = (id) => {
    const order = orders.find((item) => item._id === id);
    console.log(order);
    
    setPerticulerOrder(order);
    setIsOpenProductDetails(true);
  };

  const handleCloseProductDetails = () => {
    setIsOpenProductDetails(false);
    setPerticulerOrder(null);
  };

  useEffect(() => {
    const getOrder = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        console.log('Token:', token);  // Check if token exists
        console.log('API URL:', url);  // Confirm URL is correct

        const response = await axios.get(`${url}/api/order/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          console.log('API Response:', response.data.data);
          setOrders(response.data.data)
        }
      } catch (error) {
        console.error('Error Message:', error.message);         // Detailed error message
      }
    };
    getOrder();
  }, []);


  return (
    <div className="py-10 w-full">
      <div className="container flex gap-5">
        <UserSiteBarManager />
        <div className="productItem rounded-sm border border-[rgba(0,0,0,0.1)] w-[75%] bg-white shadow-md mt-4 p-4">
          <h2 className="text-xl font-bold mb-2">My Orders</h2>
          <p className="mb-4">There are {orders.length} Orders</p>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Order ID</th>
                  <th className="px-6 py-3">Payment ID</th>
                  <th className="px-6 py-3">Products</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Phone Number</th>
                  <th className="px-6 py-3">Address</th>
                  <th className="px-6 py-3">Pincode</th>
                  <th className="px-6 py-3">Total Amount</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Order Status</th>
                  <th className="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, indx) => (
                  <tr key={indx} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{item.orderId}</td>
                    <td className="px-6 py-4">{item.paymentId}</td>
                    <td className="px-6 py-4">
                      <Button
                        onClick={() => handleOpenProductDetails(item._id)}
                        className="!text-black bg-white rounded-md !px-1"
                      >
                        View Products
                      </Button>
                    </td>
                    <td className="px-6 py-4">{item.userId.name}</td>
                    <td className="px-6 py-4">{item.delivery_address.mobile}</td>
                    <td className="px-6 py-4">{item.delivery_address.address_line}</td>
                    <td className="px-6 py-4">{item.delivery_address.pincode}</td>
                    <td className="px-6 py-4">{item.productId.price}</td>
                    <td className="px-6 py-4">{item.userId.email}</td>
                    <td className="px-6 py-4">Delivered</td>
                    <td className="px-6 py-4">{item.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Dialog open={isOpenProductDetails} onClose={handleCloseProductDetails} maxWidth="md" fullWidth>
        <DialogTitle>
          <div className="flex justify-between items-center">
            <span>Product Details</span>
            <Button onClick={handleCloseProductDetails}>
              <IoMdClose className="text-gray-600" />
            </Button>
          </div>
        </DialogTitle>
        <DialogContent>
          {perticulerOrder ? (
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Product ID</th>
                  <th className="px-6 py-3">Product Title</th>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Quantity</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">SubTotal</th>
                </tr>
              </thead>
              <tbody>
                {/* {perticulerOrder.products.map((product, indx) => ( */}
                  <tr  className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{perticulerOrder.productId._id}</td>
                    <td className="px-6 py-4">{perticulerOrder.productId.name.substring(0,50)}...</td>
                    <td className="px-6 py-4">
                      <img src={perticulerOrder.productId.images[0]} alt="Product" className="w-20 h-20" />
                    </td>
                    <td className="px-6 py-4">{perticulerOrder.quantity || 1} </td>
                    <td className="px-6 py-4">{perticulerOrder.productId.price}</td>
                    <td className="px-6 py-4">{perticulerOrder.productId.price * 1}</td>
                  </tr>
                {/* ))} */}
              </tbody>
            </table>
          ) : (
            <p>Loading product details...</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProductDetails} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Orders;
