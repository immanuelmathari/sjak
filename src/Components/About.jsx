import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

import img1 from "../assets/training.jpg";
import img2 from "../assets/president.jpg";
import img3 from "../assets/parade2.jpg";
import aboutImage from "../assets/ambulance-1.jpg";
import hero from "../assets/ambulance-1.jpg";

export default function About() {

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-dark_bg text-gray-800 dark:text-gray-200 py-20">

        {/* HERO */}
              <div className="relative h-[420px] w-full">
                <img
                  src={hero}
                  alt="First Aid"
                  className="w-full h-full object-cover"
                />
        
                {/* Title Badge */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-yellow-500 px-8 py-3">
                  <h1 className="text-3xl font-bold text-black">About</h1>
                </div>
              </div>

      {/* ================= SECTION 1 ================= */}

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-10">
          <span className="bg-sjak_secondary text-black px-6 py-3 text-3xl font-bold">
            About The Order of St John
          </span>
        </div>

        {/* Intro */}
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 text-lg">
          St John is a working Order of Chivalry (since 1888) and a modern organisation
          delivering first aid, healthcare and support services around the world.
        </p>


        {/* Expand Button */}
        <div className="flex justify-center mb-16">

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-4 border-2 border-sjak_primary text-sjak_primary
                       dark:border-sjak_secondary dark:text-sjak_secondary
                       rounded-full px-6 py-3 font-semibold
                       hover:bg-sjak_primary hover:text-white
                       dark:hover:bg-sjak_secondary dark:hover:text-black
                       transition"
          >
            WHAT DOES IT MEAN TO BE A WORKING ORDER OF CHIVALRY?

            {open ? <Minus size={18}/> : <Plus size={18}/>}
          </button>

        </div>


        {open && (
          <div className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
            The Order of St John combines the traditions of chivalry with
            modern humanitarian work, delivering healthcare, first aid training,
            and community services globally.
          </div>
        )}


        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-14 items-center">


          {/* TEXT */}
          <div>

            <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>In the Service of Humanity,</strong> St John promotes physical,
              mental and spiritual health and wellbeing in 44 countries and territories
              worldwide, mostly within the Commonwealth.
            </p>

            <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              At the very core of our work are the 160,000+ St John volunteers who give
              their time, effort and expertise to help others.
            </p>


            <button className="border-2 border-sjak_primary dark:border-sjak_secondary
                               rounded-full px-6 py-3 font-semibold
                               hover:bg-sjak_primary hover:text-white
                               dark:hover:bg-sjak_secondary dark:hover:text-black
                               transition">
              FIND YOUR LOCAL ST JOHN +
            </button>

          </div>


          {/* IMAGE WITH ST JOHN BORDER */}
          <div className="relative">

            {/* Yellow border */}
            <div className="absolute -top-6 -left-6 w-full h-full
                            border-t-[10px] border-l-[10px]
                            border-sjak_secondary">
            </div>

            {/* Image */}
            <img
              src={aboutImage}
              alt="St John Team"
              className="relative z-10 w-full object-cover shadow-xl"
            />

            {/* St John corner accents */}
            <div className="absolute right-0 bottom-0 w-6 h-24 bg-sjak_primary"></div>
            <div className="absolute right-6 bottom-0 w-24 h-4 bg-sjak_red"></div>

          </div>

        </div>

      </div>


      {/* ================= SECTION 2 ================= */}

      <div className="max-w-7xl mx-auto px-6 mt-28">


        {/* Title */}
        <div className="text-center mb-10">
          <span className="bg-sjak_secondary text-black px-6 py-3 text-3xl font-bold">
            Pro Fide - Pro Utilitate Hominum
          </span>
        </div>


        {/* Quote */}
        <p className="text-center italic text-gray-600 dark:text-gray-400 mb-6">
          “Pro Fide (for the faith) – Pro Utilitate Hominum (in the service of humanity)”.
        </p>


        {/* Description */}
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-16">
          St John promotes physical, mental and spiritual health and wellbeing.
          The vocation we share enables us to build a vibrant community where
          members find purpose, fulfilment and service.
        </p>


        {/* IMAGE CARDS */}
        <div className="grid md:grid-cols-3 gap-8">


          {/* CARD 1 */}
          <div className="relative group overflow-hidden shadow-lg">

            <img
              src={img1}
              className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute bottom-6 left-6 bg-sjak_secondary text-black px-6 py-3 font-semibold text-lg">
              For the Faith
            </div>

          </div>


          {/* CARD 2 */}
          <div className="relative group overflow-hidden shadow-lg">

            <img
              src={img2}
              className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute bottom-6 left-6 bg-sjak_primary text-white px-6 py-3 font-semibold text-lg">
              Service of Humanity
            </div>

          </div>


          {/* CARD 3 */}
          <div className="relative group overflow-hidden shadow-lg">

            <img
              src={img3}
              className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute bottom-6 left-6 bg-sjak_red text-white px-6 py-3 font-semibold text-lg">
              Order of Chivalry
            </div>

          </div>


        </div>

      </div>

    </div>
  );
}