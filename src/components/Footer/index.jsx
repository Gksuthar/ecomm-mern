import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { IoGiftSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsFillThreadsFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-white border-t-2 border-[rgba(0,0,0,0.1)]">
        <div className="container">
          <div className="flex items-center justify-between py-8 gap-2 pb-8 ">
            <div className="col flex items-center justify-center flex-col group">
              <FaShippingFast className="text-[60px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
              <h3 className="text-[18px] font-[600] mt-3">Free shipping</h3>
              <p className="text-[14px] font-[500]">For all Order Over $100</p>
            </div>
            <div className="col flex items-center justify-center flex-col group ">
              <GiReturnArrow className="text-[60px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
              <h3 className="text-[18px] font-[600] mt-3">30 Days Returns</h3>
              <p className="text-[14px] font-[500]">For an Exchange Product</p>
            </div>
            <div className="col flex items-center justify-center flex-col group ">
              <MdPayment className="text-[60px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
              <h3 className="text-[18px] font-[600] mt-3">Secured Payment</h3>
              <p className="text-[14px] font-[500]">Payment Cards Accepted</p>
            </div>
            <div className="col flex items-center justify-center flex-col group ">
              <IoGiftSharp className="text-[60px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
              <h3 className="text-[18px] font-[600] mt-3">Special Gifts</h3>
              <p className="text-[14px] font-[500]">Our First Product Order</p>
            </div>
            <div className="col flex items-center justify-center flex-col group ">
              <BiSupport className="text-[60px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
              <h3 className="text-[18px] font-[600] mt-3">Support 24/7</h3>
              <p className="text-[14px] font-[500]">Contact us Anytime</p>
            </div>
          </div>
          <hr />
          <br />
          <div className="footer flex py-8 ">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.2)]">
              <h2 className="text-[18px] font-[600] mb-4">Contect Us</h2>
              <p className="text-[13px] font-[400] pb-4">
                Classyshop - Mega Super Store <br /> 507-Union Trade Centre
                Franc
              </p>
              <Link className="link" to="sales@yourcompany.com ">
                sales@yourcompany.com
              </Link>
              <span className="text-[20px] font-[600] block w-full mt-4 text-primary mb-5">
                (+91) 123456789
              </span>
              <div className="flex items-center gap-2">
                <IoChatboxEllipsesOutline className="text-[33px] text-primary" />
                <span className="text-[16px] font-[600] pl-2">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-[40%] flex pl-8  ">
              <div className="part2_col1 w-[50%]  ">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                <ul className="list">
                  <li className="list-none mb-2">
                    <Link className="link text-[14px] w-full font-[500] transition text-gray-500">
                      Prices drop
                    </Link>
                  </li>
                  <li className="list-none mb-2">
                    <Link className="link text-[14px] w-full font-[500] transition text-gray-500">
                      New products
                    </Link>
                  </li>
                  <li className="list-none mb-2">
                    <Link className="link text-[14px] w-full font-[500] transition text-gray-500">
                      Best sales
                    </Link>
                  </li>
                  <li className="list-none mb-2">
                    <Link className="link text-[14px] w-full font-[500] transition text-gray-500">
                      Contact us
                    </Link>
                  </li>
                  <li className="list-none mb-2">
                    <Link className="link text-[14px] w-full font-[500] transition text-gray-500">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none mb-2">
                    <Link className="link text-[14px] w-full font-[500] transition text-gray-500">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Our company</h2>
                <ul className="list">
                  <li className="list-none mb-2">
                    <Link className="link text-[14px] w-full font-[500] transition text-gray-500">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none mb-2">
                    <Link className="link text-[14px] w-full font-[500] transition text-gray-500">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none mb-2">
                    <Link className="link text-[14px] w-full font-[500] transition text-gray-500">
                      Terms and conditions of use
                    </Link>
                  </li>
                  <li className="list-none mb-2">
                    <Link className="link text-[14px] w-full font-[500] transition text-gray-500">
                      About us
                    </Link>
                  </li>
                  <li className="list-none mb-2">
                    <Link className="link text-[14px] w-full font-[500] transition text-gray-500">
                      Secure payment
                    </Link>
                  </li>
                  <li className="list-none mb-2">
                    <Link className="link text-[14px] w-full font-[500] transition text-gray-500">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part2 w-[35%] pl-8  ">
              <h2 className="text-[18px] font-[600] mb-4">
                Subscribe to newsletter
              </h2>
              <p className="text-[14px] text-gray-500 font-[500]">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>
              <form action="" className="mt-5">
                <input
                  type="text"
                  placeholder="your email address"
                  className="w-full h-[40px] border outline-none rounded-md pl-4 pr-4 mb-4 focus:border-[#000]"
                />
                <Button className="btn-org">SUBMIT</Button>
                <FormControlLabel
                  className="text-gray-500 !text-[10px] mt-1  "
                  control={<Checkbox size="small" />}
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,1)] py-3 bg-white">
        <div className="container flex items-center justify-between flex-row">
          <ul className="flex items-center gap-2">
            <li className="list-none"><Link to='/' target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex justify-center items-center group transition-all hover:bg-primary"><FaFacebookF className="text-[15px] group-hover:text-white "/></Link></li>
            <li className="list-none"><Link to='/' target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex justify-center items-center group transition-all  hover:bg-primary "><FaInstagram className="text-[15px] group-hover:text-white"/></Link></li>
            <li className="list-none"><Link to='/' target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex justify-center items-center group transition-all hover:bg-primary"><FaYoutube className="text-[15px] group-hover:text-white"/></Link></li>
            <li className="list-none"><Link to='/' target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex justify-center items-center group transition-all  hover:bg-primary"><BsFillThreadsFill className="text-[15px] group-hover:text-white"/></Link></li>
          </ul>
          <p className="text-[13px] text-center">© 2025 - Ecommerce software by PrestaShop™</p>

          <div className="flex items-center">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/carte_bleue.png" alt="image" />
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/visa.png" alt="image" />
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/master_card.png" alt="image" />
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/american_express.png" alt="image" />
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/paypal.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
