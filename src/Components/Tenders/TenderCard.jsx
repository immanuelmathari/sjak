import React from "react";
import { Download } from "lucide-react";

export default function TenderCard({ tender }) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-8 relative hover:shadow-lg transition">

      {/* yellow corner decoration */}
      <div className="absolute -top-2 -left-2 w-10 h-10 border-t-4 border-l-4 border-yellow-500"></div>

      <h3 className="text-xl font-bold mb-3">
        {tender.title}
      </h3>

      <p className="text-gray-600 mb-4">
        {tender.description}
      </p>

      <img href={tender.image} alt={tender.title} className="w-full h-48 object-cover rounded"/>

      <div className="text-sm text-gray-700 space-y-1 mb-6">

        <p>
          <strong>Reference:</strong> {tender.reference_no}
        </p>

        <p>
          <strong>Department:</strong> {tender.department}
        </p>

        <p>
          <strong>Closing Date:</strong> {tender.closing_date}
        </p>

      </div>

      <a
        href={tender.document_url}
  className="inline-flex items-center gap-2 border-2 border-black rounded-full px-5 py-2 font-semibold hover:bg-black hover:text-white transition"
  target="_blank">
        Download Document
        <Download size={16} />
      </a>

    </div>
  );
}