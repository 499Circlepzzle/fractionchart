
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
    {[...Array(3)].map((_, index) => (
      <motion.div 
        key={index}
        className="w-1/4 bg-[#7E69AB] flex items-center justify-center border-r border-black flex-col"
      >
        <span className="text-base md:text-2xl font-bold text-black">{index + 2}/2</span>
        {index > 0 && <span className="text-base md:text-2xl font-bold text-black">{Math.floor((index + 2) / 2)}</span>}
      </motion.div>
    ))}
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
    {[...Array(5)].map((_, index) => (
      <motion.div 
        key={index}
        className="w-1/6 bg-[#FFE649] flex items-center justify-center border-r border-black flex-col"
      >
        <span className="text-base md:text-2xl font-bold text-black">{index + 2}/3</span>
        {index > 1 && <span className="text-base md:text-2xl font-bold text-black">{Math.floor((index + 2) / 3)}</span>}
      </motion.div>
    ))}
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
    {[...Array(7)].map((_, index) => (
      <motion.div 
        key={index}
        className="w-[12.5%] bg-green-200 flex items-center justify-center border-r border-black flex-col"
      >
        <span className="text-base md:text-2xl font-bold text-black">{index + 2}/4</span>
        {index > 2 && <span className="text-base md:text-2xl font-bold text-black">{Math.floor((index + 2) / 4)}</span>}
      </motion.div>
    ))}
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
    {[...Array(9)].map((_, index) => (
      <motion.div 
        key={index}
        className={`w-[10%] bg-[#FEC6A1] flex items-center justify-center border-r border-black ${index > 3 ? 'flex-col' : ''}`}
      >
        <span className="text-sm md:text-2xl font-bold text-black">{index + 2}/5</span>
        {index > 3 && <span className="text-sm md:text-2xl font-bold text-black">{Math.floor((index + 2) / 5)}</span>}
      </motion.div>
    ))}
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
    {[...Array(11)].map((_, index) => (
      <motion.div 
        key={index}
        className={`w-[8.333333%] bg-[#FFDEE2] flex items-center justify-center border-r border-black ${index > 4 ? 'flex-col' : ''}`}
      >
        <span className="text-xs md:text-2xl font-bold text-black">{index + 2}/6</span>
        {index > 4 && <span className="text-xs md:text-2xl font-bold text-black">{Math.floor((index + 2) / 6)}</span>}
      </motion.div>
    ))}
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
    {[...Array(15)].map((_, index) => (
      <motion.div 
        key={index}
        className={`w-[6.25%] bg-[#ea384c] flex items-center justify-center border-r border-black ${index > 6 ? 'flex-col' : ''}`}
      >
        <span className="text-[10px] md:text-2xl font-bold text-black">{index + 2}/8</span>
        {index > 6 && <span className="text-[10px] md:text-2xl font-bold text-black">{Math.floor((index + 2) / 8)}</span>}
      </motion.div>
    ))}
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
    {[...Array(19)].map((_, index) => (
      <motion.div 
        key={index}
        className={`w-[5%] bg-[#D3E4FD] flex items-center justify-center border-r border-black ${index > 8 ? 'flex-col' : ''}`}
      >
        <span className="text-[8px] md:text-xl font-bold text-black">{index + 2}/10</span>
        {index > 8 && <span className="text-[8px] md:text-xl font-bold text-black">{Math.floor((index + 2) / 10)}</span>}
      </motion.div>
    ))}
  </>
);
