import React from "react";
import "../../public/font.css";
import { useState } from "react";
// import HeroSection from "./HeroSection";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="container mx-auto  px-4 flex items-center  justify-between ">
      <div className="flex items-center">
        <div className="text-center text-[58px] satisfy">b</div>
        <span className="ms-[15px]">
          <h1 className="text-[15px] font-serif p-0 m-0 h-[15px] -mt-3 leading-none w-[15px]">
            the
          </h1>
          <h1 className="text-black font-serif text-[20px] lg:text-[34px] p-0 m-0 leading-none font-bold">
            baap company
          </h1>
        </span>
      </div>

      <button className="flex md:hidden justify-start" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <div className=" hidden md:flex gap-5">
        <nav className="flex items-center space-x-8 text-gray-700 dm-sans">
          <a
            href="#"
            className="flex items-center text-[12px] lg:text-[16px] hover:text-black">
            <img
              src="../../public/assets/Icon corebrands-civicrm.svg"
              alt="Products"
              className="me-1 h-2 lg:h-4"
            />
            Products
          </a>
          <a
            href="#"
            className="flex items-center text-[12px] lg:text-[16px] hover:text-black">
            <img
              src="../../public/assets/Icon core-laptop.svg"
              alt="Education"
              className="me-1 h-2 lg:h-4"
            />
            Education
          </a>
          <a
            href="#"
            className="flex items-center text-[12px] lg:text-[16px] hover:text-black">
            <img
              src="../../public/assets/Icon core-flower.svg"
              alt="Agriculture"
              className="me-1 h-2 lg:h-4"
            />
            Agriculture
          </a>
        </nav>
        <a
          href="tel:+18584336042"
          className="bg-indigo-500 dm-sans text-white py-2 px-2 lg:py-2 lg:px-4 text-[10px] lg:text-[16px] rounded-full flex items-center shadow-lg hover:bg-indigo-600">
          <img
            src="../../public/assets/Icon feather-phone-call-1.svg"
            alt="Call"
            className="me-2"
          />
          +1 858 433 6042
        </a>
      </div>

      <div
        className={`${ isMobileMenuOpen ? "block" : "hidden"} absolute top-20 right-0 w-full md:hidden bg-[#EAE9FF]  h-[100%] gap-10 flex flex-col items-center  py-4`}>
        <a
          href="#"
          className=" text-[12px] bg-indigo-500 dm-sans text-white py-2 px-4 rounded-full dm-sans ">
          Products
        </a>
        <a
          href="#"
          className=" text-[12px] bg-indigo-500 dm-sans text-white py-2 px-4 rounded-full  dm-sans">
          Education
        </a>
        <a
          href="#"
          className=" text-[12px] bg-indigo-500 dm-sans text-white py-2 px-4 rounded-full   dm-sans">
          Agriculture
        </a>
        <a
          href="tel:+18584336042"
          className="bg-indigo-500 dm-sans text-white py-2 px-4 rounded-full ">
          +1 858 433 6042
        </a>
      </div>
    </div>
  );
}

export default Navbar;
