import React, { useState } from "react";
import "../../public/font.css";
import { SiCivicrm } from "react-icons/si";
import { CgLaptop } from "react-icons/cg";
import { PiFlowerTulipDuotone } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative container p-5 mx-auto flex justify-between items-center h-[82px] shadow-md shadow-[#E5E5E5]">
     
      <div className="flex items-center">
        <h1 className="p-2 mt-3 satisfy text-[58px]">b</h1>
        <div className="ms-[13px] p-0">
          <h1 className="leading-none  md:text-[12px] lg:text-[15px] dm-sans">the</h1>
          <h1 className="leading-none text-[25px] sm:text-[14px] md:text-[25px] lg:text-[34px] dm-sans font-bold">
            baap <span className="font-normal">company</span>
          </h1>
        </div>
      </div>

      
      <div
        className="text-[25px]  me-8 cursor-pointer sm:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <IoMdClose /> : <FaBars />}
      </div>

      
      <div
        className={`absolute sm:relative top-20 sm:top-0 left-0 w-full sm:w-auto  sm:bg-transparent  rounded z-50 bg-[#ffffff]  transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
      >
        <ul className="flex flex-col sm:flex-row items-center dm-sans font-bold text-[#000000] gap-6 sm:gap-2 md:gap-6 p-6 sm:p-0">
          <li className="flex items-center  text-[14px] lg:text-[16px]  ">
            <SiCivicrm className=" text-[12px] lg:text-[16px] me-2" />
            Products
          </li>
          <li className="flex items-center text-[14px] lg:text-[16px]  ">
            <CgLaptop className=" text-[16px] lg:text-[20px] me-2" />
            Education
          </li>
          <li className="flex items-center text-[14px] lg:text-[16px]  ">
            <PiFlowerTulipDuotone className="text-[16px]  lg:text-[20px] me-2" />
            Agriculture
          </li>
          <h1 className="flex items-center text-[10px] lg:text-[16px] p-3 rounded-full bg-[#635BFF] text-white">
            <FiPhoneCall className="me-2" /> +1 858 433 6042
          </h1>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
