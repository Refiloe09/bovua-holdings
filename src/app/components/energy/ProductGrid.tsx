"use client";
import React from "react";
import Image from "next/image";
import { FaGasPump, FaOilCan, FaBurn, FaTractor } from "react-icons/fa";

const products = [
  {
    name: "Aviation Fuels",
    description:
      "We supply Jet Fuel and Aviation Gasoline that meet international standards, ensuring the aviation industry operates smoothly with top-quality fuels.",
    image: "/energy/petrol_tanks.jpg",
    icon: <FaTractor className="text-4xl text-primary" />,
    details: ["Jet Fuel", "Aviation Gasoline"],
  },
  {
    name: "Diesel Products",
    description:
      "Our diesel offerings include Automotive Diesel and Low Sulfur Diesel (10ppm, 50ppm, 500ppm), supporting industries and logistics with reliable fuel options.",
    image: "/energy/refinery.jpg",
    icon: <FaOilCan className="text-4xl text-primary" />,
    details: ["Automotive Diesel", "Low Sulfur Diesel"],
  },
  {
    name: "Petrol",
    description:
      "Bovua Energy provides unleaded petrol options, including ULP 93 and ULP 95, for vehicles and machinery across Southern Africa.",
    image: "/energy/pump.jpg",
    icon: <FaGasPump className="text-4xl text-primary" />,
    details: ["ULP 93", "ULP 95"],
  },
  {
    name: "LPG & Biofuels",
    description:
      "We distribute biofuels and LPG for commercial and industrial use, including gasoline, bitumen, and paraffin to cater to diverse energy needs.",
    image: "/divisions/truck.jpg",
    icon: <FaBurn className="text-4xl text-primary" />,
    details: ["Gasoline", "Bitumen", "Biofuels"],
  },
];

const ProductGrid = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Our Products & Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 text-center">
                {product.icon} {/* Render the icon directly */}
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <ul className="text-sm text-gray-500 mt-4 space-y-1">
                  {product.details.map((detail, i) => (
                    <li key={i}>- {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
