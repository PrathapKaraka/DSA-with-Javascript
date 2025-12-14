import { Module } from '@/types/module';
import { binaryTreeSections, bstSections } from './content';

export const treesModule: Module = {
  id: 'trees',
  title: 'Trees',
  icon: '🌳',
  subModules: [
    {
      id: 'binary-trees',
      title: 'Binary Trees',
      sections: binaryTreeSections,
    },
    {
      id: 'bst',
      title: 'Binary Search Trees',
      sections: bstSections,
    },
  ],
};
