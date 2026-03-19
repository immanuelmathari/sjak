import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const accordionData = [
  {
    title: "Commercial First Aid",
    content:
      "These are income generating training courses that target some individuals, institutions and companies for a small fee for St John to cover operation costs. The courses are conducted by highly trained and qualified trainers to maintain the global St John quality standards for trainees.",
  },
  {
    title: "Schools Program",
    content:
      "St John works with schools to equip students with life saving first aid knowledge and emergency response skills.",
  },
  {
    title: "First Aid Service",
    content:
      "Our trained volunteers provide first aid services during public gatherings, sporting events, and community activities.",
  },
  {
    title: "First Aid Courses",
    content:
      "Certified first aid training courses for individuals and organisations delivered by professional trainers.",
  },
];

const FirstAidAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 max-w-4xl">

      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`border rounded-lg bg-white transition duration-500 ${
            openIndex === index ? "border-green-600" : "border-gray-300"
          }`}
        >

          {/* Header */}
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

          {/* Content */}
          {openIndex === index && (
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {item.content}
            </div>
          )}

        </div>
      ))}

    </div>
  );
};

export default FirstAidAccordion;