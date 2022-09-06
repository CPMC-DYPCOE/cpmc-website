import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import t4 from '../assets/t4.svg';

// import classes from '../LandingSlide/LandingSlide.module.css';
import classes from './AboutTeam.module.css';

import Model from '../threeJs/teamModels';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const AboutTeam = () => {
  
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="mt-0 flex flex-col justify-center lg:mt-[0px] lg:pl-16 lg:pr-16">
          <div className="pl-8 pr-8">
            <h2 className="text-center text-sm font-semibold  text-[#89BAEE] lg:pl-0 lg:text-left">
              About the Team
            </h2>
            <h1 className="pb-8 text-center text-3xl font-bold text-[#A8ECF0] lg:pl-0 lg:text-left lg:text-5xl ">
              <span className="pr-4 font-bold text-white">MEET OUR</span>
              TEAM
            </h1>
          </div>
          <p className="pl-8 pr-8 text-center text-sm font-[400] text-[#FFFFFF] lg:text-left lg:text-lg lg:font-semibold">
            If you&apos;d like to meet and connect with the people behind C.P.M.C., visit our team
            page by clicking the button below.
          </p>
          <div className="lg:mr-auto lg:pt-8 lg:pl-8  ">
            <Link href="/team">
              <button className={classes.btn}>
                <span className={classes.span}>OUR TEAM</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:mt-[180px] lg:pl-16 lg:pr-16">
          <div className=" flex h-[300px] cursor-pointer items-center justify-center md:mr-auto md:h-[500px] md:w-[100vw] lg:mr-auto lg:h-[700px]  lg:w-[700px]">
            <Canvas className="">
              <OrbitControls enableDamping={true} enableZoom={false} />

              <directionalLight position={[4, 5, 2]} intensity={1} color="#F32053" />
              <directionalLight position={[-4, -5, -2]} intensity={1} color="#A8ECF0" />
              <directionalLight position={[4, -5, 2]} intensity={1} color="#407BFF" />

              <Suspense fallback={null}>
                <Model />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
