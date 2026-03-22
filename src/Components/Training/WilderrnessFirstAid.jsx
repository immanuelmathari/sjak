import AmbulanceImg from "../../assets/group-1.jpg"
import cadet1 from "../../assets/members.jpg";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";


const cadetProgramme = {

hero: {
title: "Building Resilience",
image: cadet1
},

intro: {
heading: "Building safer, healthier and more resilient communities",
text: `
We make communities stronger and resilient by preparing them for the worst.This includes teaching and equipping local people how to deal with disasters before they hit.

Local rescue is the first and most important level of preparedness and response. During this stage, the locals try to use available resources within their level of knowledge to survive the emergency.

For instance, during fire or terrorism incident, it is important that the locals know how to respond, as these disasters have a tendency of escalating fast before professional rescue teams arrive at the scene.
`
},

stats: [
{
number: "13,757+",
label: "Students trained"
},
{
number: "120+",
label: "Schools reached"
},
{
number: "30%",
label: "Programme growth"
}
],

accordion: [
{
title: "Curbing road carnage",
content: `
To curb road carnage, for instance, St John Ambulance has teamed up with AA Kenya to roll out a training program on first aid and safe driving. So far this initiative has benefited more than 650 matatu drivers plying the northern corridor.

The lifesaving skills will see drivers reach victims of road crash in less than three minutes, as compared to ambulances which averagely take about nine minutes to arrive at accident spots.

A similar lifesaving training was also offered to communities living near 17 notorious accident blackspots along the same corridor, which traverses across 11 counties from Mombasa to Busia.

The organization has also put up emergency care centres at these 17 key blackspots to help stabilize the casualties prior to evacuation to hospital for treatment.
`
},

{
title: "Teaching police in first aid skills",
content: `
In addition, St John Ambulance also certifies trained police officers in first aid to improve their lifesaving skills. This is because they are often first to arrive at scenes of crime or accidents where they are required to assist the victims.

Further, a first aid competition is also organized by St John to test the level of police preparedness in giving first aid treatment and other emergency care.
`
},

{
title: "Emergency preparedness in prisons",
content: `
In Prison, St John Ambulance is teaching prisoners and wardens in disaster preparedness and first aid skills.

This emergency preparedness training was started in 2006 by 70-year-old prisoner David Ngari, who is serving life in prison, before St John Ambulance joined to support the project. Since then, more than 600 prisoners have been trained.
`
},
{
title: "School disaster readiness",
content: `

In schools, where administrators are still grappling with the challenge of serious school fire incidents, St John Ambulance has formed first aid clubs and equipped them with first aid, fire and incident management skills.

Going forward, St John is identifying more vulnerable communities e.g. urban slums, with intention to help them be able to withstand and bounce back from unexpected disasters.

Safer, healthier and more resilient communities it is the foundation that underpins preparedness and mitigation of many disaster risks that face our country.
`
},

],

gallery: [
cadet1,
cadet1,
"/images/cadet3.jpg"
]

};


const accordionData = [
  {
    title: "Why Wilderness First Aid Training is Important",
    content:
      "In remote environments, emergency services are not immediately accessible. Injuries that may seem minor can quickly become life-threatening without proper care. Wilderness first aid training equips individuals with the ability to respond effectively, stabilise casualties, and make critical decisions while waiting for evacuation or assistance.",
  },
  {
    title: "Who Should Attend",
    content:
      "This course is ideal for hikers, campers, mountaineers, travellers, tour guides, scouts, and outdoor enthusiasts. It is also valuable for organisations operating in remote areas, ensuring their teams are prepared to manage emergencies far from medical facilities.",
  },
  {
    title: "What You Will Learn",
    content:
      "Participants will learn how to assess injuries in remote settings, manage fractures, control bleeding, treat wounds, handle environmental conditions such as heat exhaustion and hypothermia, and improvise first aid solutions using available materials. The training emphasises adaptability and practical problem-solving.",
  },
  {
    title: "Course Duration and Structure",
    content:
      "The Wilderness First Aid Course is typically conducted over one to two days. It combines theory with practical, scenario-based training that simulates real outdoor environments, ensuring participants are prepared for unpredictable situations.",
  },
  {
    title: "How to Respond in a Wilderness Emergency",
    content:
      "Participants are trained to assess the environment for safety, evaluate the casualty’s condition, prioritise life-threatening issues, and provide care using limited resources. Emphasis is placed on staying calm, making informed decisions, and planning for evacuation or prolonged care when necessary.",
  },
  {
    title: "Why You Should Sign Up",
    content:
      "When you are in the wild, you are your own first responder. This course gives you the confidence to act, adapt, and take control in situations where help is not immediately available. For individuals, it enhances safety and independence during outdoor activities. For organisations, it ensures teams are prepared, reducing risk and improving overall safety in remote operations.",
  },
];



