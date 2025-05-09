import React from 'react';
import { aboutData } from '../constants/aboutData';
import { User, GraduationCap, Briefcase } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="text-white p-2">
      <div className="flex items-center mb-4">
        <User size={24} className="text-purple-400 mr-2" />
        <h2 className="text-2xl font-bold font-mono">About <span className="text-purple-400">.me</span></h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-3 bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="font-mono text-sm text-purple-400 mb-1">// Bio</div>
          <h1 className="text-xl font-bold mb-2">{aboutData.name}</h1>
          <h2 className="text-lg text-gray-300 mb-4">{aboutData.title}</h2>
          <p className="text-gray-300">{aboutData.bio}</p>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          {/* Education */}
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center mb-4">
              <GraduationCap size={20} className="text-purple-400 mr-2" />
              <h3 className="text-lg font-bold font-mono">Education</h3>
            </div>
            
            <div className="space-y-4">
              {aboutData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-purple-500 pl-4">
                  <h4 className="font-bold">{edu.degree}</h4>
                  <div className="text-gray-300 text-sm">{edu.institution}</div>
                  <div className="text-gray-400 text-sm mb-2">{edu.year}</div>
                  
                  <div className="text-xs text-gray-400 mb-1 font-mono">// Highlights</div>
                  <ul className="text-sm text-gray-300 list-disc list-inside">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience */}
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center mb-4">
              <Briefcase size={20} className="text-purple-400 mr-2" />
              <h3 className="text-lg font-bold font-mono">Experience</h3>
            </div>
            
            <div className="space-y-4">
              {aboutData.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-purple-500 pl-4">
                  <h4 className="font-bold">{exp.title}</h4>
                  <div className="text-gray-300 text-sm">{exp.company}</div>
                  <div className="text-gray-400 text-sm mb-2">{exp.period}</div>
                  
                  <div className="text-xs text-gray-400 mb-1 font-mono">// Responsibilities</div>
                  <ul className="text-sm text-gray-300 list-disc list-inside">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {/* DSA Background */}
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <div className="font-mono text-sm text-purple-400 mb-2">// DSA Background</div>
            <p className="text-gray-300 text-sm">
              I'm deeply passionate about data structures and algorithms, having spent considerable time studying and implementing advanced concepts. I regularly participate in coding competitions and contribute to algorithm visualization projects.
            </p>
            
            <div className="mt-4">
              <div className="font-mono text-xs text-purple-400 mb-1">// Algorithmic Specialties</div>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-2 py-1 bg-purple-900/50 rounded-full text-xs">Graph Algorithms</span>
                <span className="px-2 py-1 bg-purple-900/50 rounded-full text-xs">Dynamic Programming</span>
                <span className="px-2 py-1 bg-purple-900/50 rounded-full text-xs">Tree Traversals</span>
                <span className="px-2 py-1 bg-purple-900/50 rounded-full text-xs">Advanced Sorting</span>
                <span className="px-2 py-1 bg-purple-900/50 rounded-full text-xs">Path Finding</span>
              </div>
            </div>
          </div>
          
          {/* Big-O Proficiency */}
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <div className="font-mono text-sm text-purple-400 mb-2">// Big-O Proficiency</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">O(1) Constant</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">O(log n) Logarithmic</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">O(n) Linear</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">O(n log n) Linearithmic</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">O(n²) Quadratic</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">O(2ⁿ) Exponential</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact */}
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <div className="font-mono text-sm text-purple-400 mb-2">// Contact</div>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <span className="text-purple-400">Email:</span> {aboutData.contact.email}
              </li>
              <li>
                <span className="text-purple-400">GitHub:</span> {aboutData.contact.github}
              </li>
              <li>
                <span className="text-purple-400">LinkedIn:</span> {aboutData.contact.linkedin}
              </li>
              <li>
                <span className="text-purple-400">Twitter:</span> {aboutData.contact.twitter}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;