
import { useState } from "react";
import { FractionPiece, FractionType } from "../types/fraction";

export const useFractionState = () => {
  const [duplicatedHalves, setDuplicatedHalves] = useState<FractionPiece[]>([]);
  const [duplicatedThirds, setDuplicatedThirds] = useState<FractionPiece[]>([]);
  const [duplicatedQuarters, setDuplicatedQuarters] = useState<FractionPiece[]>([]);
  const [duplicatedFifths, setDuplicatedFifths] = useState<FractionPiece[]>([]);
  const [duplicatedSixths, setDuplicatedSixths] = useState<FractionPiece[]>([]);
  const [duplicatedEighths, setDuplicatedEighths] = useState<FractionPiece[]>([]);
  const [duplicatedTenths, setDuplicatedTenths] = useState<FractionPiece[]>([]);

  const createDuplicate = (type: FractionType) => {
    const getOffset = (array: FractionPiece[]) => array.length * 20;
    const createPiece = (offset: number): FractionPiece => ({
      id: Date.now(),
      position: { x: offset, y: offset }
    });

    switch (type) {
      case 'half':
        setDuplicatedHalves(prev => [...prev, createPiece(getOffset(prev))]);
        break;
      case 'third':
        setDuplicatedThirds(prev => [...prev, createPiece(getOffset(prev))]);
        break;
      case 'quarter':
        setDuplicatedQuarters(prev => [...prev, createPiece(getOffset(prev))]);
        break;
      case 'fifth':
        setDuplicatedFifths(prev => [...prev, createPiece(getOffset(prev))]);
        break;
      case 'sixth':
        setDuplicatedSixths(prev => [...prev, createPiece(getOffset(prev))]);
        break;
      case 'eighth':
        setDuplicatedEighths(prev => [...prev, createPiece(getOffset(prev))]);
        break;
      case 'tenth':
        setDuplicatedTenths(prev => [...prev, createPiece(getOffset(prev))]);
        break;
    }
  };

  const removePiece = (id: number, type: FractionType) => {
    switch (type) {
      case 'half':
        setDuplicatedHalves(prev => prev.filter(piece => piece.id !== id));
        break;
      case 'third':
        setDuplicatedThirds(prev => prev.filter(piece => piece.id !== id));
        break;
      case 'quarter':
        setDuplicatedQuarters(prev => prev.filter(piece => piece.id !== id));
        break;
      case 'fifth':
        setDuplicatedFifths(prev => prev.filter(piece => piece.id !== id));
        break;
      case 'sixth':
        setDuplicatedSixths(prev => prev.filter(piece => piece.id !== id));
        break;
      case 'eighth':
        setDuplicatedEighths(prev => prev.filter(piece => piece.id !== id));
        break;
      case 'tenth':
        setDuplicatedTenths(prev => prev.filter(piece => piece.id !== id));
        break;
    }
  };

  const updatePosition = (id: number, position: { x: number; y: number }, type: FractionType) => {
    const updateState = (
      prev: FractionPiece[],
      setState: React.Dispatch<React.SetStateAction<FractionPiece[]>>
    ) => {
      setState(prev.map(piece => piece.id === id ? { ...piece, position } : piece));
    };

    switch (type) {
      case 'half':
        updateState(duplicatedHalves, setDuplicatedHalves);
        break;
      case 'third':
        updateState(duplicatedThirds, setDuplicatedThirds);
        break;
      case 'quarter':
        updateState(duplicatedQuarters, setDuplicatedQuarters);
        break;
      case 'fifth':
        updateState(duplicatedFifths, setDuplicatedFifths);
        break;
      case 'sixth':
        updateState(duplicatedSixths, setDuplicatedSixths);
        break;
      case 'eighth':
        updateState(duplicatedEighths, setDuplicatedEighths);
        break;
      case 'tenth':
        updateState(duplicatedTenths, setDuplicatedTenths);
        break;
    }
  };

  return {
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
  };
};
