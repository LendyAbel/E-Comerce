import { motion } from "framer-motion";

import { User } from 'lucide-react'

const UserIcon = () => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600"
    >
      <User size={20} />
      <span className="mt-1 text-xs">Cuenta</span>
    </motion.button>
  );
}

export default UserIcon
