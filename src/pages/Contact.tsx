import React from 'react';
import { aboutData } from '../constants/aboutData';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="text-white p-2">
      <div className="flex items-center mb-4">
        <Mail size={24} className="text-yellow-400 mr-2" />
        <h2 className="text-2xl font-bold font-mono">Contact <span className="text-yellow-400">await .send()</span></h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-bold mb-4 font-mono">Get In Touch</h3>
          
          <p className="text-gray-300 mb-6">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out through any of the following channels:
          </p>
          
          <div className="space-y-4">
            <a 
              href={`mailto:${aboutData.contact.email}`}
              className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <Mail size={20} className="mr-3" />
              <span>{aboutData.contact.email}</span>
            </a>
            
            <a 
              href={`https://${aboutData.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <Github size={20} className="mr-3" />
              <span>{aboutData.contact.github}</span>
            </a>
            
            <a 
              href={`https://${aboutData.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <Linkedin size={20} className="mr-3" />
              <span>{aboutData.contact.linkedin}</span>
            </a>
            
            <a 
              href={`https://twitter.com/${aboutData.contact.twitter.substring(1)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <Twitter size={20} className="mr-3" />
              <span>{aboutData.contact.twitter}</span>
            </a>
          </div>
          
          <div className="mt-8 px-4 py-3 bg-gray-900 rounded border border-gray-700">
            <div className="text-xs text-yellow-400 font-mono mb-2">// Response time</div>
            <p className="text-sm text-gray-300">
              I typically respond to all messages within 24-48 hours. For urgent inquiries, email is the fastest way to reach me.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-bold mb-4 font-mono">Send a Message</h3>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                placeholder="What is this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded flex items-center justify-center transition-colors"
            >
              <Send size={16} className="mr-2" />
              Send Message
            </button>
            
            <div className="text-xs text-gray-400 font-mono text-center mt-2">
              // This form is for demonstration purposes only
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;