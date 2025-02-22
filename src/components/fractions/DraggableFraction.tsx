
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FractionPiece, FractionType } from "../../types/fraction";

interface DraggableFractionProps {
  piece: FractionPiece;
  type: FractionType;
  symbol: string;
  color: string;
  width: string;
  baseHeight: string;
  baseWidth: string;
  onRemove: (id: number) => void;
  onPositionUpdate: (id: number, position: { x: number; y: number }, type: FractionType) => void;
}

export const DraggableFraction = ({
  piece,
  type,
  symbol,
  color,
  width,
  baseHeight,
  baseWidth,
  onRemove,
  onPositionUpdate
}: DraggableFractionProps) => {
  return (
    <motion.div
      key={piece.id}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
      initial={{ x: piece.position.x, y: piece.position.y }}
      animate={{ x: piece.position.x, y: piece.position.y }}
      onDragEnd={(e, info) => {
        const newX = piece.position.x + info.offset.x;
        const newY = piece.position.y + info.offset.y;
        onPositionUpdate(piece.id, { x: newX, y: newY }, type);
      }}
      whileDrag={{ scale: 1.02, zIndex: 50 }}
      style={{
        position: 'absolute',
        width: `calc(${baseWidth} / ${width})`,
        height: baseHeight,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 40,
        touchAction: 'none'
      }}
      className={`${color} flex items-center justify-center border-2 border-black group touch-none`}
    >
      <span className="text-lg md:text-4xl font-bold text-black">{symbol}</span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(piece.id);
        }}
        className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
};
