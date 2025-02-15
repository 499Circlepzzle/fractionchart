
import { motion } from "framer-motion";

const Index = () => {
  // Calculate dimensions maintaining new proportions
  const baseWidth = "90vw"; // 90% of viewport width
  const baseHeight = "calc((90vw / 24) * 2.5)"; // Original height * 2.5 (150% increase)

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
          className="flex border-2 border-black rounded-sm shadow-md overflow-hidden"
        >
          <div className="w-1/2 bg-[#9b87f5] flex items-center justify-center border-r border-black">
            <span className="text-4xl font-bold text-white">1</span>
          </div>
          <div className="w-1/2 bg-[#9b87f5] flex items-center justify-center">
            <span className="text-4xl font-bold text-white">2</span>
          </div>
        </div>
      </motion.div>

      <p className="mt-6 text-sm text-neutral-600">
        A horizontal rectangle with a precise 24:1 ratio
      </p>
    </div>
  );
};

export default Index;
