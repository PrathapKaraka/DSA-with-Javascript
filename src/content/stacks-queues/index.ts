import { stackIntroSections, queueIntroSections } from './content';
import { Module } from '@/types/module';

export const stacksQueuesModule: Module = {
  id: 'stacks-queues',
  title: 'Stacks & Queues',
  icon: '📚',
  subModules: [
    {
      id: 'stack-intro',
      title: 'Stack Introduction',
      sections: stackIntroSections
    },
    {
      id: 'queue-intro',
      title: 'Queue Introduction',
      sections: queueIntroSections
    }
  ]
};
