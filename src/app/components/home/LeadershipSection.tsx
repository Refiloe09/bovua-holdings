"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { createAvatar } from "@dicebear/core";
import { adventurerNeutral } from "@dicebear/collection";
import { gsap } from "gsap";

// Leadership Data
const leaders = [
  {
    name: "Nomsa Khumalo",
    title: "CEO",
    quote: "Leading with vision, inspired by purpose.",
  },
  {
    name: "Thabo Mokoena",
    title: "CFO",
    quote: "Empowering growth through financial excellence.",
  },
  {
    name: "Lerato Ndlovu",
    title: "COO",
    quote: "Driving innovation and operational efficiency.",
  },
  {
    name: "Sipho Dlamini",
    title: "CTO",
    quote: "Building the future through technology.",
  },
  {
    name: "Ayanda Zwane",
    title: "Director of Logistics",
    quote: "Navigating the supply chain towards progress.",
  },
  {
    name: "Mpho Radebe",
    title: "Director of Energy",
    quote: "Fueling Africa's industries with innovation.",
  },
];

// Custom Avatar Component
const CustomAvatar = ({ name }: { name: string }) => {
  const avatar = createAvatar(adventurerNeutral, {
    seed: name,
    size: 128,
  }).toString();

  return (
    <div
      className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-md"
      dangerouslySetInnerHTML={{ __html: avatar }}
    ></div>
  );
};

// Leadership Card Component
const LeadershipCard = ({
  name,
  title,
  quote,
}: {
  name: string;
  title: string;
  quote: string;
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center text-center shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
      <CustomAvatar name={name} />
      <h3 className="text-xl font-bold text-primary mt-4">{name}</h3>
      <p className="text-gray-600">{title}</p>
      <p className="text-gray-500 italic mt-4">{quote}</p>
    </div>
  );
};

// Main Leadership Section
export default function LeadershipSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section
  ref={sectionRef}
  id="leadership"
  className="py-20 bg-grayShade text-dark"
>
  <div className="text-center mb-12">
    <h2 className="text-5xl text-gray font-bold">Meet Our Leadership</h2>
    <p className="text-muted mt-4 max-w-3xl mx-auto">
      Guiding Bovua Holdings towards a brighter future through innovation,
      empowerment, and collaboration.
    </p>
  </div>

  <div className="relative px-4 md:px-0">
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
      loop={true}
    >
      {leaders.map((leader, index) => (
        <SwiperSlide key={index}>
          <LeadershipCard {...leader} />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom Navigation Buttons (Hidden on Mobile) */}
    <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full hover:bg-accent transition hidden md:flex">
      ←
    </button>
    <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full hover:bg-accent transition hidden md:flex">
      →
    </button>
  </div>
</section>

  );
}
