"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const footerLinks1 = [
  "About Us",
  "Blog",
  "Contact Us",
  "Pricing",
  "Testimonials",
];
const footerLinks2 = [
  "Help Center",
  "Terms of Service",
  "Legal",
  "Privacy Policy",
  "Status",
];
const socialIcons = ["/IG.png", "/Web.png", "/Twitter.png", "/Youtube.png"];

const Footer = () => {
  return (
    <>
      <section className="bg-[#F5F7FA] py-16 px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-7xl max-w-[887px] mx-auto font-semibold text-[#4D4D4D] mb-6">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition duration-300">
          Get a demo <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      <footer className="bg-[#263238] text-white py-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="space-y-10">
            <Image src="/footer-logo.png" alt="Logo" width={120} height={40} />
            <div>
              <p className="text-sm text-gray-300">
                Copyright © 2020 Nexcent ltd.
              </p>
              <p className="text-sm text-gray-300">All rights reserved</p>
            </div>

            <div className="flex gap-4 mt-4">
              {socialIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  alt={`Social ${index + 1}`}
                  width={20}
                  height={20}
                  className="hover:scale-110 transition-transform duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {footerLinks1.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-white transition-colors duration-300"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {footerLinks2.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-white transition-colors duration-300"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay up to date</h4>
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-gray-50/15 text-[#D9DBE1] text-sm pr-12 focus:outline-none"
              />
              <Image
                src="/Telegram.png"
                alt="Send"
                width={20}
                height={20}
                className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
