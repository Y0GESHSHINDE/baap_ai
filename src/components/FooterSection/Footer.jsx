import React from "react";
import img1 from "../../../public/assets/Group 3.svg";
import img2 from "../../../public/assets/Group 4.svg";
import img3 from "../../../public/assets/Icon ion-finger-print-sharp.svg";

function Footer() {
  return (
    <div className="w-full relative  lg:mt-0 mt-5  " id="footer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 255"
        className=" hidden lg:flex w-full   ">
        <path
          fill="#F8F8F8"
          fill-opacity="1"
          d="M0,160L40,165.3C80,171,160,181,240,186.7C320,192,400,192,480,176C560,160,640,128,720,106.7C800,85,880,75,960,80C1040,85,1120,107,1200,117.3C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>

      <ul className="absolute top-10  lg:top-[75%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex gap-10 text-center">
        <li className="flex flex-col mb-5 lg:mb-0 items-center">
          <img
            src={img1}
            alt="BAAP ERP"
            className="w-10 h-10"
          />
          <span className="font-bold text-[10px] xl:text-[14px]  dm-sans">
            BAAP ERP - AI
          </span>
        </li>
        <li className="flex flex-col mb-5 lg:mb-0 items-center">
          <img
            src={img2}
            alt="BAAP CRM"
            className=" w-10 h-10"
          />
          <span className="font-bold text-[10px] xl:text-[14px]   dm-sans">
            BAAP CRM
          </span>
        </li>
        <li className="flex flex-col mb-5 lg:mb-0 items-center">
          <img
            src={img3}
            alt="Worker App"
            className="w-8 h-10"
          />
          <span className="font-bold text-[10px] xl:text-[14px]  dm-sans">
            Worker App
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
