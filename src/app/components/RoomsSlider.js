'use client'

import React, { useState, useEffect, useRef } from 'react'
import { RoomsImages, RoomsDescription } from './json/rooms'

function RoomsSlider() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setIndex((prevIndex) => (prevIndex + 1) % RoomsImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const totalWidth = slider.scrollWidth;
      const containerWidth = slider.clientWidth;
      if (index * containerWidth >= totalWidth - containerWidth) {
        slider.scrollLeft = 0;
      }
    }
  }, [index]);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 500); // Длительность анимации
      return () => clearTimeout(timer);
    }
  }, [animate]);

  const handlePrev = () => {
    setAnimate(true);
    setIndex((index - 1 + RoomsImages.length) % RoomsImages.length);
  };

  const handleNext = () => {
    setAnimate(true);
    setIndex((index + 1) % RoomsImages.length);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mt-16 space-x-4">
        <button
          className="flex items-center justify-center w-12 h-12 bg-white text-[#D1A56F] rounded-full text-3xl shadow-md transition-transform duration-300 hover:bg-[#D1A56F] hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          onClick={handlePrev}
        >
          {"<"}
        </button>
        <div className="relative w-[800px] h-[580px] overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (404 + 24)}px)`,
              display: 'flex',
              whiteSpace: 'nowrap',
              width: `${(RoomsImages.length + 1) * (404 + 24)}px`,
            }}
          >
            {[...RoomsImages].map((image, idx) => (
              <div
                key={image.name + idx}
                className="relative inline-block"
                style={{ marginRight: '24px' }}
              >
                <img
                  className="w-[404px] h-[582px] object-cover"
                  src={image.name}
                  alt={`Slide ${idx}`}
                />
                <div
                  className={`absolute transition-transform duration-500 ease-in-out ${animate ? 'slide-up' : ''}`}
                  style={{
                    left: '24px',
                    bottom: '24px',
                    width: '217px',
                    height: '130px',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    boxSizing: 'border-box',
                    transform: animate ? 'translateY(-10px)' : 'translateY(0)',
                    transition: 'transform 0.5s ease-in-out',
                  }}
                >
                  <div>
                    <h3 className="text-lg font-semibold">{RoomsDescription[idx].name}</h3>
                    <p className="text-sm">{RoomsDescription[idx].description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="flex items-center justify-center w-12 h-12 bg-white text-[#D1A56F] rounded-full text-3xl shadow-md transition-transform duration-300 hover:bg-[#D1A56F] hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        {RoomsImages.map((_, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 rounded-full cursor-pointer ${index === idx ? 'bg-[#E89F71]' : 'bg-[#D8D8D8]'}`}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default RoomsSlider;
