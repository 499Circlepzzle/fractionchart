
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const Index = () => {
  // Calculate dimensions maintaining new proportions
  const baseWidth = "90vw"; // 90% of viewport width
  const baseHeight = "calc((90vw / 24) * 2.5)"; // Original height * 2.5 (150% increase)
  
  // State to track duplicated sections with position
  const [duplicatedHalves, setDuplicatedHalves] = useState<Array<{ id: number; position: { x: number; y: number } }>>([]);
  const [duplicatedThirds, setDuplicatedThirds] = useState<Array<{ id: number; position: { x: number; y: number } }>>([]);

  // Function to duplicate a half with offset
  const duplicateHalf = () => {
    console.log("Duplicating half"); // Debug log
    const offset = duplicatedHalves.length * 20; // Offset each new duplicate by 20px
    const newHalf = { 
      id: Date.now(), 
      position: { x: offset, y: offset }
    };
    setDuplicatedHalves(prevHalves => [...prevHalves, newHalf]);
  };

  // Function to duplicate a third with offset
  const duplicateThird = () => {
    console.log("Duplicating third"); // Debug log
    const offset = duplicatedThirds.length * 20; // Offset each new duplicate by 20px
    const newThird = { 
      id: Date.now(), 
      position: { x: offset, y: offset }
    };
    setDuplicatedThirds(prevThirds => [...prevThirds, newThird]);
  };

  // Function to remove a duplicated half
  const removeDuplicate = (id: number) => {
    setDuplicatedHalves(prev => prev.filter(half => half.id !== id));
  };

  // Function to remove a duplicated third
  const removeThird = (id: number) => {
    setDuplicatedThirds(prev => prev.filter(third => third.id !== id));
  };

  // Function to update position when dragging ends
  const updatePosition = (id: number, position: { x: number; y: number }, isHalf: boolean) => {
    if (isHalf) {
      setDuplicatedHalves(prev => 
        prev.map(half => 
          half.id === id ? { ...half, position } : half
        )
      );
    } else {
      setDuplicatedThirds(prev => 
        prev.map(third => 
          third.id === id ? { ...third, position } : third
        )
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 p-4">
      <div className="space-y-2 text-center mb-8">
        <span className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-800 rounded-full">
          24:1 Ratio
        </span>
        <h1 className="text-2xl font-light text-neutral-900">Rectangle Ratio Visualizer</h1>
      </div>
      
      <div className="space-y-0 relative">
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
            <button 
              type="button"
              onClick={duplicateHalf}
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#6c5b94] transition-colors"
            >
              <span className="text-4xl font-bold text-black">½</span>
            </button>
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
            <button 
              type="button"
              onClick={duplicateThird}
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#e6cf41] transition-colors"
            >
              <span className="text-4xl font-bold text-black">1/3</span>
            </button>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black"
            >
              <span className="text-4xl font-bold text-black">2/3</span>
            </motion.div>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black"
            >
              <span className="text-4xl font-bold text-black">3/3</span>
            </motion.div>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-2xl font-bold text-black">4/3</span>
              <span className="text-2xl font-bold text-black">1⅓</span>
            </motion.div>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-2xl font-bold text-black">5/3</span>
              <span className="text-2xl font-bold text-black">1⅔</span>
            </motion.div>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center flex-col"
            >
              <span className="text-2xl font-bold text-black">6/3</span>
              <span className="text-2xl font-bold text-black">2</span>
            </motion.div>
          </div>
        </motion.div>

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
                className={`w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black last:border-r-0 ${(index >= 8) ? 'flex-col' : ''}`}
              >
                {index >= 8 ? (
                  <>
                    <span className="text-2xl font-bold text-black">{index + 1}/8</span>
                    <span className="text-2xl font-bold text-black">
                      {Math.floor((index + 1) / 8)}
                      {((index + 1) % 8) === 0 ? '' : `${((index + 1) % 8)}/8`}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-black">{index + 1}/8</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 2.1 }}
          className="relative"
        >
          <div 
            style={{ 
              width: baseWidth,
              height: baseHeight,
            }}
            className="flex border-2 border-black rounded-sm shadow-md overflow-hidden"
          >
            {[...Array(20)].map((_, index) => (
              <motion.div 
                key={index}
                drag
                className={`w-[5%] bg-[#D3E4FD] flex items-center justify-center border-r border-black last:border-r-0 ${(index >= 10) ? 'flex-col' : ''}`}
              >
                {index >= 10 ? (
                  <>
                    <span className="text-base font-bold text-black">{index + 1}/10</span>
                    <span className="text-base font-bold text-black">
                      {Math.floor((index + 1) / 10)}
                      {((index + 1) % 10) === 0 ? '' : `${((index + 1) % 10)}/10`}
                    </span>
                  </>
                ) : (
                  <span className="text-xl font-bold text-black">{index + 1}/10</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {duplicatedHalves.map((half) => (
          <motion.div
            key={half.id}
            drag
            dragMomentum={false}
            initial={{ x: half.position.x, y: half.position.y }}
            animate={{ x: half.position.x, y: half.position.y }}
            onDragEnd={(e, info) => {
              updatePosition(half.id, { x: info.offset.x + half.position.x, y: info.offset.y + half.position.y }, true);
            }}
            whileDrag={{ zIndex: 50 }}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 4)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 40
            }}
            className="bg-[#7E69AB] flex items-center justify-center border-2 border-black group"
          >
            <span className="text-4xl font-bold text-black">½</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeDuplicate(half.id);
              }}
              className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}

        {duplicatedThirds.map((third) => (
          <motion.div
            key={third.id}
            drag
            dragMomentum={false}
            initial={{ x: third.position.x, y: third.position.y }}
            animate={{ x: third.position.x, y: third.position.y }}
            onDragEnd={(e, info) => {
              updatePosition(third.id, { x: info.offset.x + third.position.x, y: info.offset.y + third.position.y }, false);
            }}
            whileDrag={{ zIndex: 50 }}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 6)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 40
            }}
            className="bg-[#FFE649] flex items-center justify-center border-2 border-black group"
          >
            <span className="text-4xl font-bold text-black">1/3</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeThird(third.id);
              }}
              className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-sm text-neutral-600">
        A horizontal rectangle with a precise 24:1 ratio
      </p>
    </div>
  );
};

export default Index;
