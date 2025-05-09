import React from 'react';

export const handleCommand = (
  command: string, 
  args: string[],
  setCurrentPage: (page: string) => void
): React.ReactNode => {
  const cmd = command.toLowerCase();
  
  switch (cmd) {
    case 'help':
      return (
        <div className="space-y-2">
          <div className="mb-4">
            <p className="text-green-400 font-bold mb-2">Available Commands:</p>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <table className="w-full border-collapse">
                <tbody className="space-y-2">
                  <tr className="hover:bg-gray-700">
                    <td className="pr-4 py-1">
                      <span className="text-yellow-400 font-mono">help</span>
                    </td>
                    <td className="text-gray-300">Display this help message</td>
                  </tr>
                  <tr className="hover:bg-gray-700">
                    <td className="pr-4 py-1">
                      <span className="text-yellow-400 font-mono">about</span>
                    </td>
                    <td className="text-gray-300">View my background and experience</td>
                  </tr>
                  <tr className="hover:bg-gray-700">
                    <td className="pr-4 py-1">
                      <span className="text-yellow-400 font-mono">skills</span>
                    </td>
                    <td className="text-gray-300">Browse my technical skills and DSA expertise</td>
                  </tr>
                  <tr className="hover:bg-gray-700">
                    <td className="pr-4 py-1">
                      <span className="text-yellow-400 font-mono">projects</span>
                    </td>
                    <td className="text-gray-300">Explore my portfolio projects</td>
                  </tr>
                  <tr className="hover:bg-gray-700">
                    <td className="pr-4 py-1">
                      <span className="text-yellow-400 font-mono">contact</span>
                    </td>
                    <td className="text-gray-300">Get my contact information</td>
                  </tr>
                  <tr className="hover:bg-gray-700">
                    <td className="pr-4 py-1">
                      <span className="text-yellow-400 font-mono">clear</span>
                    </td>
                    <td className="text-gray-300">Clear the terminal screen</td>
                  </tr>
                  <tr className="hover:bg-gray-700">
                    <td className="pr-4 py-1">
                      <span className="text-yellow-400 font-mono">ls</span>
                    </td>
                    <td className="text-gray-300">List all available sections</td>
                  </tr>
                  <tr className="hover:bg-gray-700">
                    <td className="pr-4 py-1">
                      <span className="text-yellow-400 font-mono">cd [section]</span>
                    </td>
                    <td className="text-gray-300">Navigate to a specific section</td>
                  </tr>
                  <tr className="hover:bg-gray-700">
                    <td className="pr-4 py-1">
                      <span className="text-yellow-400 font-mono">home</span>
                    </td>
                    <td className="text-gray-300">Return to the home page</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <p className="text-blue-400 font-mono text-sm mb-2">// Tips</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Use <span className="bg-gray-700 px-2 py-0.5 rounded font-mono">Tab</span> for command completion</li>
              <li>• Press <span className="bg-gray-700 px-2 py-0.5 rounded font-mono">↑</span> and <span className="bg-gray-700 px-2 py-0.5 rounded font-mono">↓</span> to navigate command history</li>
              <li>• Commands are case-insensitive</li>
            </ul>
          </div>
        </div>
      );
      
    case 'about':
      setCurrentPage('about');
      return null;
      
    case 'skills':
      setCurrentPage('skills');
      return null;
      
    case 'projects':
      setCurrentPage('projects');
      return null;
      
    case 'contact':
      setCurrentPage('contact');
      return null;
      
    case 'home':
      setCurrentPage('home');
      return null;
      
    case 'clear':
      return null;
      
    case 'ls':
      return (
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <p className="text-blue-400 font-mono mb-2">Available sections:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <div key={section} className="flex items-center space-x-2 text-yellow-400 font-mono">
                <span>📁</span>
                <span>{section}/</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4 font-mono">
            // Use 'cd [section]' to navigate
          </p>
        </div>
      );
      
    case 'cd':
      if (!args.length) {
        return (
          <div className="text-red-400 bg-gray-800/50 p-4 rounded-lg border border-red-900/50">
            <p className="font-mono">Error: Missing argument</p>
            <p className="text-sm mt-1">Usage: cd [section]</p>
            <p className="text-sm mt-2">Type 'ls' to see available sections</p>
          </div>
        );
      }
      
      const destination = args[0].toLowerCase();
      const validDestinations = ['home', 'about', 'skills', 'projects', 'contact'];
      
      if (validDestinations.includes(destination)) {
        setCurrentPage(destination);
        return null;
      } else {
        return (
          <div className="text-red-400 bg-gray-800/50 p-4 rounded-lg border border-red-900/50">
            <p className="font-mono">Error: Directory not found '{args[0]}'</p>
            <p className="text-sm mt-2">Type 'ls' to see available sections</p>
          </div>
        );
      }
      
    default:
      return (
        <div className="text-red-400 bg-gray-800/50 p-4 rounded-lg border border-red-900/50">
          <p className="font-mono">Command not found: {command}</p>
          <p className="text-sm mt-2">Type 'help' to see available commands</p>
        </div>
      );
  }
};