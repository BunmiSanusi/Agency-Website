"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { features } from "../utility/features";

const Features = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto text-center space-y-6 overflow-hidden">
        <motion.h2
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-semibold text-center lg:w-[522px] mx-auto"
        >
          Manage your entire community in a single system
        </motion.h2>
        <motion.p
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-600 max-w-xl mx-auto"
        >
          Who is Nextcent suitable for?
        </motion.p>

        <div className="grid gap-12 md:grid-cols-3 mt-12 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 px-4 lg:w-[299px] mx-auto"
            >
              <div className="flex justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#4D4D4D] lg:w-[231px] mx-auto">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
