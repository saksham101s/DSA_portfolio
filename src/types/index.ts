export type Command = {
  name: string;
  description: string;
  usage?: string;
  aliases?: string[];
  execute: (args?: string[]) => void;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  githubLink?: string;
  dsaConnection: string;
  image?: string;
};

export type Skill = {
  category: string;
  dsaEquivalent: string;
  items: string[];
  description?: string;
};

export type CommandHistoryItem = {
  command: string;
  output?: React.ReactNode;
};

export type TerminalContextType = {
  history: CommandHistoryItem[];
  addToHistory: (item: CommandHistoryItem) => void;
  clearHistory: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
};