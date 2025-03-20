import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import './index.css';
import { Link } from 'react-router-dom';

const CategorySlider = () => {
  return (
    <div className="homecatSlider py-3 sm:py-8 pt-4">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
        >
          

          <SwiperSlide>
            <Link to="/productListning/Fashion">
              <div className="item py-3 sm:py-7 px-3 bg-white rounded-sm text-center flex flex-col items-center justify-center">
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/12-cz_categoryimagelist.jpg"
                  alt="Smart Tablet"
                  className="transition-all"
                />
                <h3 className="text-[16px] font-[500] mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/productListning/Electronics">
              <div className="item py-3 sm:py-7 px-3 bg-white rounded-sm text-center flex flex-col items-center justify-center">
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"
                  alt="Smart Tablet"
                  className="transition-all"
                />
                <h3 className="text-[16px] font-[500] mt-3">Electronics</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/productListning/Smart-Watch">
              <div className="item py-3 sm:py-7 px-3 bg-white rounded-sm text-center flex flex-col items-center justify-center">
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/13-cz_categoryimagelist.jpg"
                  alt="Smart Watch"
                  className="transition-all"
                />
                <h3 className="text-[16px] font-[500] mt-3">Smart Watch</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/productListning/Chair">
              <div className="item py-3 sm:py-7 px-3 bg-white rounded-sm text-center flex flex-col items-center justify-center">
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/15-cz_categoryimagelist.jpg"
                  alt="Wooden Chair"
                  className="transition-all"
                />
                <h3 className="text-[16px] font-[500] mt-3">Wooden Chair</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/productListning/Shoes">
              <div className="item py-3 sm:py-7 px-3 bg-white rounded-sm text-center flex flex-col items-center justify-center">
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/16-cz_categoryimagelist.jpg"
                  alt="Sneakers Shoes"
                  className="transition-all"
                />
                <h3 className="text-[16px] font-[500] mt-3">Sneakers Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/productListning/Purse">
              <div className="item py-3 sm:py-7 px-3 bg-white rounded-sm text-center flex flex-col items-center justify-center">
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/17-cz_categoryimagelist.jpg"
                  alt="Purse"
                  className="transition-all"
                />
                <h3 className="text-[16px] font-[500] mt-3">Purse</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-3 sm:py-7 px-3 bg-white rounded-sm text-center flex flex-col items-center justify-center">
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/18-cz_categoryimagelist.jpg"
                  alt="X-Controller"
                  className="transition-all"
                />
                <h3 className="text-[16px] font-[500] mt-3">X-Controller</h3>
              </div>
            </Link>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
