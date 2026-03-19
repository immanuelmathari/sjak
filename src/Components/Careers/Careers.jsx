import React from "react";
import JobCard from "../Careers/JobCard";
import hero from "../../assets/members.jpg";


const jobs = [
  {
    id: 1,
    title: "First Aid Trainer",
    department: "Training Department",
    location: "Nairobi",
    type: "Full Time",
    closing_date: "2026-06-10",
    description:
      "Deliver first aid training courses to institutions and corporate partners.",
    apply_link: "#",
  },
  {
    id: 2,
    title: "Ambulance Driver",
    department: "Operations",
    location: "Mombasa",
    type: "Contract",
    closing_date: "2026-06-18",
    description:
      "Operate ambulance services during emergency response and community events.",
    apply_link: "#",
  },
];

export default function Careers() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-20 transition-colors">

        {/* HERO */}
      <div className="relative h-[420px] w-full mb-14">
        <img
          src={hero}
          alt="First Aid"
          className="w-full h-full object-cover"
        />

        {/* Title Badge */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-yellow-500 px-8 py-3">
          <h1 className="text-3xl font-bold text-black">Careers</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE TITLE */}
        <div className="text-center mb-10">
          <span className="bg-yellow-500 px-6 py-3 text-3xl font-bold text-black">
            Careers at St John
          </span>
        </div>

        {/* INTRO */}
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
          Join St John Ambulance and be part of a team dedicated to saving lives
          and strengthening communities. Explore current career opportunities
          and apply to make a difference.
        </p>

        {/* SEARCH */}
        <div className="flex justify-center mb-14">
          <input
            type="text"
            placeholder="Search jobs..."
            className="border border-gray-300 dark:border-gray-700 rounded-full px-6 py-3 w-[350px]
            bg-white dark:bg-gray-800
            text-gray-800 dark:text-gray-200
            focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* JOB LIST */}
        <div className="grid md:grid-cols-2 gap-10">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

      </div>
    </div>
  );
}