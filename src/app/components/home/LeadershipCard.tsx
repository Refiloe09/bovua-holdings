"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomAvatar from "../CustomAvatar";

interface LeadershipCardProps {
  name: string;
  title: string;
  quote: string;
}

export default function LeadershipCard({ name, title, quote }: LeadershipCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="bg-primary p-6 rounded-xl shadow-lg text-center transform transition-all"
    >
      <CustomAvatar name={name} title={title} />
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-gray-200">{title}</p>
        <blockquote className="italic text-gray-300 mt-4">{quote}</blockquote>
      </div>
    </motion.div>
  );
}
