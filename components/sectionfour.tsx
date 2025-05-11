"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utility/animation";

const SectionFour = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 overflow-hidden">
        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex justify-center "
        >
          <Image
            src="/Frame 35.png"
            alt="About illustration"
            width={500}
            height={400}
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </motion.div>

        <motion.div
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#4D4D4D]">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Link href="/about">
            <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-md">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFour;
