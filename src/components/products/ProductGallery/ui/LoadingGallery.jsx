import { motion } from "framer-motion";

const LoadingGallery = ({title}) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-foreground mb-8 text-center text-3xl font-bold"
        >
          {title}
        </motion.h2>
      )}

      {/* Loading Skeleton */}
      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-muted h-96 w-72 animate-pulse rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingGallery;
