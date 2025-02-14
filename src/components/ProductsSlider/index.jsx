import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "../productItem/index";
import { Navigation } from 'swiper/modules';
import { useContext } from "react";
import { MyContext } from "../../App";
const ProductsSlider = ({ items,selectedTab }) => {
  const context  = useContext(MyContext)
  const products  = context.allProduct ? context.allProduct.filter((pro)=>pro.catName===selectedTab) : []
  return (
    <section className="ProductsSlider">
      <div className="container">
        <Swiper
          slidesPerView={items}
          spaceBetween={15}
          navigation={true}
          freeMode={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products && products.map((item,index)=>(
            <SwiperSlide key={index}>
               <ProductItem item={item} />
          </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
    </section>
  );
};

export default ProductsSlider;
