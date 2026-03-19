import React from "react";
import KnightsHospitaller from '../assets/St-John-Ambulance-and-its-parent-charity-the-Priory-of-Kenya-of-the-Order-of-St-John.jpg'
import StJohnAssociation from '../assets/st-john-ambulance-association.jpg'
import StJohnAssociation2 from '../assets/st-john-kenya-association.jpg'
import StJohnAssociation3 from '../assets/st-john-ambulance-brigade-nairobi.jpg'
import StJohnAssociation4 from '../assets/inauguration-of-the-priory-of-st-john-kenya.jpg'
import StJohnAssociation5 from '../assets/dusit-attack.jpg'
import StJohnAssociation7 from '../assets/woman-getting-treatment-by-St-John-Ambulance-at-riverside-attack.jpg'
import StJohnAssociation6 from '../assets/members2.jpg'
import hero from '../assets/statehouse.jpg'

const Governance = () => {
  return (
    <section className="bg-white dark:bg-black text-gray-800 dark:text-gray-200">

{/* HERO */}
      <div className="relative h-[420px] w-full">
        <img
          src={hero}
          alt="First Aid"
          className="w-full h-full object-cover"
        />

        {/* Title Badge */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-yellow-500 px-8 py-3">
          <h1 className="text-3xl font-bold text-black">Governance</h1>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="container mx-auto px-6 py-20 max-w-5xl space-y-24">


        {/* SECTION */}
        <div className="relative">

          {/* border decoration */}
          <div className="absolute -left-6 top-0 h-full w-1 bg-sjak_secondary"></div>

          <h2 className="text-3xl font-bold mb-6">
            Governance
          </h2>

          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
The Priory of Kenya of the Most Venerable Order of the Hospital of St. John of Jerusalem conduct and manage all activities of St John Ambulance Kenya

          </p>

          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
The present leadership and governance structure was established following the elevation of St John Kenya from an “association” to a “Priory” within the ranks of the worldwide order of St John.

          </p>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
The governing body of the Priory is the Priory Chapter but, delegates authority to the Priory Executive Council to oversee day-to-day activities, including the activities of the nine Regional Councils.

         </p>



          {/* IMAGE */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
            <h1 className="text-center text-4xl mb-5 font-semibold underline bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-yellow-400">Our Executive Council</h1>
            <img
              src={KnightsHospitaller}
              alt="Early hospital care"
              className="w-full object-cover"
            />
          </div>

        </div>       

      </div>
    </section>
  );
};

export default Governance;