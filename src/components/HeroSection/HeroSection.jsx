import React from "react";
import GetInfoCard from "./GetInfoCard";
import cardData from "./cardData";
import Card from "./Card";
import workfromHome from "../../../public/assets/—Pngtree—woman work from home with_5388281.png";
import dotLogo from "../../../public/assets/Group 6.svg";
function HeroSection() {
  return (
    <div className="container mx-auto px-0 block w-fit  lg:w-full lg:flex justify-center lg:justify-between">
      <div className="" >
        <img
          className="h-60 w-60 sm:h-60  sm:w-60 md:h-80 md:w-80 ms-10"
          src={workfromHome}
          alt=""
        />
        <div className=" relative   left-12  sm:left-16">
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
              <img src={dotLogo} alt="" srcset="" />
            </span>
          </h1>

          <div className=" relative -left-10 sm:-left-20 lg:left-0 md:-left-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-0 ">
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

      {/* <div className="  lg:hidden bg-gray-600 flex justify-center" >
        <GetInfoCard/>
      </div> */}

      <div className="block lg:flex mb-20 ">
        <GetInfoCard />
      </div>
    </div>
  );
}

export default HeroSection;
