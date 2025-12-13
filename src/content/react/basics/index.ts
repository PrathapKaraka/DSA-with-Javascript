import { SubModule } from '@/types/module';
import { reactIntroSections, hooksSections, componentsSections } from './content';

export const reactIntroduction: SubModule = {
  id: 'react-introduction',
  title: 'Introduction to React',
  sections: reactIntroSections,
};

export const reactHooks: SubModule = {
  id: 'react-hooks',
  title: 'React Hooks',
  sections: hooksSections,
};

export const reactComponents: SubModule = {
  id: 'react-components',
  title: 'Component Patterns',
  sections: componentsSections,
};
