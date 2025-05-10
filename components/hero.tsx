"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utility/animation";

const Hero = () => {
  return (
    <section className="bg-[#F5F7FA] ">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-6 lg:px-10 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[600px] gap-4 md:gap-8">
          <div className="flex flex-col font-poppins gap-8 w-full">
            <div className="text-center md:text-left space-y-6">
              <motion.h1
                variants={SlideRight(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug"
              >
                Lessons and insights
                <span className="text-primary"> from 8 years</span>
              </motion.h1>

              <motion.p
                variants={SlideRight(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="text-gray-700 font-medium"
              >
                Where to grow your business as a photographer: site or social
                media?
              </motion.p>

              <motion.div
                variants={SlideRight(1.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="flex justify-center md:justify-start items-center gap-6"
              >
                <Link href="/product">
                  <button className="flex justify-center items-center gap-2 bg-primary hover:bg-secondary text-white text-sm font-semibold py-4 px-6 rounded-md">
                    Register
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={SlideLeft(1.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex justify-center items-center "
          >
            <Image
              src="/illustration.svg"
              alt="Hero Image"
              width={391}
              height={407}
              className="w-[280px] sm:w-[320px] md:w-[391px] h-auto object-contain drop-shadow"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
