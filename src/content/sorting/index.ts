import { sortingOverviewSections } from './content';
import { Module } from '@/types/module';

export const sortingModule: Module = {
  id: 'sorting',
  title: 'Sorting Algorithms',
  icon: '🔢',
  subModules: [
    {
      id: 'sort-comparison',
      title: 'Sorting Overview',
      sections: sortingOverviewSections
    }
  ]
};
