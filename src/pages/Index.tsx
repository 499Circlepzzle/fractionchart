
import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
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
  
  // Create refs for tracking touchstart/touchend coordinates
  const touchStartRef = useRef({ x: 0, y: 0 });
  const currentElementRef = useRef<{ 
    id: number | null; 
    type: 'half' | 'third' | 'quarter' | 'fifth' | 'sixth' | 'eighth' | 'tenth' | null;
    initialPosition: { x: number, y: number } | null;
  }>({ 
    id: null, 
    type: null,
    initialPosition: null 
  });

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

  // Universal handler for touch start
  const handleTouchStart = useCallback((
    id: number, 
    type: 'half' | 'third' | 'quarter' | 'fifth' | 'sixth' | 'eighth' | 'tenth',
    position: { x: number, y: number },
    e: React.TouchEvent
  ) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    currentElementRef.current = { 
      id, 
      type,
      initialPosition: { ...position }
    };
    e.stopPropagation();
  }, []);

  // Universal handler for touch move
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!currentElementRef.current.id || !currentElementRef.current.initialPosition) return;
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    
    const newX = currentElementRef.current.initialPosition.x + deltaX;
    const newY = currentElementRef.current.initialPosition.y + deltaY;
    
    // Update the position in state based on type
    switch (currentElementRef.current.type) {
      case 'half':
        setDuplicatedHalves(prev => prev.map(half => 
          half.id === currentElementRef.current.id 
            ? { ...half, position: { x: newX, y: newY } } 
            : half
        ));
        break;
      case 'third':
        setDuplicatedThirds(prev => prev.map(third => 
          third.id === currentElementRef.current.id 
            ? { ...third, position: { x: newX, y: newY } } 
            : third
        ));
        break;
      case 'quarter':
        setDuplicatedQuarters(prev => prev.map(quarter => 
          quarter.id === currentElementRef.current.id 
            ? { ...quarter, position: { x: newX, y: newY } } 
            : quarter
        ));
        break;
      case 'fifth':
        setDuplicatedFifths(prev => prev.map(fifth => 
          fifth.id === currentElementRef.current.id 
            ? { ...fifth, position: { x: newX, y: newY } } 
            : fifth
        ));
        break;
      case 'sixth':
        setDuplicatedSixths(prev => prev.map(sixth => 
          sixth.id === currentElementRef.current.id 
            ? { ...sixth, position: { x: newX, y: newY } } 
            : sixth
        ));
        break;
      case 'eighth':
        setDuplicatedEighths(prev => prev.map(eighth => 
          eighth.id === currentElementRef.current.id 
            ? { ...eighth, position: { x: newX, y: newY } } 
            : eighth
        ));
        break;
      case 'tenth':
        setDuplicatedTenths(prev => prev.map(tenth => 
          tenth.id === currentElementRef.current.id 
            ? { ...tenth, position: { x: newX, y: newY } } 
            : tenth
        ));
        break;
    }
    
    e.preventDefault();
    e.stopPropagation();
  }, []);

  // Universal handler for touch end
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    // Position is already updated in state during touch move
    currentElementRef.current = { id: null, type: null, initialPosition: null };
    e.stopPropagation();
  }, []);

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
              <span className="text-xl md:text-4xl font-bold text-black">1</span>
            </div>
            <div className="w-1/2 bg-[#9b87f5] flex items-center justify-center">
              <span className="text-xl md:text-4xl font-bold text-black">2</span>
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
              <span className="text-base md:text-4xl font-bold text-black">½</span>
            </button>
            <motion.div 
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center border-r border-black"
            >
              <span className="text-base md:text-4xl font-bold text-black">2/2</span>
            </motion.div>
            <motion.div 
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-xs md:text-xl font-bold text-black">3/2</span>
              <span className="text-xs md:text-xl font-bold text-black">1½</span>
            </motion.div>
            <motion.div 
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center flex-col"
            >
              <span className="text-xs md:text-xl font-bold text-black">4/2</span>
              <span className="text-xs md:text-xl font-bold text-black">2</span>
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
              <span className="text-base md:text-4xl font-bold text-black">⅓</span>
            </button>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black"
            >
              <span className="text-base md:text-4xl font-bold text-black">2/3</span>
            </motion.div>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black"
            >
              <span className="text-base md:text-4xl font-bold text-black">3/3</span>
            </motion.div>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-xs md:text-xl font-bold text-black">4/3</span>
              <span className="text-xs md:text-xl font-bold text-black">1⅓</span>
            </motion.div>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black flex-col"
            >
              <span className="text-xs md:text-xl font-bold text-black">5/3</span>
              <span className="text-xs md:text-xl font-bold text-black">1⅔</span>
            </motion.div>
            <motion.div 
              className="w-1/6 bg-[#FFE649] flex items-center justify-center flex-col"
            >
              <span className="text-xs md:text-xl font-bold text-black">6/3</span>
              <span className="text-xs md:text-xl font-bold text-black">2</span>
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
              <span className="text-base md:text-4xl font-bold text-black">¼</span>
            </button>
            {[...Array(7)].map((_, index) => (
              <motion.div 
                key={index}
                className={`w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black ${index >= 3 ? 'flex-col' : ''}`}
              >
                {index >= 3 ? (
                  <>
                    <span className="text-xs md:text-xl font-bold text-black">{index + 2}/4</span>
                    <span className="text-xs md:text-xl font-bold text-black">
                      {Math.floor((index + 2) / 4)}
                      {((index + 2) % 4) === 0 ? '' : '¼'}
                    </span>
                  </>
                ) : (
                  <span className="text-base md:text-4xl font-bold text-black">{index + 2}/4</span>
                )}
              </motion.div>
            ))}
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
              <span className="text-base md:text-4xl font-bold text-black">⅕</span>
            </button>
            {[...Array(9)].map((_, index) => (
              <motion.div 
                key={index}
                className={`w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black ${index >= 4 ? 'flex-col' : ''} ${index === 8 ? 'border-r-0' : ''}`}
              >
                {index >= 4 ? (
                  <>
                    <span className="text-sm md:text-2xl font-bold text-black">{index + 2}/5</span>
                    <span className="text-sm md:text-2xl font-bold text-black">
                      {Math.floor((index + 2) / 5)}
                      {((index + 2) % 5) === 0 ? '' : '⅕'}
                    </span>
                  </>
                ) : (
                  <span className="text-base md:text-4xl font-bold text-black">{index + 2}/5</span>
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
            <button 
              type="button"
              onClick={duplicateSixth}
              className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#ffd0d5] transition-colors"
            >
              <span className="text-base md:text-4xl font-bold text-black">⅙</span>
            </button>
            {[...Array(11)].map((_, index) => (
              <motion.div 
                key={index}
                className={`w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black ${index >= 5 ? 'flex-col' : ''} last:border-r-0`}
              >
                {index >= 5 ? (
                  <>
                    <span className="text-sm md:text-2xl font-bold text-black">{index + 2}/6</span>
                    <span className="text-sm md:text-2xl font-bold text-black">
                      {Math.floor((index + 2) / 6)}
                      {((index + 2) % 6) === 0 ? '' : '⅙'}
                    </span>
                  </>
                ) : (
                  <span className="text-base md:text-4xl font-bold text-black">{index + 2}/6</span>
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
            <button 
              type="button"
              onClick={duplicateEighth}
              className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#d3324d] transition-colors"
            >
              <span className="text-xs md:text-3xl font-bold text-black">⅛</span>
            </button>
            {[...Array(15)].map((_, index) => (
              <motion.div 
                key={index}
                className={`w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black ${index >= 7 ? 'flex-col' : ''} last:border-r-0`}
              >
                {index >= 7 ? (
                  <>
                    <span className="text-[10px] md:text-lg font-bold text-black">{index + 2}/8</span>
                    <span className="text-[10px] md:text-lg font-bold text-black">
                      {Math.floor((index + 2) / 8)}
                      {((index + 2) % 8) === 0 ? '' : '⅛'}
                    </span>
                  </>
                ) : (
                  <span className="text-xs md:text-3xl font-bold text-black">{index + 2}/8</span>
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
            <button 
              type="button"
              onClick={duplicateTenth}
              className="w-[5%] bg-[#D3E4FD] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#bfcee6] transition-colors"
            >
              <span className="text-[10px] md:text-lg font-bold text-black">⅒</span>
            </button>
            {[...Array(19)].map((_, index) => (
              <motion.div 
                key={index}
                className={`w-[5%] bg-[#D3E4FD] flex items-center justify-center border-r border-black ${index >= 9 ? 'flex-col' : ''} last:border-r-0`}
              >
                {index >= 9 ? (
                  <>
                    <span className="text-[10px] md:text-lg font-bold text-black">{index + 2}/10</span>
                    <span className="text-[10px] md:text-lg font-bold text-black">
                      {Math.floor((index + 2) / 10)}
                      {((index + 2) % 10) === 0 ? '' : '⅒'}
                    </span>
                  </>
                ) : (
                  <span className="text-[10px] md:text-lg font-bold text-black">{index + 2}/10</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Draggable duplicated halves */}
        {duplicatedHalves.map((half) => (
          <div
            key={half.id}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 4)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${half.position.x}px, ${half.position.y}px)`,
              touchAction: 'none',
              zIndex: 40,
              backgroundColor: '#7E69AB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid black'
            }}
            className="group"
            onTouchStart={(e) => handleTouchStart(half.id, 'half', half.position, e)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <span className="text-base md:text-4xl font-bold text-black">½</span>
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
          </div>
        ))}

        {/* Draggable duplicated thirds */}
        {duplicatedThirds.map((third) => (
          <div
            key={third.id}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 6)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${third.position.x}px, ${third.position.y}px)`,
              touchAction: 'none',
              zIndex: 40,
              backgroundColor: '#FFE649',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid black'
            }}
            className="group"
            onTouchStart={(e) => handleTouchStart(third.id, 'third', third.position, e)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <span className="text-base md:text-4xl font-bold text-black">⅓</span>
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
          </div>
        ))}

        {/* Draggable duplicated quarters */}
        {duplicatedQuarters.map((quarter) => (
          <div
            key={quarter.id}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 8)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${quarter.position.x}px, ${quarter.position.y}px)`,
              touchAction: 'none',
              zIndex: 40,
              backgroundColor: 'rgb(167, 243, 208)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid black'
            }}
            className="group"
            onTouchStart={(e) => handleTouchStart(quarter.id, 'quarter', quarter.position, e)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <span className="text-base md:text-4xl font-bold text-black">¼</span>
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
          </div>
        ))}

        {/* Draggable duplicated fifths */}
        {duplicatedFifths.map((fifth) => (
          <div
            key={fifth.id}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 10)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${fifth.position.x}px, ${fifth.position.y}px)`,
              touchAction: 'none',
              zIndex: 40,
              backgroundColor: '#FEC6A1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid black'
            }}
            className="group"
            onTouchStart={(e) => handleTouchStart(fifth.id, 'fifth', fifth.position, e)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <span className="text-base md:text-4xl font-bold text-black">⅕</span>
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
          </div>
        ))}

        {/* Draggable duplicated sixths */}
        {duplicatedSixths.map((sixth) => (
          <div
            key={sixth.id}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 12)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${sixth.position.x}px, ${sixth.position.y}px)`,
              touchAction: 'none',
              zIndex: 40,
              backgroundColor: '#FFDEE2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid black'
            }}
            className="group"
            onTouchStart={(e) => handleTouchStart(sixth.id, 'sixth', sixth.position, e)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <span className="text-base md:text-4xl font-bold text-black">⅙</span>
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
          </div>
        ))}

        {/* Draggable duplicated eighths */}
        {duplicatedEighths.map((eighth) => (
          <div
            key={eighth.id}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 16)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${eighth.position.x}px, ${eighth.position.y}px)`,
              touchAction: 'none',
              zIndex: 40,
              backgroundColor: '#ea384c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid black'
            }}
            className="group"
            onTouchStart={(e) => handleTouchStart(eighth.id, 'eighth', eighth.position, e)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <span className="text-xs md:text-3xl font-bold text-black">⅛</span>
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
          </div>
        ))}

        {/* Draggable duplicated tenths */}
        {duplicatedTenths.map((tenth) => (
          <div
            key={tenth.id}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / 20)`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${tenth.position.x}px, ${tenth.position.y}px)`,
              touchAction: 'none',
              zIndex: 40,
              backgroundColor: '#D3E4FD',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid black'
            }}
            className="group"
            onTouchStart={(e) => handleTouchStart(tenth.id, 'tenth', tenth.position, e)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <span className="text-[10px] md:text-lg font-bold text-black">⅒</span>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
