import { Module } from '@/types/module';
import { graphBasicsSections, graphTraversalSections } from './content';

export const graphsModule: Module = {
  id: 'graphs',
  title: 'Graphs',
  icon: '🕸️',
  subModules: [
    {
      id: 'graphs-basics',
      title: 'Graph Basics',
      sections: graphBasicsSections,
    },
    {
      id: 'graph-traversals',
      title: 'Traversals (DFS/BFS)',
      sections: graphTraversalSections,
    },
  ],
};
