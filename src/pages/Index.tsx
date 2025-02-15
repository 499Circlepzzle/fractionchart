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
      
      <div className="space-y-0">
        {/* First Rectangle */}
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
              <span className="text-4xl font-bold text-black">1</span>
            </div>
            <div className="w-1/2 bg-[#9b87f5] flex items-center justify-center">
              <span className="text-4xl font-bold text-black">2</span>
            </div>
          </div>
        </motion.div>

        {/* Second Rectangle */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          <div 
            style={{ 
              width: baseWidth,
              height: baseHeight,
            }}
            className="flex border-2 border-black rounded-sm shadow-md overflow-hidden"
          >
            <motion.div 
              drag
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center border-r border-black"
            >
              <span className="text-4xl font-bold text-black">½</span>
            </motion.div>
            <motion.div 
              drag
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center border-r border-black"
            >
              <span className="text-4xl font-bold text-black">2/2</span>
            </motion.div>
            <motion.div 
              drag
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-2xl font-bold text-black">3/2</span>
              <span className="text-2xl font-bold text-black">1½</span>
            </motion.div>
            <motion.div 
              drag
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center flex-col"
            >
              <span className="text-2xl font-bold text-black">4/2</span>
              <span className="text-2xl font-bold text-black">2</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Third Rectangle */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="relative"
        >
          <div 
            style={{ 
              width: baseWidth,
              height: baseHeight,
            }}
            className="flex border-2 border-black rounded-sm shadow-md overflow-hidden"
          >
            <motion.div 
              drag
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black"
            >
              <span className="text-4xl font-bold text-black">1/3</span>
            </motion.div>
            <motion.div 
              drag
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black"
            >
              <span className="text-4xl font-bold text-black">2/3</span>
            </motion.div>
            <motion.div 
              drag
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black"
            >
              <span className="text-4xl font-bold text-black">3/3</span>
            </motion.div>
            <motion.div 
              drag
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-2xl font-bold text-black">4/3</span>
              <span className="text-2xl font-bold text-black">1⅓</span>
            </motion.div>
            <motion.div 
              drag
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-2xl font-bold text-black">5/3</span>
              <span className="text-2xl font-bold text-black">1⅔</span>
            </motion.div>
            <motion.div 
              drag
              className="w-1/6 bg-[#FFE649] flex items-center justify-center flex-col"
            >
              <span className="text-2xl font-bold text-black">6/3</span>
              <span className="text-2xl font-bold text-black">2</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Fourth Rectangle */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          className="relative"
        >
          <div 
            style={{ 
              width: baseWidth,
              height: baseHeight,
            }}
            className="flex border-2 border-black rounded-sm shadow-md overflow-hidden"
          >
            <motion.div 
              drag
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black"
            >
              <span className="text-4xl font-bold text-black">1/4</span>
            </motion.div>
            <motion.div 
              drag
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black"
            >
              <span className="text-4xl font-bold text-black">2/4</span>
            </motion.div>
            <motion.div 
              drag
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black"
            >
              <span className="text-4xl font-bold text-black">3/4</span>
            </motion.div>
            <motion.div 
              drag
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black"
            >
              <span className="text-4xl font-bold text-black">4/4</span>
            </motion.div>
            <motion.div 
              drag
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-2xl font-bold text-black">5/4</span>
              <span className="text-2xl font-bold text-black">1¼</span>
            </motion.div>
            <motion.div 
              drag
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-2xl font-bold text-black">6/4</span>
              <span className="text-2xl font-bold text-black">1½</span>
            </motion.div>
            <motion.div 
              drag
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-2xl font-bold text-black">7/4</span>
              <span className="text-2xl font-bold text-black">1¾</span>
            </motion.div>
            <motion.div 
              drag
              className="w-[12.5%] bg-green-200 flex items-center justify-center flex-col"
            >
              <span className="text-2xl font-bold text-black">8/4</span>
              <span className="text-2xl font-bold text-black">2</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Fifth Rectangle */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="relative"
        >
          <div 
            style={{ 
              width: baseWidth,
              height: baseHeight,
            }}
            className="flex border-2 border-black rounded-sm shadow-md overflow-hidden"
          >
            {[...Array(10)].map((_, index) => (
              <motion.div 
                key={index}
                drag
                className={`w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black last:border-r-0 ${(index === 5 || index === 6 || index === 7 || index === 8 || index === 9) ? 'flex-col' : ''}`}
              >
                {index === 5 ? (
                  <>
                    <span className="text-2xl font-bold text-black">6/5</span>
                    <span className="text-2xl font-bold text-black">1⅕</span>
                  </>
                ) : index === 6 ? (
                  <>
                    <span className="text-2xl font-bold text-black">7/5</span>
                    <span className="text-2xl font-bold text-black">1⅖</span>
                  </>
                ) : index === 7 ? (
                  <>
                    <span className="text-2xl font-bold text-black">8/5</span>
                    <span className="text-2xl font-bold text-black">1⅗</span>
                  </>
                ) : index === 8 ? (
                  <>
                    <span className="text-2xl font-bold text-black">9/5</span>
                    <span className="text-2xl font-bold text-black">1⅘</span>
                  </>
                ) : index === 9 ? (
                  <>
                    <span className="text-2xl font-bold text-black">10/5</span>
                    <span className="text-2xl font-bold text-black">2</span>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-black">{index + 1}/5</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sixth Rectangle */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          className="relative"
        >
          <div 
            style={{ 
              width: baseWidth,
              height: baseHeight,
            }}
            className="flex border-2 border-black rounded-sm shadow-md overflow-hidden"
          >
            {[...Array(12)].map((_, index) => (
              <motion.div 
                key={index}
                drag
                className={`w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black last:border-r-0 ${(index >= 6 || index === 7 || index === 8 || index === 9 || index === 10) ? 'flex-col' : ''}`}
              >
                {index === 7 ? (
                  <>
                    <span className="text-2xl font-bold text-black">8/6</span>
                    <span className="text-2xl font-bold text-black">1⅓</span>
                  </>
                ) : index === 8 ? (
                  <>
                    <span className="text-2xl font-bold text-black">9/6</span>
                    <span className="text-2xl font-bold text-black">1½</span>
                  </>
                ) : index === 9 ? (
                  <>
                    <span className="text-2xl font-bold text-black">10/6</span>
                    <span className="text-2xl font-bold text-black">1⅔</span>
                  </>
                ) : index === 10 ? (
                  <>
                    <span className="text-2xl font-bold text-black">11/6</span>
                    <span className="text-2xl font-bold text-black">1⅚</span>
                  </>
                ) : index >= 6 ? (
                  <>
                    <span className="text-2xl font-bold text-black">{index + 1}/6</span>
                    <span className="text-2xl font-bold text-black">
                      {Math.floor((index + 1) / 6)}
                      {((index + 1) % 6) === 0 ? '' : '⅙'}
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-black">{index + 1}/6</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Seventh Rectangle */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
          className="relative"
        >
          <div 
            style={{ 
              width: baseWidth,
              height: baseHeight,
            }}
            className="flex border-2 border-black rounded-sm shadow-md overflow-hidden"
          >
            {[...Array(16)].map((_, index) => (
              <motion.div 
                key={index}
                drag
                className={`w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black last:border-r-0 ${(index >= 7) ? 'flex-col' : ''}`}
              >
                {index >= 7 ? (
                  <>
                    <span className="text-2xl font-bold text-black">{index + 1}/7</span>
                    <span className="text-2xl font-bold text-black">
                      {Math.floor((index + 1) / 7)}
                      {((index + 1) % 7) === 0 ? '' : `${((index + 1) % 7)}/7`}
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-black">{index + 1}/7</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <p className="mt-6 text-sm text-neutral-600">
        A horizontal rectangle with a precise 24:1 ratio
      </p>
    </div>
  );
};

export default Index;
