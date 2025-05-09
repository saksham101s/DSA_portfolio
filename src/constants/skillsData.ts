import { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    dsaEquivalent: 'Array Data Structure',
    description: 'Fundamental building blocks that enable creating various solutions, like arrays are the foundation of many data structures.',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go']
  },
  {
    category: 'Frontend Development',
    dsaEquivalent: 'Tree Data Structure',
    description: 'Hierarchical structure similar to the DOM tree that builds interfaces from components.',
    items: ['React', 'Vue.js', 'Next.js', 'HTML5/CSS3', 'Tailwind CSS', 'Redux', 'Webpack']
  },
  {
    category: 'Backend Development',
    dsaEquivalent: 'Graph Data Structure',
    description: 'Interconnected systems and services that communicate through various endpoints, like nodes in a graph.',
    items: ['Node.js', 'Express', 'Django', 'Spring Boot', 'GraphQL', 'RESTful APIs']
  },
  {
    category: 'Database Technologies',
    dsaEquivalent: 'Hash Tables & Indices',
    description: 'Optimized storage and retrieval systems that use indexing for fast access, like hash tables.',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase']
  },
  {
    category: 'DevOps & Cloud',
    dsaEquivalent: 'Queue & Stack',
    description: 'CI/CD pipelines process tasks in order and cloud resources scale up/down as needed, similar to queue operations.',
    items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD', 'Linux', 'Terraform']
  },
  {
    category: 'Algorithm Expertise',
    dsaEquivalent: 'Algorithm Paradigms',
    description: 'Direct implementation of algorithmic problem-solving approaches.',
    items: ['Dynamic Programming', 'Greedy Algorithms', 'Divide & Conquer', 'Graph Algorithms', 'Searching & Sorting']
  }
];