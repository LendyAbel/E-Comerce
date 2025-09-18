import { motion, AnimatePresence } from "framer-motion";

import { Menu, X } from "lucide-react";

const closeOpenAnimation = {
  initial: { rotate: -90, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  exit: { rotate: 90, opacity: 0 },
  transition: { duration: 0.2 },
};

const MenuBUtton = ({ isOpen, setIsOpen }) => {
  return (
    <motion.button
      className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div key="close" {...closeOpenAnimation}>
            <X size={24} />
          </motion.div>
        ) : (
          <motion.div key="menu" {...closeOpenAnimation}>
            <Menu size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default MenuBUtton;
