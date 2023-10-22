import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import imgCard1 from '../img/img1.jpg'
import imgCard2 from '../img/img2.jpg'
import imgCard3 from '../img/img3.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function HomeSlider() {
  return (
    <>
      <Swiper
        autoplay={true}
        loop={true}
        speed={500} 
        slidesPerView={3}
        spaceBetween={30}
        css-mode={true}


        pagination={{
          autoplay:true,
          loop:true

        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={imgCard1} alt="" className='cardbox'/></SwiperSlide>
        <SwiperSlide><img src={imgCard1} alt="" className='cardbox'/></SwiperSlide>
        <SwiperSlide><img src={imgCard1} alt="" className='cardbox'/></SwiperSlide>
        <SwiperSlide><img src={imgCard1} alt="" className='cardbox'/></SwiperSlide>
        <SwiperSlide><img src={imgCard1} alt="" className='cardbox'/></SwiperSlide>
        <SwiperSlide><img src={imgCard1} alt="" className='cardbox'/></SwiperSlide>
        <SwiperSlide><img src={imgCard1} alt="" className='cardbox'/></SwiperSlide>
        <SwiperSlide><img src={imgCard1} alt="" className='cardbox'/></SwiperSlide>
        <SwiperSlide><img src={imgCard1} alt="" className='cardbox'/></SwiperSlide>
      </Swiper>
    </>
  );
}
