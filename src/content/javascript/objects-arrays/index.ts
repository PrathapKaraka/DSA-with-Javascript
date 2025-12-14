import { SubModule } from '@/types/module';
import { objectsSections, arraysSections } from './content';

export const jsObjects: SubModule = {
  id: 'js-objects',
  title: 'Objects',
  sections: objectsSections,
};

export const jsArrays: SubModule = {
  id: 'js-arrays',
  title: 'Arrays',
  sections: arraysSections,
};
