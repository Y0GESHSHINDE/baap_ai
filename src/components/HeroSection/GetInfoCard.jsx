import React from "react";
import "./HeroSection.css";
import ContactCard from "./ContactCard";
function GetInfoCard() {
  return (
    <div className=" h-full ">
      <div className="flex mt-16 ">
        <div className="relative right-12 top-28" >
          <img
            src="../../../public/assets/Icon akar-arrow-counter-clockwise.svg"
            alt=""
          />
        </div>
        <div id="pinkBox" className="grid  place-items-center relative  right-14">
          <div className=" " >
            <h1  className="text-[10px] xl:text-[14px] " >Get in touch with us to implement</h1>
            <h1 className="text-[10px] xl:text-[14px] "  >your next idea. Or changing your </h1>
            <h1 className="text-[10px] xl:text-[14px] "  >business with AI</h1>
          </div>
        </div>
      </div>

      <div className="top-12 left-4 relative" >
      <ContactCard/>
      </div>
      
    </div>
  );
}

export default GetInfoCard;
