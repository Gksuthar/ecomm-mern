import React, { useState } from 'react';
import UserSiteBarManager from '../../components/userSiteBarManager/index';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { IoMdClose } from "react-icons/io";

const Orders = () => {
  const [isOpenProductDetails, setIsOpenProductDetails] = useState(false);

  const handleOpenProductDetails = () => {
    setIsOpenProductDetails(true);
  };

  const handleCloseProductDetails = () => {
    setIsOpenProductDetails(false);
  };

  return (
    <div className="py-10 w-full">
      <div className="container flex gap-5">
        <UserSiteBarManager />
        <div className="productItem rounded-sm border border-[rgba(0,0,0,0.1)] w-[75%] bg-white shadow-md mt-4 p-4">
          <h2 className="text-xl font-bold mb-2">My Orders</h2>
          <p className="mb-4">There are 2 Orders</p>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">Order ID</th>
                  <th scope="col" className="px-6 py-3">Payment ID</th>
                  <th scope="col" className="px-6 py-3">Products</th>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Phone Number</th>
                  <th scope="col" className="px-6 py-3">Address</th>
                  <th scope="col" className="px-6 py-3">Pincode</th>
                  <th scope="col" className="px-6 py-3">Total Amount</th>
                  <th scope="col" className="px-6 py-3">Email</th>
                  <th scope="col" className="px-6 py-3">Order Status</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">12345</td>
                  <td className="px-6 py-4">PAY12345</td>
                  <td className="px-6 py-4">
                    <Button onClick={handleOpenProductDetails} className="!text-black bg-white rounded-md !px-1">
                      View Products
                    </Button>
                  </td>
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">1234567890</td>
                  <td className="px-6 py-4">123 Main St</td>
                  <td className="px-6 py-4">123456</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">john.doe@example.com</td>
                  <td className="px-6 py-4">Delivered</td>
                  <td className="px-6 py-4">2023-10-01</td>
                </tr>
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
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Product ID</th>
                <th scope="col" className="px-6 py-3">Product Title</th>
                <th scope="col" className="px-6 py-3">Image</th>
                <th scope="col" className="px-6 py-3">Quantity</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3">SubTotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">P12345</td>
                <td className="px-6 py-4">Apple MacBook Pro 17"</td>
                <td className="px-6 py-4">
                  <img src="https://via.placeholder.com/50" alt="Product" className="w-10 h-10" />
                </td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
            </tbody>
          </table>
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