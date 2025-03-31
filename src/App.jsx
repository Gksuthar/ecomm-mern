import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductListing from "./components/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProdcutDetails"; // Fixed typo in import
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
import Verify from "./pages/Varify"; // Fixed typo in import
import toast, { Toaster } from "react-hot-toast";
import ForgetPassword from "./pages/ForgetPassword/index";
import MyAccount from "./pages/MyAccount/index";
import MyList from "./pages/MyList/index";
import Orders from "./pages/Orders/index";
import Checkout from "./components/checkout/index";
import "swiper/css";
import axios from "axios";
import { jsPDF } from "jspdf";
import "react-loading-skeleton/dist/skeleton.css";
import WhichList from "./components/whichlist"; 

const MyContext = createContext();

function App() {
  const navigate = useNavigate(); 
  const AppUrl = "https://mernecommbackend-d6vr.onrender.com";
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userProfile, setUserProfile] = useState(null); 
  const [allProduct, setAllProduct] = useState([]);
  const [allFeatureProduct, setAllFeatureProduct] = useState([]);
  const [data, setData] = useState(null); 
  const [drawerOpen, setDrawerOpen] = useState(false); 
  const [cartLen, setCartLen] = useState(0);
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [thirdSubCategory, setThirdSubCategory] = useState([]);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [loadThirdCat, setLoadThirdCat] = useState(false); // Fixed typo
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [originalProducts, setOriginalProducts] = useState([]); // Added to preserve original product data

  // Fetch all products and featured products
  useEffect(() => {
    const getAllProductCategory = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(`${AppUrl}/api/product`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          const products = response.data.products;
          setAllProduct(products);
          setOriginalProducts(products); // Preserve original data
          setAllFeatureProduct(products.filter((item) => item.isFeatured));
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getAllProductCategory();

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter products based on search (without mutating original data)
  useEffect(() => {
    try {
      const filtered = originalProducts.filter(
        (item) =>
          item.brand?.toLowerCase().includes(search.toLowerCase()) ||
          item.description?.toLowerCase().includes(search.toLowerCase()) ||
          item.name?.toLowerCase().includes(search.toLowerCase())
      );
      setAllProduct(filtered);
    } catch (error) {
      console.error("Search filter error:", error);
    }
  }, [search, originalProducts]);

  // Fetch third-level categories
  useEffect(() => {
    if (activeSubCategory) {
      setThirdSubCategory(activeSubCategory.children || []);
    }
  }, [activeSubCategory]); 
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLogin(true);
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(`${AppUrl}/api/user/user-details`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          if (response.status===200) { 
            setUserProfile(response.data.data);
          }

        } catch (error) {
          console.error("User details fetch error:", error);
        }
      };
      fetchUserDetails();
    } else {
      setIsLogin(false);
      setUserProfile(null);
    }
  }, [isLogin]);

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

  const getProductById = async (id) => {
    try {
      setOpenProductDetailsModal(true);
      setLoading(true);
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
      console.error("Product fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenProductDetailsModal = () => setOpenProductDetailsModal(true);
  const handleCloseProductDetailsModal = () => setOpenProductDetailsModal(false);

  const toggleCartPanel = (newOpen) => () => setOpenCartPanel(newOpen);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const openSidebarFunction = () => setIsOpenSidebar((prev) => !prev);

  const openAlertBox = (status, msg) => {
    if (status === "success") toast.success(msg);
    if (status === "error") toast.error(msg);
  };

  const toggleCategory = async (categoryId) => {
    setOpenCategoryId(openCategoryId === categoryId ? null : categoryId);
    try {
      const response = await axios.get(`${AppUrl}/api/routerCategory/`);
      if (response.status === 200) {
        const selectedCategory = response.data.data.find((item) => item._id === categoryId);
        setSubCategory(selectedCategory?.children || []);
      }
    } catch (error) {
      console.error("Category toggle error:", error);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Hello, this is a sample PDF!", 10, 10);
    doc.save("sample.pdf");
  };

  const logout = async () => {
    try {
      const response = await axios.post(
        `${AppUrl}/api/user/Logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setIsLogin(false);
        setUserProfile(null);
        openAlertBox("success", response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  const values = {
    handleOpenProductDetailsModal,
    openCartPanel,
    setOpenCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
    AppUrl,
    userProfile,
    allProduct,
    getProductById,
    openCategoryId,
    setOpenCategoryId,
    toggleCategory,
    categoryData,
    setCategoryData,
    subCategory,
    setSubCategory,
    thirdSubCategory,
    setLoadThirdCat, // Fixed typo
    setActiveSubCategory,
    loadThirdCat, // Fixed typo
    allFeatureProduct,
    windowWidth,
    downloadPDF,
    openSidebarFunction,
    isOpenSidebar,
    logout,
    loading,
    toggleDrawer,
    drawerOpen,
  };

  return (
    <>
      <MyContext.Provider value={values}>
        <Header setSearch={setSearch} search={search} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productListning/:category" element={<ProductListing />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/newpassword" element={<ForgetPassword />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/myList" element={<WhichList />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
      <Toaster />
      <Dialog
        open={openProductDetailsModal}
        fullWidth={true}
        maxWidth="lg"
        onClose={handleCloseProductDetailsModal}
        className="productDetailsModal"
      >
        <DialogContent className="overflow-y-scroll">
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="flex items-center w-full rounded-md productDetailsModalContainer relative">
              <Button
                onClick={handleCloseProductDetailsModal}
                className="!h-[40px] !min-w-[40px] !w-[40px] !rounded-full !text-black !absolute !top-[0px] !right-[0px]"
                aria-label="Close product details"
              >
                <CgClose className="text-[20px]" />
              </Button>
              <div className="flex flex-col sm:flex-row w-full">
                <div className="w-full sm:w-[40%]">{data && <ProductZoom data={data} />}</div>
                <div className="w-full sm:w-[60%] px-4 sm:px-10 sm:ml-5">
                  {data && <ProductDetailsComponents data={data} />}
                </div>
              </div>
            </div>
          </Typography>
        </DialogContent>
      </Dialog>
      <Drawer open={openCartPanel} anchor="right" className="cartBar">
        <div className="flex items-center gap-3 py-3 px-5 justify-between text-[15px] font-[500] border-b border-[rgba(0,0,0,0.2)]">
          <h4>Shopping Cart ({cartLen})</h4>
          <button
            onClick={toggleCartPanel(false)}
            className="p-1"
            aria-label="Close cart panel"
          >
            <IoMdClose className="text-[20px] cursor-pointer" />
          </button>
        </div>
        <CartPanelData lengthOfCart={setCartLen} /> {/* Fixed typo */}
      </Drawer>
    </>
  );
}

export default App;
export { MyContext };