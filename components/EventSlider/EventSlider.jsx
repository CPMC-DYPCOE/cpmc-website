import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import useScreenType from 'react-screentype-hook';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

import abcde from './Images/abcde.png';

import 'swiper/css/effect-cards';
import { Zoom, Autoplay, Navigation, Pagination } from 'swiper';

const EventSlider = () => {
  const screenType = useScreenType();

  return (
    <>
      <div className="pt-20 lg:pl-32 lg:pr-32">
        <h1 className="ml-12 text-center font-Paytone text-xl font-semibold text-white lg:ml-0 lg:text-4xl">
          Upcomming <span className="text-[#f32053]"> Events </span>{' '}
        </h1>
      </div>
      <div className=" lg:m-[160px]  lg:mt-12 lg:mb-0 lg:pl-16 lg:pr-16">
        <Swiper
          className="m-8 rounded-xl "
          loop={true}
          centeredSlides={true}
          spaceBetween={screenType.isMobile ? 30 : 100}
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
