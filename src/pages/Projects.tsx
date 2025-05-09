import React, { useState } from 'react';
import { projects } from '../constants/projectsData';
import { ExternalLink, Github, Code } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects by selected tag
  const filteredProjects = selectedTag 
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;
  
  return (
    <div className="text-white p-2">
      <div className="flex items-center mb-4">
        <Code size={24} className="text-blue-400 mr-2" />
        <h2 className="text-2xl font-bold font-mono">Projects <span className="text-blue-400">()</span></h2>
      </div>
      
      <p className="text-gray-300 mb-4">
        A collection of projects showcasing my DSA and development skills. Each project is connected to specific data structures or algorithms.
      </p>
      
      {/* Filter tags */}
      <div className="mb-6">
        <div className="text-sm text-gray-400 mb-2">Filter by tag:</div>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-full text-xs font-mono
              ${!selectedTag 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button 
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-mono
                ${selectedTag === tag 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map(project => (
          <div 
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all flex flex-col"
          >
            {project.image && (
              <div 
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            )}
            
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-bold mb-2 font-mono">{project.title}</h3>
              
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              
              <div className="text-xs text-gray-400 mb-4">
                <span className="font-bold text-blue-400">DSA Connection: </span>
                {project.dsaConnection}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-gray-700 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-2">
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white text-sm"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                )}
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 text-sm"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;