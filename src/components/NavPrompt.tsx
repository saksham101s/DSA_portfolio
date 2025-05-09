import React from 'react';
import { useTerminal } from '../context/TerminalContext';
import { Terminal } from 'lucide-react';

const NavPrompt: React.FC = () => {
  const { currentPage } = useTerminal();
  
  return (
    <div className="flex items-center text-green-400 font-mono">
      <Terminal size={16} className="mr-2" />
      <span className="text-blue-400">user</span>
      <span className="text-white">@</span>
      <span className="text-purple-400">portfolio</span>
      <span className="text-white">:</span>
      <span className="text-yellow-400">~/{currentPage}</span>
      <span className="text-white">$ </span>
    </div>
  );
};

export default NavPrompt;