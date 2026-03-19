import ProgrammeAccordion from "./ProgrammeAccordion";

const ProgrammePage = ({ programme }) => {

return (

<section className="bg-white dark:bg-black text-gray-800 dark:text-gray-200">

{/* HERO */}

<div className="relative h-[420px] w-full">

<img
src={programme.hero.image}
className="w-full h-full object-cover"
/>

<div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-sjak_secondary px-8 py-3">

<h1 className="text-3xl font-bold text-black">
{programme.hero.title}
</h1>

</div>

</div>


{/* INTRO */}

<div className="py-24 border-b-4 border-sjak_secondary">

<div className="container mx-auto px-6 max-w-5xl">

<h2 className="text-4xl font-bold mb-6">
{programme.intro.heading}
</h2>

<p className="text-lg text-gray-600 dark:text-gray-400">
{programme.intro.text}
</p>

</div>

</div>


{/* STATS */}

<div className="bg-yellow-50 dark:bg-gray-900 py-20">

<div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-3 gap-10 text-center">

{programme.stats.map((stat, index) => (

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


{/* PROGRAMME DETAILS */}

<div className="container mx-auto px-6 py-20 max-w-5xl">

<ProgrammeAccordion data={programme.accordion} />

</div>


{/* GALLERY */}

<div className="bg-gray-100 dark:bg-gray-900 py-20">

<div className="container mx-auto px-6 max-w-6xl">

<div className="grid md:grid-cols-3 gap-6">

{programme.gallery.map((image, index) => (

<img
key={index}
src={image}
className="rounded-lg object-cover h-[260px] w-full"
/>

))}

</div>

</div>

</div>

{/* CTA */}
<div className="bg-sjak_secondary py-20 text-center">

<h2 className="text-3xl font-bold text-black mb-6">
Support the Programme
</h2>

<p className="text-black max-w-xl mx-auto mb-8">
Help us equip more students with lifesaving skills and disaster
preparedness training across Kenya.
</p>

<div className="flex justify-center gap-6">

<button className="bg-black text-white px-8 py-3 font-semibold">
Volunteer
</button>

<button className="bg-white text-black px-8 py-3 font-semibold">
Donate
</button>

</div>

</div>

</section>

);

};

export default ProgrammePage;