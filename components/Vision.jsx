import React from 'react';
import Image from 'next/image';
import a from './assets/a.png';
import b from './assets/b.png';
import c from './assets/c.png';
import v1 from './assets/v1.gif';
import v2 from './assets/v2.gif';
import v3 from './assets/v3.png';

const Vision = () => {
  return (
    <>
      <div className="mt-[150px] px-40">
        <div className="flex items-center justify-between">
          <div className="">
            <Image src={a} alt="down" width={'500px'} height={'500px'} />
          </div>
          <div className="font-Paytone text-[48px] font-[800] leading-[67px] text-[#469697]">
            Improve <br /> problem <br />
            solving skills
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-Paytone text-[48px] font-[800] leading-[67px] text-[#469697]">
            Group disccusion
            <br /> on Competitive <br />
            programming
          </div>
          <div className="">
            <Image src={b} alt="down" width={'500px'} height={'400px'} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <Image src={c} alt="down" width={'500px'} height={'500px'} />
          </div>
          <div className="font-Paytone text-[48px] font-[800] leading-[67px] text-[#469697] ">
            Helping each other
            <br /> to learn new <br />
            technical skill
          </div>
        </div>
      </div>
      <section className="vision_section ">
        <div className="pt-[50px] text-center font-Paytone text-[48px] font-[800] text-[#fff]">
          OUR VISION
        </div>
        <div className="flex items-center justify-center  space-x-[150px] px-[100px] py-[100px]">
          <div className="h-[250px] w-[250px] rounded-[50%] bg-[#fff] ">
            <Image
              src={v1}
              alt="down"
              width={'500px'}
              height={'500px'}
              className="rounded-[50%]"
            ></Image>
            <div className="text-center text-[36px] font-[700] text-[#fff]">CP</div>
            <div className="w-[120%] text-[20px] text-[#fff] ">
              The Vision of our club in the next 2 years is to promote competitive programming in
              the college and raise students problem-solving skills.
            </div>
          </div>
          <div className="h-[250px] w-[250px] rounded-[50%] bg-[#fff] ">
            <Image
              src={v2}
              alt="down"
              width={'500px'}
              height={'500px'}
              className="rounded-[50%]"
            ></Image>
            <div className=" whitespace-nowrap text-center text-[36px] font-[700] text-[#fff]">
              Strong Community
            </div>
            <div className="w-[120%] text-[20px] text-[#fff] ">
              The Vision of our club in the next 2 years is to promote competitive programming in
              the college and raise students problem-solving skills.
            </div>
          </div>
          <div className="h-[250px] w-[250px] rounded-[50%] bg-[#fff] ">
            <Image
              src={v3}
              alt="down"
              width={'500px'}
              height={'500px'}
              className="rounded-[50%]"
            ></Image>
            <div className="text-center text-[36px] font-[700] text-[#fff]">Mentorship</div>
            <div className="w-[120%] text-[20px] text-[#fff] ">
              We also aim to establish a mentorship among juniors and seniors, so that every student
              learns and grows more.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
