import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
        <span className="text-sm font-bold text-white">T</span>
      </div>
      <span className="hidden text-xl font-bold text-gray-900 sm:block">
        TechStore
      </span>
    </motion.div>
  );
};

export default Logo;
