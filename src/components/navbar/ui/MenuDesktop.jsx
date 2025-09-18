import { motion } from "framer-motion";
import { ChevronDown } from 'lucide-react'

const MenuDesktop = ({menuItems}) => {
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
          <a
            href={item.href}
            className="flex items-center space-x-1 py-2 font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
          >
            <span>{item.name}</span>
            {item.hasSubmenu && (
              <ChevronDown
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            )}
          </a>

          {/* Indicador hover */}
          <motion.div
            className="absolute right-0 bottom-0 left-0 h-0.5 origin-left bg-blue-600"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default MenuDesktop
