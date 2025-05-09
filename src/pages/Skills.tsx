import React, { useState } from 'react';
import { skills } from '../constants/skillsData';
import { BrainCircuit, ChevronDown, ChevronUp } from 'lucide-react';

const SkillsPage: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };
  
  return (
    <div className="text-white p-2">
      <div className="flex items-center mb-4">
        <BrainCircuit size={24} className="text-green-400 mr-2" />
        <h2 className="text-2xl font-bold font-mono">Skills <span className="text-green-400">.map()</span></h2>
      </div>
      
      <p className="text-gray-300 mb-6">
        My technical skills organized as data structures. Each category corresponds to a specific data structure that best represents how these skills are organized and utilized.
      </p>
      
      <div className="space-y-4">
        {skills.map((skill) => (
          <div 
            key={skill.category}
            className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
          >
            <button 
              className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-700 transition-colors"
              onClick={() => toggleCategory(skill.category)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center">
                <h3 className="font-bold text-lg font-mono text-green-400">
                  {skill.category}
                </h3>
                <span className="text-sm text-gray-400 sm:ml-3 font-mono">
                  // {skill.dsaEquivalent}
                </span>
              </div>
              {expandedCategory === skill.category ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            
            {expandedCategory === skill.category && (
              <div className="px-4 py-3 border-t border-gray-700 bg-gray-900">
                {skill.description && (
                  <p className="text-gray-300 mb-4 text-sm italic">{skill.description}</p>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {skill.items.map((item) => (
                    <div 
                      key={item}
                      className="bg-gray-800 px-3 py-2 rounded border border-gray-700 hover:border-green-500 transition-all"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                
                {skill.dsaEquivalent === 'Array Data Structure' && (
                  <div className="mt-4 px-3 py-2 bg-gray-800 rounded border border-gray-700">
                    <div className="text-xs text-gray-400 mb-2 font-mono">// Array representation</div>
                    <div className="grid grid-cols-6 gap-1">
                      {skill.items.map((item, i) => (
                        <div key={i} className="bg-gray-700 p-2 text-center text-xs rounded overflow-hidden">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {skill.dsaEquivalent === 'Tree Data Structure' && (
                  <div className="mt-4 px-3 py-2 bg-gray-800 rounded border border-gray-700">
                    <div className="text-xs text-gray-400 mb-2 font-mono">// Tree representation</div>
                    <div className="flex flex-col items-center">
                      <div className="w-full flex justify-center">
                        <div className="bg-green-600 px-3 py-1 rounded text-center text-xs mb-2">{skill.items[0]}</div>
                      </div>
                      <div className="w-full flex justify-center gap-2">
                        <div className="bg-green-600/80 px-3 py-1 rounded text-center text-xs mb-2">{skill.items[1]}</div>
                        <div className="bg-green-600/80 px-3 py-1 rounded text-center text-xs mb-2">{skill.items[2]}</div>
                      </div>
                      <div className="w-full flex justify-center gap-1">
                        <div className="bg-green-600/60 px-2 py-1 rounded text-center text-xs">{skill.items[3]}</div>
                        <div className="bg-green-600/60 px-2 py-1 rounded text-center text-xs">{skill.items[4]}</div>
                        <div className="bg-green-600/60 px-2 py-1 rounded text-center text-xs">{skill.items[5]}</div>
                        <div className="bg-green-600/60 px-2 py-1 rounded text-center text-xs">{skill.items[6]}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;