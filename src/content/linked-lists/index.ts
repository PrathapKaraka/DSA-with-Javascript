import { linkedListIntroSections, linkedListReversalSections } from './content';
import { Module } from '@/types/module';

export const linkedListsModule: Module = {
  id: 'linked-lists',
  title: 'Linked Lists',
  icon: '🔗',
  subModules: [
    {
      id: 'll-intro',
      title: 'Introduction',
      sections: linkedListIntroSections
    },
    {
      id: 'll-reversal',
      title: 'Reversing a Linked List',
      sections: linkedListReversalSections
    }
  ]
};
