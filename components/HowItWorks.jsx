"use client";

import React from "react";
import WorksCard from "./UI/WorksCard";
import { howItWorks } from "@/Constants/HowItWorks";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const getVariants = (index, total) => {
    if (index === 0) {
      return {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      };
    } else if (index === total - 1) {
      return {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      };
    } else {
      return {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
    }
  };

  return (
    <section className="bg-transparent py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-white pb-16 text-center w-full">How It Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {howItWorks.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={getVariants(index, howItWorks.length)}
              className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center h-full"
            >
              <WorksCard title={item.title} desc={item.desc} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
