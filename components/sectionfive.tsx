"use client";

import CountUp from "react-countup";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utility/animation";

const stats = [
  { icon: "/Icon (7).png", label: "Members", value: 2245341 },
  { icon: "/Icon (1).png", label: "Clubs", value: 46328 },
  { icon: "/Icon (5).png", label: "Event Bookings", value: 828867 },
  { icon: "/Icon (6).png", label: "Payments", value: 1926436 },
];

const StatsSection = () => {
  return (
    <section className="bg-[#F5F7FA] py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 overflow-hidden">
        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#4D4D4D] lg:w-[400px]">
            Helping a local{" "}
            <span className="text-primary">business reinvent itself</span>
          </h2>
          <p className="text-gray-600">
            We reached here with our hard work and dedication
          </p>
        </motion.div>

        <motion.div
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-2 gap-x-8 gap-y-10"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image src={stat.icon} alt={stat.label} width={48} height={48} />
              <div>
                <h3 className="text-2xl font-bold text-[#4D4D4D]">
                  <CountUp end={stat.value} duration={2.5} separator="," />
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
