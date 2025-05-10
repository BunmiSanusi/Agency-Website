"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utility/animation";
import { ArrowRight } from "lucide-react";
import { logos } from "../utility/logos";

const SectionSeven = () => {
  return (
    <section className="bg-[#F5F7FA] py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="md:col-span-2 flex justify-center md:justify-start max-h-[280px] "
        >
          <Image
            src="/image.jpg"
            alt="Testimonial"
            width={400}
            height={100}
            className="rounded-xl shadow-md max-h-[280px] object-cover"
          />
        </motion.div>

        <motion.div
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="md:col-span-3 space-y-6 text-center md:text-left"
        >
          <p className="text-[16px] text-[#4D4D4D] leading-tight">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <div>
            <h4 className="text-primary font-semibold text-lg">Tim Smith</h4>
            <p className="text-gray-500 text-sm">
              British Dragon Boat Racing Association
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 mt-6">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                width={40}
                height={20}
                className="object-contain opacity-80"
              />
            ))}

            <div className="flex items-center gap-1 text-primary font-medium cursor-pointer ml-2 mt-2 text-sm">
              <span>Meet all customers</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionSeven;
