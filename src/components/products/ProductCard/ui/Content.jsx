import { motion } from "motion/react";
import { Heart, ShoppingCart, Star } from "lucide-react";

const Content = ({product}) => {
    const handleAddToCartClick = (e) => {
      e.stopPropagation();
      console.log(`Product ${product.name} added to cart`);
    };
  return (
    <div className="flex flex-1 flex-col p-4">
      {/* Product Name */}
      <h3 className="text-card-foreground mb-2 line-clamp-2 text-lg leading-tight font-bold">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-3 line-clamp-2 text-sm leading-relaxed">
        {product.description}
      </p>

      {/* Rating */}
      <div className="mb-3 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 ${
              i < (product.rating || 4)
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground"
            }`}
          />
        ))}
        <span className="text-muted-foreground ml-1 text-xs">
          ({product.reviews || "24"})
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Price Section */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          {product.originalPrice && (
            <span className="text-muted-foreground text-sm line-through">
              ${product.originalPrice}
            </span>
          )}
          <span className="text-card-foreground text-xl font-bold">
            ${product.price}
          </span>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCartClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-primary-foreground hover:bg-secondary rounded-lg p-2 shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <ShoppingCart className="h-5 w-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default Content;
