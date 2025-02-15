
import { motion } from "framer-motion";

const Index = () => {
  // Calculate dimensions maintaining 24:1 ratio
  // Base the width on viewport width while ensuring the height stays proportional
  const baseWidth = "90vw"; // 90% of viewport width
  const baseHeight = "calc(90vw / 24)"; // Height is width/24 to maintain ratio

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 p-4">
      <div className="space-y-2 text-center mb-8">
        <span className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-800 rounded-full">
          24:1 Ratio
        </span>
        <h1 className="text-2xl font-light text-neutral-900">Rectangle Ratio Visualizer</h1>
      </div>
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <div 
          style={{ 
            width: baseWidth,
            height: baseHeight,
          }}
          className="bg-gradient-to-r from-neutral-200 to-neutral-300 rounded-sm shadow-sm"
        />
      </motion.div>

      <p className="mt-6 text-sm text-neutral-600">
        A horizontal rectangle with a precise 24:1 ratio
      </p>
    </div>
  );
};

export default Index;
