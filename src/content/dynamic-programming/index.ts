import { dpIntroSections } from './content';
import { Module } from '@/types/module';

export const dynamicProgrammingModule: Module = {
  id: 'dynamic-programming',
  title: 'Dynamic Programming',
  icon: '🧩',
  subModules: [
    {
      id: 'dp-intro',
      title: 'DP Introduction',
      sections: dpIntroSections
    }
  ]
};
