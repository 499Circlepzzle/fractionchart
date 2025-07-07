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
  const [duplicatedQuarters, setDuplicatedQuarters] = useState<Array<{ id: number; position: { x: number; y: number } }>>([]);
  const [duplicatedFifths, setDuplicatedFifths] = useState<Array<{ id: number; position: { x: number; y: number } }>>([]);
  const [duplicatedSixths, setDuplicatedSixths] = useState<Array<{ id: number; position: { x: number; y: number } }>>([]);
  const [duplicatedEighths, setDuplicatedEighths] = useState<Array<{ id: number; position: { x: number; y: number } }>>([]);
  const [duplicatedTenths, setDuplicatedTenths] = useState<Array<{ id: number; position: { x: number; y: number } }>>([]);
  
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

  // Function to duplicate a quarter with offset
  const duplicateQuarter = () => {
    console.log("Duplicating quarter"); // Debug log
    const offset = duplicatedQuarters.length * 20; // Offset each new duplicate by 20px
    const newQuarter = { 
      id: Date.now(), 
      position: { x: offset, y: offset }
    };
    setDuplicatedQuarters(prevQuarters => [...prevQuarters, newQuarter]);
  };

  // Function to duplicate a fifth with offset
  const duplicateFifth = () => {
    console.log("Duplicating fifth"); // Debug log
    const offset = duplicatedFifths.length * 20; // Offset each new duplicate by 20px
    const newFifth = { 
      id: Date.now(), 
      position: { x: offset, y: offset }
    };
    setDuplicatedFifths(prevFifths => [...prevFifths, newFifth]);
  };

  // Function to duplicate a sixth with offset
  const duplicateSixth = () => {
    console.log("Duplicating sixth"); // Debug log
    const offset = duplicatedSixths.length * 20; // Offset each new duplicate by 20px
    const newSixth = { 
      id: Date.now(), 
      position: { x: offset, y: offset }
    };
    setDuplicatedSixths(prevSixths => [...prevSixths, newSixth]);
  };

  // Function to duplicate an eighth with offset
  const duplicateEighth = () => {
    console.log("Duplicating eighth"); // Debug log
    const offset = duplicatedEighths.length * 20; // Offset each new duplicate by 20px
    const newEighth = { 
      id: Date.now(), 
      position: { x: offset, y: offset }
    };
    setDuplicatedEighths(prevEighths => [...prevEighths, newEighth]);
  };

  // Function to duplicate a tenth with offset
  const duplicateTenth = () => {
    console.log("Duplicating tenth"); // Debug log
    const offset = duplicatedTenths.length * 20; // Offset each new duplicate by 20px
    const newTenth = { 
      id: Date.now(), 
      position: { x: offset, y: offset }
    };
    setDuplicatedTenths(prevTenths => [...prevTenths, newTenth]);
  };

  const removeDuplicate = (id: number) => {
    setDuplicatedHalves(prev => prev.filter(half => half.id !== id));
  };

  const removeThird = (id: number) => {
    setDuplicatedThirds(prev => prev.filter(third => third.id !== id));
  };

  const removeQuarter = (id: number) => {
    setDuplicatedQuarters(prev => prev.filter(quarter => quarter.id !== id));
  };

  const removeFifth = (id: number) => {
    setDuplicatedFifths(prev => prev.filter(fifth => fifth.id !== id));
  };

  const removeSixth = (id: number) => {
    setDuplicatedSixths(prev => prev.filter(sixth => sixth.id !== id));
  };

  const removeEighth = (id: number) => {
    setDuplicatedEighths(prev => prev.filter(eighth => eighth.id !== id));
  };

  const removeTenth = (id: number) => {
    setDuplicatedTenths(prev => prev.filter(tenth => tenth.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 p-4">
      <div className="space-y-2 text-center mb-8">
        <h1 className="text-2xl font-bold text-neutral-900">Fraction Chart</h1>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-black max-w-md">
          <p className="text-sm text-black">
            <strong>Tip:</strong> Click on the first fraction in each rectangle (½, ⅓, ¼, etc.) to create duplicates you can drag around. Hover over duplicates to reveal a delete button.
          </p>
        </div>
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
              <span className="text-lg md:text-4xl font-semibold text-black">1</span>
            </div>
            <div className="w-1/2 bg-[#9b87f5] flex items-center justify-center">
              <span className="text-lg md:text-4xl font-semibold text-black">2</span>
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
              <span className="text-sm md:text-4xl font-semibold text-black">½</span>
            </button>
            <motion.div 
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center border-r border-black"
            >
              <span className="text-sm md:text-4xl font-semibold text-black">2/2</span>
            </motion.div>
            <motion.div 
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-xs md:text-xl font-semibold text-black">3/2</span>
              <span className="text-xs md:text-xl font-semibold text-black">1½</span>
            </motion.div>
            <motion.div 
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center flex-col"
            >
              <span className="text-xs md:text-xl font-semibold text-black">4/2</span>
              <span className="text-xs md:text-xl font-semibold text-black">2</span>
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
              <span className="text-xs md:text-4xl font-semibold text-black">⅓</span>
            </button>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black"
            >
              <span className="text-xs md:text-4xl font-semibold text-black">2/3</span>
            </motion.div>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black"
            >
              <span className="text-xs md:text-4xl font-semibold text-black">3/3</span>
            </motion.div>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[8px] md:text-xl font-semibold text-black">4/3</span>
              <span className="text-[8px] md:text-xl font-semibold text-black">1⅓</span>
            </motion.div>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[8px] md:text-xl font-semibold text-black">5/3</span>
              <span className="text-[8px] md:text-xl font-semibold text-black">1⅔</span>
            </motion.div>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center flex-col"
            >
              <span className="text-[8px] md:text-xl font-semibold text-black">6/3</span>
              <span className="text-[8px] md:text-xl font-semibold text-black">2</span>
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
            <button 
              type="button"
              onClick={duplicateQuarter}
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black cursor-pointer hover:bg-green-300 transition-colors"
            >
              <span className="text-[8px] md:text-4xl font-semibold text-black">¼</span>
            </button>
            <motion.div 
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black"
            >
              <span className="text-[8px] md:text-4xl font-semibold text-black">2/4</span>
            </motion.div>
            <motion.div 
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black"
            >
              <span className="text-[8px] md:text-4xl font-semibold text-black">3/4</span>
            </motion.div>
            <motion.div 
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black"
            >
              <span className="text-[8px] md:text-4xl font-semibold text-black">4/4</span>
            </motion.div>
            <motion.div 
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[7px] md:text-xl font-semibold text-black">5/4</span>
              <span className="text-[7px] md:text-xl font-semibold text-black">1¼</span>
            </motion.div>
            <motion.div 
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[7px] md:text-xl font-semibold text-black">6/4</span>
              <span className="text-[7px] md:text-xl font-semibold text-black">1½</span>
            </motion.div>
            <motion.div 
              className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[7px] md:text-xl font-semibold text-black">7/4</span>
              <span className="text-[7px] md:text-xl font-semibold text-black">1¾</span>
            </motion.div>
            <motion.div 
              className="w-[12.5%] bg-green-200 flex items-center justify-center flex-col"
            >
              <span className="text-[7px] md:text-xl font-semibold text-black">8/4</span>
              <span className="text-[7px] md:text-xl font-semibold text-black">2</span>
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
            <button 
              type="button"
              onClick={duplicateFifth}
              className="w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#e5b291] transition-colors"
            >
              <span className="text-[9px] md:text-3xl font-semibold text-black">⅕</span>
            </button>
            <motion.div 
              className="w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black"
            >
              <span className="text-[9px] md:text-3xl font-semibold text-black">2/5</span>
            </motion.div>
            <motion.div 
              className="w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black"
            >
              <span className="text-[9px] md:text-3xl font-semibold text-black">3/5</span>
            </motion.div>
            <motion.div 
              className="w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black"
            >
              <span className="text-[9px] md:text-3xl font-semibold text-black">4/5</span>
            </motion.div>
            <motion.div 
              className="w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black"
            >
              <span className="text-[9px] md:text-3xl font-semibold text-black">5/5</span>
            </motion.div>
            <motion.div 
              className="w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[9px] md:text-xl font-semibold text-black">6/5</span>
              <span className="text-[9px] md:text-xl font-semibold text-black">1⅕</span>
            </motion.div>
            <motion.div 
              className="w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[9px] md:text-xl font-semibold text-black">7/5</span>
              <span className="text-[9px] md:text-xl font-semibold text-black">1⅖</span>
            </motion.div>
            <motion.div 
              className="w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[9px] md:text-xl font-semibold text-black">8/5</span>
              <span className="text-[9px] md:text-xl font-semibold text-black">1⅗</span>
            </motion.div>
            <motion.div 
              className="w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[9px] md:text-xl font-semibold text-black">9/5</span>
              <span className="text-[9px] md:text-xl font-semibold text-black">1⅘</span>
            </motion.div>
            <motion.div 
              className="w-[10%] bg-[#FEC6A1] flex items-center justify-center flex-col"
            >
              <span className="text-[9px] md:text-xl font-semibold text-black">10/5</span>
              <span className="text-[9px] md:text-xl font-semibold text-black">2</span>
            </motion.div>
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
            <button 
              type="button"
              onClick={duplicateSixth}
              className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#ffd0d5] transition-colors"
            >
              <span className="text-[8px] md:text-3xl font-semibold text-black">⅙</span>
            </button>
            <motion.div 
              className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black"
            >
              <span className="text-[8px] md:text-3xl font-semibold text-black">2/6</span>
            </motion.div>
            <motion.div 
              className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black"
            >
              <span className="text-[8px] md:text-3xl font-semibold text-black">3/6</span>
            </motion.div>
            <motion.div 
              className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black"
            >
              <span className="text-[8px] md:text-3xl font-semibold text-black">4/6</span>
            </motion.div>
            <motion.div 
              className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black"
            >
              <span className="text-[8px] md:text-3xl font-semibold text-black">5/6</span>
            </motion.div>
            <motion.div 
              className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black"
            >
              <span className="text-[8px] md:text-3xl font-semibold text-black">6/6</span>
            </motion.div>
            <motion.div 
              className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[8px] md:text-xl font-semibold text-black">7/6</span>
              <span className="text-[8px] md:text-xl font-semibold text-black">1⅙</span>
            </motion.div>
            <motion.div 
              className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[8px] md:text-xl font-semibold text-black">8/6</span>
              <span className="text-[8px] md:text-xl font-semibold text-black">1⅓</span>
            </motion.div>
            <motion.div 
              className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[8px] md:text-xl font-semibold text-black">9/6</span>
              <span className="text-[8px] md:text-xl font-semibold text-black">1½</span>
            </motion.div>
            <motion.div 
              className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[8px] md:text-xl font-semibold text-black">10/6</span>
              <span className="text-[8px] md:text-xl font-semibold text-black">1⅔</span>
            </motion.div>
            <motion.div 
              className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center flex-col"
            >
              <span className="text-[8px] md:text-xl font-semibold text-black">11/6</span>
              <span className="text-[8px] md:text-xl font-semibold text-black">1⅚</span>
            </motion.div>
          </motion.div>
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
            <button 
              type="button"
              onClick={duplicateEighth}
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#d3324d] transition-colors"
            >
              <span className="text-[7px] md:text-2xl font-semibold text-black">⅛</span>
            </button>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black"
            >
              <span className="text-[7px] md:text-2xl font-semibold text-black">2/8</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black"
            >
              <span className="text-[7px] md:text-2xl font-semibold text-black">3/8</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black"
            >
              <span className="text-[7px] md:text-2xl font-semibold text-black">4/8</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black"
            >
              <span className="text-[7px] md:text-2xl font-semibold text-black">5/8</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black"
            >
              <span className="text-[7px] md:text-2xl font-semibold text-black">6/8</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black"
            >
              <span className="text-[7px] md:text-2xl font-semibold text-black">7/8</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black"
            >
              <span className="text-[7px] md:text-2xl font-semibold text-black">8/8</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[7px] md:text-base font-semibold text-black">9/8</span>
              <span className="text-[7px] md:text-base font-semibold text-black">1⅛</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[7px] md:text-base font-semibold text-black">10/8</span>
              <span className="text-[7px] md:text-base font-semibold text-black">1¼</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[7px] md:text-base font-semibold text-black">11/8</span>
              <span className="text-[7px] md:text-base font-semibold text-black">1⅜</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[7px] md:text-base font-semibold text-black">12/8</span>
              <span className="text-[7px] md:text-base font-semibold text-black">1½</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[7px] md:text-base font-semibold text-black">13/8</span>
              <span className="text-[7px] md:text-base font-semibold text-black">1⅝</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[7px] md:text-base font-semibold text-black">14/8</span>
              <span className="text-[7px] md:text-base font-semibold text-black">1¾</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-[7px] md:text-base font-semibold text-black">15/8</span>
              <span className="text-[7px] md:text-base font-semibold text-black">1⅞</span>
            </motion.div>
            <motion.div 
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center flex-col"
            >
              <span className="text-[7px] md:text-base font-semibold text-black">16/8</span>
              <span className="text-[7px] md:text-base font-semibold text-black">2</span>
            </motion.div>
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
            <button 
              type="button"
              onClick={duplicateTenth}
              className="w-[5%] bg-[#D3E4FD] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#bfcee6] transition-colors"
            >
              <span className="text-[6px] md:text-lg font-semibold text-black">⅒</span>
            </button>
            {[...Array(19)].map((_, index) => {
              const fraction = index + 2;
              let displayText = `${fraction}/10`;
              let mixedText = "";
              
              if (fraction >= 11) {
                const wholeNumber = Math.floor(fraction / 10);
                const remainder = fraction % 10;
                
                if (remainder === 0) {
                  mixedText = wholeNumber.toString();
                } else if (remainder === 1) {
                  mixedText = `${wholeNumber}⅒`;
                } else if (remainder === 2) {
                  mixedText = `${wholeNumber}⅕`;
                } else if (remainder === 3) {
                  mixedText = `${wholeNumber}³⁄₁₀`;
                } else if (remainder === 4) {
                  mixedText = `${wholeNumber}⅖`;
                } else if (remainder === 5) {
                  mixedText = `${wholeNumber}½`;
                } else if (remainder === 6) {
                  mixedText = `${wholeNumber}⅗`;
                } else if (remainder === 7) {
                  mixedText = `${wholeNumber}⁷⁄₁₀`;
                } else if (remainder === 8) {
                  mixedText = `${wholeNumber}⅘`;
                } else if (remainder === 9) {
                  mixedText = `${wholeNumber}⁹⁄₁₀`;
                }
              }
              
              return (
                <motion.div 
                  key={index}
                  className={`w-[5%] bg-[#D3E4FD] flex items-center justify-center border-r border-black ${mixedText ? 'flex-col' : ''} last:border-r-0`}
                >
                  {mixedText ? (
                    <>
                      <span className="text-[6px] md:text-sm font-semibold text-black">{displayText}</span>
                      <span className="text-[6px] md:text-sm font-semibold text-black">{mixedText}</span>
                    </>
                  ) : (
                    <span className="text-[6px] md:text-lg font-semibold text-black">{displayText}</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {duplicatedHalves.map((half) => (
          <motion.div
            key={half.id}
            drag
            dragMomentum={false}
            dragElastic={0}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            initial={{ x: half.position.x, y: half.position.y }}
            animate={{ x: half.position.x, y: half.position.y }}
            onDragEnd={(e, info) => {
              const newPosition = {
                x: half.position.x + info.offset.x,
                y: half.position.y + info.offset.y
              };
              setDuplicatedHalves(prev => 
                prev.map(item => item.id === half.id 
                  ? { ...item, position: newPosition } 
                  : item
                )
              );
            }}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 4)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
              touchAction: 'none',
              zIndex: 40,
            }}
            className="bg-[#7E69AB] flex items-center justify-center border-2 border-black group"
          >
            <span className="text-sm md:text-4xl font-semibold text-black">½</span>
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
            dragElastic={0}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            initial={{ x: third.position.x, y: third.position.y }}
            animate={{ x: third.position.x, y: third.position.y }}
            onDragEnd={(e, info) => {
              const newPosition = {
                x: third.position.x + info.offset.x,
                y: third.position.y + info.offset.y
              };
              setDuplicatedThirds(prev => 
                prev.map(item => item.id === third.id 
                  ? { ...item, position: newPosition } 
                  : item
                )
              );
            }}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 6)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
              touchAction: 'none',
              zIndex: 40,
            }}
            className="bg-[#FFE649] flex items-center justify-center border-2 border-black group"
          >
            <span className="text-xs md:text-4xl font-semibold text-black">⅓</span>
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

        {duplicatedQuarters.map((quarter) => (
          <motion.div
            key={quarter.id}
            drag
            dragMomentum={false}
            dragElastic={0}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            initial={{ x: quarter.position.x, y: quarter.position.y }}
            animate={{ x: quarter.position.x, y: quarter.position.y }}
            onDragEnd={(e, info) => {
              const newPosition = {
                x: quarter.position.x + info.offset.x,
                y: quarter.position.y + info.offset.y
              };
              setDuplicatedQuarters(prev => 
                prev.map(item => item.id === quarter.id 
                  ? { ...item, position: newPosition } 
                  : item
                )
              );
            }}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 8)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
              touchAction: 'none',
              zIndex: 40,
            }}
            className="bg-green-200 flex items-center justify-center border-2 border-black group"
          >
            <span className="text-[8px] md:text-3xl font-normal text-black">¼</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeQuarter(quarter.id);
              }}
              className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}

        {duplicatedFifths.map((fifth) => (
          <motion.div
            key={fifth.id}
            drag
            dragMomentum={false}
            dragElastic={0}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            initial={{ x: fifth.position.x, y: fifth.position.y }}
            animate={{ x: fifth.position.x, y: fifth.position.y }}
            onDragEnd={(e, info) => {
              const newPosition = {
                x: fifth.position.x + info.offset.x,
                y: fifth.position.y + info.offset.y
              };
              setDuplicatedFifths(prev => 
                prev.map(item => item.id === fifth.id 
                  ? { ...item, position: newPosition } 
                  : item
                )
              );
            }}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 10)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
              touchAction: 'none',
              zIndex: 40,
            }}
            className="bg-[#FEC6A1] flex items-center justify-center border-2 border-black group"
          >
            <span className="text-[9px] md:text-2xl font-normal text-black">⅕</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeFifth(fifth.id);
              }}
              className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}

        {duplicatedSixths.map((sixth) => (
          <motion.div
            key={sixth.id}
            drag
            dragMomentum={false}
            dragElastic={0}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            initial={{ x: sixth.position.x, y: sixth.position.y }}
            animate={{ x: sixth.position.x, y: sixth.position.y }}
            onDragEnd={(e, info) => {
              const newPosition = {
                x: sixth.position.x + info.offset.x,
                y: sixth.position.y + info.offset.y
              };
              setDuplicatedSixths(prev => 
                prev.map(item => item.id === sixth.id 
                  ? { ...item, position: newPosition } 
                  : item
                )
              );
            }}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 12)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
              touchAction: 'none',
              zIndex: 40,
            }}
            className="bg-[#FFDEE2] flex items-center justify-center border-2 border-black group"
          >
            <span className="text-[8px] md:text-2xl font-normal text-black">⅙</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeSixth(sixth.id);
              }}
              className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}

        {duplicatedEighths.map((eighth) => (
          <motion.div
            key={eighth.id}
            drag
            dragMomentum={false}
            dragElastic={0}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            initial={{ x: eighth.position.x, y: eighth.position.y }}
            animate={{ x: eighth.position.x, y: eighth.position.y }}
            onDragEnd={(e, info) => {
              const newPosition = {
                x: eighth.position.x + info.offset.x,
                y: eighth.position.y + info.offset.y
              };
              setDuplicatedEighths(prev => 
                prev.map(item => item.id === eighth.id 
                  ? { ...item, position: newPosition } 
                  : item
                )
              );
            }}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 16)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
              touchAction: 'none',
              zIndex: 40,
            }}
            className="bg-[#ea384c] flex items-center justify-center border-2 border-black group"
          >
            <span className="text-[7px] md:text-xl font-normal text-black">⅛</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeEighth(eighth.id);
              }}
              className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}

        {duplicatedTenths.map((tenth) => (
          <motion.div
            key={tenth.id}
            drag
            dragMomentum={false}
            dragElastic={0}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            initial={{ x: tenth.position.x, y: tenth.position.y }}
            animate={{ x: tenth.position.x, y: tenth.position.y }}
            onDragEnd={(e, info) => {
              const newPosition = {
                x: tenth.position.x + info.offset.x,
                y: tenth.position.y + info.offset.y
              };
              setDuplicatedTenths(prev => 
                prev.map(item => item.id === tenth.id 
                  ? { ...item, position: newPosition } 
                  : item
                )
              );
            }}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 20)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
              touchAction: 'none',
              zIndex: 40,
            }}
            className="bg-[#D3E4FD] flex items-center justify-center border-2 border-black group"
          >
            <span className="text-[6px] md:text-lg font-normal text-black">⅒</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeTenth(tenth.id);
              }}
              className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Index;
