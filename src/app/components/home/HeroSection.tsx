"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      logoRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      textRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 1.2,
        ease: "elastic.out(1, 0.5)",
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[70vh] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/backgrounds/refinery.jpg')",
        backgroundAttachment: "fixed",  // Parallax Effect
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div ref={logoRef}>
          <Image
            src="/logos/bovua-holdings.png"
            alt="Bovua Holdings Logo"
            width={400}
            height={150}
            className="w-auto h-32 sm:h-40"
            priority
          />
        </div>

        <div ref={textRef} className="mt-4">
          <h1
            className="text-4xl sm:text-5xl font-bold text-light leading-tight"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)" }}  // Text Shadow
          >
            Fueling the Future, Moving the Nation
          </h1>
          <p className="text-lg text-gray-200 mt-3 max-w-xl mx-auto">
            Driving innovation across energy, logistics, and properties in
            South Africa.
          </p>
        </div>

        <div ref={buttonRef} className="mt-6">
          <Link href="#divisions">
            <button className="bg-primary hover:bg-accent text-white px-8 py-3 text-lg rounded-full transition-all transform hover:translate-y-[-3px] hover:shadow-xl">
              Explore Our Divisions
            </button>
          </Link>
        </div>
      </div>

      {/* Adjusted Red Bars */}
      <div className="absolute top-0 left-0 w-[100px] h-full bg-primary skew-x-[-20deg] -translate-x-2/2"></div>
      <div className="absolute top-0 right-0 w-[100px] h-full bg-primary skew-x-[20deg] translate-x-2/2"></div>
    </section>
  );
};

export default HeroSection;
