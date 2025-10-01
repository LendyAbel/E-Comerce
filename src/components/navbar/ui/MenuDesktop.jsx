import { NavLink, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

import { ChevronDown } from "lucide-react";

const ActiveIndicator = ({href}) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      {location.pathname === href && (
        <motion.div
          className="absolute right-0 bottom-0 left-0 h-0.5 origin-left bg-gray-700 "
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </AnimatePresence>
  );
};

const MenuDesktop = ({ menuItems }) => {
  
  return (
    <div className="items-center space-x-8 lg:flex">
      {menuItems.map((item, index) => (
        <motion.div
          key={item.name}
          className="group relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <NavLink
            to={item.href}
            className="flex items-center space-x-1 py-2 font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
          >
            <span>{item.name}</span>
          </NavLink>
          <ActiveIndicator href={item.href} />
        </motion.div>
      ))}
    </div>
  );
};

export default MenuDesktop;
