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
import CartPage from './pages/CartPage/index'
import Verify from "./pages/Varify/index";
import toast, { Toaster } from 'react-hot-toast';
import ForgetPassword from "./pages/ForgetPassword/index";
import MyAccount from "./pages/MyAccount/index";
import MyList from "./pages/MyList/index";
import Orders from './pages/Orders/index'
const MyContext = createContext();
function App() {
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [isLogin,setIsLogin] = useState(true);
  const handleOpenProductDetailsModal = () => setOpenProductDetailsModal(true);
  const handleCloseProductDetailsModal = () =>
    setOpenProductDetailsModal(false);


  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const [maxWidth, setMaxWidth] = useState("lg");
  const [fullWidth, setFullWidth] = useState(true);

  const openAlertBox=(status,msg)=>{
   if (status==="success") {
      // const status = status
      toast.success(' '+msg); 
    }if (status==="error") {
      toast(' '+msg); 
    }

  }

  const values = {
    handleOpenProductDetailsModal,
    openCartPanel,
    setOpenCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin
  };
  return (
    <>
      <Router>
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
            <Route path="/myList" element={<MyList />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route
              path="/productDetails/:id"
              element={<ProductDetails />}
            ></Route>
          </Routes>
          <Footer />

        </MyContext.Provider>
      </Router>
          <Toaster/>
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
                <ProductZoom />
              </div>
              <div className="col2 w-[60%] px-10   ml-5 ">
                <ProductDetailsComponents />
              </div>
            </div>
          </Typography>
        </DialogContent>
      </Dialog>
      {/*Cart Panel  */}
      <Drawer open={openCartPanel} anchor="right" className="cartBar" >
        <div className="flex items-center gap-3 py-3 px-5 justify-between text-[15px] font-[500] border-b border-[rgba(0,0,0,0.2)]">
          <h4 className="">Shopping Cart (2)</h4>
          <IoMdClose onClick={toggleCartPanel(false)} className='text-[20px] cursor-pointer'/>
        </div>
        <CartPanelData/>
      </Drawer>
    </>
  );
}

export default App;
export { MyContext };
