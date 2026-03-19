import ProgrammePage from "./ProgrammePage";

import bikeHero from "../../assets/order-of-st-john.jpg";
import bike1 from "../../assets/order-of-st-john.jpg";
import bike2 from "../../assets/order-of-st-john.jpg";
import bike3 from "../../assets/order-of-st-john.jpg";

export const bike = {

hero: {
title: "Motorcycle Ambulance Programme",
image: bikeHero
},

intro: {
heading: "Motorcycle Ambulances Increasing Access to Care",
text: `
In Nairobi and other urban areas, calling for an ambulance or a taxi 
to take a patient to hospital for emergency care is quite easy. Yet 
in many rural areas across the country, such vehicles are not easily 
available and a majority of residents live more than 5 km from a 
health centre.
`
},

stats: [
{
number: "1,000+",
label: "Patients evacuated"
},
{
number: "2015",
label: "Programme launched"
},
{
number: "50 KSh",
label: "Fuel contribution per trip"
}
],

accordion: [

{
title: "The Challenge in Rural Communities",
content: `
In rural areas, traditional ambulances and taxis are rarely available. 
Even when they are, many families cannot afford the transport costs. 
Women seeking maternal healthcare are particularly affected and often 
choose to deliver their babies at home, unaware of the serious risks.
`
},

{
title: "Barriers to Emergency Transport",
content: `
Many rural villages are connected only by narrow paths that normal 
vehicles cannot navigate. During rainy seasons, roads are washed out, 
making it almost impossible for conventional ambulances to reach 
patients in time.
`
},

{
title: "The Motorcycle Ambulance Solution",
content: `
To address this challenge, St John Ambulance Kenya introduced a 
cost-effective motorcycle ambulance system. These motorcycles are 
designed to travel on narrow rural paths and reach patients much 
faster than traditional vehicles.
`
},

{
title: "Community-Based Response",
content: `
Volunteers from the community are trained as para-engineers with 
skills in paramedical care, ambulance driving, and basic repairs. 
Because the motorcycle ambulance is stationed within the village, 
patients can quickly find the rider even if they do not have a 
mobile phone.
`
},

{
title: "Impact Since 2015",
content: `
Since the programme began in 2015, motorcycle ambulances have 
transported more than 1,000 patients to hospital for maternal 
healthcare and other emergencies, improving survival and access 
to care in remote communities.
`
}

],

gallery: [
bike1,
bike2,
bike3
]

};


const Bike = () => {

return <ProgrammePage programme={bike} />;

};

export default Bike;