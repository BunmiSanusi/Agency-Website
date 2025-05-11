"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "../components/responsivemenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenuToggle = () => setOpen(!open);

  return (
    <>
      <nav className="bg-[#F5F7FA] ">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4 font-poppins">
         
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logooo.svg"
                alt="Nexcent Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-[#18191F]">
              <li className="inline-block py-1 px-3 hover:text-primary font-normal text-sm">
                <Link href="/">Home</Link>
              </li>
              <li className="inline-block py-1 px-3 hover:text-primary font-medium text-sm ">
                <Link href="/service">Service</Link>
              </li>
              <li className="inline-block py-1 px-3 hover:text-primary font-medium text-sm">
                <Link href="/feature">Feature</Link>
              </li>
              <li className="inline-block py-1 px-3 hover:text-primary font-medium text-sm">
                <Link href="/product">Product</Link>
              </li>
              <li className="inline-block py-1 px-3 hover:text-primary font-medium text-sm">
                <Link href="/testimonial">Testimonial</Link>
              </li>
              <li className="inline-block py-1 px-3 hover:text-primary font-medium text-sm">
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className=" py-1 px-3 text-primary hover:text-secondary font-medium text-xs ">
              <Link href="/product">Login</Link>
            </div>
            <Link href="/product">
              <button
                className="hover:bg-primary text-white text-xs
                  font-medium hover:text-white rounded-md border-2 bg-primary 
                  px-6 py-2 duration-200 "
              >
                Signup
              </button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div
            className="md:hidden flex items-center justify-center"
            onClick={handleMenuToggle}
          >
            <MdMenu className="text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <ResponsiveMenu open={open} onClose={handleMenuToggle} />
      </nav>
    </>
  );
};

export default Navbar;
