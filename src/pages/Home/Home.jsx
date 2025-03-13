import React, { useContext } from "react";
import HomeSlider from "../../components/HomeSlider";
import CategorySlider from "../../components/CatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ProductsSlider from "../../components/ProductsSlider";
import BlogItem from "../../components/BlogItem";
import AdsBannerSliderV2 from "../../components/AdsBannerSliderV2";
import { useState } from "react";
import FeatureProduct from "../../components/FeautureProduct";
import { MyContext } from "../../App";
const Home = () => {
  const [value, setValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState("Fashion"); 

  const handleChange = (event, newValue) => {
    setSelectedTab(event.target.textContent)
    setValue(newValue);
  };
  const context = useContext(MyContext)

  return (
    <div>
      <HomeSlider />
      <CategorySlider />

      <section className="sm:py-16 py-6 bg-white">
        <div className="container">
          <div className="freShipping w-full p-4 border border-[red] rounded-md py-4 flex items-center justify-between mb-7">
            <div className="col1 flex items-center gap-4">
              <TbTruckDelivery className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping{" "}
              </span>
            </div>

            <div className="col flex items-center gap-4">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>

            <div className="hidden sm:block col3">
              <p className="font-bold text-[25px] uppercase">- Only $200*</p>
            </div>
          </div>
          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="lestSec">
              <h2 className="text-[25px] font-[600]">Populer Product</h2>
              <p className="text-[16px] font-[500] ">
                Do not miss the current Offer until end of the March
              </p>
            </div>
            <div className="rightSecreenCat w-auto overflow-x-scroll  sm:w-[60%] flex sm:justify-end">
             {context.categoryData &&
             context.categoryData.map((item,indx)=>(
               <Tabs
               key={indx}
               value={item.name}
               onChange={handleChange}
               textColor="primary"
               indicatorColor="primary "
               variant="scrollable"
                sx={{
                  backgroundColor: selectedTab === item.name ? "#f0f0f0" : "transparent",
                  borderRadius: "8px",
                }}
        
                >
                <Tab label={item.name} />
              </Tabs>
                ))
              }
             
            </div>
          </div>
        </div>
        <ProductsSlider items={6} selectedTab={selectedTab} />
      </section>

      <section className="pt-2 bg-white">
        <div className="container">
      <h2 className="text-[25px] font-[600]">Latest Product</h2>
   </div>
   <ProductsSlider items={6} selectedTab={selectedTab} />
</section>


      <section className="pt-2 bg-white">
        <div className="container">
          <h2 className="text-[25px] font-[600]">Feature Product</h2>
        </div>
        <FeatureProduct items={6} />
        <div className="container">
          <AdsBannerSliderV2 items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white blogSection">
        <div className="container">
        <h2 className="text-[25px] font-[600]">From The Blog</h2>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            freeMode={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <br />
    </div>
  );
};

export default Home;
