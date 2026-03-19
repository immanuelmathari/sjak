import React, { useState } from "react";

import hero from "../../assets/members.jpg";
import cadet1 from "../../assets/members.jpg";
import cadet2 from "../../assets/members.jpg";
import cadet3 from "../../assets/members.jpg";

import { Plus, Minus } from "lucide-react";
import ProgrammeAccordion from "./ProgrammeAccordion";
import ProgrammePage from "./ProgrammePage";

export const cadetProgramme = {

hero: {
title: "Cadet & Dolphin Programme",
image: cadet1
},

intro: {
heading: "Preparing Students to Save Lives",
text: `
The Cadet and Dolphin programme equips students with essential
knowledge on first aid, safety, and disaster preparedness.
Through training and simulations, learners gain the confidence
to respond during emergencies before professional help arrives.
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
title: "Why the Programme Exists",
content: `
St John Ambulance Kenya established the Cadet and Dolphin programme
to equip young people with lifesaving knowledge and disaster
preparedness skills.
`
},

{
title: "Who the Programme Serves",
content: `
Dolphins are pupils below 13 years while Cadets are students
between 13 and 17 years in secondary schools.
`
},

{
title: "The Impact in Schools",
content: `
More than 13,000 students have been enrolled in the programme.
`
}

],

gallery: [
cadet1,
cadet1,
"/images/cadet3.jpg"
]

};



const CadetProgramme = () => {

return <ProgrammePage programme={cadetProgramme} />;

};

export default CadetProgramme;