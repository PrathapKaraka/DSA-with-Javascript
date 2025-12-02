import {
  arraysIntroContent,
  arraysIntroCode,
  twoPointersContent,
  twoPointersCode,
  slidingWindowContent,
  slidingWindowCode,
} from './content';
import { Module } from '@/types/module';

export const arraysModule: Module = {
  id: 'arrays',
  title: 'Arrays',
  icon: '📊',
  subModules: [
    {
      id: 'arrays-intro',
      title: 'Introduction to Arrays',
      content: arraysIntroContent,
      codeExample: arraysIntroCode,
    },
    {
      id: 'arrays-two-pointers',
      title: 'Two Pointers Technique',
      content: twoPointersContent,
      codeExample: twoPointersCode,
    },
    {
      id: 'arrays-sliding-window',
      title: 'Sliding Window',
      content: slidingWindowContent,
      codeExample: slidingWindowCode,
    },
  ],
};
