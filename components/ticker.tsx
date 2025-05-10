"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {logos} from "../utility/logos"

const LogoTicker = () => {
 

  return (
    <div className="w-full container mx-auto flex justify-center items-center overflow-x-hidden py-6">
      <div className="container mx-auto">
        <div className="flex ">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 lg:gap-16 lg:pr-16"
          >
            {logos.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Logo ${index + 1}`}
                width={100}
                height={48}
                className="lg:w-auto w-30 h-12 px-8 "
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 lg:gap-16 lg:pr-16"
          >
            {logos.map((image, index) => (
              <Image
                key={index + logos.length}
                    src={image}
                alt={`Logo ${index + 1}`}
                width={100}
                height={48}
                className="lg:w-auto w-30 h-12 px-8 "
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;