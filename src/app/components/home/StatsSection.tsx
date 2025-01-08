"use client";
import React, { useRef, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import {
  BuildingOfficeIcon,
  ClockIcon,
  FireIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

// Stats Array with Heroicons
const stats = [
  {
    number: 100,
    suffix: "+",
    title: "Projects Completed",
    description: "Driving progress through infrastructure, logistics, and housing.",
    icon: <BuildingOfficeIcon className="w-10 h-10 text-primary" />,
  },
  {
    number: 10,
    suffix: "+",
    title: "Years in Business",
    description: "Committed to growth and empowering communities across South Africa.",
    icon: <ClockIcon className="w-10 h-10 text-primary" />,
  },
  {
    number: 500,
    suffix: "K+",
    title: "Liters of Fuel Delivered",
    description: "Powering businesses and industries with essential fuel solutions.",
    icon: <FireIcon className="w-10 h-10 text-primary" />,
  },
];

export default function StatsSection() {
  const sectionRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        cardRefs.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, [inView]);

  // Mission, Vision, Values Section with Icons
  const MissionVisionValues = () => {
    return (
      <div className="text-center mb-16 bg-dark p-10 rounded-xl shadow-lg px-4 md:px-0">
        <h2 className="text-4xl font-bold text-primary">Our Mission & Vision</h2>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-relaxed">
          At Bovua Holdings, our mission is to empower communities, drive
          sustainable growth, and fuel Africa’s industries with innovation and
          integrity. Our vision is to become the leading force behind Africa's
          energy, logistics, and housing sectors.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-primary rounded-full">
              <UserGroupIcon className="w-10 h-10 text-white" />
            </div>
            <p className="text-lg text-gray mt-4 font-medium">Community Development</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-primary rounded-full">
              <LightBulbIcon className="w-10 h-10 text-white" />
            </div>
            <p className="text-lg text-gray mt-4 font-medium">Innovation & Excellence</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-primary rounded-full">
              <ShieldCheckIcon className="w-10 h-10 text-white" />
            </div>
            <p className="text-lg text-gray mt-4 font-medium">Integrity & Trust</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-primary rounded-full">
              <RocketLaunchIcon className="w-10 h-10 text-white" />
            </div>
            <p className="text-lg text-gray mt-4 font-medium">Empowerment & Leadership</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-lightShade text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-dark mb-8">
          Committed to South Africa's Growth
        </h2>

        <MissionVisionValues />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="bg-white p-10 rounded-xl shadow-lg flex flex-col items-center justify-center transform transition-all hover:scale-105 border-t-4 border-primary"
            >
              <div className="p-6 bg-dark rounded-full mb-6 flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-extrabold text-primary">
                <CountUp
                  start={inView ? 0 : undefined}
                  end={stat.number}
                  duration={3}
                  suffix={stat.suffix}
                />
              </h3>
              <p className="text-xl font-semibold text-dark mt-4">
                {stat.title}
              </p>
              <p className="text-gray-500 mt-2 max-w-xs leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
