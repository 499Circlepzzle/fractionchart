
export interface Position {
  x: number;
  y: number;
}

export interface FractionPiece {
  id: number;
  position: Position;
}

export type FractionType = 'half' | 'third' | 'quarter' | 'fifth' | 'sixth' | 'eighth' | 'tenth';
