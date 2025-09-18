import { motion } from "framer-motion";

const EmptyGallery = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="bg-muted mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full">
          <svg
            className="text-muted-foreground h-12 w-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <h3 className="text-foreground mb-2 text-xl font-semibold">
          No products found
        </h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filters
        </p>
      </motion.div>
    </div>
  );
}

export default EmptyGallery
