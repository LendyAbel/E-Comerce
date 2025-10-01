import { useState } from "react";
import { motion } from "framer-motion";

import Filter from "../Filter";
import ProductCard from "../ProductCard/ProductCard";
import LoadingGallery from "./ui/LoadingGallery";
import EmptyGallery from "./ui/EmptyGallery";

const ProductGallery = ({
  title = "Products",
  loading = false,
  products = [],
  setCartList
}) => {
  if (loading) return <LoadingGallery title={title} />;

  if (!products.length) return <EmptyGallery />;

  const [productsToShow, setProductsToShow] = useState(5);
  const productsPerLoad = 5;

  const loadMoreProducts = () => {
    setProductsToShow((prev) => prev + productsPerLoad);
  };

  const hasMore = productsToShow < products.length;

  const productsSlice = () => {
    return products.slice(0, productsToShow);
  };

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
          Showing {productsSlice().length} product
          {productsSlice().length !== 1 ? "s" : ""}
        </p>

        {/* Optional: Sort/Filter controls could go here */}
        <div className="flex items-center gap-2">
          <Filter />
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {productsSlice().map((product, index) => (
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
            <ProductCard product={product} setCartList={setCartList} />
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button (optional) */}
      {hasMore && (
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
            onClick={loadMoreProducts}
          >
            Load More Products
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default ProductGallery;
