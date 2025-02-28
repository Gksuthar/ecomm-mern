import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/navigation';

import { Navigation } from "swiper/modules";
import {Link} from 'react-router-dom'
const CategorySlider = () => {
  return (
    <div className="homecatSlider py-8 pt-4">
        <div className="container">
      <Swiper
        slidesPerView={7}
        spaceBetween={15}
        navigation={true}
        freeMode={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to={`/productListning?category='Smart-Tablet'`}>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
                alt="categorySlider" className="transition-all"
              />
              <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/productListning'>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/12-cz_categoryimagelist.jpg"
                alt="categorySlider" className="transition-all"
              />
              <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/13-cz_categoryimagelist.jpg"
                alt="categorySlider" className="transition-all"
              />
              <h3 className="text-[16px] font-[500] mt-3">Smart Watch</h3>
            </div>
          </Link>
        </SwiperSlide>
       
        <SwiperSlide>
          <Link to='/'>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/15-cz_categoryimagelist.jpg"
                alt="categorySlider" className="transition-all"
              />
              <h3 className="text-[16px] font-[500] mt-3">Wooden Chair</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/16-cz_categoryimagelist.jpg"
                alt="categorySlider" className="transition-all"
              />
              <h3 className="text-[16px] font-[500] mt-3">Snekers Shoes</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/17-cz_categoryimagelist.jpg"
                alt="categorySlider" className="transition-all"
              />
              <h3 className="text-[16px] font-[500] mt-3">Purse</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/18-cz_categoryimagelist.jpg"
                alt="categorySlider" className="transition-all"
              />
              <h3 className="text-[16px] font-[500] mt-3">X-Controller</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
                alt="categorySlider" className="transition-all"
              />
              <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
                alt="categorySlider" className="transition-all"
              />
              <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
                alt="categorySlider" className="transition-all"
              />
              <h3 className="text-[16px] font-[500] mt-3">Smart Tablet</h3>
            </div>
          </Link>
        </SwiperSlide>
        
      </Swiper>
    </div>
    </div>
  );
};

export default CategorySlider;
