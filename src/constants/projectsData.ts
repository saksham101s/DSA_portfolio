import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'sorting-visualizer',
    title: 'Sorting Algorithm Visualizer',
    description: 'An interactive web application that visualizes various sorting algorithms including Bubble Sort, Quick Sort, Merge Sort, and more.',
    tags: ['React', 'TypeScript', 'Algorithms', 'Visualization'],
    githubLink: 'https://github.com/username/sorting-visualizer',
    link: 'https://sorting-visualizer-demo.dev',
    dsaConnection: 'Implements and visualizes O(n²) and O(n log n) sorting algorithms with step-by-step execution.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'pathfinding-visualizer',
    title: 'Graph Pathfinding Visualizer',
    description: 'A tool that demonstrates various pathfinding algorithms like Dijkstra\'s, A*, and BFS on a 2D grid.',
    tags: ['JavaScript', 'Graph Algorithms', 'Data Structures', 'Canvas API'],
    githubLink: 'https://github.com/username/pathfinding-visualizer',
    link: 'https://pathfinding-visualizer-demo.dev',
    dsaConnection: 'Utilizes graph traversal algorithms and priority queues for finding optimal paths.',
    image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'data-structure-library',
    title: 'Efficient Data Structures Library',
    description: 'A TypeScript library implementing various data structures with optimal time and space complexity.',
    tags: ['TypeScript', 'Data Structures', 'NPM Package', 'Algorithms'],
    githubLink: 'https://github.com/username/data-structure-library',
    dsaConnection: 'Custom implementations of trees, graphs, heaps, and other advanced data structures with optimal operations.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'leetcode-solutions',
    title: 'LeetCode Solutions Collection',
    description: 'A repository of my solutions to various LeetCode problems with detailed explanations of the approach and time/space complexity analysis.',
    tags: ['Algorithms', 'Problem Solving', 'Multiple Languages', 'LeetCode'],
    githubLink: 'https://github.com/username/leetcode-solutions',
    dsaConnection: 'Demonstrates problem-solving skills using arrays, strings, trees, dynamic programming, and other DSA concepts.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'distributed-cache',
    title: 'Distributed Caching System',
    description: 'A distributed in-memory caching system with LRU eviction policy and consistent hashing for node distribution.',
    tags: ['Go', 'Distributed Systems', 'Caching', 'System Design'],
    githubLink: 'https://github.com/username/distributed-cache',
    dsaConnection: 'Implements hash tables, linked lists for LRU cache, and consistent hashing algorithm for distribution.',
    image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];