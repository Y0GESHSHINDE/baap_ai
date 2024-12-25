import React from "react";
import "../../../src/components/HeroSection/HeroSectionAll.css";
import img from "../../../public/assets/Icon akar-arrow-counter-clockwise.svg";
import ContactCard from "./ContactCard";
function RightSection() {
  return (
    <div className="h-full flex justify-center flex-col">
      <div className="flex text-center  h-[280px] justify-center ">
        <div className="flex ">
          <div className="hidden lg:flex">
            <img
              className="h-[138px] w-[121px] lg:mt-[200px]"
              src={img}
              alt=""
              srcset=""
            />
          </div>
          <div>
            <h1
              className="text-[13px]  bg-[#FF5BBA] dm-sans font-medium w-[238px] h-[150px] flex items-center "
              id="Box">
              Get in touch with us to implement your next idea. Or changing your
              business with AI
            </h1>
          </div>
        </div>
      </div>

      <div className=" ms-0 lg:ms-16 xl:ms-24 2xl:ms-40 ">
        <ContactCard />
      </div>
    </div>
  );
}

export default RightSection;
