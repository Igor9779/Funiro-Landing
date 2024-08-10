import React from 'react';
import { Products } from './json/products';

const OurProducts = () => {
  return (
    <div className="flex flex-col items-center mb-[44px]">
      <h1 className="font-gilroy text-[40px] font-bold leading-[48px] text-center mb-[32px]">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[32px]">
        {Products[0].products.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col items-center p-4 bg-[#F4F5F7] shadow-md rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:bg-custom-gray-opacity hover:shadow-lg group"
          >
            <div className="relative w-[275px] h-[301px] mb-4">
              <img
                src={`/assets/products/${product.image}`}
                alt={product.title}
                className="w-full h-full object-cover rounded-md transition-opacity duration-300 ease-in-out"
              />
              {product.labels.length > 0 && (
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  {product.labels.map((label, index) => (
                    <span
                      key={index}
                      className={`label ${label.type} p-2 text-white rounded-full`}
                      style={{ backgroundColor: label.type === 'sale' ? '#E97171' : '#2EC1AC' }}
                    >
                      {label.value}
                    </span>
                  ))}
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <button className="w-[202px] h-[48px] bg-white text-[#E89F71] font-gilroy rounded-none flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-[#F0F0F0]">
                  Add to cart
                </button>
                <div className="flex items-center justify-center gap-12  w-full px-4">
                  <button className="flex items-center gap-2 text-[#ffffff] text-[16px] font-gilroy bg-transparent border-none shadow-none transition-colors duration-300 ease-in-out hover:text-[#E89F71]">
                    <img src={'/assets/Icon/gridiconsShare.svg'} alt="Share" className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center gap-2 text-[#ffffff] text-[16px] font-gilroy bg-transparent border-none shadow-none transition-colors duration-300 ease-in-out hover:text-[#E89F71]">
                    <img src={'/assets/Icon/HeartWhite.svg'} alt="Like" className="w-5 h-5" />
                    <span>Like</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative z-10 text-left">
              <div className="relative z-20">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-sm text-[#898989] mb-2">{product.text}</p>
                <p className="text-lg font-semibold mb-1">${product.price}</p>
                {product.priceOld && (
                  <p className="text-sm text-[#898989] line-through">${product.priceOld}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-[245px] h-[48px] border-2 border-[#E89F71] bg-white text-[#E89F71] font-gilroy rounded-none flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-[#E89F71] hover:text-white">
        Show more
      </button>
    </div>
  );
};

export default OurProducts;
