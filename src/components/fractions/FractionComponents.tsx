
import { motion } from "framer-motion";
import { FractionType } from "../../types/fraction";

interface FractionComponentProps {
  createDuplicate: (type: FractionType) => void;
}

export const Halves = ({ createDuplicate }: FractionComponentProps) => (
  <>
    <button 
      type="button"
      onClick={() => createDuplicate('half')}
      className="w-1/4 bg-[#7E69AB] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#6c5b94] transition-colors"
    >
      <span className="text-lg md:text-4xl font-bold text-black">½</span>
    </button>
    {[...Array(3)].map((_, index) => {
      const num = index + 2;
      const wholeNumber = Math.floor(num / 2);
      const remainder = num % 2;
      return (
        <motion.div 
          key={index}
          className="w-1/4 bg-[#7E69AB] flex items-center justify-center border-r border-black flex-col"
        >
          {remainder > 0 && <span className="text-base md:text-2xl font-bold text-black">{remainder}/2</span>}
          {wholeNumber > 0 && <span className="text-base md:text-2xl font-bold text-black">{wholeNumber}</span>}
        </motion.div>
      );
    })}
  </>
);

export const Thirds = ({ createDuplicate }: FractionComponentProps) => (
  <>
    <button 
      type="button"
      onClick={() => createDuplicate('third')}
      className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#e6cf41] transition-colors"
    >
      <span className="text-lg md:text-4xl font-bold text-black">⅓</span>
    </button>
    {[...Array(5)].map((_, index) => {
      const num = index + 2;
      const wholeNumber = Math.floor(num / 3);
      const remainder = num % 3;
      return (
        <motion.div 
          key={index}
          className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black flex-col"
        >
          {remainder > 0 && <span className="text-base md:text-2xl font-bold text-black">{remainder}/3</span>}
          {wholeNumber > 0 && <span className="text-base md:text-2xl font-bold text-black">{wholeNumber}</span>}
        </motion.div>
      );
    })}
  </>
);

export const Quarters = ({ createDuplicate }: FractionComponentProps) => (
  <>
    <button 
      type="button"
      onClick={() => createDuplicate('quarter')}
      className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black cursor-pointer hover:bg-green-300 transition-colors"
    >
      <span className="text-base md:text-4xl font-bold text-black">¼</span>
    </button>
    {[...Array(7)].map((_, index) => {
      const num = index + 2;
      const wholeNumber = Math.floor(num / 4);
      const remainder = num % 4;
      return (
        <motion.div 
          key={index}
          className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black flex-col"
        >
          {remainder > 0 && <span className="text-base md:text-2xl font-bold text-black">{remainder}/4</span>}
          {wholeNumber > 0 && <span className="text-base md:text-2xl font-bold text-black">{wholeNumber}</span>}
        </motion.div>
      );
    })}
  </>
);

export const Fifths = ({ createDuplicate }: FractionComponentProps) => (
  <>
    <button 
      type="button"
      onClick={() => createDuplicate('fifth')}
      className="w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#e5b291] transition-colors"
    >
      <span className="text-sm md:text-4xl font-bold text-black">⅕</span>
    </button>
    {[...Array(9)].map((_, index) => {
      const num = index + 2;
      const wholeNumber = Math.floor(num / 5);
      const remainder = num % 5;
      return (
        <motion.div 
          key={index}
          className="w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black flex-col"
        >
          {remainder > 0 && <span className="text-sm md:text-2xl font-bold text-black">{remainder}/5</span>}
          {wholeNumber > 0 && <span className="text-sm md:text-2xl font-bold text-black">{wholeNumber}</span>}
        </motion.div>
      );
    })}
  </>
);

export const Sixths = ({ createDuplicate }: FractionComponentProps) => (
  <>
    <button 
      type="button"
      onClick={() => createDuplicate('sixth')}
      className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#ffd0d5] transition-colors"
    >
      <span className="text-xs md:text-4xl font-bold text-black">⅙</span>
    </button>
    {[...Array(11)].map((_, index) => {
      const num = index + 2;
      const wholeNumber = Math.floor(num / 6);
      const remainder = num % 6;
      return (
        <motion.div 
          key={index}
          className="w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black flex-col"
        >
          {remainder > 0 && <span className="text-xs md:text-2xl font-bold text-black">{remainder}/6</span>}
          {wholeNumber > 0 && <span className="text-xs md:text-2xl font-bold text-black">{wholeNumber}</span>}
        </motion.div>
      );
    })}
  </>
);

export const Eighths = ({ createDuplicate }: FractionComponentProps) => (
  <>
    <button 
      type="button"
      onClick={() => createDuplicate('eighth')}
      className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#d3324d] transition-colors"
    >
      <span className="text-[10px] md:text-4xl font-bold text-black">⅛</span>
    </button>
    {[...Array(15)].map((_, index) => {
      const num = index + 2;
      const wholeNumber = Math.floor(num / 8);
      const remainder = num % 8;
      return (
        <motion.div 
          key={index}
          className="w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black flex-col"
        >
          {remainder > 0 && <span className="text-[10px] md:text-2xl font-bold text-black">{remainder}/8</span>}
          {wholeNumber > 0 && <span className="text-[10px] md:text-2xl font-bold text-black">{wholeNumber}</span>}
        </motion.div>
      );
    })}
  </>
);

export const Tenths = ({ createDuplicate }: FractionComponentProps) => (
  <>
    <button 
      type="button"
      onClick={() => createDuplicate('tenth')}
      className="w-[5%] bg-[#D3E4FD] flex items-center justify-center border-r border-black cursor-pointer hover:bg-[#bfcee6] transition-colors"
    >
      <span className="text-[8px] md:text-xl font-bold text-black">⅒</span>
    </button>
    {[...Array(19)].map((_, index) => {
      const num = index + 2;
      const wholeNumber = Math.floor(num / 10);
      const remainder = num % 10;
      return (
        <motion.div 
          key={index}
          className="w-[5%] bg-[#D3E4FD] flex items-center justify-center border-r border-black flex-col"
        >
          {remainder > 0 && <span className="text-[8px] md:text-xl font-bold text-black">{remainder}/10</span>}
          {wholeNumber > 0 && <span className="text-[8px] md:text-xl font-bold text-black">{wholeNumber}</span>}
        </motion.div>
      );
    })}
  </>
);
