"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import AboutSection from '@/app/components/energy/AboutSection';
import ProductGrid from '@/app/components/energy/ProductGrid';

export default function EnergyHome() {
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
    <>
      <section
        ref={heroRef}
        className="relative h-[70vh] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/backgrounds/oil.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div ref={logoRef}>
            <Image
              src="/logos/bovua-energy-logo.png"
              alt="Bovua Energy Logo"
              width={350}
              height={130}
              className="w-auto h-28 sm:h-36"
              priority
            />
          </div>

          <div ref={textRef} className="mt-4">
            <h1
              className="text-4xl sm:text-5xl font-bold text-light leading-tight"
              style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)" }}
            >
              Bringing Tomorrow Closer
            </h1>
            <p className="text-lg text-gray-200 mt-3 max-w-xl mx-auto">
              Bovua Energy leads the way in petroleum products, focusing on
              wholesale distribution and innovative solutions for Southern Africa.
            </p>
          </div>

          <div ref={buttonRef} className="mt-6">
            <Link href="/energy/products">
              <button className="bg-primary hover:bg-accent text-white px-8 py-3 text-lg rounded-full transition-all transform hover:translate-y-[-3px] hover:shadow-xl">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Decorative Red Bars */}
        <div className="absolute top-0 left-0 w-[100px] h-full bg-primary skew-x-[-20deg] -translate-x-2/2"></div>
        <div className="absolute top-0 right-0 w-[100px] h-full bg-primary skew-x-[20deg] translate-x-2/2"></div>
      </section>

      {/* About Section Component */}
      <AboutSection />
      
      {/* Product Grid Component */}
        <ProductGrid />
    </>
  );
}
