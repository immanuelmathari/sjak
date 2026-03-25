import React from "react";

import img1 from "../../assets/group-1.jpg";
import img2 from "../../assets/members.jpg";
import img3 from "../../assets/parade.jpg";
import img4 from "../../assets/president.jpg";
import img5 from "../../assets/training.jpg";
import img6 from "../../assets/scouts.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    title: "First Aid At Work",
    description: "3 - 5 days",
    image: img1,
    button: "Request Quote",
    link: "/what-we-do/training/first-aid-at-work",
  },
  {
    title: "First Aid Refresher",
    description: "1 - 2 days",
    image: img2,
    button: "Book a class",
    link: "/what-we-do/training/first-aid-refresher",
  },
  {
    title: "Lifesaver International First Aid",
    description: "3 days",
    image: img3,
    button: "Book a class",
    link: "/what-we-do/training/lifesaver-international-first-aid",
  },
  {
    title: "Emergency First Aid",
    description: "1 day",
    image: img4,
    button: "Book a class",
    link: "/what-we-do/training/emergency-first-aid",
  },
  {
    title: "Pediatric First Aid",
    description: "1 Day",
    image: img5,
    button: "Book a class",
    link: "/what-we-do/training/pediatric-first-aid",
  },
  {
    title: "Aviation First Aid",
    description: "5 Days",
    image: img6,
    button: "Book a class",
    link: "/what-we-do/training/aviation-first-aid",
  },
  {
    title: "Wilderness First Aid",
    description: "3 - 5 Days",
    image: img5,
    button: "Book a class",
    link: "/what-we-do/training/wilderness-first-aid",
  },
  {
    title: "First Aid Awareness",
    description: "Community based eg school or church",
    image: img6,
    button: "Book a trainer",
    link: "/what-we-do/training/first-aid-awareness",
  },
  {
    title: "Fire Marshal",
    description: "2 - 3 Days",
    image: img6,
    button: "Book a class",
    link: "/what-we-do/training/fire-marshal",
  },
  {
    title: "Basic Fire Safety",
    description: "Community based eg school or church",
    image: img6,
    button: "Request Quote",
    link: "/what-we-do/training/basic-fire-safety",
  },
  {
    title: "Fire Safety Awareness",
    description: "Community based eg school or church",
    image: img6,
    button: "Book a trainer",
    link: "/what-we-do/training/fire-safety-awareness",
  },
  {
    title: "Occupational Health and Safety",
    description: "4 - 5 days",
    image: img6,
    button: "Request Quote | Book a class",
    link: "/what-we-do/training/occupational-safety-and-health",
  },
  {
    title: "Disaster Preparedness & Response",
    description: "5 days",
    image: img6,
    button: "Book a class",
    link: "/what-we-do/training/disaster-preparedness-response",
  },
  {
    title: "HIV Testing & Services",
    description: "3 weeks",
    image: img6,
    button: "Book a class",
    link: "/what-we-do/training/hiv-testing-services",
  },
  {
    title: "Emergency Medical Responder",
    description: "10 weeks",
    image: img6,
    button: "Book a class",
    link: "/what-we-do/training/emergency-medical-responder",
  },
  {
    title: "Advanced Cardiovascular Life Support",
    description: "2 days",
    image: img6,
    button: "Book a class",
    link: "/what-we-do/training/acls",
  },
  {
    title: "Basic Life Support BLS",
    description: "1 day",
    image: img6,
    button: "Book a class",
    link: "/what-we-do/training/bls",
  },
  {
    title: "Basic Care Giver",
    description: "5 days",
    image: img6,
    button: "Book a class",
    link: "/what-we-do/training/basic-caregiver",
  },
  {
    title: "EMT - Certificate",
    description: "2 years",
    image: img6,
    button: "Book an intake",
    link: "/what-we-do/training/emt-certificate",
  },
  {
    title: "EMT - Diploma",
    description: "3 years",
    image: img6,
    button: "Book an intake",
    link: "/what-we-do/training/emt-diploma",
  },
  {
    title: "EMT - Diploma Upgrade",
    description: "2 years",
    image: img6,
    button: "Book an intake",
    link: "/what-we-do/training/emt-diploma-upgrade",
  },
];

const Courses = () => {
  return (
    <section className="bg-gray-100 dark:bg-black py-16">

      <div className="container">

                        <h1 className="text-center text-4xl mb-5 font-semibold underline bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-yellow-400">Training Programmes</h1>


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

{/* NOTE 03 TODO 23.03.26 */}

{/* <a> */}
          <Link to={service.link} target="_blank">
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
          </Link>
          {/* </a> */}
          

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