import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// 👉 replace these later
import hero from "../../assets/st-john-kenya-ambulance-kenya-emergency-response-team-ems-first-aid.jpg";
import speaker1 from "../../assets/st-john-kenya-emea-project-photo-ceo-paul-ngugi-moses.jpg";
import speaker2 from "../../assets/st.john-ambulance-kenya-projects-emea-europe-middle-east-africa-training-of-trainers-programs-manager-hezron.jpg";
import gallery1 from "../../assets/st-john-ambulance-kenya-projects-emea-aqua-rescue-first-aid-training-andrew- wanjohi.jpg";
import gallery2 from "../../assets/st-john-ambulance-kenya-emea-immanuel-mathari.png";
// import hero from "../../assets/emea/st-john-ambulance-kenya-emea-project-immanuel-mathari-developer.png";
// import speaker1 from "../../assets/st-john-kenya-ambulance-kenya-emergency-response-team-ems-first-aid.jpg";
// import speaker2 from "../../assets/st-john-kenya-emea-project-photo-ceo-paul-ngugi-moses.jpg";
// import gallery1 from "../../assets/st.john-ambulance-kenya-projects-emea-europe-middle-east-africa-training-of-trainers-programs-manager-hezron.jpg";
// import gallery2 from "../../assets/st-john-ambulance-kenya-projects-emea-aqua-rescue-first-aid-training-andrew-wanjohi.jpg";

const EMEAProgramme = () => {
  const [open, setOpen] = useState(false);

  const stats = [
    { number: "90", label: "Target Master Trainers" },
    { number: "3", label: "Regions (EMEA)" },
    { number: "27", label: "Trainers Achieved So Far" },
  ];

  return (
    <section className="bg-white dark:bg-black text-gray-800 dark:text-gray-200">

      {/* ================= HERO ================= */}
      <div className="relative h-[420px] w-full">
        <img src={hero} className="w-full h-full object-cover" />

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-sjak_secondary px-8 py-3">
          <h1 className="text-3xl font-bold text-black">
            EMEA Master Trainer Programme
          </h1>
        </div>
      </div>


      {/* ================= INTRO ================= */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="text-center mb-10">
          <span className="bg-sjak_secondary text-black px-6 py-1 text-3xl font-bold font-body">
            Training Across Borders, Caring Across Cultures
          </span>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 text-lg">
          The EMEA Master Trainer Programme is a strategic initiative designed
          to standardise first aid training across Europe, the Middle East, and Africa.
          It focuses on building a strong network of trainers who deliver
          consistent, high-quality, and culturally adaptable emergency care training.
        </p>

        {/* EXPAND */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 border-2 border-sjak_secondary rounded-full px-6 py-3 font-semibold hover:bg-sjak_secondary hover:text-black transition"
          >
            WHAT IS THE GOAL?
            {open ? <Minus size={18}/> : <Plus size={18}/>}
          </button>
        </div>

        {open && (
          <p className="text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            To develop 90 highly skilled master trainers across 3 regions within 3 years,
            ensuring every St John association and priori including St John Kenya delivers first aid training to a
            consistent international standard while adapting to local contexts.
          </p>
        )}
      </div>


      {/* ================= STATS ================= */}
      <div className="bg-yellow-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-3 gap-10 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-5xl font-bold text-sjak_secondary">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>


      {/* ================= SECTION 1 (VISION) ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-sjak_secondary text-black px-6 py-3">
            Building a Region of Trainers
          </h2>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            The programme focuses on strengthening the capacity of trainers
            across the EMEA region by ensuring consistency in training delivery
            and transfer of skills across borders.
          </p>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            By collaborating with other St John associations, Uganda,
            Tanzania, Ghana, South Africa and beyond, the initiative is
            improving the quality and reach of first aid training.
          </p>

          <h2 className="bg-sjak_secondary text-black px-6 py-3 text-3xl font-bold">Goals Achieved</h2>

          <ul className="list-disc ml-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Standardised training across all associations</li>
            <li>Protocol-driven first aid delivery</li>
            <li>Scalable training capacity</li>
            <li>Confidence-based trainer development</li>
          </ul>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-full h-full border-t-[10px] border-l-[10px] border-sjak_secondary"></div>

          <img src={speaker1} className="relative z-10 w-full object-cover shadow-xl" />

          <div className="absolute right-0 bottom-0 w-6 h-24 bg-sjak_primary"></div>
          <div className="absolute right-6 bottom-0 w-24 h-4 bg-sjak_red"></div>
        </div>
      </div>


      {/* ================= SECTION 2 (JACKSON) ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE LEFT */}
        <div className="relative order-2 md:order-1">
          <div className="absolute -top-6 -left-6 w-full h-full border-t-[10px] border-l-[10px] border-sjak_secondary"></div>

          <img src={speaker2} className="relative z-10 w-full object-cover shadow-xl" />

          <div className="absolute right-0 bottom-0 w-6 h-24 bg-sjak_primary"></div>
          <div className="absolute right-6 bottom-0 w-24 h-4 bg-sjak_red"></div>
        </div>

        {/* TEXT */}
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold mb-6">
            A Standard That Travels Across Borders
          </h2>

          <p className="mb-6 text-gray-700 dark:text-gray-300 italic">
            “Training alone does not save lives. When a life is on the line,
            there is no local standard — only the right response, at the right time ~ Jackson, Manager Training Department. St John Ambulance Kenya”
          </p>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            This programme goes beyond knowledge transfer. It builds a shared
            standard of excellence that adapts to culture but never compromises on care.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            Trainers are challenged to go beyond what they know — to transform
            how they deliver care in their communities where lives depend on it.
          </p>
        </div>
      </div>


      {/* ================= GALLERY ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-10">
          <span className="bg-sjak_secondary text-black px-6 py-3 text-3xl font-bold">
            Programme Highlights
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <img src={gallery1} className="w-full h-[260px] object-cover" />
          <img src={gallery2} className="w-full h-[260px] object-cover" />
        </div>

      </div>


      {/* ================= ACCORDION ================= */}
      <div className="container mx-auto px-6 py-20 max-w-5xl border-4 border-sjak_secondary">

        <h2 className="text-4xl text-center font-bold mb-6">
          Programme Focus Areas
        </h2>

        <ProgrammeAccordion />

      </div>

    </section>
  );
};

export default EMEAProgramme;



/* ================= ACCORDION ================= */

const ProgrammeAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const data = [
    {
      title: "Standardisation of Training",
      content: "Ensuring all St John associations follow a consistent international first aid training protocol."
    },
    {
      title: "Trainer Capacity Building",
      content: "Developing confident trainers capable of delivering high-quality emergency care training."
    },
    {
      title: "Cross-Border Collaboration",
      content: "Sharing knowledge across Kenya, Uganda, Tanzania, Ghana, South Africa and beyond."
    },
    {
      title: "Community Impact",
      content: "Extending training to grassroots communities to ensure first aid knowledge reaches every household."
    },
    {
      title: "Transfer of Skills",
      content: "Empowering trainers to adapt knowledge for different cultural and social contexts."
    },
    {
      title: "Sustainable Growth",
      content: "Building a scalable model that continuously grows the number of trained responders."
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {data.map((item, index) => (
        <div key={index} className="border rounded-lg bg-white dark:bg-gray-900">

          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-6 text-left"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>

            {openIndex === index ? <Minus size={20}/> : <Plus size={20}/>}
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