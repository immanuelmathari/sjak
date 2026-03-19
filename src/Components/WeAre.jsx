import React from "react";
import {
  FaUsers,
  FaAmbulance,
  FaGlobeAfrica,
  FaHeartbeat,
  FaArrowRight
} from "react-icons/fa";

import AmbulanceImg from "../assets/group-1.jpg"

const stats = [
  {
    icon: <FaUsers />,
    number: "44,000",
    label: "Volunteers in Kenya",
  },
  {
    icon: <FaAmbulance />,
    number: "825,427",
    label: "People trained in first aid and healthcare",
  },
  {
    icon: <FaGlobeAfrica />,
    number: "650",
    label: "Secretariet members",
  },
  {
    icon: <FaHeartbeat />,
    number: "2.2 million+",
    label: "emergencies responded to and people treated",
  },
];

const WeAre = () => {
  return (
    <section className="container min-h-[60vh] flex flex-col md:justify-between bg-gray-50 dark:bg-black text-gray-800 dark:text-white">

{/* Ambulance image */}
  <div className="pt-28 absolute right-10 botton-10 hidden lg:block">
    <img
      src={AmbulanceImg}
      alt="St John Ambulance Kenya vehicle"
      className="w-[600px] opacity-90"
    />
  </div>

      {/* MAIN CONTENT */}
      <div className="container py-8 md:py-16">

        {/* TITLE */}
        <div className="mb-5 space-y-2">
          <span className="inline-block bg-sjak_secondary px-4 py-2 text-4xl md:text-5xl font-bold text-black">
            We are
          </span>

          <br />

          <span className="inline-block bg-sjak_secondary px-4 py-2 text-4xl md:text-5xl font-bold text-black">
            St John Kenya
          </span>
        </div>

        {/* TEXT CONTENT */}
        <div className="max-w-3xl space-y-3 text-gray-600 dark:text-gray-300 text-lg">

          <p>
            St John Ambulance Kenya is a charitable humanitarian organization dedicated to saving lives through the provision of first aid training, pre-hospital emergency care, community response services, and disaster preparedness programs. <br />
            Through our nationalwide network of more than 44,000 volunteers and trained responders, we work to strengthen community capacity to provide immediate assistance during emergencies before casualties reach a medical facility. <br/> Part of our involvements include;
          </p>

          <ul className="space-y-1 list-disc ml-6">
            <li>First Aid</li>
            <li>Ambulance services</li>
            <li>Community aimed programms eg mama na mwana</li>
            <li>Emergency Care and Rescue</li>
          </ul>

          <p>
            We collaborate and work closely with our parent organisation, <span className="font-semibold underline italic"> <a href="https://stjohnkenya.org/">The Order of St John</a> </span> , by sharing knowledge and approaches across St John establishments, we work
            together to continuously improve the quality and scale of training and care
            that St John provides around the world and to be the “gold standard” in
            everything we do. We are #OneStJohn.
          </p>

          {/* BUTTON */}
          <button className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-semibold w-fit hover:scale-105 transition">
            READ MORE
            <span className="text-sjak_secondary text-xl">+</span>
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="container pb-8 md:pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">

              <div className="text-4xl text-sjak_secondary">
                {stat.icon}
              </div>

              <h3 className="text-3xl font-bold text-black dark:text-white">
                {stat.number}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-[200px]">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* GREEN STRIP + BUTTON */}
      <div className="w-full">

        <div className="h-6 bg-green-700"></div>

        <div className="container py-6 flex justify-end">

          <button className="flex items-center gap-3 border-2 border-black dark:border-white px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">

            READ OUR ANNUAL REPORT PDF

            <span className="text-sjak_secondary text-xl">+</span>

          </button>

        </div>

      </div>

    </section>
  );
};

export default WeAre;