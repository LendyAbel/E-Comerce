import { useState } from "react";
import { motion } from "motion/react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import ImagenContainer from "./ui/ImagenContainer";
import Content from "./ui/Content";

const ProductCard = ({ product }) => {
  const handleClick = (e) => {
    console.log(`Product ${product.name} clicked for details`);
  };

  return (
    <motion.div
      onClick={handleClick}
      className="bg-card border-border relative flex h-96 w-72 cursor-pointer flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <ImagenContainer product={product} />
      <Content product={product} />
    </motion.div>
  );
};

export default ProductCard;
