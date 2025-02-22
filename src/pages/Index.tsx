import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { DraggableFraction } from "../components/fractions/DraggableFraction";
import { FractionRow } from "../components/fractions/FractionRow";
import { useFractionState } from "../hooks/useFractionState";
import { FractionType } from "../types/fraction";
import {
  Halves,
  Thirds,
  Quarters,
  Fifths,
  Sixths,
  Eighths,
  Tenths,
} from "../components/fractions/FractionComponents";

const Index = () => {
  const [baseWidth, setBaseWidth] = useState("90vw");
  const [baseHeight, setBaseHeight] = useState("calc((90vw / 24) * 2.5)");
  const {
    duplicatedHalves,
    duplicatedThirds,
    duplicatedQuarters,
    duplicatedFifths,
    duplicatedSixths,
    duplicatedEighths,
    duplicatedTenths,
    createDuplicate,
    removePiece,
    updatePosition
  } = useFractionState();

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 768) {
        setBaseWidth("95vw");
        setBaseHeight("calc((95vw / 24) * 3)");
      } else {
        setBaseWidth("90vw");
        setBaseHeight("calc((90vw / 24) * 2.5)");
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 p-2 md:p-4">
      <div className="space-y-2 text-center mb-4 md:mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-neutral-900">Fraction Chart</h1>
        <div className="mt-2 md:mt-4 p-2 md:p-4 bg-blue-50 rounded-lg border border-black max-w-md mx-2">
          <p className="text-xs md:text-sm text-black">
            <strong>Tip:</strong> Click on the first fraction in each rectangle (½, ⅓, ¼, etc.) to create duplicates you can drag around. Hover or tap a duplicate to reveal the delete button.
          </p>
        </div>
      </div>
      
      <div className="space-y-0 relative w-full flex flex-col items-center">
        <FractionRow baseWidth={baseWidth} baseHeight={baseHeight} delay={0}>
          <div 
            className="flex border-2 border-black rounded-sm shadow-md overflow-hidden"
          >
            <div className="w-1/2 bg-[#9b87f5] flex items-center justify-center border-r border-black">
              <span className="text-lg md:text-4xl font-bold text-black">1</span>
            </div>
            <div className="w-1/2 bg-[#9b87f5] flex items-center justify-center">
              <span className="text-lg md:text-4xl font-bold text-black">2</span>
            </div>
          </div>
        </FractionRow>

        <FractionRow baseWidth={baseWidth} baseHeight={baseHeight} delay={0.3}>
          <Halves createDuplicate={createDuplicate} />
        </FractionRow>

        <FractionRow baseWidth={baseWidth} baseHeight={baseHeight} delay={0.6}>
          <Thirds createDuplicate={createDuplicate} />
        </FractionRow>

        <FractionRow baseWidth={baseWidth} baseHeight={baseHeight} delay={0.9}>
          <Quarters createDuplicate={createDuplicate} />
        </FractionRow>

        <FractionRow baseWidth={baseWidth} baseHeight={baseHeight} delay={1.2}>
          <Fifths createDuplicate={createDuplicate} />
        </FractionRow>

        <FractionRow baseWidth={baseWidth} baseHeight={baseHeight} delay={1.5}>
          <Sixths createDuplicate={createDuplicate} />
        </FractionRow>

        <FractionRow baseWidth={baseWidth} baseHeight={baseHeight} delay={1.8}>
          <Eighths createDuplicate={createDuplicate} />
        </FractionRow>

        <FractionRow baseWidth={baseWidth} baseHeight={baseHeight} delay={2.1}>
          <Tenths createDuplicate={createDuplicate} />
        </FractionRow>

        {duplicatedHalves.map((half) => (
          <DraggableFraction
            key={half.id}
            piece={half}
            type="half"
            symbol="½"
            color="bg-[#7E69AB]"
            width="4"
            baseHeight={baseHeight}
            baseWidth={baseWidth}
            onRemove={(id) => removePiece(id, 'half')}
            onPositionUpdate={updatePosition}
          />
        ))}

        {duplicatedThirds.map((third) => (
          <DraggableFraction
            key={third.id}
            piece={third}
            type="third"
            symbol="⅓"
            color="bg-[#FFE649]"
            width="6"
            baseHeight={baseHeight}
            baseWidth={baseWidth}
            onRemove={(id) => removePiece(id, 'third')}
            onPositionUpdate={updatePosition}
          />
        ))}

        {duplicatedQuarters.map((quarter) => (
          <DraggableFraction
            key={quarter.id}
            piece={quarter}
            type="quarter"
            symbol="¼"
            color="bg-green-200"
            width="8"
            baseHeight={baseHeight}
            baseWidth={baseWidth}
            onRemove={(id) => removePiece(id, 'quarter')}
            onPositionUpdate={updatePosition}
          />
        ))}

        {duplicatedFifths.map((fifth) => (
          <DraggableFraction
            key={fifth.id}
            piece={fifth}
            type="fifth"
            symbol="⅕"
            color="bg-[#FEC6A1]"
            width="10"
            baseHeight={baseHeight}
            baseWidth={baseWidth}
            onRemove={(id) => removePiece(id, 'fifth')}
            onPositionUpdate={updatePosition}
          />
        ))}

        {duplicatedSixths.map((sixth) => (
          <DraggableFraction
            key={sixth.id}
            piece={sixth}
            type="sixth"
            symbol="⅙"
            color="bg-[#FFDEE2]"
            width="12"
            baseHeight={baseHeight}
            baseWidth={baseWidth}
            onRemove={(id) => removePiece(id, 'sixth')}
            onPositionUpdate={updatePosition}
          />
        ))}

        {duplicatedEighths.map((eighth) => (
          <DraggableFraction
            key={eighth.id}
            piece={eighth}
            type="eighth"
            symbol="⅛"
            color="bg-[#ea384c]"
            width="16"
            baseHeight={baseHeight}
            baseWidth={baseWidth}
            onRemove={(id) => removePiece(id, 'eighth')}
            onPositionUpdate={updatePosition}
          />
        ))}

        {duplicatedTenths.map((tenth) => (
          <DraggableFraction
            key={tenth.id}
            piece={tenth}
            type="tenth"
            symbol="⅒"
            color="bg-[#D3E4FD]"
            width="20"
            baseHeight={baseHeight}
            baseWidth={baseWidth}
            onRemove={(id) => removePiece(id, 'tenth')}
            onPositionUpdate={updatePosition}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
