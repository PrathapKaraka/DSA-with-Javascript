import {
  linkedListIntroContent,
  linkedListIntroCode,
  linkedListReversalContent,
  linkedListReversalCode,
} from './content';
import { Module } from '@/types/module';

export const linkedListsModule: Module = {
  id: 'linked-lists',
  title: 'Linked Lists',
  icon: '🔗',
  subModules: [
    {
      id: 'll-intro',
      title: 'Introduction',
      content: linkedListIntroContent,
      codeExample: linkedListIntroCode,
    },
    {
      id: 'll-reversal',
      title: 'Reversing a Linked List',
      content: linkedListReversalContent,
      codeExample: linkedListReversalCode,
    },
  ],
};
