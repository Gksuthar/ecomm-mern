import React from "react";
import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductListing from "./components/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProdcutDetails";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CgClose } from "react-icons/cg";
import ProductDetailsComponents from "./components/ProductsDetails/index";
import ProductZoom from "./components/productZoom";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import Drawer from "@mui/material/Drawer";
import { IoMdClose } from "react-icons/io";
import CartPanelData from "./components/CartPanelData/index";
import CartPage from "./pages/CartPage/index";
import Verify from "./pages/Varify/index";
import toast, { Toaster } from "react-hot-toast";
import ForgetPassword from "./pages/ForgetPassword/index";
import MyAccount from "./pages/MyAccount/index";
import MyList from "./pages/MyList/index";
import Orders from "./pages/Orders/index";
import { useEffect } from "react";
import Checkout from "./components/checkout/index";
import "swiper/css";
import axios from "axios";
import WhichList from "./components/whichlist";
import { alertTitleClasses } from "@mui/material";
const MyContext = createContext();
function App() {
  const AppUrl = "https://mernecommbackend-d6vr.onrender.com";
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [UserProfile, setuserProfile] = useState(null);
  const [allProduct, setAllProduct] = useState([]);
  const [data, setData] = useState();
  localStorage.setItem("forgetPassword", "true");

  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    const getAllProductCategory = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          `https://mernecommbackend-d6vr.onrender.com/api/product`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Assuming passToken holds the actual token
            },
          }
        );
        if (response.status === 200) {
          setAllProduct(response.data.products);
          // console.log('sdfs'+JSON.stringify(response.data.products));
        }
      } catch (error) {
        console.log("Error :" + error);
      }
    };
    getAllProductCategory();
  }, []);

  //  useEffect(() => {
  //         if (cartData.length > 0) {
  //             const total = cartData.reduce((acc, item) => acc + (item.productId.oldPrice * item.quantity), 0);
  //             const totalDiscountPrice = cartData.reduce((acc, item) => acc + (item.productId.price * item.quantity), 0);
  //             setTotalPrice(parseFloat(total.toFixed(2)));
  //             setTotalDiscountPrice(parseFloat(totalDiscountPrice.toFixed(2)))
  //           }
  //     }, [cartData]);

  // get item on zoom mode

  // const {id} = useParams()
  const getProductById = async (id) => {
    try {
      handleOpenProductDetailsModal(true);
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(`${AppUrl}/api/product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setData(response.data.product);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.error("Response error:", error.response);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  const handleOpenProductDetailsModal = () => {
    setOpenProductDetailsModal(true);
  };
  const handleCloseProductDetailsModal = () =>
    setOpenProductDetailsModal(false);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const [maxWidth, setMaxWidth] = useState("lg");
  const [fullWidth, setFullWidth] = useState(true);

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      // const status = status
      toast.success(" " + msg);
    }
    if (status === "error") {
      toast(" " + msg);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token !== undefined && token !== null && token !== "") {
      setIsLogin(true);
      const userDetails = async () => {
        try {
          const userDetail = await axios.get(
            `${AppUrl}/api/user/user-details`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          setuserProfile(userDetail.data.data);
        } catch (error) {
          console.error(error);
        }
      };
      userDetails();
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const toggleCategory = async (categoryId, name) => {
    // alert("categoryId ->"+name)
    setOpenCategoryId(openCategoryId === categoryId ? null : categoryId);
    try {
      const response = await axios.get(`${AppUrl}/api/routerCategory/`);
      if (response.status === 200) {
        const categories = response.data.data;

        const selectedCategory = categories.find(
          (item) => item._id === categoryId
        );

        if (selectedCategory) {
          const subCategories = selectedCategory.children || [];
          setSubCategory(subCategories);
        } else {
          setSubCategory([]);
        }
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`${AppUrl}/api/routerCategory/`);
        if (response.status === 200) {
          setCategoryData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategory();
  }, [AppUrl]);

  const values = {
    handleOpenProductDetailsModal,
    openCartPanel,
    setOpenCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
    AppUrl,
    UserProfile,
    allProduct,
    getProductById,
    openCategoryId,
    setOpenCategoryId,
    toggleCategory,
    categoryData,
    setCategoryData,
    subCategory,
    setSubCategory,
  };
  return (
    <>
      <>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/productListning" element={<ProductListing />}></Route>
            <Route path="/verify" element={<Verify />}></Route>
            <Route path="/newpassword" element={<ForgetPassword />}></Route>
            <Route path="/my-account" element={<MyAccount />}></Route>
            <Route path="/myList" element={<WhichList />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route
              path="/productDetails/:id"
              element={<ProductDetails />}
            ></Route>
          </Routes>
          <Footer />
        </MyContext.Provider>
      </>
      <Toaster />
      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        className="productDetailsModal"
      >
        <DialogContent className="overflow-y-scroll">
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="flex items-center w-full rounded-md productDetailsModalContainer relative">
              <Button
                onClick={() => setOpenProductDetailsModal(false)}
                className="!h-[40px] !min-w-[40px] !w-[40px] !rounded-full !text-black !absolute !top-[0px] !right-[0px]"
              >
                <CgClose className="text-[20px] " />
              </Button>
              <div className="col1 w-[40%] ">
                {data && <ProductZoom data={data} />}
              </div>
              <div className="col2 w-[60%] px-10   ml-5 ">
                {data && <ProductDetailsComponents data={data} />}
              </div>
            </div>
          </Typography>
        </DialogContent>
      </Dialog>
      {/*Cart Panel  */}
      <Drawer open={openCartPanel} anchor="right" className="cartBar">
        <div className="flex items-center gap-3 py-3 px-5 justify-between text-[15px] font-[500] border-b border-[rgba(0,0,0,0.2)]">
          <h4 className="">Shopping Cart (2)</h4>
          <IoMdClose
            onClick={toggleCartPanel(false)}
            className="text-[20px] cursor-pointer"
          />
        </div>
        <CartPanelData />
      </Drawer>
    </>
  );
}

export default App;
export { MyContext };
