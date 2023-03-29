import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import shopImage from '../assets/shopping.png'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/free-mode";

import { EffectCoverflow, Pagination, FreeMode } from 'swiper';

const Carousal = () => {
  return (
    <div className='mt-[57px] carousel w-screen carousel-center p-4 bg-[#E5E5E5]'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'1'}
        freeMode={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination, FreeMode]}
        className="swiper_container mt-[24px]"
      >
        <SwiperSlide>
          <div className='w-[80%] h-[400px] text-white bg-green-400 rounded-xl mx-auto flex flex-row items-center justify-center'>
            <img src={shopImage} alt="" className='bg-transparent h-64 w-64'/>
            <h2 className='ml-[20px] max-w-sm text-[24px] font-[400]'>From Students To Senior Citizens This Web Portal Of <br/><span className='font-[600]'>"Pruducts and Classified"</span> Provides It All</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[80%] h-[400px] text-white bg-[#EFC147] rounded-xl  mx-auto flex flex-row items-center justify-center'>
          <img src={shopImage} alt="" className='bg-transparent h-64 w-64'/>
            <h2 className='ml-[20px] max-w-sm text-[24px] font-[400]'>From Students To Senior Citizens This Web Portal Of <br/><span className='font-[600]'>"Pruducts and Classified"</span> Provides It All</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[80%] h-[400px] text-white bg-[#8d8d92] rounded-xl  mx-auto flex flex-row items-center justify-center'>
          <img src={shopImage} alt="" className='bg-transparent h-64 w-64'/>
            <h2 className='ml-[20px] max-w-sm text-[24px] font-[400]'>From Students To Senior Citizens This Web Portal Of <br/><span className='font-[600]'>"Pruducts and Classified"</span> Provides It All</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[80%] h-[400px] text-white bg-blue-300 rounded-xl  mx-auto flex flex-row items-center justify-center'>
          <img src={shopImage} alt="" className='bg-transparent h-64 w-64'/>
            <h2 className='ml-[20px] max-w-sm text-[24px] font-[400]'>From Students To Senior Citizens This Web Portal Of <br/><span className='font-[600]'>"Pruducts and Classified"</span> Provides It All</h2>
          </div>
        </SwiperSlide>

        <div className="slider-controler space-y-20">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      
    </div>
  )
}

export default Carousal