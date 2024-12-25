import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function HeroSection() {
  return (
    <div className="container  mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 ">
      
      <div className="  md:col-span-2 ">
        <LeftSection />
      </div>

      <div className="    ">
        <RightSection />
      </div>

    </div>
  );
}

export default HeroSection;
