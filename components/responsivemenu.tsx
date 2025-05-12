import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type ResponsiveMenuProps = {
  open: boolean;
  onClose: () => void;
};

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-transparent bg-opacity-40 flex justify-center items-start"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-primary text-white w-11/12 max-w-sm mt-24 rounded-2xl p-6 mx-auto"
          >
            <ul className="flex flex-col items-center gap-5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Service", href: "/service" },
                { label: "Feature", href: "/feature" },
                { label: "Product", href: "/product" },
                { label: "Testimonial", href: "/testimonial" },
                { label: "FAQ", href: "/faq" },
                { label: "Login", href: "/login" },
                { label: "Sign Up", href: "/signup" },
              ].map((item, idx) => (
                <li key={idx} onClick={onClose}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
