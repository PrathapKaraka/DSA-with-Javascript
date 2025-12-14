import { SubModule } from '@/types/module';
import { es6BasicsSections, modulesSections } from './content';

export const jsES6Features: SubModule = {
  id: 'js-es6',
  title: 'ES6+ Features',
  sections: es6BasicsSections,
};

export const jsModulesSubmodule: SubModule = {
  id: 'js-modules',
  title: 'Modules',
  sections: modulesSections,
};
