import React from "react";
import GetInfoCard from "./GetInfoCard";
import cardData from "./cardData";
import Card from "./Card";


function HeroSection() {
  return (
    <div className="container mx-auto  px-4  flex justify-center lg:justify-between">
      <div>
        <img
          className="h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80"
          src="../../../public/assets/—Pngtree—woman work from home with_5388281.png"
          alt=""
        />
        <div className=" md:relative  left-8  sm:left-16">
          <h1 className="dm-sans text-[18px] text-[#575757] ">Introducing</h1>
          <h1 className="kumbh-sans text-[22px] sm:text-[40px] md:text-[55px] text-[#635BFF]">
            BAAP <span className="text-[#373739]">AI</span>
          </h1>
          <h1 className="text-[10px]  md:text-[16px] lg:text-[40px] w-40 sm:w-full dm-sans">
            Get AI as a service for your business,
          </h1>
          <h1 className="flex text-[10px]  md:text-[16px] lg:text-[40px] dm-sans">
            business for future.{" "}
            <span className=" mt-1 md:mt-3 lg:mt-8 ms-2  ">
              <img src="../../../public/assets/Group 6.svg" alt="" srcset="" />
            </span>
          </h1>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-0 ">
            {cardData.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                logo={card.image}
                bgColor={card.bgColor}
                description={card.description}></Card>
            ))}
          </div>
        </div>

      </div>

      <div className="hidden lg:flex ">
        <GetInfoCard />
      </div>

      
    </div>
  );
}

export default HeroSection;
