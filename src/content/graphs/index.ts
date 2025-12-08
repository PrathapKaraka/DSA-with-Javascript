import { graphBasicsSections, graphTraversalSections } from './content';
import { Module } from '@/types/module';

export const graphsModule: Module = {
  id: 'graphs',
  title: 'Graphs',
  icon: '🕸️',
  subModules: [
    {
      id: 'graph-intro',
      title: 'Graph Basics',
      sections: graphBasicsSections
    },
    {
      id: 'graph-traversal',
      title: 'Graph Traversals',
      sections: graphTraversalSections
    }
  ]
};
