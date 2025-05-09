import React, { useEffect, useRef } from 'react';
import { Code, BrainCircuit } from 'lucide-react';

const HomePage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Animation for binary tree visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Node class for tree visualization
    class TreeNode {
      x: number;
      y: number;
      radius: number;
      value: number;
      left: TreeNode | null;
      right: TreeNode | null;
      highlighted: boolean;
      
      constructor(x: number, y: number, value: number) {
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.value = value;
        this.left = null;
        this.right = null;
        this.highlighted = false;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.highlighted ? '#4ade80' : '#60a5fa';
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '14px monospace';
        ctx.fillText(this.value.toString(), this.x, this.y);
        
        // Draw lines to children
        if (this.left) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y + this.radius);
          ctx.lineTo(this.left.x, this.left.y - this.left.radius);
          ctx.strokeStyle = '#4b5563';
          ctx.stroke();
          this.left.draw(ctx);
        }
        
        if (this.right) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y + this.radius);
          ctx.lineTo(this.right.x, this.right.y - this.right.radius);
          ctx.strokeStyle = '#4b5563';
          ctx.stroke();
          this.right.draw(ctx);
        }
      }
    }
    
    // Create a binary search tree
    const createBST = () => {
      const root = new TreeNode(canvas.width / 2, 80, 50);
      
      // Level 1
      root.left = new TreeNode(canvas.width / 4, 160, 25);
      root.right = new TreeNode(3 * canvas.width / 4, 160, 75);
      
      // Level 2
      root.left.left = new TreeNode(canvas.width / 8, 240, 12);
      root.left.right = new TreeNode(3 * canvas.width / 8, 240, 37);
      root.right.left = new TreeNode(5 * canvas.width / 8, 240, 62);
      root.right.right = new TreeNode(7 * canvas.width / 8, 240, 87);
      
      return root;
    };
    
    let tree = createBST();
    let animationFrame: number;
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set background
      ctx.fillStyle = 'rgba(17, 24, 39, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw tree
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 2;
      tree.draw(ctx);
      
      // Randomly highlight nodes
      if (Math.random() > 0.97) {
        const nodes = getAllNodes(tree);
        nodes.forEach(node => {
          node.highlighted = false;
        });
        
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        if (randomNode) {
          randomNode.highlighted = true;
        }
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    // Helper to get all nodes
    const getAllNodes = (node: TreeNode | null): TreeNode[] => {
      if (!node) return [];
      return [node, ...getAllNodes(node.left), ...getAllNodes(node.right)];
    };
    
    // Start animation
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen">
      {/* Background canvas for tree visualization */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 opacity-30"
      />
      
      <div className="relative z-10 text-center pt-10 px-4">
        <div className="flex justify-center items-center mb-4">
          <BrainCircuit size={40} className="text-blue-500 mr-2" />
          <h1 className="text-4xl font-bold text-white font-mono">DSA<span className="text-blue-500">Portfolio</span></h1>
          <Code size={40} className="text-blue-500 ml-2" />
        </div>
        
        <h2 className="text-xl text-gray-300 mb-8 font-mono">Algorithms • Data Structures • Web Development</h2>
        
        <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg border border-gray-700">
          <p className="text-gray-300 mb-6 text-lg">
            Welcome to my interactive portfolio! Use the terminal below to navigate through my projects, skills, and more.
          </p>
          
          <div className="text-left bg-gray-900 p-4 rounded-md border border-gray-700 mb-6">
            <p className="text-green-400 font-mono">Try these commands:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              <div className="font-mono text-blue-400">$ help</div>
              <div className="text-gray-400">Show all available commands</div>
              <div className="font-mono text-blue-400">$ projects</div>
              <div className="text-gray-400">Browse my portfolio projects</div>
              <div className="font-mono text-blue-400">$ skills</div>
              <div className="text-gray-400">See my technical skills</div>
              <div className="font-mono text-blue-400">$ about</div>
              <div className="text-gray-400">Learn more about me</div>
            </div>
          </div>
          
          <div className="text-gray-300 mb-4">
            <p className="mb-2">This portfolio is inspired by Data Structures and Algorithms, with interactive terminal commands for navigation.</p>
            <p>As you explore, you'll see how each section relates to a specific data structure or algorithm concept.</p>
          </div>
          
          <div className="text-sm text-gray-400">
            Use <span className="bg-gray-700 text-white px-2 py-1 rounded font-mono">Tab</span> for command completion and <span className="bg-gray-700 text-white px-2 py-1 rounded font-mono">↑</span><span className="bg-gray-700 text-white px-2 py-1 rounded font-mono">↓</span> to navigate command history
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;