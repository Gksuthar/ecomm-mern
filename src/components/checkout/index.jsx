import { Button, CircularProgress, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MyContext } from '../../App';
import { IoMdClose } from "react-icons/io";

const Checkout = () => {
  const [cartData, setCartData] = useState([]);
  const [totalMrp, setTotalMrp] = useState(0);
  const [totalSellingPrice, setTotalSellingPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const PLATFORM_CHARGE = 100;
  const SHIPPING_CHARGE = 100;
  const token = localStorage.getItem('accessToken');
  const context = useContext(MyContext);
  const url = context.AppUrl;

  const finalAmount = Math.round(totalSellingPrice + PLATFORM_CHARGE + SHIPPING_CHARGE);

  useEffect(() => {
    const getCartData = async () => {
      try {
        const response = await axios.get(`${url}/api/cart/get`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          setCartData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching cart data:', error);
        setError('Failed to fetch cart data. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    getCartData();
  }, [url, token]);

  useEffect(() => {
    if (cartData.length > 0) {
      const mrp = cartData.reduce(
        (acc, item) => acc + item.productId.oldPrice * item.quantity,
        0
      );
      const sellingPrice = cartData.reduce(
        (acc, item) => acc + item.productId.price * item.quantity,
        0
      );
      setTotalMrp(parseFloat(mrp.toFixed(2)));
      setTotalSellingPrice(parseFloat(sellingPrice.toFixed(2)));
    }
  }, [cartData]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }
    try {
      const { data } = await axios.post(
        `${url}/api/order/makeOrder`,
        { amount: finalAmount },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const options = {
        key: 'rzp_test_KRIIvltHQ0dIqz',
        amount: data.amount,
        currency: 'INR',
        name: 'Ganesh Store',
        description: 'Thank you for shopping with us',
        order_id: data.id,
        handler: async (response) => {
          try {
            if (cartData.length > 1) {
              console.log('Second cart item ID:', cartData[0]._id);
            } else {
              console.log('No second item in cartData.');
            }

            const verifyResponse = await axios.post(
              `${url}/api/order/verify`,
              {
                amount: finalAmount,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                cartData: cartData,
              },
              { headers: { Authorization: `Bearer ${token}` } }
            );

            alert('Payment Successful!');
          } catch (error) {
            console.error('Error verifying payment:', error.response || error.message);
            alert('Payment verification failed.');
          }
        },
        prefill: {
          name: 'Ganesh',
          email: `${localStorage.getItem('email')}`,
          contact: '8003779983',
        },
        theme: {
          color: '#F37254',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error(err);
      alert('Something went wrong during payment!');
    }
  };
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('accessToken')
      const response = await axios.delete(`${url}/api/cart/daleteCart`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data : { _id: id }
      });
      if (response.status === 200) {
        setCartData(cartData.filter(item => item._id !== id));
      }
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div className="py-4">
      <div className="container w-[100%] flex bg-white gap-3">
        <div className="w-[70%] flex flex-col">
          <div className="productsInCart h-[100vh] mt-3 gap-2 overflow-y-scroll">
            {cartData.map((item, index) => (
              <div key={index} className="relative container shadow-md flex border mb-3 ">
                <div className="image w-[30%] h-[150px] flex justify-center items-center">
                  <img src={item.productId.images[0]} alt={item.productId.name} />
                </div>
                <div className="description mt-4 ml-4">
                  <h2 className="text-[14px] font-[500] mr-10">{item.productId.name}</h2>
                  <p className="text-[12px] font-[400]">
                    {item.productId.description.substring(0, 200)}...
                  </p>
                  <span className="text-[12px] text-[#000] font-[500]">
                    Sold by: Ganesh Suthar
                  </span>
                  <div className="price flex gap-3">
                    <p>₹ {item.productId.price}</p>
                    <p className="line-through">₹ {item.productId.oldPrice}</p>
                    <span className="text-green-400">{item.productId.discount}%</span>
                  </div>
                  <h4 className="font-[600] text-[12px]">Not Returnable</h4>
                </div>
                <Button onClick={()=>handleDelete(item._id)} className='max-h-8 h-8 !w-6 !min-w-8 !rounded-full !absolute !top-2 !right-2 hover:!bg-gray-300 !text-black hover:!text-white '>
                  <IoMdClose className='text-2xl'/>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="placeOrder w-[30%] h-[50vh] mt-[100px] px-2 border border-[rgba(0,0,0,0.2)] shadow-md">
          <div className="container">
            <h2 className="text-[14px] font-[600]">Price Details</h2>
            <hr />
            <div className="flex justify-between mb-3">
              <p>Total MRP</p>
              <span>₹ {totalMrp}</span>
            </div>
            <div className="flex justify-between mb-3">
              <p>Discounted Price</p>
              <span>₹ {totalSellingPrice}</span>
            </div>
            <div className="flex justify-between mb-3">
              <p>Platform Charges</p>
              <span>₹ {PLATFORM_CHARGE}</span>
            </div>
            <div className="flex justify-between mb-3">
              <p>Shipping Charges</p>
              <span>₹ {SHIPPING_CHARGE}</span>
            </div>
            <hr />
            <div className="flex justify-between mb-3">
              <p>Total Amount</p>
              <span>₹ {finalAmount}</span>
            </div>
            <Button className="btn-org w-full" onClick={handlePayment}>
              PLACE ORDER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
