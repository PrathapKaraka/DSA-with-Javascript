import { Module } from '@/types/module';
import { arraySections } from './content';

export const arraysModule: Module = {
  id: 'arrays',
  title: 'Arrays',
  icon: '📊',
  subModules: [
    {
      id: 'arrays-basics',
      title: 'Basics & Operations',
      sections: arraySections,
    },
  ],
};
