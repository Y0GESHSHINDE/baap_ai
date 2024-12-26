import React from "react";
import "../../../src/components/HeroSection/HeroSectionAll.css";
import img from "../../../public/assets/Icon akar-arrow-counter-clockwise.svg";
import ContactCard from "./ContactCard";
function RightSection() {
  return (
    <div className="h-full flex justify-center flex-col">
      <div className="flex  text-center mt-0 lg:-mt-60  2xl:mt-16  h-[280px] justify-center ">
        <div className="flex ">
          <div className="hidden lg:flex">
            <img
              className="h-[138px] w-[121px] z-0 mt-0 sm:mt-[150px] lg:mt-[180px]"
              src={img}
              alt=""
              srcset=""
            />
          </div>

          <h1 className="text-[13px] md:-ms-4 z-2 bg-[#FF5BBA] dm-sans font-medium w-[238px] h-[150px]  flex items-center " id="Box">
            Get in touch with us to implement your next idea. Or changing your
            business with AI
          </h1>
        </div>
      </div>

      <div className=" ms-0 lg:ms-16 xl:ms-24 2xl:ms-[140px] -mt-10 ">
        <ContactCard />
      </div>
    </div>
  );
}

export default RightSection;
