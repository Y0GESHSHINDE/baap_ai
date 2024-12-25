import React from "react";
import { BsArrowRight } from "react-icons/bs";

const FeatureCard = ({ icon: Icon, title, description, bgColor }) => {
  return (
    <div>
      <div
        className={`w-[174px] h-[186px] ms-0 lg:ms-[70px] -mt-12 lg:mt-4 rounded-lg shadow-sm p-4 flex flex-col gap-3 relative`}
        style={{ backgroundColor: bgColor }}
      >
        
        <div className="flex">
          {Icon && <Icon className="text-black text-[30px] mt-2" />}
          <h3 className="text-black text-[15px] ms-2 dm-sans font-bold">{title}</h3>
        </div>

        
        <p className="text-[15px] text-left text-black dm-sans font-normal">
          {description}
        </p>

        
        <BsArrowRight className="absolute bottom-4 right-4 text-black text-[20px]" />
      </div>

      
      <h1 className="relative -top-14 lg:ms-24 text-[50px]">_______</h1>
    </div>
  );
};

export default FeatureCard;
