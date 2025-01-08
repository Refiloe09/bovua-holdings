"use client";
import React, { useEffect, useRef, RefCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheckIcon,
  GlobeAltIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  const setIconRef: RefCallback<HTMLDivElement> = (el) => {
    if (el && !iconsRef.current.includes(el)) {
      iconsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current && textRef.current && imageRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        iconsRef.current.filter(Boolean),
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.3,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Block */}
        <div ref={textRef}>
          <h2 className="text-4xl font-bold text-primary mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Bovua Energy is a market leader in the petroleum industry, driving
            innovation and providing top-tier petroleum solutions across
            Southern Africa. Our unwavering commitment to excellence ensures
            safe, sustainable, and efficient energy distribution that fuels
            progress across industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              ref={setIconRef}
              data-tooltip-id="global-tooltip"
              data-tooltip-content="Our global presence ensures seamless supply."
              className="flex flex-col items-center cursor-pointer"
            >
              <GlobeAltIcon className="w-12 h-12 text-primary hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mt-4">Global Reach</h3>
              <p className="text-sm text-gray-500 text-center">
                Expanding operations across borders, ensuring seamless energy
                supply.
              </p>
            </div>

            <div
              ref={setIconRef}
              data-tooltip-id="innovation-tooltip"
              data-tooltip-content="Innovation drives our advanced solutions."
              className="flex flex-col items-center cursor-pointer"
            >
              <LightBulbIcon className="w-12 h-12 text-primary hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mt-4">Innovation</h3>
              <p className="text-sm text-gray-500 text-center">
                Leading the industry with cutting-edge solutions and technology.
              </p>
            </div>

            <div
              ref={setIconRef}
              data-tooltip-id="safety-tooltip"
              data-tooltip-content="Our safety standards ensure reliability."
              className="flex flex-col items-center cursor-pointer"
            >
              <ShieldCheckIcon className="w-12 h-12 text-primary hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mt-4">Safety & Trust</h3>
              <p className="text-sm text-gray-500 text-center">
                Committed to the highest safety standards in energy
                distribution.
              </p>
            </div>

            {/* Tooltips */}
            <ReactTooltip id="global-tooltip" />
            <ReactTooltip id="innovation-tooltip" />
            <ReactTooltip id="safety-tooltip" />
          </div>
        </div>

        {/* Image Block */}
        <div
          ref={imageRef}
          className="relative h-[450px] w-full hover:scale-105 transition-transform"
        >
          <Image
            src="/energy/petrol_tanks.jpg"
            alt="Oil Tank"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
