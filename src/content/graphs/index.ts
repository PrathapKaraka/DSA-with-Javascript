import {
  graphBasicsContent,
  graphBasicsCode,
  graphTraversalContent,
  graphTraversalCode,
} from './content';
import { Module } from '@/types/module';

export const graphsModule: Module = {
  id: 'graphs',
  title: 'Graphs',
  icon: '🕸️',
  subModules: [
    {
      id: 'graph-intro',
      title: 'Graph Basics',
      content: graphBasicsContent,
      codeExample: graphBasicsCode,
    },
    {
      id: 'graph-traversal',
      title: 'Graph Traversals',
      content: graphTraversalContent,
      codeExample: graphTraversalCode,
    },
  ],
};
