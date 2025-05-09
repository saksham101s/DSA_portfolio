import React, { createContext, useState, useContext, ReactNode } from 'react';
import { CommandHistoryItem, TerminalContextType } from '../types';

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const TerminalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [currentPage, setCurrentPage] = useState<string>('home');

  const addToHistory = (item: CommandHistoryItem) => {
    setHistory((prev) => [...prev, item]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <TerminalContext.Provider value={{ 
      history, 
      addToHistory, 
      clearHistory,
      currentPage,
      setCurrentPage
    }}>
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminal = (): TerminalContextType => {
  const context = useContext(TerminalContext);
  if (context === undefined) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
};