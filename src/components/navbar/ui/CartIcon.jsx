import { motion } from "framer-motion";

import { ShoppingCart } from "lucide-react";
import { useContext } from 'react'
import { ShoppingCartContext } from '../../../context/context'

const CartIcon = () => {
  const {cartList }= useContext(ShoppingCartContext)
  const cartCount = cartList.length
  const handleClick = () => {
    console.log("Cart clicked");
  }
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="relative flex flex-col items-center p-2 text-gray-600 hover:text-blue-600"
      onClick={handleClick}
    >
      <ShoppingCart size={20} />
      <span className="mt-1 hidden text-xs md:block">Carrito</span>
      {cartCount > 0 && (
        <span className="absolute -top-0 -right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          {cartCount}
        </span>
      )}
    </motion.button>
  );
};

export default CartIcon;