const WildernessFirstAid = () => {
    const [openIndex, setOpenIndex] = useState(0);
    
    const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <>
        <section className="min-h-[60vh] flex flex-col md:justify-between bg-gray-50 dark:bg-black text-gray-800 dark:text-white">

            {/* HERO */}

<div className="relative h-[420px] w-full">

<img
src={cadet1}
className="w-full h-full object-cover"
/>

<div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-sjak_secondary px-8 py-3">

<h1 className="text-3xl font-bold text-black">
Wilderness First Aid With St John Ambulance Kenya
</h1>

</div>

</div>


<section className="bg-white dark:bg-black py-12 md:py-20">
  <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div>
      {/* TITLE */}
      <div className="mb-5 space-y-2">
        <span className="inline-block bg-sjak_secondary px-4 py-2 text-3xl md:text-5xl font-bold text-black">
          Wilderness
        </span>
        <br />
        <span className="inline-block bg-sjak_secondary px-4 py-2 text-3xl md:text-5xl font-bold text-black">
          First Aid
        </span>
      </div>

      {/* TEXT */}
      <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base md:text-lg">

        <p>
  The Wilderness First Aid Course offered by St John Ambulance Kenya is designed to equip individuals with the skills to respond to medical emergencies in remote environments where professional help may be hours or even days away.
</p>

<p>
  Imagine you are hiking deep in a forest or trekking across a remote trail when someone in your group gets injured. There is no hospital nearby, no ambulance, and limited supplies. In that moment, your knowledge, improvisation, and decision-making become the difference between life and death.
</p>

<ul className="space-y-1 list-disc ml-6">
  <li>Respond to emergencies in remote and resource-limited environments</li>
  <li>Improvise first aid using available materials in the wild</li>
  <li>Manage injuries such as fractures, wounds, and environmental exposure</li>
  <li>Make critical decisions when evacuation or help is delayed</li>
</ul>

<p>
  This course focuses on practical survival-based first aid — teaching participants how to assess situations, stabilise casualties, and adapt techniques when standard medical equipment is unavailable.
</p>

<p>
  Ideal for hikers, campers, travellers, tour guides, and outdoor professionals, this training builds the confidence and resilience needed to handle emergencies in the wild.
</p>

        {/* BUTTON */}
        <div className="flex justify-evenly">
             <button className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-semibold w-fit hover:scale-105 transition">
          BOOK TRAINING
          <span className="text-sjak_secondary text-xl">+</span>
        </button>

         <button className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-semibold w-fit hover:scale-105 transition">
          REQUEST CALL BACK
          <span className="text-sjak_secondary text-xl">+</span>
        </button>
        </div>
       
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative">
      <img
        src={AmbulanceImg}
        alt="St John Ambulance Kenya vehicle"
        className="w-full max-w-[600px] mx-auto lg:ml-auto rounded-lg shadow-lg"
      />

      {/* OPTIONAL BRAND DECORATION */}
      <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-sjak_secondary"></div>
      <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-red-600"></div>
    </div>

  </div>
</section>

      {/* STATS */}
      <div className="bg-yellow-50 dark:bg-gray-900 py-20">

<div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-3 gap-10 text-center">

{cadetProgramme.stats.map((stat, index) => (

<div key={index}>

<h3 className="text-4xl font-bold text-sjak_secondary">
{stat.number}
</h3>

<p className="text-gray-600 dark:text-gray-400">
{stat.label}
</p>

</div>

))}

</div>

</div>




      {/* GREEN STRIP + BUTTON */}
      <div className="w-full">

        <div className="h-6 bg-green-700"></div>

        <div className="container py-6 flex justify-end">

          <button className="flex items-center gap-3 border-2 border-black dark:border-white px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">

            READ OUR ANNUAL REPORT PDF

            <span className="text-sjak_secondary text-xl">+</span>

          </button>

        </div>

      </div>

    </section>

    <div className="md:ps-60 relative container mx-auto px-6 pb-20 max-w-[1600px]">
        {/* Decorative Border */}
        <div className="absolute left-0 top-10 w-20 h-20 border-l-8 border-t-8 border-yellow-500 md:ms-20"></div>
        <div className="absolute right-0 bottom-10 w-20 h-20 border-r-8 border-b-8 border-yellow-500 md:me-20"></div>


        {/* Title */}
        <div className="max-w-4xl mb-10">

          <div className="bg-yellow-500 inline-block px-4 py-2">
            <h2 className="text-3xl font-bold text-black leading-snug capitalize">
              Importance of This First Aid Course
            </h2>
          </div>

        </div>


        {/* ACCORDION */}
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

      </div>
        </>
    )
    





}

export default WildernessFirstAid;

