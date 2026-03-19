import React from "react";

import img1 from "../assets/inside.jpg";
import img2 from "../assets/members.jpg";
import img3 from "../assets/parade.jpg";
import img4 from "../assets/president.jpg";
import img5 from "../assets/training.jpg";
import img6 from "../assets/scouts.jpg";

const services = [
  {
    title: "First Aid & Other Training Courses",
    description: "- First Aid  -Fire Marshal  - Occupational Safety and health  -Basic Life Support BLS, ACLS, EMT etc",
    image: img1,
    button: "VIEW TRAINING",
  },
  {
    title: "Join The Brigade",
    description: "Primary, Junior High - Dolphines \n Senior High, High Schools - Brigades \n University/College - Cadets \n Working Class - Adults",
    image: img2,
    button: "BECOME A VOLUNTEER ❤️‍🩹",
  },
  {
    title: "Events Coming Up",
    description: "Save a Life Nationalwide walkathan May 2026. We cordially welcome you to join the movement ✨.",
    image: img3,
    button: "VIEW EVENTS",
  },
  {
    title: "Ongoing Programmes",
    description: "Explore our active initiatives supporting communities across Kenya. - Europe Middle East Africa EMEA Project, - Our Kenyan Kids OK kids, - Highway Emergency Responce Project HERP",
    image: img4,
    button: "SEE PROGRAMMES",
  },
  {
    title: "Event Coverage",
    description: "Get our first aid and ambulance team onsite at your event for public general public safety and emergencies.",
    image: img5,
    button: "REQUEST COVERAGE",
  },
  {
    title: "Corporate Partnerships",
    description: "Partner with St John Ambulance Kenya to promote safety and preparedness in institutions in times of emergencies.",
    image: img6,
    button: "PARTNER WITH US",
  },
  {
    title: "Merchendise & Medical Supplies",
    description: "Uniform shop.",
    image: img5,
    button: "Online Store",
  },
  {
    title: "Family Ambulance Coverage",
    description: "For - late night calls - evacuations - patient transfer - family cover.",
    image: img6,
    button: "SUBSCRIBE",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 dark:bg-black py-16">

      <div className="container">

                        <h1 className="text-center text-4xl mb-5 font-semibold underline bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-yellow-400">WHAT WE DO</h1>


        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

  {services.map((service, index) => (
    <div
      key={index}
      className="relative h-[220px] sm:h-[250px] md:h-[320px] overflow-hidden group rounded-md"
    >

      {/* Background Image */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6">

        <div className="
          bg-sjak_secondary
          dark:bg-dark_bg
          p-3 sm:p-5 md:p-8
          max-w-[90%]
          shadow-lg
          rounded-sm
        ">

          <h3 className="
            text-sm
            sm:text-lg
            md:text-2xl
            font-bold
            text-black
            dark:text-sjak_secondary
            mb-1 sm:mb-2
          ">
            {service.title}
          </h3>

          <p className="
            text-xs
            sm:text-sm
            md:text-base
            text-black
            dark:text-white
            mb-2 sm:mb-4
            leading-snug
          ">
            {service.description}
          </p>

          <button className="
            bg-black
            text-white
            dark:bg-white
            dark:text-black
            px-3 py-1.5
            sm:px-5 sm:py-2
            rounded-full
            text-xs sm:text-sm
            font-semibold
            hover:scale-105
            transition
          ">
            {service.button} +
          </button>

        </div>

      </div>

    </div>
  ))}

</div>

      </div>

    </section>
  );
};

export default Services;