import { motion } from "framer-motion";

import ProductCard from "../ProductCard/ProductCard";
import LoadingGallery from "./ui/LoadingGallery";
import EmptyGallery from "./ui/EmptyGallery";

import { sampleProducts as products } from "../../../data/products";

const ProductGallery = ({ title = "Products", loading = false }) => {
  if (loading) return <LoadingGallery title={title} />;

  if (!products.length) return <EmptyGallery />;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      {/* Title */}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-foreground mb-8 text-center text-3xl font-bold"
        >
          {title}
        </motion.h2>
      )}

      {/* Products Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-6 flex items-center justify-between"
      >
        <p className="text-muted-foreground text-sm">
          Showing {products.length} product{products.length !== 1 ? "s" : ""}
        </p>

        {/* Optional: Sort/Filter controls could go here */}
        <div className="flex items-center gap-2">
          {/* Placeholder for future sort/filter buttons */}
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button (optional) */}
      {products.length > 0 && products.length % 12 === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground hover:bg-secondary rounded-lg px-8 py-3 font-medium shadow-sm transition-all duration-300 hover:shadow-md"
          >
            Load More Products
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default ProductGallery;
