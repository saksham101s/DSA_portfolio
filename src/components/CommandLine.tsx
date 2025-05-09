import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import NavPrompt from './NavPrompt';
import { useTerminal } from '../context/TerminalContext';
import { handleCommand } from '../utils/terminalUtils';
import { Terminal as TerminalIcon } from 'lucide-react';

const CommandLine: React.FC = () => {
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addToHistory, history, setCurrentPage } = useTerminal();

  useEffect(() => {
    inputRef.current?.focus();
    
    const handleClick = () => {
      inputRef.current?.focus();
    };
    
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } 
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
    else if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        const trimmedInput = input.trim();
        const args = trimmedInput.split(' ');
        const command = args[0];
        
        addToHistory({ 
          command: trimmedInput,
          output: (
            <div className="flex items-center">
              <TerminalIcon size={14} className="mr-2 text-green-400" />
              <span className="text-gray-400">Executing command: </span>
              <span className="text-white ml-1 font-mono">{trimmedInput}</span>
            </div>
          )
        });
        
        setCommandHistory(prev => [...prev, trimmedInput]);
        setHistoryIndex(-1);
        
        const output = handleCommand(command, args.slice(1), setCurrentPage);
        
        if (output) {
          addToHistory({ command: '', output });
        }
        
        setInput('');
      }
    }
    else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['help', 'about', 'skills', 'projects', 'contact', 'clear', 'ls', 'cd', 'home'];
      const inputCommand = input.toLowerCase();
      
      const matchingCommand = commands.find(cmd => cmd.startsWith(inputCommand));
      if (matchingCommand) {
        setInput(matchingCommand);
      }
    }
  };

  return (
    <div className="flex items-center w-full bg-gray-800/50 p-2 rounded-lg border border-gray-700">
      <NavPrompt />
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="flex-grow bg-transparent border-none outline-none font-mono text-white ml-2 caret-white"
        autoFocus
        spellCheck={false}
        placeholder="Type 'help' for available commands..."
      />
    </div>
  );
};

export default CommandLine;