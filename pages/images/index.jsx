import React from 'react';
import ImageToggler from '../../components/ImagesPage/ImageToggler';

const ImagePage = () => {
  return (
    <>
      <div className="justify-center pb-4 text-center text-3xl font-bold lg:text-5xl pt-10 ">
        <h1 className="mb-4 font-Paytone text-[#A8ECF0]">
          <span className="text-[#FFFFFF]">CHECK OUT ALL OUR </span>
          <br />
          <span className="text-[#f32053]">IMAGES</span><br />
          FROM OUR PAST EVENTS
          <span className="text-[#f32053]">!!</span>
        </h1>
      </div>{' '}
      <ImageToggler />
    </>
  );
};

export default ImagePage;
