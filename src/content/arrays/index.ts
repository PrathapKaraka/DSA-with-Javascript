import { Module } from '@/types/module';
import { arraysIntroSections, twoPointersSections, slidingWindowSections } from './content';

export const arraysModule: Module = {
  id: 'arrays',
  title: 'Arrays',
  icon: '📊',
  subModules: [
    {
      id: 'arrays-intro',
      title: 'Introduction to Arrays',
      sections: arraysIntroSections
    },
    {
      id: 'two-pointers',
      title: 'Two Pointers',
      sections: twoPointersSections
    },
    {
      id: 'sliding-window',
      title: 'Sliding Window',
      sections: slidingWindowSections
    }
  ]
};
