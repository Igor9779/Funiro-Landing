import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="flex pl-[100px] pt-[80px]">
      <div className='space-y-4'>
        <h1 className="font-gilroy text-[24px] font-[700] leading-[29.02px] text-left">
          Funiro.
        </h1>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">
          Worldwide furniture store since<br />
          2020. We sell over 1000+ branded<br />
          products on our website
        </p>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">
          Sawojajar Malang, Indonesia
        </p>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">
          +6289 456 3455
        </p>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">
          www.funiro.com
        </p>
      </div>
      <div className="ml-[80px] space-y-4">
        <h1 className="font-gilroy text-[24px] font-[700] leading-[29.02px] text-left">Menu</h1>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">Products</p>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">Rooms</p>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">Inspirations</p>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">About Us</p>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">Terms & Policy</p>
      </div>
      <div className="ml-[80px] space-y-4">
        <h1 className="font-gilroy text-[24px] font-[700] leading-[29.02px] text-left">Account</h1>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">My Account</p>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">Checkout</p>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">My Cart</p>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">My Catalog</p>
      </div>
      <div className="ml-[80px] space-y-4">
        <h1 className="font-gilroy text-[24px] font-[700] leading-[29.02px] text-left">Stay Connected</h1>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">Facebook</p>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">Instagram</p>
        <p className="font-gilroy text-[16px] font-[400] leading-[24px] text-left text-[#616161]">Twitter</p>
      </div>
      <div className="ml-[80px] space-y-4">
            <h1 className="font-gilroy text-[24px] font-[700] leading-[29.02px] text-left">Stay Updated</h1>
            <div className="flex items-center">
                <input
                    id="simple-input"
                    type="text"
                    className="w-[245px] p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D1A56F]"
                    placeholder="Enter your email"
                />
                <button className="w-[42px] h-[42px] bg-[#D1A56F] flex items-center justify-center ml-2">
                    <FaTelegramPlane className="text-white" size={24} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Footer
