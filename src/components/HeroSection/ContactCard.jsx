import React from "react";
import phone from "../../../public/assets/Icon feather-phone-call.svg"
import whatsapp from "../../../public/assets/Icon akar-whatsapp-fill.svg"

function ContactCard() {
  return (
    <div className="max-w-sm mx-auto p-6 w-[300px] xl:w-[350px] h-[500px] bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 dm-sans text-[16px]">
        Get in touch
      </h2>
      <p className="mt-2 text-sm text-gray-600 font-normal dm-sans text-[14px]">
        Share your details or call on the below number to change.
      </p>
      <form className="mt-4">
        <input
          type="text"
          placeholder="Your email or phone number"
          className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none font-normal dm-sans focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border border-gray-300 rounded-lg mb-3 font-normal dm-sans focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="w-full p-3 bg-purple-500 text-white rounded-lg text-center font-normal dm-sans">
          <span>Submit Enquiry </span>
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600 font-normal dm-sans">
        the baap company is IT products service provider, operating from
        villages. We help you to save your IT spend reasonably.
      </p>
      <div className="mt-4 flex justify-between space-x-4">
        <button className="w-full flex items-center justify-center p-3 kumbh-sans font-semibold bg-gray-100 rounded-lg hover:bg-gray-200">
          <span>
            <img src={phone} alt="" />
          </span>{" "}
          <span className="ml-2 text-[12px] ">Call Now</span>
        </button>
        <button className="w-full flex items-center justify-center p-3 kumbh-sans font-semibold bg-gray-100 rounded-lg hover:bg-gray-200">
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
