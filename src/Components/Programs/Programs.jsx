import React from "react";
import ProgramCard from "../Programs/ProgramCard";

import img1 from "../../assets/blood-drive-for-dusit-attack.jpg";
import img2 from "../../assets/blood-drive-for-dusit-attack.jpg";
import img3 from "../../assets/blood-drive-for-dusit-attack.jpg";
import img4 from "../../assets/blood-drive-for-dusit-attack.jpg";
import img5 from "../../assets/blood-drive-for-dusit-attack.jpg";
import img6 from "../../assets/blood-drive-for-dusit-attack.jpg";

const programs = [
  {
    id: 1,
    title: "EMEA PROJECT",
    description:
      "The Europe, Middle East and Africa Project is a symposium for Training of Trainers. Aiming to develop a standard emergency response and training modus operandi",
    image: img1,
  },
  {
    id: 2,
    title: "HERP Project",
    description:
      "At Highway Emergency and Response Project we have 14 first aid posts and 2 trauma centers.",
    image: img1,
  },
  {
    id: 1,
    title: "Mother and Child project",
    description:
      "Mother and child",
    image: img1,
  },
  {
    id: 1,
    title: "OK Kids",
    description:
      "Equipping students with knowledge about disaster preparedness and life saving skills.",
    image: img1,
  },
  {
    id: 2,
    title: "Maternal Health",
    description:
      "Motorcycle ambulances increasing access to healthcare in underserved areas.",
    image: img2,
  },
  {
    id: 3,
    title: "Road Safety",
    description:
      "Training road users, police and bystanders in emergency first aid response.",
    image: img3,
  },
  {
    id: 4,
    title: "Building Resilience",
    description:
      "Preparing communities for disasters and strengthening local response systems.",
    image: img4,
  },
  {
    id: 5,
    title: "Disaster & Emergencies",
    description:
      "Emergency response support during disasters and humanitarian crises.",
    image: img5,
  },
  {
    id: 6,
    title: "Caring for the Elderly",
    description:
      "Providing care support and improving wellbeing for older members of the community.",
    image: img6,
  },
];

export default function Programs() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20 transition-colors">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-10">
          <span className="bg-yellow-500 px-6 py-3 text-3xl font-bold text-black">
            Our Programmes
          </span>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
          St John runs programmes that improve health, safety and resilience
          within communities across the country.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

      </div>

    </section>
  );
}