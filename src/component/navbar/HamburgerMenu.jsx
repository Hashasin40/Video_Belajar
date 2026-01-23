import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Category", to: "/category" },
    { label: "Dashboard", to: "/dashboard" },
    { label: "Profile", to: "/profile" },
  ];

  return (
    <div className="md:hidden relative z-[70]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xl px-3 py-2 font-medium rounded-md focus:outline-none"
      >
        ☰
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute top-full right-0 w-64 bg-white shadow-xl z-[60]"
          >
            <div className="flex flex-col items-start p-1 space-y-2">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className="group px-3 py-2 cursor-pointer text-decoration-none text-sm font-medium relative overflow-hidden w-full border-b border-gray-200"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-md"></span>
                  <span className="relative text-green-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-green-600 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">{label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
