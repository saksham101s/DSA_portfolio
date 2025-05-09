import React, { useEffect, useState } from 'react';
import Terminal from './components/Terminal';
import { TerminalProvider, useTerminal } from './context/TerminalContext';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import SkillsPage from './pages/Skills';
import ContactPage from './pages/Contact';

const MainContent: React.FC = () => {
  const { addToHistory, clearHistory, currentPage } = useTerminal();
  const [welcomeShown, setWelcomeShown] = useState(false);
  
  // Initialize with welcome message and help command only once
  useEffect(() => {
    if (!welcomeShown) {
      addToHistory({ 
        command: '', 
        output: (
          <div className="text-green-400">
            <p>Welcome to my DSA-themed portfolio!</p>
            <p className="text-gray-400 mt-1">Type 'help' to see available commands or 'home' to return to the home page.</p>
          </div>
        ) 
      });
      setWelcomeShown(true);
    }
  }, [addToHistory, welcomeShown]);
  
  // Render the current page based on the currentPage state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Main content area */}
      <div className="flex-grow p-4 pb-0 overflow-y-auto">
        {renderCurrentPage()}
      </div>
      
      {/* Terminal at the bottom */}
      <div className="p-4 h-80">
        <Terminal />
      </div>
    </div>
  );
};

function App() {
  return (
    <TerminalProvider>
      <MainContent />
    </TerminalProvider>
  );
}

export default App;