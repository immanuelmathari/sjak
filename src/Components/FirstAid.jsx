import React from "react";
import FirstAidAccordion from "../Components/FirstAidAccordion";
import hero from "../assets/parade2.jpg";

const FirstAid = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <div className="relative h-[420px] w-full">
        <img
          src={hero}
          alt="First Aid"
          className="w-full h-full object-cover"
        />

        {/* Title Badge */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-yellow-500 px-8 py-3">
          <h1 className="text-3xl font-bold text-black">First Aid</h1>
        </div>
      </div>


      {/* BREADCRUMB */}
      <div className="container mx-auto px-6 py-6 text-gray-600 italic">
        Home / <span className="font-semibold text-gray-800">First Aid</span>
      </div>


      {/* CONTENT SECTION */}
<div className="md:ps-60 relative container mx-auto px-6 pb-20 max-w-[1600px]">
        {/* Decorative Border */}
        <div className="absolute left-0 top-10 w-20 h-20 border-l-8 border-t-8 border-yellow-500 md:ms-20"></div>
        <div className="absolute right-0 bottom-10 w-20 h-20 border-r-8 border-b-8 border-yellow-500 md:me-20"></div>


        {/* Title */}
        <div className="max-w-4xl mb-10">

          <div className="bg-yellow-500 inline-block px-4 py-2">
            <h2 className="text-3xl font-bold text-black leading-snug">
              First aid is the core activity of St John Kenya and it can be
              described as being a service.
            </h2>
          </div>

        </div>


        {/* ACCORDION */}
        <FirstAidAccordion />

      </div>

    </div>
  );
};

export default FirstAid;