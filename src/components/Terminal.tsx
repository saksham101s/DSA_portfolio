import React from 'react';
import CommandLine from './CommandLine';
import TerminalOutput from './TerminalOutput';
import { X, Minus, Square } from 'lucide-react';

const Terminal: React.FC = () => {
  return (
    <div className="bg-gray-900 rounded-md shadow-lg overflow-hidden border border-gray-700 w-full h-full flex flex-col">
      {/* Terminal header with fake buttons */}
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm text-gray-400 font-mono">terminal</div>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-gray-300">
            <Minus size={14} />
          </button>
          <button className="text-gray-400 hover:text-gray-300">
            <Square size={14} />
          </button>
          <button className="text-gray-400 hover:text-gray-300">
            <X size={14} />
          </button>
        </div>
      </div>
      
      {/* Terminal body */}
      <div className="p-4 overflow-y-auto flex-grow flex flex-col">
        <TerminalOutput />
        <CommandLine />
      </div>
    </div>
  );
};

export default Terminal;