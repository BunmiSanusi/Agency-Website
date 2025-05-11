import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type ResponsiveMenuProps = {
  open: boolean;
  onClose: () => void; 
};

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open, onClose }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}

          
          className="absolute top-20 left-0 w-[400px] h-auto z-50"
        >
          <div
            className="text-xl font-normal bg-primary
            text-white py-8 m-6 rounded-3xl"
          >
            <ul className="flex flex-col justify-center font-poppins text-[12px] items-center gap-6">
              <li onClick={onClose}>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li onClick={onClose}>
                <Link href="/service" className="">
                  Service
                </Link>
              </li>
              <li onClick={onClose}>
                <Link href="/feature" className="">
                  Feature
                </Link>
              </li>
              <li onClick={onClose}>
                <Link href="/product" className="">
                  Product
                </Link>
              </li>
              <li onClick={onClose}>
                <Link href="/testimonial" className="">
                  Testimonial
                </Link>
              </li>
              <li onClick={onClose}>
                <Link href="/faq" className="">
                  FAQ
                </Link>
              </li>
               <li onClick={onClose}>
                <Link href="/testimonial" className="">
                  Login
                </Link>
              </li>
               <li onClick={onClose}>
                <Link href="/testimonial" className="">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
