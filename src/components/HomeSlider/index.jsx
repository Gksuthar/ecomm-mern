import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4">
      <div className="container mx-auto px-4">
        <Swiper
          spaceBetween={10}
          navigation={{
            enabled: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
              navigation: { enabled: false }, 
            },
            640: {
              slidesPerView: 1, 
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1, 
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[10px] sm:rounded-[20px] overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg"
                alt="HomeSlider"
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[10px] sm:rounded-[20px] overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg"
                alt="HomeSlider"
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[10px] sm:rounded-[20px] overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg"
                alt="HomeSlider"
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[10px] sm:rounded-[20px] overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg"
                alt="HomeSlider"
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[10px] sm:rounded-[20px] overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg"
                alt="HomeSlider"
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[10px] sm:rounded-[20px] overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"
                alt="HomeSlider"
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[10px] sm:rounded-[20px] overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524958576_NewProject(10).jpg"
                alt="HomeSlider"
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;