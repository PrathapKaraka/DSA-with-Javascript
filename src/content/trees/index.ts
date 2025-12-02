import {
  binaryTreeContent,
  binaryTreeCode,
  bstContent,
  bstCode,
} from './content';
import { Module } from '@/types/module';

export const treesModule: Module = {
  id: 'trees',
  title: 'Trees',
  icon: '🌳',
  subModules: [
    {
      id: 'tree-intro',
      title: 'Binary Trees',
      content: binaryTreeContent,
      codeExample: binaryTreeCode,
    },
    {
      id: 'bst',
      title: 'Binary Search Trees',
      content: bstContent,
      codeExample: bstCode,
    },
  ],
};
