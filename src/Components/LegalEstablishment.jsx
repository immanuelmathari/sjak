import React from "react";
import KnightsHospitaller from '../assets/knights-hospitaller-st-john.webp'
import StJohnAssociation from '../assets/st-john-ambulance-association.jpg'
import StJohnAssociation2 from '../assets/st-john-kenya-association.jpg'
import StJohnAssociation3 from '../assets/st-john-ambulance-brigade-nairobi.jpg'
import StJohnAssociation4 from '../assets/inauguration-of-the-priory-of-st-john-kenya.jpg'
import StJohnAssociation5 from '../assets/dusit-attack.jpg'
import StJohnAssociation7 from '../assets/woman-getting-treatment-by-St-John-Ambulance-at-riverside-attack.jpg'
import StJohnAssociation6 from '../assets/members2.jpg'
import hero from '../assets/statehouse.jpg'

const LegalEstablishment = () => {
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
          <h1 className="text-3xl font-bold text-black">Legal Establishment</h1>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="container mx-auto px-6 py-20 max-w-5xl space-y-24">


        {/* SECTION */}
        <div className="relative">

          {/* border decoration */}
          <div className="absolute -left-6 top-0 h-full w-1 bg-sjak_secondary"></div>

          <h2 className="text-3xl font-bold mb-6">
            Legal Establishment
          </h2>

          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            St John came into being in Kenya at the initiative of the then Police Commissioner Sir Cavendish, who doubled up as the first Commissioner of St. John in the country in 1923.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
            But it was 1928 that the organization was formally recognized as an association (then called district) of the international Order of St John.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
In 1979, The Attorney General Sir Charles Njonjo, who was a member of the St John Council at that time, introduced the St. John Ambulance of Kenya (Incorporation) Bill that was seconded by the then Minister for Health Hon James Osogo. The motion was initially moved by the then Vice-president and Finance Minister Mwai Kibaki.          </p>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
            This bill was passed into a law, giving way for St John Ambulance to be established as a corporation in the Republic of Kenya.

The Act, now cited as the St. John Ambulance of Kenya Act Cap 259 of 1979 gives the organization mandate to:
</p>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
</p>
            <ol className="list-disc">
                <li>Provide emergency medical care to the sick and wounded</li>
                <li>
Complement and give technical reserves to government medical and security services.</li>
                <li>
Promote charitable works aimed at reducing human suffering without discrimination.</li>
                <li>
Liaise and develop linkages with other related voluntary and statutory organizations.</li>
            </ol>


          {/* IMAGE */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
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

export default LegalEstablishment;