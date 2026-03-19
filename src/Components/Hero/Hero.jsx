import React from 'react';
// import HeroImg from '../../assets/woman-getting-treatment-by-St-John-Ambulance-at-riverside-attack.jpg';
import HeroImg from '../../assets/scouts2.jpg';
import HeroImg2 from '../../assets/training.jpg';
import HeroImg3 from '../../assets/st-john-ambulance-kenya.jpg';
import HeroImg4 from '../../assets/statehouse.jpg';
import HeroVideo from '../../assets/st-john-ambulance-kenya.mp4';
import { BiPlayCircle } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaChalkboardTeacher,
  FaCalendarCheck,
  FaUserFriends,
  FaHandsHelping,
} from "react-icons/fa";

const Hero = () => {
  const slides = [
    {
      image: HeroImg,
      heading: "Summary",
      text: "St John Ambulance Kenya is a non-profit humanitarian organization (founded 1928) providing emergency medical services, first aid training, and community health services. Headquartered in Nairobi, it operates a 24/7 ambulance hotline.",
      button1_text: "Emergency Hotline",
      button1_icon: <FaPhoneAlt />,
      button1: "tel:0721225285",
      button2_text: "Email Us",
      button2_icon: <FaEnvelope />,
      button2: "mailto:info@stjohnkenya.org",
    },
    {
      image: HeroImg2,
      heading: "Vision",
      text: "To be a trusted first aid and health charity providing quality and timely emergency healthcare to all.",
      button1_text: "Training Programmes",
      button1_icon: <FaChalkboardTeacher />,
      button1: "/training",
      button2_text: "Event Coverage",
      button2_icon: <FaCalendarCheck />,
      button2: "/events",
    },
    {
      image: HeroImg3,
      heading: "Mission",
      text: "To develop a strong network of volunteers, prepare communities to deal with disasters, and give timely care to people affected by emergencies.",
      button1_text: "Become a Volunteer",
      button1_icon: <FaUserFriends />,
      button1: "/volunteer",
      button2_text: "See Our Programmes",
      button2_icon: <FaHandsHelping />,
      button2: "/programmes",
    },
  ];
  return <>

    <section className="relative w-full h-[70vh] md:h-[100vh] overflow-hidden">

      <Swiper modules={[Navigation, Autoplay]} navigation autoplay={{ delay: 5000 }} loop={true} className="h-full">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[100vh]">
              <img src={slide.image} alt="St John Ambulance Kenya" className="absolute inset-0 w-full h-full object-cover" />
              {/* overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              {/* Content */}
              <div className="relative container mx-auto h-full flex items-center px-4 sm:px-6">

                <div className="
    bg-sjak_secondary/95 
    dark:bg-dark_bg/95
    p-4 sm:p-6 md:p-10
    max-w-[100%] sm:max-w-lg md:max-w-2xl
    rounded-md
    shadow-xl
    backdrop-blur-sm
  ">

                  <h1 className="
      text-xl
      sm:text-2xl
      md:text-4xl
      lg:text-5xl
      font-bold
      mb-3
      text-green-700
      dark:text-sjak_secondary
      leading-tight
    ">
                    {slide.heading}
                  </h1>

                  <h3 className="
      text-sm
      sm:text-base
      md:text-xl
      lg:text-2xl
      font-medium
      text-sjak_black
      dark:text-white
      leading-relaxed
    ">
                    {slide.text}
                  </h3>

                  <div className="
      flex
      gap-3
      mt-4
      sm:mt-6
      flex-wrap
    ">

                    <a
                      href={slide.button1}
                      className="
          flex items-center gap-2
          bg-green-700 text-white
          px-4 py-2
          sm:px-5 sm:py-2.5
          md:px-6 md:py-3
          rounded-full
          text-xs sm:text-sm md:text-base
          font-semibold
          hover:bg-red-700
          transition
        "
                    >
                      {slide.button1_icon}
                      {slide.button1_text}
                    </a>

                    <a
                      href={slide.button2}
                      className="
          flex items-center gap-2
          border-2
          border-sjak_black
          dark:border-white
          px-4 py-2
          sm:px-5 sm:py-2.5
          md:px-6 md:py-3
          rounded-full
          text-xs sm:text-sm md:text-base
          font-semibold
          text-sjak_black
          dark:text-white
          hover:bg-sjak_black
          hover:text-white
          dark:hover:bg-white
          dark:hover:text-black
          transition
        "
                    >
                      {slide.button2_icon}
                      {slide.button2_text}
                    </a>

                  </div>

                </div>

              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>


    </section>
  </>
}

export default Hero;