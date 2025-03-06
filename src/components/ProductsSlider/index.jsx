import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "../productItem/index";
import { Navigation } from 'swiper/modules';
import { useContext } from "react";
import { MyContext } from "../../App";

const ProductsSlider = ({ items, selectedTab }) => {
  const context = useContext(MyContext);
  const products = context.allProduct
    ? context.allProduct.filter((pro) => pro.catName === selectedTab)
    : [];

  return (
    <section className="ProductsSlider py-5">
      <div className="container">
        <Swiper
          spaceBetween={15}
          navigation={true}
          freeMode={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1, 
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3, 
            },
            1024: {
              slidesPerView: items || 4, // 👈 Desktop (uses prop `items`)
            },
          }}
        >
          {products && products.map((item, index) => (
            <SwiperSlide key={index} className="">
              <ProductItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductsSlider;
