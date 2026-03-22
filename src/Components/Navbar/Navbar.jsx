import React, { useState, useEffect } from "react";
import logo from "../../assets/st-john-ambulance-kenya-logo.webp"
import featured from "../../assets/Sakina-assist-a-middle-aged-woman-who-was-injured-in-an-accident-at-Haille-Selassie-Avenue-in-Nairobi-st-john-ambulance-kenya.jpg"
import { HiMenuAlt1 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import Darkmode from "./Darkmode";
import { Link } from "react-router-dom";

// const Navlinks = [
// {
// name: "About St John Kenya",
// children: [
//   "About SJK, Mission & Vision",
// "History, Legal Establishment & Governance",
// "Meet The Team",
// "Order of Chivalry",
// "Regional Offices",
// "St John Worldwide",
// ],
// image: featured
// },
// {
// name: "Training Programms",
// children: [
// "First Aid Training",
// "Disaster Response",
// "Community Programs"
// ],
// image: "/training-preview.jpg"
// },
// {
// name: "Where We Work",
// children: [
// "Nairobi",
// "Coastal Region",
// "Western Region"
// ],
// image: "/community-preview.jpg"
// },
// {
// name: "Ways To Get Involved",
// children: [
// "Volunteer",
// "Donate",
// "Corporate Partnerships"
// ],
// image: "/volunteer-preview.jpg"
// }
// ];
const Navlinks = [
{
  id: "home",
  name: "Home",
  path: "/", 
  image: featured,
  children: [
    
  ],
},
{
  id: "about",
  name: "About St John Kenya",
  // path: "/who-we-are", 
  image: featured,
  children: [
    {
      id: "about1",
      name: "About SJK, Mission & Vision",
      path: "/who-we-are/about-us-mission-and-vision",
    },
    {
      id: "about2",
      name: "History, Legal Establishment & Governance",
      path: "/who-we-are/history-legal-establishment-and-governance",
    },
    {
      id: "about3",
      name: "Meet The Team",
      path: "/who-we-are/team",
    },
  ],
},
{
  id: "training",
  name: "Training Programmes",
  // path: "/what-we-do/training",
  image: "/training-preview.jpg",
  children: [
    {
      id: "t1",
      name: "See all training Courses",
      path: "/what-we-do/training",
    },
  ],
},
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu,setActiveMenu] = useState(null);
    const toggleMenu = () => setShowMenu(!showMenu);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const activeItem = Navlinks.find(item => item.id === activeMenu);

    return <header className="fixed top-0 left-0 w-full z-[9999] text-black dark:text-white duration-300">
        <div className="flex w-full text-white text-xs sm:text-sm md:text-base font-semibold">

  {/* Email CTA */}
  <div className="w-1/3 bg-black py-2 flex items-center justify-center gap-2 text-center px-2">
    <span className="hidden sm:inline">Contact Us:</span>
    <a
      href="mailto:info@stjohnkenya.org"
      className="underline hover:text-sjak_secondary transition"
    >
      info@stjohnkenya.org
    </a>
  </div>

  {/* Emergency CTA */}
  <div className="w-1/3 bg-red-600 py-2 flex items-center justify-center gap-2 text-center px-2">
    <span className="hidden sm:inline">Ambulance Hotline:</span>
    <a
      href="tel:0797952810"
      className="font-bold underline hover:text-white/80 transition"
    >
      0721 225 285
    </a>
  </div>

  {/* Podcast CTA */}
  <div className="w-1/3 bg-green-700 py-2 flex items-center justify-center gap-2 text-center px-2">
  <span className="hidden sm:inline">Listen to: </span>
    <a
      href="mailto:info@stjohnkenya.org?subject=Podcast%20Inquiry"
      className="underline hover:text-white/80 transition"
    >
      Our Podcast
    </a>
  </div>

</div>
        {/* Navbar */}
      <div
  className={`transition-all duration-300 ${
    scrolled
      ? "bg-white dark:bg-black shadow-md text-black dark:text-white"
      : "bg-white dark:bg-black text-black dark:text-white"
  }`}
>
        <div className="container">
            <div className="flex py-3  justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="St John Ambulance Kenya Official Logo" className="h-16" />
                    <p className="text-2xl md:text-3xl ">St John Ambulance <span className="font-bold ">Kenya</span></p>
                </div>

                <nav className="hidden md:block">
<ul className="flex items-center gap-10">

{Navlinks.map((item)=>(
<li
key={item.id}
onMouseEnter={()=>setActiveMenu(item.id)}
className="py-6"
>

{/* <span className="cursor-pointer text-lg font-semibold hover:text-sjak_secondary">
{item.name}
</span> */}
<Link
to={item.path}
className="cursor-pointer text-lg font-semibold hover:text-sjak_secondary"
>
{item.name}
</Link>

</li>
))}

<Darkmode/>

</ul>
</nav>

{showMenu && (

<div className="
fixed top-0 left-0
w-[85%] h-screen
bg-white dark:bg-black
shadow-xl
z-[9999]
p-6
">

<h3 className="text-lg font-bold mb-6">Menu</h3>

<ul className="space-y-4">

{Navlinks.map((item) => (

<li key={item.id}>

{item.children ? (

<details>

<summary className="cursor-pointer font-semibold">
<Link to={item.path}>{item.name}</Link>
</summary>

<ul className="ml-4 mt-3 space-y-2">

{item.children.map((child)=>(
<li key={child.id}>
<Link
to={child.path}
className="block py-1 hover:text-sjak_secondary"
onClick={() => setShowMenu(false)}
>
{child.name}
</Link>
</li>
))}

</ul>

</details>

) : (

<Link
to={child.path}
className="block py-1 hover:text-sjak_secondary"
onClick={() => setShowMenu(false)}
>
{child.name}
</Link>

)}

</li>

))}

</ul>

{/* Search */}
<div className="mt-8 flex">

<input
type="text"
placeholder="Keywords..."
className="
flex-1
border
border-gray-300
dark:border-gray-700
p-2
"
/>

<button className="
bg-sjak_secondary
px-4
font-semibold
">
Search
</button>

</div>

</div>

)}
{activeMenu !== null && (

<div
onMouseLeave={()=>setActiveMenu(null)}
className="
absolute left-0 top-full
w-full
bg-black
text-white
shadow-2xl
"
>

<div className="max-w-7xl mx-auto grid grid-cols-3 gap-12 p-12">

{/* LEFT SIDE LINKS */}

<div>

<h3 className="text-sjak_secondary font-bold mb-4">
{activeItem?.name}
</h3>

<ul className="space-y-3">
{activeItem?.children.map((child)=>(
<li key={child.id}>
<Link
to={child.path}
className="block hover:text-sjak_secondary transition"
onClick={() => setActiveMenu(null)}
>
{child.name}
</Link>
</li>
))}
</ul>


{/* Divider */}
<div className="border-t border-yellow-500 my-6"></div>


{/* Values */}
<h4 className="text-sjak_secondary font-semibold mb-3">
Our Values
</h4>

<div className="grid grid-cols-2 gap-2 text-sm">

<span>Respect</span>
<span>Devotion</span>
<span>Excellence</span>
<span>Togetherness</span>
<span>Transparency</span>
<span>Faithfulness</span>

</div>

</div>


{/* MIDDLE INFO */}

<div className="space-y-4">

<a className="block hover:text-sjak_secondary">
Latest News
</a>
<a className="block hover:text-sjak_secondary">
Shop Supplies & Uniform
</a>
<a className="block hover:text-sjak_secondary">
Event Converage
</a>
<a className="block hover:text-sjak_secondary">
Join St John local volunteers
</a>
<a className="block hover:text-sjak_secondary">
Start St John division eg school, organisation
</a>
<Link to="/opportunities/tenders" className="block hover:text-sjak_secondary">
Open Tenders
</Link>

<a className="block hover:text-sjak_secondary">
Careers
</a>
<a className="block hover:text-sjak_secondary">
Contact Us
</a>

<div className="flex mt-4">

<input
placeholder="Search Website"
className="
flex-1
p-2
text-black
"
/>

<button className="bg-sjak_secondary px-4 text-black font-bold">
Search
</button>

</div>

</div>


{/* RIGHT IMAGE */}

<div className="relative">

<img
src={activeItem?.image}
className="w-full h-[260px] object-cover"
/>

{/* St John style frame */}

<div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-sjak_secondary"></div>

<div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-red-600"></div>

</div>

</div>

</div>

)}

                <div className="md:hidden block">
                    <div className="flex items-center gap-4">  

                    <Darkmode />
                    {
                        showMenu ? (<HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer" size={30} />) : (<HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer" size={30} />)
                    }
                    </div>
                </div>
            </div>
            </div>

            {/* Thin yellow line */}
            <div className="w-full h-[2px] bg-sjak_secondary"></div>
        </div>
    </header>
}

export default Navbar;