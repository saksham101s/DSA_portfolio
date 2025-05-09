import React from 'react';
import { useTerminal } from '../context/TerminalContext';

const TerminalOutput: React.FC = () => {
  const { history } = useTerminal();
  
  return (
    <div className="font-mono text-white overflow-y-auto flex-grow">
      {history.map((item, index) => (
        <div key={index} className="my-1">
          {item.command && (
            <div className="flex">
              <div className="text-green-400">
                <span className="text-blue-400">user</span>
                <span className="text-white">@</span>
                <span className="text-purple-400">portfolio</span>
                <span className="text-white">:~$ </span>
              </div>
              <div className="ml-1 text-white">{item.command}</div>
            </div>
          )}
          {item.output && (
            <div className="text-gray-300 ml-0 mt-1">
              {item.output}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;