import React from "react";
import { useState } from "react";
import { FaUser, FaAppStoreIos } from "react-icons/fa";
import { MdPersonalInjury, MdPeopleAlt } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";
import { TiLeaf } from "react-icons/ti";
import img1 from "../../../public/assets/—Pngtree—woman work from home with_5388281.png";
import img2 from "../../../public/assets/man work from home study_6549829.png";

import FeatureCard from "./FeatureCard";
import {
  IoChevronForwardCircleOutline,
  IoChevronBackCircleOutline,
} from "react-icons/io5";

function LeftSection() {
  const images = [
    { src: [img1], alt: "Work from home" },
    { src: [img2], alt: "Team meeting" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className=" h-[220px] sm:h-[327px] flex justify-evenly sm:grid sm:grid-cols-3 lg:grid-cols-12  ">
        <div
          className="flex items-center text-[30px] opacity-70 cursor-pointer sm:col-span-1 w-8 lg:col-span-1 lg:-ms-4"
          onClick={handlePrevious}>
          <IoChevronBackCircleOutline />
        </div>

        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-[220px] h-[220px] sm:w-[327px] sm:h-[327px] sm:col-span-1 lg:col-span-5  lg:-ms-12  "
        />

        <div
          className="flex justify-end items-center text-[30px] opacity-70 cursor-pointer sm:col-span-1 lg:col-span-6 "
          onClick={handleNext}>
          <IoChevronForwardCircleOutline />
        </div>
      </div>

      <div className=" h-full text-center lg:text-left">
        <h1 className="text-[18px] ms-0 md:ms-[70px] dm-sans-normal text-[#575757]">
          Introducing
        </h1>
        <h1 className="text-[25px] sm:text-[55px] ms-0 md:ms-[70px] kumbh-sans text-black">
          <span className="text-[#635BFF]">BAAP</span> AI
        </h1>
        <h1 className="text-[18px] sm:text-[30px] text-[#222121] ms-0 md:ms-[70px] dm-sans-normal">
          Get AI as a service for your business, enable your business for
          future....
        </h1>
        <h1 className="text-[18px] ms-0 mb-20 lg:mb-0 mt-[18px] md:ms-[70px] dm-sans">
          What we can do for you...
        </h1>

        <div className="flex justify-center lg:block">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            <FeatureCard
              icon={MdPersonalInjury}
              title="Hire Ready Talent"
              description="Good things does take so much time. You can hire some thing "
              bgColor="#C1C485"
            />
            <FeatureCard
              icon={FaAppStoreIos}
              title="Build Apps & Website"
              description="Good things does take so much time. You can hire some thing."
              bgColor="#9CC0A4"
            />
            <FeatureCard
              icon={SlGraduation}
              title="Get Degree & Job"
              description="Good things does take so much time. You can hire some thing"
              bgColor="#E59F87"
            />
            <FeatureCard
              icon={MdPeopleAlt}
              title="Good People Foundation"
              description="Be part of our mission, join the good people foundation."
              bgColor="#C1C485"
            />
            <FeatureCard
              icon={TiLeaf}
              title="Organic & Agriculture"
              description="Sell with baap company, get associated with our farming network"
              bgColor="#EAE9FF"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
