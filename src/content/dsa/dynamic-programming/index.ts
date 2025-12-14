import { Module } from '@/types/module';
import { dpIntroSections } from './content';

export const dynamicProgrammingModule: Module = {
  id: 'dynamic-programming',
  title: 'Dynamic Programming',
  icon: '🧩',
  subModules: [
    {
      id: 'dp-intro',
      title: 'Introduction to DP',
      sections: dpIntroSections,
    },
  ],
};
