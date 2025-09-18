import { useState } from "react";
import { motion } from "framer-motion";

import { Search } from "lucide-react";

const SearchBar = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  return (
    <motion.div
      className={`flex items-center rounded-full bg-gray-50 px-4 py-2 transition-all duration-300 ${
        searchFocused
          ? "bg-white shadow-md ring-2 ring-blue-500"
          : "hover:bg-gray-100"
      }`}
      whileHover={{ scale: 1.02 }}
    >
      <input
        type="text"
        placeholder="Buscar productos..."
        className="w-45 md:w-80 bg-transparent text-sm text-gray-700 placeholder-gray-500 outline-none"
        onFocus={() => setSearchFocused(true)}
        onBlur={() => setSearchFocused(false)}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="ml-2 p-1 text-gray-500 transition-colors hover:text-blue-600"
      >
        <Search size={18} />
      </motion.button>
    </motion.div>
  );
};

export default SearchBar;
