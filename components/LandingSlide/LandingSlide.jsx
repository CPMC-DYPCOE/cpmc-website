import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import down_arrow from '../assets/downArrow.svg';
import Logo from '../assets/CPMC.svg';
import classes from './LandingSlide.module.css';

import { AmbientLight } from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const LandingSlide = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-b-[16%] bg-[#091E32] pt-5">
        <div>
          <Image src={Logo} height="120px" width="180px" alt="logo" />
        </div>
        <div className="justify-center  pt-16 text-2xl font-semibold md:text-4xl lg:pb-[2.5rem] lg:text-7xl">
          <div>
            <h1 className="text-center text-[#89BAEE]">Competitive Programming</h1>
            <h1 className="pt-4 text-center text-white">and Mentorship Club.</h1>
            <h1 className="pt-4 text-center text-[#89BAEE]">
              DYPCOE, <span className="text-center text-white"> Pune.</span>{' '}
            </h1>
          </div>

          <div className="pt-0 lg:pt-12">
            {/* <Link href="#joinclub">
              <button className={classes.btn}>
                <span className={classes.span}>JOIN NOW</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </Link> */}

            <Link href="#timeline">
              <div className="relative top-[20px]  flex items-center justify-center transition delay-150 duration-300 hover:-translate-y-1 hover:scale-75 lg:top-[60px]">
                <Image src={down_arrow} alt="down" width={50} height={50} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSlide;
