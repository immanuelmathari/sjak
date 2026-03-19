import React from "react";

import img1 from "../../assets/group-1.jpg";
import img2 from "../../assets/members.jpg";
import img3 from "../../assets/parade.jpg";
import img4 from "../../assets/president.jpg";
import img5 from "../../assets/training.jpg";
import img6 from "../../assets/scouts.jpg";

const services = [
  {
    title: "First Aid At Work",
    description: "3 - 5 days    ",
    image: img1,
    button: "Request Quote",
  },
  {
    title: "First Aid Refresher",
    description: "1 - 2 days",
    image: img2,
    button: "Book a class",
  },
  {
    title: "Lifesaver International First Aid",
    description: "3 days",
    image: img3,
    button: "Book a class",
  },
  {
    title: "Emergency First Aid",
    description: "1 day",
    image: img4,
    button: "Book a class",
  },
  {
    title: "Pediatric First Aid",
    description: "1 Day",
    image: img5,
    button: "Book a class",
  },
  {
    title: "Aviation First Aid",
    description: "5 Days",
    image: img6,
    button: "Book a class",
  },
  {
    title: "Wilderness First Aid",
    description: "3 - 5 Days",
    image: img5,
    button: "Book a class",
  },
  {
    title: "First Aid Awareness",
    description: "Community based eg school or church",
    image: img6,
    button: "Book a trainer",
  },
  {
    title: "Fire Marshal",
    description: "2 - 3 Days",
    image: img6,
    button: "Book a class",
  },
  {
    title: "Basic Fire safety",
    description: "Community based eg school or church",
    image: img6,
    button: "Request Quote",
  },
  {
    title: "Fire Safety Awareness",
    description: "Community based eg school or church",
    image: img6,
    button: "Book a trainer",
  },
  {
    title: "Occupational Health and Safety",
    description: "4 - 5 days",
    image: img6,
    button: "Request Quote | Book a class",
  },
  {
    title: "Disaster Preparedness & Response",
    description: "5 days",
    image: img6,
    button: "Book a class",
  },
  {
    title: "HIV Testing & Services",
    description: "3 weeks",
    image: img6,
    button: "Book a class",
  },
  {
    title: "Emergency Medical Responder",
    description: "10 weeks",
    image: img6,
    button: "Book a class",
  },
  {
    title: "Advanced Cardiovascular Life Support",
    description: "2 days",
    image: img6,
    button: "Book a class",
  },
  {
    title: "Basic Life Support BLS",
    description: "1 day",
    image: img6,
    button: "Book a class",
  },
  {
    title: "Basic Care Giver",
    description: "5 days",
    image: img6,
    button: "Book a class",
  },
  {
    title: "EMT - Certificate",
    description: "2 years",
    image: img6,
    button: "Book an intake",
  },
  {
    title: "EMT - Diploma",
    description: "3 years",
    image: img6,
    button: "Book an intake",
  },
  {
    title: "EMT - Diploma Upgrade",
    description: "2 years",
    image: img6,
    button: "Book an intake",
  },
];

const Courses = () => {
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

export default Courses;