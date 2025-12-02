import {
  stackIntroContent,
  stackIntroCode,
  queueIntroContent,
  queueIntroCode,
} from './content';
import { Module } from '@/types/module';

export const stacksQueuesModule: Module = {
  id: 'stacks-queues',
  title: 'Stacks & Queues',
  icon: '📚',
  subModules: [
    {
      id: 'stack-intro',
      title: 'Stack Introduction',
      content: stackIntroContent,
      codeExample: stackIntroCode,
    },
    {
      id: 'queue-intro',
      title: 'Queue Introduction',
      content: queueIntroContent,
      codeExample: queueIntroCode,
    },
  ],
};
