import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

import abcde from './Images/abcde.png';

import 'swiper/css/effect-cards';
import { Zoom, Autoplay, Navigation, Pagination } from 'swiper';

const EventSlider = () => {
  return (
    <>
      <div className="pt-20 lg:pl-32 lg:pr-32">
        <h1 className="ml-12 text-center font-Paytone text-xl font-semibold text-white lg:ml-0 lg:text-4xl">
          Upcoming <span className="text-[#f32053]"> Events </span>{' '}
        </h1>
      </div>
      <div className="m-12 lg:m-[160px] lg:mt-12 lg:mb-0 lg:pl-16 lg:pr-16">
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
            <Link href="/masterstalk">
              <div style={{ cursor: 'pointer' }}>
                <Image alt="eventabcde" src={abcde} objectFit="cover" className="rounded-xl" />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="justify-center   rounded-xl  text-center">
            <Link href="/masterstalk">
              <div style={{ cursor: 'pointer' }}>
                <Image alt="eventabcde" src={abcde} objectFit="cover" className="rounded-xl" />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="justify-center   rounded-xl  text-center">
            <Link href="/masterstalk">
              <div style={{ cursor: 'pointer' }}>
                <Image alt="eventabcde" src={abcde} objectFit="cover" className="rounded-xl" />
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default EventSlider;
