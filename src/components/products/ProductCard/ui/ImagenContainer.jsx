import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { motion } from "motion/react";

const ImagenContainer = ({ product}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-muted relative h-48 overflow-hidden">
      {/* Product Image */}
      <img
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Discount Badge */}
      {product.discount && (
        <motion.div
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: -12 }}
          className="bg-destructive text-destructive-foreground absolute top-3 left-3 rounded-lg px-2 py-1 text-xs font-bold shadow-lg"
        >
          -{product.discount}%
        </motion.div>
      )}
      {/* Like Button */}
      <motion.button
        onClick={handleLikeClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`absolute top-3 right-3 rounded-full p-2 backdrop-blur-sm transition-all duration-300 ${
          isLiked
            ? "bg-destructive text-destructive-foreground"
            : "bg-background/80 text-muted-foreground hover:bg-background hover:text-destructive"
        }`}
      >
        <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
      </motion.button>
    </div>
  );
};

export default ImagenContainer;
