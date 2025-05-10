"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utility/animation";

const SectionSix = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex justify-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
        >
          <Image
            src="/pana.png"
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
            How to design your site footer like we did
          </h2>
          <p className="text-gray-600 text-sm">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <Link href="/product">
            <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-md">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionSix;
