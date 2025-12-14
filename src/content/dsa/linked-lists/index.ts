import { Module } from '@/types/module';
import { linkedListSections } from './content';

export const linkedListsModule: Module = {
  id: 'linked-lists',
  title: 'Linked Lists',
  icon: '🔗',
  subModules: [
    {
      id: 'linked-lists-basics',
      title: 'Basics & Operations',
      sections: linkedListSections,
    },
  ],
};
