import { motion } from "framer-motion";
import { useState } from "react";
import { X, Plus } from "lucide-react";

const Index = () => {
  // Calculate dimensions maintaining new proportions
  const baseWidth = "90vw"; // 90% of viewport width
  const baseHeight = "calc((90vw / 24) * 2.5)"; // Original height * 2.5 (150% increase)
  
  // Enhanced fraction type for better manipulation
  type DraggableFraction = {
    id: number;
    numerator: number;
    denominator: number;
    position: { x: number; y: number };
    color: string;
    isSelected: boolean;
  };

  // State for all draggable fractions
  const [draggableFractions, setDraggableFractions] = useState<DraggableFraction[]>([]);
  const [combinationResults, setCombinationResults] = useState<Array<{ id: number; position: { x: number; y: number }; result: string; fractions: string[] }>>([]);
  const [selectedFractions, setSelectedFractions] = useState<number[]>([]);

  // Color mapping for different denominators
  const fractionColors: { [key: number]: string } = {
    2: '#7E69AB',
    3: '#FFE649',
    4: '#22C55E',
    5: '#FEC6A1',
    6: '#FFDEE2',
    8: '#EA384C',
    10: '#D3E4FD'
  };
  
  // Helper function to create draggable fractions
  const createDraggableFraction = (numerator: number, denominator: number) => {
    const offset = draggableFractions.length * 20;
    const newFraction: DraggableFraction = {
      id: Date.now() + Math.random(),
      numerator,
      denominator,
      position: { x: offset, y: offset },
      color: fractionColors[denominator] || '#9CA3AF',
      isSelected: false
    };
    setDraggableFractions(prev => [...prev, newFraction]);
  };

  // Functions to create different fractions
  const duplicateHalf = () => createDraggableFraction(1, 2);
  const duplicateThird = () => createDraggableFraction(1, 3);
  const duplicateQuarter = () => createDraggableFraction(1, 4);
  const duplicateFifth = () => createDraggableFraction(1, 5);
  const duplicateSixth = () => createDraggableFraction(1, 6);
  const duplicateEighth = () => createDraggableFraction(1, 8);
  const duplicateTenth = () => createDraggableFraction(1, 10);

  // Function to create any fraction segment from the main chart
  const createFractionFromChart = (numerator: number, denominator: number) => {
    createDraggableFraction(numerator, denominator);
  };

  // Function to remove a draggable fraction
  const removeFraction = (id: number) => {
    setDraggableFractions(prev => prev.filter(fraction => fraction.id !== id));
    setSelectedFractions(prev => prev.filter(fractionId => fractionId !== id));
  };

  // Function to toggle selection
  const toggleSelection = (id: number) => {
    setSelectedFractions(prev => 
      prev.includes(id) 
        ? prev.filter(fractionId => fractionId !== id)
        : [...prev, id]
    );
  };

  // Function to calculate fraction addition
  const addFractions = (fractions: DraggableFraction[]) => {
    if (fractions.length < 2) return null;
    
    // Find common denominator
    const denominators = fractions.map(f => f.denominator);
    const lcm = denominators.reduce((a, b) => Math.abs(a * b) / gcd(a, b));
    
    // Add numerators after converting to common denominator
    const totalNumerator = fractions.reduce((sum, fraction) => {
      return sum + (fraction.numerator * lcm / fraction.denominator);
    }, 0);
    
    // Simplify the result
    const resultGcd = gcd(totalNumerator, lcm);
    return {
      numerator: totalNumerator / resultGcd,
      denominator: lcm / resultGcd
    };
  };

  // Helper function for GCD calculation
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  // Function to combine selected fractions
  const combineSelectedFractions = () => {
    const selectedFractionObjects = draggableFractions.filter(f => selectedFractions.includes(f.id));
    if (selectedFractionObjects.length < 2) return;

    const result = addFractions(selectedFractionObjects);
    if (!result) return;

    // Calculate average position for the result
    const avgX = selectedFractionObjects.reduce((sum, f) => sum + f.position.x, 0) / selectedFractionObjects.length;
    const avgY = selectedFractionObjects.reduce((sum, f) => sum + f.position.y, 0) / selectedFractionObjects.length;

    // Create result display
    const newResult = {
      id: Date.now(),
      position: { x: avgX, y: avgY - 60 },
      result: result.denominator === 1 ? `${result.numerator}` : `${result.numerator}/${result.denominator}`,
      fractions: selectedFractionObjects.map(f => `${f.numerator}/${f.denominator}`)
    };

    setCombinationResults(prev => [...prev, newResult]);
    
    // Remove combined fractions
    selectedFractionObjects.forEach(f => removeFraction(f.id));
    setSelectedFractions([]);
  };

  // Function to remove combination result
  const removeCombinationResult = (id: number) => {
    setCombinationResults(prev => prev.filter(result => result.id !== id));
  };

  // Function to format fraction display
  const formatFraction = (numerator: number, denominator: number) => {
    if (numerator === 1) {
      switch (denominator) {
        case 2: return '½';
        case 3: return '⅓';
        case 4: return '¼';
        case 5: return '⅕';
        case 6: return '⅙';
        case 8: return '⅛';
        case 10: return '1/10';
        default: return `1/${denominator}`;
      }
    }
    return `${numerator}/${denominator}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 p-4">
      <div className="space-y-2 text-center mb-8">
        <h1 className="text-2xl font-bold text-neutral-900">Interactive Fraction Chart</h1>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-black max-w-md">
          <p className="text-sm text-black">
            <strong>Enhanced Features:</strong> Click any fraction to create draggable pieces. Select multiple fractions (they'll turn darker) and click "Combine Selected" to add them together!
          </p>
        </div>
        
        {/* Combination controls */}
        {selectedFractions.length > 1 && (
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-300">
            <p className="text-sm mb-2">Selected: {selectedFractions.length} fractions</p>
            <button
              onClick={combineSelectedFractions}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 mx-auto"
              data-testid="button-combine-fractions"
            >
              <Plus size={16} />
              Combine Selected Fractions
            </button>
          </div>
        )}
      </div>
      
      <div className="space-y-0 relative">
        {/* Main fraction rows */}
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

        {/* Halves row */}
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
              data-testid="button-create-half"
            >
              <span className="text-sm md:text-4xl font-semibold text-black">½</span>
            </button>
            <button 
              type="button"
              onClick={() => createFractionFromChart(2, 2)}
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#6c5b94] transition-colors"
              data-testid="button-create-whole"
            >
              <span className="text-sm md:text-4xl font-semibold text-black">2/2</span>
            </button>
            <button 
              type="button"
              onClick={() => createFractionFromChart(3, 2)}
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#6c5b94] transition-colors flex-col"
              data-testid="button-create-three-halves"
            >
              <span className="text-xs md:text-xl font-semibold text-black">3/2</span>
              <span className="text-xs md:text-xl font-semibold text-black">1½</span>
            </button>
            <button 
              type="button"
              onClick={() => createFractionFromChart(4, 2)}
              className="w-1/4 bg-[#7E69AB] flex items-center justify-center cursor-pointer hover:bg-[#6c5b94] transition-colors flex-col"
              data-testid="button-create-two"
            >
              <span className="text-xs md:text-xl font-semibold text-black">4/2</span>
              <span className="text-xs md:text-xl font-semibold text-black">2</span>
            </button>
          </div>
        </motion.div>

        {/* Thirds row */}
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
              data-testid="button-create-third"
            >
              <span className="text-xs md:text-4xl font-semibold text-black">⅓</span>
            </button>
            <button 
              type="button"
              onClick={() => createFractionFromChart(2, 3)}
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#e6cf41] transition-colors"
              data-testid="button-create-two-thirds"
            >
              <span className="text-xs md:text-4xl font-semibold text-black">2/3</span>
            </button>
            <button 
              type="button"
              onClick={() => createFractionFromChart(3, 3)}
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#e6cf41] transition-colors"
              data-testid="button-create-three-thirds"
            >
              <span className="text-xs md:text-4xl font-semibold text-black">3/3</span>
            </button>
            <button 
              type="button"
              onClick={() => createFractionFromChart(4, 3)}
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#e6cf41] transition-colors flex-col"
              data-testid="button-create-four-thirds"
            >
              <span className="text-[8px] md:text-xl font-semibold text-black">4/3</span>
              <span className="text-[8px] md:text-xl font-semibold text-black">1⅓</span>
            </button>
            <button 
              type="button"
              onClick={() => createFractionFromChart(5, 3)}
              className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#e6cf41] transition-colors flex-col"
              data-testid="button-create-five-thirds"
            >
              <span className="text-[8px] md:text-xl font-semibold text-black">5/3</span>
              <span className="text-[8px] md:text-xl font-semibold text-black">1⅔</span>
            </button>
            <button 
              type="button"
              onClick={() => createFractionFromChart(6, 3)}
              className="w-1/6 bg-[#FFE649] flex items-center justify-center cursor-pointer hover:bg-[#e6cf41] transition-colors flex-col"
              data-testid="button-create-six-thirds"
            >
              <span className="text-[8px] md:text-xl font-semibold text-black">6/3</span>
              <span className="text-[8px] md:text-xl font-semibold text-black">2</span>
            </button>
          </div>
        </motion.div>

        {/* Quarters row */}
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((numerator) => (
              <button 
                key={numerator}
                type="button"
                onClick={() => createFractionFromChart(numerator, 4)}
                className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black last:border-r-0 cursor-pointer hover:bg-green-300 transition-colors flex-col"
                data-testid={`button-create-${numerator}-fourths`}
              >
                {numerator === 1 ? (
                  <span className="text-[8px] md:text-4xl font-semibold text-black">¼</span>
                ) : numerator > 4 ? (
                  <>
                    <span className="text-[7px] md:text-xl font-semibold text-black">{numerator}/4</span>
                    <span className="text-[7px] md:text-xl font-semibold text-black">
                      {numerator === 5 ? '1¼' : numerator === 6 ? '1½' : numerator === 7 ? '1¾' : '2'}
                    </span>
                  </>
                ) : (
                  <span className="text-[8px] md:text-4xl font-semibold text-black">{numerator}/4</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Fifths row */}
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((numerator) => (
              <button 
                key={numerator}
                type="button"
                onClick={() => createFractionFromChart(numerator, 5)}
                className="w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black last:border-r-0 cursor-pointer hover:bg-[#fd9f5e] transition-colors flex-col"
                data-testid={`button-create-${numerator}-fifths`}
              >
                {numerator === 1 ? (
                  <span className="text-[8px] md:text-3xl font-semibold text-black">⅕</span>
                ) : numerator > 5 ? (
                  <>
                    <span className="text-[6px] md:text-lg font-semibold text-black">{numerator}/5</span>
                    <span className="text-[6px] md:text-lg font-semibold text-black">
                      {numerator === 6 ? '1⅕' : numerator === 7 ? '1⅖' : numerator === 8 ? '1⅗' : numerator === 9 ? '1⅘' : '2'}
                    </span>
                  </>
                ) : (
                  <span className="text-[7px] md:text-3xl font-semibold text-black">{numerator}/5</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Sixths row */}
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((numerator) => (
              <button 
                key={numerator}
                type="button"
                onClick={() => createFractionFromChart(numerator, 6)}
                className="w-[8.333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black last:border-r-0 cursor-pointer hover:bg-[#ffb5c1] transition-colors flex-col"
                data-testid={`button-create-${numerator}-sixths`}
              >
                {numerator === 1 ? (
                  <span className="text-[7px] md:text-2xl font-semibold text-black">⅙</span>
                ) : numerator > 6 ? (
                  <>
                    <span className="text-[5px] md:text-sm font-semibold text-black">{numerator}/6</span>
                    <span className="text-[5px] md:text-sm font-semibold text-black">
                      {numerator === 7 ? '1⅙' : numerator === 8 ? '1⅓' : numerator === 9 ? '1½' : numerator === 10 ? '1⅔' : numerator === 11 ? '1⅚' : '2'}
                    </span>
                  </>
                ) : (
                  <span className="text-[6px] md:text-2xl font-semibold text-black">{numerator}/6</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Eighths row */}
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((numerator) => (
              <button 
                key={numerator}
                type="button"
                onClick={() => createFractionFromChart(numerator, 8)}
                className="w-[6.25%] bg-[#EA384C] flex items-center justify-center border-r border-black last:border-r-0 cursor-pointer hover:bg-[#c71e32] transition-colors flex-col"
                data-testid={`button-create-${numerator}-eighths`}
              >
                {numerator === 1 ? (
                  <span className="text-[6px] md:text-xl font-semibold text-white">⅛</span>
                ) : numerator > 8 ? (
                  <>
                    <span className="text-[4px] md:text-xs font-semibold text-white">{numerator}/8</span>
                    <span className="text-[4px] md:text-xs font-semibold text-white">
                      {numerator === 9 ? '1⅛' : numerator === 10 ? '1¼' : numerator === 11 ? '1⅜' : numerator === 12 ? '1½' : numerator === 13 ? '1⅝' : numerator === 14 ? '1¾' : numerator === 15 ? '1⅞' : '2'}
                    </span>
                  </>
                ) : (
                  <span className="text-[5px] md:text-xl font-semibold text-white">{numerator}/8</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tenths row */}
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((numerator) => (
              <button 
                key={numerator}
                type="button"
                onClick={() => createFractionFromChart(numerator, 10)}
                className="w-[5%] bg-[#D3E4FD] flex items-center justify-center border-r border-black last:border-r-0 cursor-pointer hover:bg-[#a8c7f8] transition-colors flex-col"
                data-testid={`button-create-${numerator}-tenths`}
              >
                {numerator === 1 ? (
                  <span className="text-[5px] md:text-lg font-semibold text-black">1/10</span>
                ) : numerator > 10 ? (
                  <>
                    <span className="text-[3px] md:text-[10px] font-semibold text-black">{numerator}/10</span>
                    <span className="text-[3px] md:text-[10px] font-semibold text-black">
                      {numerator === 11 ? '1.1' : numerator === 12 ? '1.2' : numerator === 13 ? '1.3' : numerator === 14 ? '1.4' : numerator === 15 ? '1.5' : numerator === 16 ? '1.6' : numerator === 17 ? '1.7' : numerator === 18 ? '1.8' : numerator === 19 ? '1.9' : '2'}
                    </span>
                  </>
                ) : (
                  <span className="text-[4px] md:text-lg font-semibold text-black">{numerator}/10</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Draggable Fractions */}
        {draggableFractions.map((fraction) => (
          <motion.div
            key={fraction.id}
            drag
            dragMomentum={false}
            dragElastic={0}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            initial={{ x: fraction.position.x, y: fraction.position.y }}
            animate={{ x: fraction.position.x, y: fraction.position.y }}
            onDragEnd={(e, info) => {
              const newPosition = {
                x: fraction.position.x + info.offset.x,
                y: fraction.position.y + info.offset.y
              };
              setDraggableFractions(prev => 
                prev.map(f => f.id === fraction.id 
                  ? { ...f, position: newPosition } 
                  : f
                )
              );
            }}
            onClick={() => toggleSelection(fraction.id)}
            style={{
              position: 'absolute',
              width: `calc(${baseWidth} / ${fraction.denominator * 2})`,
              height: baseHeight,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
              touchAction: 'none',
              zIndex: 40,
              backgroundColor: fraction.color,
              opacity: selectedFractions.includes(fraction.id) ? 0.7 : 1,
              border: selectedFractions.includes(fraction.id) ? '3px solid #000' : '2px solid #000'
            }}
            className="flex items-center justify-center group rounded cursor-pointer"
            data-testid={`draggable-fraction-${fraction.numerator}-${fraction.denominator}`}
          >
            <span className="text-xs md:text-2xl font-semibold text-black">
              {formatFraction(fraction.numerator, fraction.denominator)}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeFraction(fraction.id);
              }}
              className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
              data-testid={`button-remove-fraction-${fraction.id}`}
            >
              <X size={12} />
            </button>
          </motion.div>
        ))}

        {/* Combination Results */}
        {combinationResults.map((result) => (
          <motion.div
            key={result.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              position: 'absolute',
              left: result.position.x,
              top: result.position.y,
              zIndex: 50,
            }}
            className="bg-yellow-300 border-2 border-yellow-600 rounded-lg p-3 shadow-lg group"
            data-testid={`combination-result-${result.id}`}
          >
            <div className="text-center">
              <div className="text-sm font-medium text-gray-700">
                {result.fractions.join(' + ')} =
              </div>
              <div className="text-xl font-bold text-gray-900">
                {result.result}
              </div>
            </div>
            <button
              type="button"
              onClick={() => removeCombinationResult(result.id)}
              className="absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
              data-testid={`button-remove-result-${result.id}`}
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Index;