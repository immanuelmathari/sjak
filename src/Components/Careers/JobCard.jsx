import React from "react";

export default function JobCard({ job }) {
  return (
    <div
      className="
      bg-white dark:bg-gray-800
      border border-gray-300 dark:border-gray-700
      rounded-lg p-8
      relative
      hover:shadow-xl
      transition
      "
    >

      {/* Corner decoration */}
      <div className="absolute -top-2 -left-2 w-10 h-10 border-t-4 border-l-4 border-yellow-500"></div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {job.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {job.description}
      </p>

      <div className="text-sm space-y-1 mb-6 text-gray-700 dark:text-gray-300">

        <p>
          <strong>Department:</strong> {job.department}
        </p>

        <p>
          <strong>Location:</strong> {job.location}
        </p>

        <p>
          <strong>Job Type:</strong> {job.type}
        </p>

        <p>
          <strong>Closing Date:</strong> {job.closing_date}
        </p>

      </div>

      <a
        href={job.apply_link}
        className="
        inline-block
        border-2 border-black dark:border-white
        text-black dark:text-white
        rounded-full
        px-6 py-2
        font-semibold
        hover:bg-black hover:text-white
        dark:hover:bg-white dark:hover:text-black
        transition
        "
      >
        Apply Now +
      </a>

    </div>
  );
}