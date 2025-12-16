import { SubModule } from '@/types/module';
import { 
  introductionSections, 
  variablesSections, 
  operatorsSections, 
  functionsSections,
  controlFlowSections 
} from './content';

export const jsIntroduction: SubModule = {
  id: 'js-intro',
  title: 'Introduction',
  sections: introductionSections,
};

export const jsVariables: SubModule = {
  id: 'js-variables',
  title: 'Variables & Data Types',
  sections: variablesSections,
};

export const jsOperators: SubModule = {
  id: 'js-operators',
  title: 'Operators',
  sections: operatorsSections,
};

export const jsFunctions: SubModule = {
  id: 'js-functions',
  title: 'Functions & Closures',
  sections: functionsSections,
};

export const jsControlFlow: SubModule = {
  id: 'js-control-flow',
  title: 'Control Flow',
  sections: controlFlowSections,
};
