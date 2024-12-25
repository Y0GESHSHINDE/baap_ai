import React from "react";
import { FaUser,FaAppStoreIos  } from "react-icons/fa"; 
import { MdPersonalInjury , MdPeopleAlt  } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";
import { TiLeaf } from "react-icons/ti";
import img1 from "../../../public/assets/—Pngtree—woman work from home with_5388281.png";
import FeatureCard from "./FeatureCard";

function LeftSection() {
  return (
    <div>
      
      <div className=" h-[220px] sm:h-[327px]  flex justify-center lg:justify-start md:text-left">
        <img
          src={img1}
          alt="Work from home"
          className="w-[220px] h-[220px] sm:w-[327px] sm:h-[327px]"
        />
      </div>

      
      <div className=" h-full text-center lg:text-left">
        <h1 className="text-[18px] ms-0 md:ms-[70px] dm-sans">Introducing</h1>
        <h1 className="text-[25px] sm:text-[55px] ms-0 md:ms-[70px] kumbh-sans">
          BAAP AI
        </h1>
        <h1 className="text-[18px] sm:text-[30px] ms-0 md:ms-[70px] dm-sans">
          Get AI as a service for your business, enable your business for future....
        </h1>
        <h1 className="text-[18px] ms-0 mb-20 lg:mb-0 mt-[18px] md:ms-[70px] dm-sans">
          What we can do for you …
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
              description="Boost your business with AI technology." 
              bgColor="#9CC0A4" 
            />
            <FeatureCard 
              icon={SlGraduation} 
              title="Get Degree & Job" 
              description="Good things does take so much time. You can hire some thing" 
              bgColor="#E59F87" 
            />
            <FeatureCard 
              icon={MdPeopleAlt } 
              title="Good People Foundation" 
              description="Be part of our mission, join the good people foundation." 
              bgColor="#C1C485" 
            />
            <FeatureCard 
              icon={TiLeaf } 
              title="TiLeaf" 
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
