export default function Events() {

const events = [
{
title: "First Aid Training Camp",
date: "12 Aug",
month: "2026",
image: "/events/firstaid.jpg",
description: "Join our certified first aid training session for community members.",
},
{
title: "St John Community Parade",
date: "18 Aug",
month: "2026",
image: "/events/parade.jpg",
description: "A community celebration showcasing volunteers and lifesaving work.",
},
{
title: "Emergency Response Drill",
date: "25 Aug",
month: "2026",
image: "/events/drill.jpg",
description: "Participate in a simulated emergency response training event.",
}
];

return (

<section className="bg-gray-100 dark:bg-gray-900 py-20">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}
<div className="text-center mb-16">
<span className="bg-yellow-500 px-6 py-3 text-3xl font-bold text-black">
Upcoming Events
</span>
</div>

{/* Grid */}
<div className="grid md:grid-cols-3 gap-10">

{events.map((event,index)=>(
<div
key={index}
className="
group
bg-white dark:bg-gray-800
rounded-xl
overflow-hidden
shadow-md
hover:shadow-xl
transition
">

{/* Image */}
<div className="relative overflow-hidden">

<img
src={event.image}
className="w-full h-56 object-cover group-hover:scale-105 transition"
/>

{/* Date Badge */}
<div className="
absolute top-4 left-4
bg-green-600 text-white
px-3 py-2
text-sm
rounded
">
<div className="font-bold">{event.date}</div>
<div className="text-xs">{event.month}</div>
</div>

</div>

{/* Content */}
<div className="p-6">

<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
{event.title}
</h3>

<p className="text-gray-600 dark:text-gray-300 mb-6">
{event.description}
</p>

{/* Actions */}
<div className="flex gap-3">

<button className="
flex-1
bg-green-600
hover:bg-green-700
text-white
py-2
rounded
font-semibold
transition
">
Join Event
</button>

<button className="
flex-1
border border-green-600
text-green-600
dark:text-green-400
py-2
rounded
font-semibold
hover:bg-green-50
dark:hover:bg-gray-700
transition
">
Support Event
</button>

</div>

</div>

</div>
))}

</div>

</div>

</section>
);
}