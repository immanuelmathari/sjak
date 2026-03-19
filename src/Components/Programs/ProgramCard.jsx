import React from "react";
import { ArrowRight } from "lucide-react";

export default function ProgramCard({ program }) {
  return (
    <div className="
      group
      bg-white dark:bg-gray-800
      border border-gray-300 dark:border-gray-700
      rounded-lg
      overflow-hidden
      hover:shadow-xl
      transition
    ">

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        <img
          src={program.image}
          alt={program.title}
          className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Hover overlay */}
        <div className="
          absolute inset-0
          bg-green-700/0
          group-hover:bg-sjak_secondary/40
          transition duration-300
        "></div>

      </div>


      {/* CONTENT */}
      <div className="p-6 relative">

        {/* Corner decoration */}
        <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-yellow-500"></div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {program.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {program.description}
        </p>

        <button className="
          flex items-center gap-2
          text-sjak_secondary dark:text-green-400
          font-semibold
          hover:gap-3
          transition
        ">
          VIEW DETAILS
          <ArrowRight size={16} />
        </button>

      </div>

    </div>
  );
}