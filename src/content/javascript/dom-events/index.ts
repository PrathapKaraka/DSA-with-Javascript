import { SubModule } from '@/types/module';
import { domSections, eventsSections } from './content';

export const jsDom: SubModule = {
  id: 'js-dom',
  title: 'DOM Manipulation',
  sections: domSections,
};

export const jsEvents: SubModule = {
  id: 'js-events',
  title: 'Events',
  sections: eventsSections,
};
