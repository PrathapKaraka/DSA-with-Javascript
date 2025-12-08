import { binaryTreeSections, bstSections } from './content';
import { Module } from '@/types/module';

export const treesModule: Module = {
  id: 'trees',
  title: 'Trees',
  icon: '🌳',
  subModules: [
    {
      id: 'tree-intro',
      title: 'Binary Trees',
      sections: binaryTreeSections
    },
    {
      id: 'bst',
      title: 'Binary Search Trees',
      sections: bstSections
    }
  ]
};
