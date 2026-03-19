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
title: "Road Safety",
image: cadet1
},

intro: {
heading: "First-aid training for police, road users and bystanders fill post-crash care gap",
text: `
At least 3, 146 people lost their lives on the road in 2018 compared to 2,875 who died in 2017, according to the data from National Transport and Safety Authority.

However, this figures are four times lower compared to World Health Organization’s figures contained in its “global status report on road safety 2018.”

Further, the findings reveal that half of road traffic deaths in the country could be prevented, if the injured received basic trauma care within the first hour after the accident.

However, many accident victims are unable to access timely appropriate care to prevent further disability due to delay or lack of ambulances in some parts of the country.

As a result, it takes a long time for accident victims to be taken from where they’re injured to the hospital because of the few number of ambulances in the country.

So, it means one involved in an accident has to be able to depend on a Good Samaritan somewhere to take them to hospital.

With these revelations, it is crucial to have basic road safety and first aid skills to help those injured and curb high rate of traffic accidents.

Taking the lead, St John Ambulance has rolled out a number of road safety and emergency care programs to increase knowledge, awareness and skills amongst police, road users, and bystanders.
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
title: "Equipping police",
content: `
Starting with police officers, who are often the first to respond to a road traffic accident, St John is annually equipping at least 3,000 law-enforcers with first-aid skills needed to stabilize a patient until an ambulance arrives.

Further, a first aid competition is also organized to test the officers’ level of preparedness in giving first aid treatment and other emergency care.
`
},

{
title: "First aid training for bystanders",
content: `
In addition to police officers, St John Ambulance is also equipping people who live or work near 18 key blackspot areas with basic first-aid skills. The bystanders are also taught how to transport crash victims safely to the nearest hospital as soon as possible after an accident.

At this 18 key blackspots, the organization has put up emergency care centres which are fully equipment with first aid and emergency rescue equipment.

This highway emergency response program is funded by corporate social responsibility contributions from oil companies under their umbrella body, Petroleum Institute of East Africa (PIEA).

Police and bystanders are often the first to respond to a road traffic accidents. They play a vital role in supporting accident victims and filling the gap in emergency
`
},

{
title: "Tipping boda-boda riders on first aid, road safety",
content: `
Bodabodas, which earn thousands of young men a living but have been labelled “death-traps on wheels”, are involved in many road traffic accidents.

As such, St John Ambulance has taken initiative to train the commercial riders on first aid and road safety.

The trained riders were spread across 17 major towns with highest number of motorcycle accidents.
`
},
{
title: "Safe driving, first aid training for matatu drivers",
content: `
Finally, St John Ambulance teamed up with AA Kenya to roll out a training program on first aid and safe driving which benefited more than 650 matatu drivers.

The lifesaving skills will see drivers reach victims of road crash in less than three minutes, as compared to ambulances which averagely take about 9-30 minutes to arrive at accident spots.
`
},

],

gallery: [
cadet1,
cadet1,
"/images/cadet3.jpg"
]

};



const RoadSafety = () => {

return <ProgrammePage programme={cadetProgramme} />;

};

export default RoadSafety;