import React from 'react'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import BannerBox from '../bannerBox';

const AdsBannerSliderV2 = ({items}) => {
  return (
    <div className='py-5 w-full'>
        <Swiper
        slidesPerView={items}
        spaceBetween={15}
        navigation={true}
        freeMode={true}
        modules={[Navigation]}
        className="AdvBannerSlider"
      >

        <SwiperSlide>
            <BannerBox img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg'}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-2.jpg'}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg'}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'https://www.jiomart.com/images/cms/aw_rbslider/slides/1738299165_Dryfruits_Spices.jpg?im=Resize=(768,448)'}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'https://www.jiomart.com/images/cms/aw_rbslider/slides/1738691852_moto.jpg?im=Resize=(768,448)'}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'https://www.jiomart.com/images/cms/aw_rbslider/slides/1738330753_HPMC--14-.jpg?im=Resize=(768,448)'}/>
        </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default AdsBannerSliderV2
