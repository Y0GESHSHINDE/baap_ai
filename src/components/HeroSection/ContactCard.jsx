import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import phone from "../../../public/assets/Icon feather-phone-call.svg"
import whatsapp from "../../../public/assets/Icon akar-whatsapp-fill.svg"

function ContactCard() {
  return (
    <div className="max-w-sm mx-auto p-6 w-[240px] md:w-[280px] 2xl:w-[346px] md:h-[473px] bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 dm-sans  text-[16px]">
        Get in touch
      </h2>
      <p className="mt-[5px] text-sm text-[#7B7B7B] font-normal dm-sans text-[13px]">
        Share your details or call on the below number to change.
      </p>
      <form className="mt-4">
        <input
          type="text"
          placeholder="Your email or phone number"
          className="w-full  p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none font-normal dm-sans text-[14px] text-[#7B7B7B] focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border border-gray-300 rounded-lg mb-3 font-normal dm-sans text-[14px] text-[#7B7B7B] focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="text-[13px] p-3 bg-[#635BFF] text-[#FFFFFF] text-center rounded-lg   w-[167px] h-[45px] ">
            
          <span className=" flex justify-evenly " > <FaRegCircleCheck className="leading-none h-[20px] w-[20px] " /> Submit Enquiry </span>
        </button>
      </form>
      <p className="mt-[29.38px] text-[13px] text-[#7B7B7B] kumbh-sans font-normal">
        the baap company is IT products service provider, operating from
        villages. We help you to save your IT spend reasonably.
      </p>
      <div className="mt-4 flex justify-between space-x-4">
        <button className="w-[123px] h-[45px] flex items-center justify-center p-3 kumbh-sans font-semibold bg-[#EBEBFF] rounded-lg hover:bg-gray-200">
          <span>
            <img src={phone} alt="" />
          </span>{" "}
          <span className="ml-2 text-[12px] ">Call Now</span>
        </button>
        <button className="w-[123px] h-[45px] flex items-center justify-center p-3 kumbh-sans font-semibold bg-[#EBEBFF]  rounded-lg hover:bg-gray-200">
          <span>
            <img
              src={whatsapp}
              alt=""
              srcset=""
            />
          </span>{" "}
          <span className="ml-2 text-[12px]">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

export default ContactCard;