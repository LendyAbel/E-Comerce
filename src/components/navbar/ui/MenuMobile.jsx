import { motion } from "framer-motion";

import { User } from "lucide-react";
import { NavLink } from "react-router";

const MenuMobile = ({ menuItems, setIsMenuOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute top-16 left-0 z-40 w-full border-t border-gray-200 bg-white shadow-md md:hidden"
    >
      <div className="space-y-1 px-2 pt-2 pb-3">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.name}
            href={item.haref}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="block rounded-md px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <NavLink to={item.href}>
              <span>{item.name}</span>
            </NavLink>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-around border-t border-gray-200 pt-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600"
        >
          <User size={20} />
          <span className="mt-1 text-xs">Cuenta</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MenuMobile;
