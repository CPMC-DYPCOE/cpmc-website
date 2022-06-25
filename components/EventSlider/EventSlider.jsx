import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

import image1 from './Images/josh-hild-i64W0lYFi48-unsplash.jpg';

import 'swiper/css/effect-cards';
import { Zoom, Autoplay, Navigation, Pagination } from 'swiper';

const EventSlider = () => {
  return (
    <>
      <div className="pt-20 lg:pl-32 lg:pr-32">
        <h1 className="ml-12 font-Paytone text-xl font-semibold text-white lg:ml-0 lg:text-4xl">
          Upcomming <span className="text-[#f32053]"> Events </span>{' '}
        </h1>
      </div>
      <div className="m-12 lg:pl-16 lg:pr-16">
        <Swiper
          className="m-8 rounded-xl "
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={1.5}
          pagination={{
            dynamicBullets: true,
            clickable: true
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          //   navigation={true}
          modules={[Zoom, Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide className="justify-center   rounded-xl  text-center">
            <div>
              <Image alt="eventImage1" src={image1} objectFit="cover" className="rounded-xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="justify-center  rounded-xl   text-center">
            <div>
              <Image alt="eventImage1" src={image1} objectFit="cover" className="rounded-xl" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="justify-center  rounded-xl   text-center">
            <div>
              <Image alt="eventImage1" src={image1} objectFit="cover" className="rounded-xl" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default EventSlider;
