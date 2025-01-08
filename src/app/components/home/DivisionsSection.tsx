"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

const divisions = [
  {
    name: "Energy",
    image: "/divisions/pump.jpg",
    description:
      "Delivering fuel and wholesale petrochemical products across Southern Africa.",
    link: "/energy",
  },
  {
    name: "Properties",
    image: "/divisions/house.jpg",
    description:
      "Providing safe and modern residential solutions, including student housing.",
    link: "/properties",
  },
  {
    name: "Logistics",
    image: "/divisions/truck.jpg",
    description:
      "Efficient transport and supply chain services for petrochemical products.",
    link: "/logistics",
  },
];

export default function DivisionsSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <section id="divisions" ref={sectionRef} className="py-20 bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-light section-title">
          Our Divisions
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
          Explore the sectors that drive Bovua Holdings forward.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-4 md:px-0">
        {divisions.map((division, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              if (el) {
                cardRefs.current[index] = el;
              }
            }}
            className="bg-primary p-6 rounded-xl shadow-lg text-center division-card transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <Link href={division.link}>
              <div className="cursor-pointer">
                <Image
                  src={division.image}
                  alt={division.name}
                  width={400}
                  height={250}
                  className="rounded-lg"
                />
                <h3 className="text-2xl font-bold text-light mt-6">
                  {division.name}
                </h3>
                <p className="text-gray-200 mt-4">{division.description}</p>
                <button className="mt-6 bg-white text-primary px-6 py-2 rounded-full hover:bg-accent hover:text-white transition-all">
                  Learn More
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
