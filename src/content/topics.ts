import { Topic } from '@/types/topic';
import { dsaModules } from './index';
import { jsModules } from './javascript';
import { reactModules } from './react';

export const topics: Topic[] = [
  {
    id: 'dsa',
    title: 'DSA',
    icon: '🧮',
    description: 'Data Structures & Algorithms',
    modules: dsaModules,
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: '📜',
    description: 'JavaScript Fundamentals',
    modules: jsModules,
  },
  {
    id: 'react',
    title: 'React',
    icon: '⚛️',
    description: 'React.js Library',
    modules: reactModules,
  },
];

export type { Topic } from '@/types/topic';
