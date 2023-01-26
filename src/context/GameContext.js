import { useState, createContext, useContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [something, setSomething] = useState('someStartingState');
  return (
    <GameContext.Provider value={{ something, setSomething }}>{children}</GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be within a GameProvider');
  }

  return context;
};

export { useGameContext, GameProvider };
