
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
    const offset = duplicatedHalves.length * 20;
    const newHalf = { 
      id: Date.now(), 
      position: { x: offset, y: offset }
    };
    setDuplicatedHalves(prevHalves => [...prevHalves, newHalf]);
  };

  // Function to duplicate a third with offset
  const duplicateThird = () => {
    const offset = duplicatedThirds.length * 20;
    const newThird = { 
      id: Date.now(), 
      position: { x: offset, y: offset }
    };
    setDuplicatedThirds(prevThirds => [...prevThirds, newThird]);
  };

  // Function to duplicate a quarter with offset
  const duplicateQuarter = () => {
    const offset = duplicatedQuarters.length * 20;
    const newQuarter = { 
      id: Date.now(), 
      position: { x: offset, y: offset }
    };
    setDuplicatedQuarters(prevQuarters => [...prevQuarters, newQuarter]);
  };

  // Function to duplicate a fifth with offset
  const duplicateFifth = () => {
    const offset = duplicatedFifths.length * 20;
    const newFifth = { 
      id: Date.now(), 
      position: { x: offset, y: offset }
    };
    setDuplicatedFifths(prevFifths => [...prevFifths, newFifth]);
  };

  // Function to duplicate a sixth with offset
  const duplicateSixth = () => {
    const offset = duplicatedSixths.length * 20;
    const newSixth = { 
      id: Date.now(), 
      position: { x: offset, y: offset }
    };
    setDuplicatedSixths(prevSixths => [...prevSixths, newSixth]);
  };

  // Function to duplicate an eighth with offset
  const duplicateEighth = () => {
    const offset = duplicatedEighths.length * 20;
    const newEighth = { 
      id: Date.now(), 
      position: { x: offset, y: offset }
    };
    setDuplicatedEighths(prevEighths => [...prevEighths, newEighth]);
  };

  // Function to duplicate a tenth with offset
  const duplicateTenth = () => {
    const offset = duplicatedTenths.length * 20;
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

  // Function to update position when dragging ends
  const updatePosition = (id: number, position: { x: number; y: number }, type: 'half' | 'third' | 'quarter' | 'fifth' | 'sixth' | 'eighth' | 'tenth') => {
    switch (type) {
      case 'half':
        setDuplicatedHalves(prev => 
          prev.map(half => half.id === id ? { ...half, position } : half)
        );
        break;
      case 'third':
        setDuplicatedThirds(prev => 
          prev.map(third => third.id === id ? { ...third, position } : third)
        );
        break;
      case 'quarter':
        setDuplicatedQuarters(prev => 
          prev.map(quarter => quarter.id === id ? { ...quarter, position } : quarter)
        );
        break;
      case 'fifth':
        setDuplicatedFifths(prev => 
          prev.map(fifth => fifth.id === id ? { ...fifth, position } : fifth)
        );
        break;
      case 'sixth':
        setDuplicatedSixths(prev => 
          prev.map(sixth => sixth.id === id ? { ...sixth, position } : sixth)
        );
        break;
      case 'eighth':
        setDuplicatedEighths(prev => 
          prev.map(eighth => eighth.id === id ? { ...eighth, position } : eighth)
        );
        break;
      case 'tenth':
        setDuplicatedTenths(prev => 
          prev.map(tenth => tenth.id === id ? { ...tenth, position } : tenth)
        );
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 p-4">
      <h1 className="text-4xl font-bold mb-8">Hello World</h1>
    </div>
  );
};

export default Index;
