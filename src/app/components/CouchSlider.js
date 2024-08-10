"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Couches } from "./json/couches";

const Slider = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-60px] right-4 flex space-x-4 z-30">
        <button
          className="bg-[#D1A56F] w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#D1A56F]"
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-300 text-white hover:text-[#D1A56F]"
          >
            <path
              d="M15 5L8 12L15 19"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="bg-[#D1A56F] w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#D1A56F]"
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-300 text-white hover:text-[#D1A56F]"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <Swiper
        modules={[FreeMode, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1.5}
        freeMode={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true} 
        className="mySwiper mt-[136px] h-[553px]"
      >
        {Couches.map((couch, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center relative">
          <img
            src={couch.image}
            alt={`Slide ${index + 1}`}
            className="w-auto h-full object-contain"
          />
          <div className="absolute bottom-[40px] right-[70px] w-[294px] h-[148px] bg-white/75 backdrop-blur-md shadow-lg p-4">
            <div className="pt-[12px] text-left">
              <h3 className="font-gilroy text-[28px] mb-[4px]">{couch.title}</h3>
              <p className="text-sm text-gray-600 mb-[8px]">{couch.subtitle}</p>
              <p className="text-xl font-gilroy text-gray-800">{couch.price}</p>
              <img
                src={'/assets/Icon/couch-arrow-right.svg'}
                alt="Arrow Icon"
                className="absolute bottom-[24px] right-[24px] w-[24px] h-[24px]"
              />   
            </div>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

export default Slider;
