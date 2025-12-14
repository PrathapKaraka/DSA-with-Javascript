import { Module } from '@/types/module';
import { stackIntroSections, queueIntroSections } from './content';

export const stacksQueuesModule: Module = {
  id: 'stacks-queues',
  title: 'Stacks & Queues',
  icon: '📚',
  subModules: [
    {
      id: 'stacks-intro',
      title: 'Stacks',
      sections: stackIntroSections,
    },
    {
      id: 'queues-intro',
      title: 'Queues',
      sections: queueIntroSections,
    },
  ],
};
