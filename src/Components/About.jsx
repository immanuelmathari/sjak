import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

import img1 from "../assets/training.jpg";
import img2 from "../assets/president.jpg";
import img3 from "../assets/parade2.jpg";
import aboutImage from "../assets/ambulance-1.jpg";
import hero from "../assets/ambulance-1.jpg";

// import { useState } from 'react';
// import { Minus, Plus } from 'lucide-react';



const ProgrammeAccordion = () => {
const [openIndex, setOpenIndex] = useState(0);

const accordion = 
  [
{
title: "RESPECT",
content: `
At SJAK, Respect has been and will always be the basis of any communication or contact we make.
`
},

{
title: "Unselfishness",
content: `
At SJAK, we aim to share skills and knowledge to bolster a learned community of first aiders
`
},

{
title: "Excellence",
content: `
At SJAK, we put our heart, mind and soul into even out smallest of acts.
`
},

{
title: "Openness and Transparency",
content: `
We handle our work and resources in an open and transparent manner.
`
},

{
title: "Devotion",
content: `
Many of our members are long standing members rooted in deep devotion to the mission and vision of SJAK
`
},

{
title: "Togetherness",
content: `
We work together to continuously improve the quality and scale of training and care that St John provides around the world and to be the “gold standard” in everything we do. We are #OneStJohn.
`
},

{
title: "Diversity and Inclusiveness",
content: `
We are an equal opportunity creator for all. Welcome :)
`
},

{
title: "Faithfulness",
content: `
We are faithfull to the course.
`
},

];



const toggle = (index) => {
setOpenIndex(openIndex === index ? null : index);
};

return (
<div className="space-y-6">

{accordion.map((item, index) => (
<div
key={index}
className="border rounded-lg bg-white dark:bg-gray-900"
>

<button
onClick={() => toggle(index)}
className="w-full flex justify-between items-center p-6 text-left"
>
<h3 className="text-xl font-semibold">{item.title}</h3>

{openIndex === index ? (
<Minus size={20} />
) : (
<Plus size={20} />
)}

</button>

{openIndex === index && (
<div className="px-6 pb-8 text-gray-600 dark:text-gray-400">
{item.content}
</div>
)}

</div>
))}

</div>
);
};


export default function About() {

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-dark_bg text-gray-800 dark:text-gray-200">

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

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Title */}
        <div className="text-center mb-10">
          <span className="bg-sjak_secondary text-black px-6 py-3 text-3xl font-bold mt-5">
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
        <div className="grid md:grid-cols-2 gap-8">


          {/* CARD 1 */}
          <div className="relative group overflow-hidden shadow-lg">

            <img
              src={img1}
              className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute bottom-6 left-6 bg-sjak_red text-black px-6 py-3 font-semibold text-lg">
              Mission
            </div>

          </div>


          {/* CARD 2 */}
          <div className="relative group overflow-hidden shadow-lg">

            <img
              src={img2}
              className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute bottom-6 left-6 bg-sjak_primary text-white px-6 py-3 font-semibold text-lg">
              Vision
            </div>

          </div>


        


        </div>

      </div>

      <div className="container mx-auto px-6 py-20 mt-10 max-w-5xl border-4 border-sjak_secondary">

        
<h2 className="text-4xl text-center font-bold mb-6">
Our values
</h2>

<p className="text-lg text-gray-600 text-center pb-10 dark:text-gray-400">
Core values
</p>

<ProgrammeAccordion />

</div>

    </div>
  );
}