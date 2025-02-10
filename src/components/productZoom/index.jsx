import React, { useRef, useState } from "react";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
const ProductZoom = () => {
  const [selectedImage, setSelectedImage] = useState('https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg');
  const [SliderIndex,setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();


  const goto =(index) =>{
    setSlideIndex(index)
    zoomSliderSml.current.swiper.slideTo(index)
    zoomSliderBig.current.swiper.slideTo(index)

  }

  return (


    <>
    <div className="flex gap-3">
        <div className="slider w-[18%]">
            <Swiper
                slidesPerView={4}
                ref={zoomSliderSml}
                spaceBetween={10}
                navigation={true}
                direction={'vertical'}
                modules={[Navigation]}
                className="zoomProductsSliderThumbs w-[87%] h-[500px] overflow-hidden cursor-pointer"
            >
                <SwiperSlide>
                    <div  onClick={()=>goto(0)} className={`item rounded-md overflow-hidden cursor-pointer group  ${SliderIndex===0 ? 'opacity-1' : 'opacity-30'}`}>
                        <img onClick={()=>setSelectedImage('https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg')} src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg" className="w-full transition-all duration-300 group-hover:scale-105"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div onClick={()=>goto(1)} className={`item rounded-md overflow-hidden cursor-pointer group  ${SliderIndex===1 ? 'opacity-1' : 'opacity-30'}`}>
                <img onClick={()=>setSelectedImage('https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg')} src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg" className="w-full transition-all duration-300 group-hover:scale-105"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div onClick={()=>goto(2)} className={`item rounded-md overflow-hidden cursor-pointer group  ${SliderIndex===2 ? 'opacity-1' : 'opacity-30'}`}>
                <img onClick={()=>setSelectedImage  ('https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg') } src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" className="w-full transition-all duration-300 group-hover:scale-105"/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div className="zoomContainer w-[80%]">
            <Swiper
            ref={zoomSliderBig}
                slidesPerView={1}
                spaceBetween={10}
                navigation={false}
            >
                <SwiperSlide>
                    <InnerImageZoom zoomType="hover" zoomScale={1} src={selectedImage}  />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    </>
  );
};

export default ProductZoom;
