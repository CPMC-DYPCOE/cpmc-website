import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MentorForm from './assets/mentorForms.svg';
import MentorFormStep2 from './assets/step2MentorRegistration.svg';
import MentorFormStep3 from './assets/step3MentorRegistration.svg';
import MenteeFormStep1 from './assets/step1MenteeRegistration.svg';
import MenteeFormStep2 from './assets/step2MenteeRegistration.svg';
import MenteeFormStep3 from './assets/step3MenteeRegistration.svg';
// import ques_mark from "./assets/ques_mark.png";

const Registers = () => {
  return (
    <>
      <div className="pt-20 lg:pl-32 lg:pr-32">
        <div className=" mt-0 ml-12 font-Paytone text-4xl font-semibold text-[#ffffff]">
          MENTOR <span className="text-[#f32053]">REGISTRATION</span>
        </div>
        <div className="mt-8 ml-8 mr-8 justify-center lg:ml-0 lg:mr-0 lg:flex lg:flex-row">
          <div className="mb-8 rounded-2xl bg-[#0b1c2b] p-4  lg:mr-4 lg:flex lg:h-[459px]  lg:w-[447px] lg:flex-col lg:pt-12">
            <div className="">
              <Image alt="xyz" src={MentorForm} width={410} height={256} />
            </div>
            <div className="break-words p-2 pt-4  text-white lg:w-[412px]">
              Fill out the form :
              <Link href="/">
                <h1 className="text-blue-300"> Coming Soon</h1>
              </Link>
            </div>
          </div>
          <div className="mb-8 rounded-2xl bg-[#0b1c2b] p-4  lg:mr-4 lg:flex lg:h-[459px]   lg:w-[363px] lg:flex-col lg:pt-12">
            <div className="">
              <Image alt="xyz" src={MentorFormStep2} width={330} height={256} />
            </div>
            <div className="break-words p-2 pt-4 text-white lg:w-[330px]">
              Once we find your profile perfect for a mentor, we let you know about it through a
              mail. Then you can join our discord server.
            </div>
          </div>
          <div className="mb-8 rounded-2xl  bg-[#0b1c2b] p-4  lg:flex lg:h-[459px]   lg:w-[328px] lg:flex-col lg:pt-12">
            <div className=" pt-8 ">
              <Image alt="xyz" src={MentorFormStep3} width={301} height={219} />
            </div>
            <div className="break-words p-2 pt-4 text-white lg:w-[301px]">
              We will let you know of your allotted mentees and the discord could also be used to
              establish meaningful connection.
            </div>
          </div>
        </div>

        <div className=" mt-16 ml-12 font-Paytone text-4xl font-semibold  text-[#ffffff]">
          MENTEE <span className="text-[#f32053]">REGISTRATION</span>
        </div>
        <div className="mt-8 ml-8 mr-8 justify-center pb-16 lg:ml-0 lg:mr-0 lg:flex lg:flex-row">
          <div className="mb-8 rounded-2xl bg-[#0b1c2b] p-4  lg:mr-4 lg:flex lg:h-[459px] lg:w-[447px] lg:flex-col lg:pt-12">
            <div className="">
              <Image alt="xyz" src={MenteeFormStep1} width={410} height={256} />
            </div>
            <div className="break-words p-2 pt-4  text-white lg:w-[412px]">
              Fill out the form :
              <Link href="/">
                <h1 className="text-blue-300"> Coming Soon</h1>
              </Link>
            </div>
          </div>
          <div className="mb-8 rounded-2xl bg-[#0b1c2b] p-4  lg:mr-4 lg:flex lg:h-[459px]   lg:w-[363px] lg:flex-col lg:pt-12">
            <div className="">
              <Image alt="xyz" src={MenteeFormStep2} width={330} height={256} />
            </div>
            <div className="break-words p-2 pt-4 text-white lg:w-[330px]">
              Once we find your profile perfect for a mentee, we let you know about it through a
              mail. Then you can join our discord server.
            </div>
          </div>
          <div className="mb-8 rounded-2xl  bg-[#0b1c2b] p-4  lg:flex lg:h-[459px]   lg:w-[328px] lg:flex-col lg:pt-12">
            <div className=" pt-8 ">
              <Image alt="xyz" src={MenteeFormStep3} width={301} height={219} />
            </div>
            <div className="break-words p-2 pt-4 text-white lg:w-[301px]">
              We will let you know of your allotted mentor and the discord could also be used to
              establish meaningful connection.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registers;
