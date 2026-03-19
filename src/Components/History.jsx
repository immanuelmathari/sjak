import React, { useState } from "react";
import KnightsHospitaller from '../assets/knights-hospitaller-st-john.webp'
import StJohnAssociation from '../assets/st-john-ambulance-association.jpg'
import StJohnAssociation2 from '../assets/st-john-kenya-association.jpg'
import StJohnAssociation3 from '../assets/st-john-ambulance-brigade-nairobi.jpg'
import StJohnAssociation4 from '../assets/inauguration-of-the-priory-of-st-john-kenya.jpg'
import StJohnAssociation5 from '../assets/dusit-attack.jpg'
import StJohnAssociation7 from '../assets/woman-getting-treatment-by-St-John-Ambulance-at-riverside-attack.jpg'
import StJohnAssociation6 from '../assets/members2.jpg'
import hero from '../assets/statehouse.jpg'
import { Minus, Plus } from "lucide-react";

const History = () => {


  const historyData = [
  {
    title: "Origins of the Order",
    content: (
      <>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            The St. John Ambulance, and its parent charity the Order of St John, has a very rich and interesting history.

It stretches all the way to 11th Century during the Crusades battle between Christians and Muslims, when a small hospital attached to the church was set up to care for sick and injured pilgrims.

Around 1023, a group of individuals associated with the hospital in Amalfi, and dedicated to John the Baptist, founded the Order to provide care for the sick, poor or injured pilgrims in Jerusalem.

Initially, the group cared for pilgrims, but they soon extended to providing pilgrims with an armed escort, which soon grew into a substantial force. Thus the Order of St. John gradually became military without losing its charitable character.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
            Later, with the rise of the protestant reformation and corresponding decline of papal authority, the Christian Order of St John lost many of its holdings, and was separated from the main stem Roman Catholic Church in 1856.

Since then, it became an independent Order to this day. This Order in time became known as the Most Venerable Order of Saint John, receiving a royal charter from Queen Victoria in 1888, before expanding throughout the United Kingdom and the British Commonwealth States.
          </p>

        <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
          <img
            src={KnightsHospitaller}
            alt="Early hospital care"
            className="w-full object-cover"
          />
        </div>
      </>
    ),
  },

  {
    title: "The Birth of Modern First Aid",
    content: (
      <>
       <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            In 1877, when Britain was at the height of the Industrial Revolution, the “St John Ambulance Association” was founded.

Industrial work was often dangerous and accidents were frequent. The Association trained people to administer first aid; running classes, publishing books and setting examinations.

The initiative was popular and spread outside heavy industry into the towns, villages and the more affluent suburbs.

Before long, thousands had received First Aid training. Many wanted to use their new skills to help others.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
            In 1887, another related organization “St. John Ambulance Brigade” was formed, providing First Aid and ambulance transport at public events.

They attended ’wherever crowds gathered’ – from great national occasions to local football matches.

Later, the Brigade and Association merged as “St. John Ambulance.”

In 1888, Queen Victoria made the British Order of St. John a Royal Order of Chivalry, with the title ‘The Most Venerable Order of the Hospital of St. John of Jerusalem’.

In the early 19th century, the Order became singularly devoted to acts of charity and hospital work, providing an extensive network of medical services in Britain and on the front lines; along with trained volunteers, reserves for army hospitals and the British Red Cross.
          </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <img
            src={StJohnAssociation}
            className="rounded-lg shadow-lg"
          />
          <img
            src={StJohnAssociation2}
            className="rounded-lg shadow-lg"
          />
        </div>
      </>
    ),
  },

  {
    title: "St John Comes to Kenya (1923)",
    content: (
      <>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400"> The Colony and Protectorate of Kenya was part of the British Empire in Africa from 1920 until 1963. During this time, the St John Ambulance came into being in Kenya at the initiative of the then Police Commissioner Sir Cavendish, who doubled up as the first St John Commissioner in the country in 1923. Cavendish then lobbied police officers to join the charity whose sole purpose was to save lives by giving first aid to all wounded officers. </p> <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400"> The organization then operated as unit of the Kenya Police until 1928 when it became a civilian organization recognized as part of the global network of the Order of St John. During this time, St John witnessed a tremendous growth in its membership which spread to workers engaged in railway and port services. Officers in charge of St John during these period were mainly Britons, as most Kenyans did not have the requisite education needed for such positions. </p> <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400"> As the first ambulance was introduced in 1939, the charity started becoming a household name, giving first aid treatments and training communities how to care for simple injuries and illnesses. </p>

        <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
          <img
            src={StJohnAssociation3}
            className="w-full object-cover"
          />
        </div>
      </>
    ),
  },

  {
    title: "Independence and National Service",
    content: (
      <>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400"> The years preceding 1963 was one of the organization’s busiest, with several people sustaining injuries arising from insurgence mayhem against colonialism in Kenya. On 12th December 1964, during the country’s independence celebrations, first-aid posts mounted by St John Ambulance treated more than 1,000 casualties who were injured in celebrations and excitements of a new Kenya. Since the traditions of St John is that the Head of State automatically becomes the Chief Patron upon acceptance, His Excellency President Jomo Kenyatta then became the first Kenyan Chief Patron of St John. </p> <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400"> The President was committed to supporting the operations of St John due to the charity’s significant role in complementing government medical services and the armed forces in caring for the wounded and the ill. During this time, native Kenyans started taking positions previously held in the organization by the Britons who were leaving the country after independence. In 1965, President Jomo Kenyatta invested Sir Charles Markam as the Commander Brother, a rank which was very high in the organization at the time. This was followed by another colourful investiture for the then Chairman Mr. Rupet Mayne at State House Nairobi. On the 22nd day of March 1972, the date was ripe for investiture of President Jomo Kenyatta as a Knight of Grace of the Order of St John. This prestigious award by the Queen of England was to recognize his contribution to the charity activities of St John in Kenya. </p>

        <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
          <img
            src={StJohnAssociation4}
            className="w-full object-cover"
          />
        </div>
      </>
    ),
  },
  {
    title: "Expansion under President Moi",
    content: (
      <>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400"> His Excellency President Daniel Arap Moi then took over as the President of the Republic of Kenya, and consequently Chief Patron of St John Kenya following the death of Mzee Jomo Kenyatta on 22nd August 1978. President Moi, being passionate about charity, injected a lot of vigour into the operations of St John. Occasionally, the President would preside over the annual council meetings, giving a personal donation, or writing donation appeal letters to parastatals to support St John. </p> <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400"> In 1979, the Attorney General Sir Charles Njonjo, who was a member of the St John Council at that time, introduced the St. John Ambulance of Kenya (Incorporation) Bill that was seconded by the then Minister for Health Hon James Osogo. The motion was initially moved by the then Vice-president and Finance Minister Mwai Kibaki. This bill was passed into a law, giving way for St John Ambulance to be established as a corporation in the Republic of Kenya. A year after incorporation, when Pope first visited Kenya in 1980, more than 800 people fell ill and were treated by St. John medics who were manning the 12 first aid posts at Uhuru Park. </p>

        <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
          <img
            src={StJohnAssociation7}
            className="w-full object-cover"
          />
        </div>
      </>
    ),
  },


  {
    title: "Responding to National Emergencies",
    content: (
      <>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400"> 1980s ushered in a new era of frequent terror attacks which overstretched the resources of St John Ambulance. This commenced with the Norfolk hotel attack in 1980, then the bombing of the US embassy in 1998 and Paradise hotel in 2002. In 2013, the militant group Al-Shabaab killed 67 people at Nairobi’s Westgate Shopping Mall. There was also the April 2015 attack at Garissa University College, where gunmen killed 148 people and wounded several others. On 15 January 2019, four gunmen attacked the DusitD2 complex at 14 Riverside Drive junction, killing 21 people and injuring several others before they were contained by security forces. There have been numerous other lesser attacks. </p> <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400"> During this post 80s era, St John Ambulance were overstretched with frequent road accidents that typically claims about 3,000 lives annually. The organization has also been relied upon to help in occasional collapse of poorly-built structures, especially in urban areas. As the first case of HIV in Kenya was detected in 1984, becoming one of the major causes of illness in the country by the mid-1990s, St John Ambulance had to introduce home-based care program to reduce suffering of persons living with HIV. The pandemic which affected nearly 11 percent of the country’s population has since been substantially contained by scaling up of viral suppression, male circumcision and awareness promotion among other interventions. </p>

        <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
          <img
            src={StJohnAssociation5}
            className="w-full object-cover"
          />
        </div>
      </>
    ),
  },

  {
    title: "St John Kenya Becomes a Priory",
    content: (
      <>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400"> In December 2013, the organization marked another great day in its history, by being elevated from an “Association” to be the ninth “Priory” in the world, and second in Africa after South Africa. This auspicious inauguration was presided by St John’s Chief Patron His Excellency President Uhuru Kenyatta and Lord Prior Professor Anthony Mellows at All saints Cathedral Nairobi. </p> <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400"> Following this elevation, St John Kenya now sits in the Grand Council of the Order of St John, which ratifies all the programmes and policies of the St John worldwide. Today, St John Kenya continues to expand its programmes to keep up with the rising demand. Part of their ongoing initiatives include increasing access to maternal care in hard-to-reach villages through motorcycle ambulances, reduction of road deaths through emergency care centres stationed at key blackspots, as well as building resilience of vulnerable groups like prisons to cope with local emergencies through emergency preparedness training. </p>

        <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
          <img
            src={StJohnAssociation6}
            className="w-full object-cover"
          />
        </div>
      </>
    ),
  },
];

const HistoryAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">

      {historyData.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg bg-white dark:bg-gray-900 transition"
        >

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

          {openIndex === index && (
            <div className="px-6 pb-8">{item.content}</div>
          )}

        </div>
      ))}

    </div>
  );
};


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
          <h1 className="text-3xl font-bold text-black">History</h1>
        </div>
      </div>
      {/* HERO */}
      <div className="relative py-24 border-b-4 border-sjak_secondary">

        <div className="container mx-auto px-6 max-w-5xl">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The History of St John Ambulance Kenya
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            Since its creation in 1923, the St John Ambulance in Kenya has remained true to its sole purpose of saving lives by giving first aid to the wounded and training communities to cope with emergencies.
          </p>

        </div>

      </div>


      {/* TIMELINE */}
      <div className="container mx-auto px-6 py-20 max-w-5xl space-y-24">


        <HistoryAccordion />

      </div>
    </section>
  );
};

export default History;