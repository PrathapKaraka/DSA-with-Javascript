import { Module } from '@/types/module';
import { sortingOverviewSections } from './content';

export const sortingModule: Module = {
  id: 'sorting',
  title: 'Sorting',
  icon: '🔢',
  subModules: [
    {
      id: 'sorting-overview',
      title: 'Sorting Algorithms',
      sections: sortingOverviewSections,
    },
  ],
};
