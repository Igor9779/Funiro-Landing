import React from 'react';
import RoomsSlider from '../components/RoomsSlider';

const Rooms = () => {
  return (
    <div className='h-[670px] pl-[100px] bg-[#FCF8F3] flex items-center'>
      <div className='flex flex-col justify-center'>
        <h1 className='font-gilroy text-[40px] font-bold leading-[48px] text-left mb-[8px]'>
          50+ Beautiful rooms<br />
          inspiration
        </h1>
        <p className='font-gilroy text-[16px] font-medium leading-[24px] text-left text-[#616161] mb-[24px]'>
          Our designer already made a lot of beautiful<br />
          prototipe of rooms that inspire you
        </p>
        <button className='w-[176px] h-[48px] bg-[#E89F71] text-white text-[16px] font-gilroy rounded-none flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-[#D17F61]'>
          Explore more
        </button>
      </div>
      <div className='flex flex-col items-center ml-[86px]'>
        <RoomsSlider />
      </div>
    </div>
  );
};

export default Rooms;

