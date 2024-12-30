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
          {Icon && <Icon className="text-black text-[40px] leading-none mt-2" />}
          <h3 className="text-black text-[15px] ms-2 dm-sans">{title}</h3>
        </div>

        
        <p className="text-[15px] text-left text-black dm-sans-normal font-normal">
          {description}
        </p>

        
        <BsArrowRight className="absolute bottom-5 right-4 text-black text-[22px]" />
      </div>

      
      <h1 className="relative -top-9 lg:ms-[90px] w-auto text-[50px]" ><span style={{ color: bgColor }} >━━━━━━</span></h1>
    </div>
  );
};

export default FeatureCard;
