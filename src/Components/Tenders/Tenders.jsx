import React, { useEffect, useState } from "react";
import TenderCard from "../Tenders/TenderCard";
import hero from "../../assets/KIT-PIC2.jpg";


const tenders = [
  {
    id: 1,
    title: "Supply of First Aid Training Materials",
    reference_no: "SJA/TND/2026/01",
    department: "Training Department",
    closing_date: "2026-05-10",
    document_url: "/documents/tender1.pdf",
    description:
      "Supply and delivery of first aid training materials for St John training centres.",
  },
  {
    id: 2,
    title: "Provision of Ambulance Maintenance Services",
    reference_no: "SJA/TND/2026/02",
    department: "Operations Department",
    closing_date: "2026-05-15",
    document_url: "/documents/tender2.pdf",
    description:
      "Maintenance services for St John Ambulance fleet across regional offices.",
  },
];

export default function Tenders() {
    
// Backend Integration Later

// When your backend API is ready, just replace:

// const tenders = [...]

// with

const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  // fetch("/api/tenders")
  fetch("http://127.0.0.1:8000/api/tenders")
    .then(res => res.json())
    .then((data) => {
        setTenders(data);
        setLoading(false);
      });
}, []);
  return (
    <div className="bg-[#f5f5f5] py-20">
        {/* HERO */}
              <div className="relative h-[420px] w-full mb-14">
                <img
                  src={hero}
                  alt="First Aid"
                  className="w-full h-full object-cover"
                />
        
                {/* Title Badge */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-yellow-500 px-8 py-3">
                  <h1 className="text-3xl font-bold text-black">Tenders</h1>
                </div>
              </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE TITLE */}
        <div className="text-center mb-10">
          <span className="bg-yellow-500 px-6 py-3 text-3xl font-bold">
            Procurement & Tenders
          </span>
        </div>

        {/* INTRO */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          St John Ambulance invites qualified suppliers and service providers
          to participate in our procurement opportunities. View current tenders
          and download the relevant documents below.
        </p>

<div className="flex justify-center mb-12">
  <input
    type="text"
    placeholder="Search tenders..."
    className="border rounded-full px-6 py-3 w-[350px]"
  />
</div>

        {/* TENDER LIST */}
        <div className="grid md:grid-cols-2 gap-10">

          {tenders.map((tender) => (
            <TenderCard key={tender.id} tender={tender} />
          ))}

        </div>

      </div>
    </div>
  );
}