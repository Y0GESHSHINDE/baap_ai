// src/components/Card.js
import React from "react";
import arrow from "../../../public/assets/Icon core-arrow-right.svg"

const Card = ({ title, logo, description, bgColor }) => {
  return (
    <div>
    <div
      className="ms-[10px] max-w-xs p-4  w-[300px] sm:w-[174px]  h-[186px]   mt-5 mb-0  text-gray-800 rounded-lg shadow-md border border-gray-200"
      style={{ backgroundColor: bgColor }}>
      <div className="flex items-center space-x-2">
        <div className="text-2xl">
          <img src={logo} alt="" />
        </div>
        <h3 className="font-bold dm-sans  text-lg">{title}</h3>
      </div>
      <p className="mt-2 text-[15px] font-normal w-[148px]  h-[87px]   dm-sans">
        {description}
        <span className="mt-4 text-right text-gray-600 font-normal dm-sans">
          <a href="#" className="inline-flex items-center hover:underline">
            <span className="ms-1">
              <img src={arrow} alt="" />
            </span>{" "}
          </a>
        </span>
      </p>
    </div>
    <span className="  text-[30px] p-0 m-0 ms-8 font-bold" style={{color:bgColor}}  >━━━━━━━━━━</span>
    </div>
  );
};

export default Card;
