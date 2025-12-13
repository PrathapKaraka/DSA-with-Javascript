import { SubModule } from '@/types/module';
import { jsIntroSections, variablesSections, functionsSections } from './content';

export const jsIntroduction: SubModule = {
  id: 'js-introduction',
  title: 'Introduction to JavaScript',
  sections: jsIntroSections,
};

export const jsVariables: SubModule = {
  id: 'js-variables',
  title: 'Variables & Scope',
  sections: variablesSections,
};

export const jsFunctions: SubModule = {
  id: 'js-functions',
  title: 'Functions & Closures',
  sections: functionsSections,
};
