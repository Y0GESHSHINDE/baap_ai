import React from "react";
import "../../../src/components/HeroSection/HeroSectionAll.css";
import img from "../../../public/assets/Icon akar-arrow-counter-clockwise.svg";
import ContactCard from "./ContactCard";
function RightSection() {
  return (
    <div className="h-full flex justify-center flex-col">
      <div className="flex  text-center  lg:-mt-60  mt-0 2xl:mt-16  h-[280px] justify-center ">
        <div className="flex mt-0 w-full lg:w-auto lg:ms-8 xl:ms-0 justify-center me-20 ">
          <div className="flex   lg:mt-8 ">
            <img
              className="h-[138px] w-[121px] lg:me-0 md-ms-3 lg:ms-4 xl:ms-0 z-0 mt-28 sm:mt-[100px] lg:mt-[100px]"
              src={img}
              alt=""
              srcset=""
            />
          </div>

          <h1 className="text-[13px] lg:mt-0 -ms-12   md:me-0  md:-ms-4 z-2  bg-[#FF5BBA] dm-sans font-medium w-[238px] h-[100px]    flex items-center " id="Box">
            Get in touch with us to implement your n ext idea. Or changing your
            business with AI
          </h1>
        </div>
      </div>

      <div className=" ms-0 lg:ms-20 xl:ms-8 2xl:ms-16 -mt-20 ">
        <ContactCard />
      </div>
    </div>
  );
}

export default RightSection;
