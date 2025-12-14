import { SubModule } from '@/types/module';
import { asyncBasicsSections, promisesSections, asyncAwaitSections } from './content';

export const jsAsyncBasics: SubModule = {
  id: 'js-async-basics',
  title: 'Event Loop & Callbacks',
  sections: asyncBasicsSections,
};

export const jsPromises: SubModule = {
  id: 'js-promises',
  title: 'Promises',
  sections: promisesSections,
};

export const jsAsyncAwait: SubModule = {
  id: 'js-async-await',
  title: 'Async/Await',
  sections: asyncAwaitSections,
};
