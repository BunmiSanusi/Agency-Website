"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const content = [
  {
    image: "/image1.jpg",
    text: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    image: "/image2.jpg",
    text: "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    image: "/image3.jpg",
    text: "Revamping the Membership Model with Triathlon Australia",
  },
];

const SectionEight = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#4D4D4D]">
          Caring is the new marketing
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read about
          how our community are increasing their membership income and lot&apos;s
          more.​
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative w-[368px] flex flex-col items-center"
          >
            <div className="w-[368px] h-[286px] relative rounded-[8px] overflow-hidden shadow transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <Image
                src={item.image}
                alt={`Post ${index + 1}`}
                fill
                className="object-cover"
                sizes="368px"
              />
            </div>

            <div className="w-[317px] h-[176px] text-center mt-[-88px] z-10 bg-[#F5F7FA] rounded-[8px] shadow-[0px_8px_16px_#ABBED166] p-4 flex flex-col gap-4">
              <p className="text-xl text-[#717171] leading-snug font-semibold">
                {item.text}
              </p>
              <div className="flex items-center justify-center gap-1 text-primary text-xl font-semibold cursor-pointer">
                <span>Read more</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionEight;
