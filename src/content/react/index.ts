import { Module } from '@/types/module';
import { reactIntroduction, reactHooks, reactComponents } from './basics';

export const reactBasicsModule: Module = {
  id: 'react-basics',
  title: 'React Fundamentals',
  icon: '⚛️',
  subModules: [reactIntroduction, reactHooks, reactComponents],
};

export const reactModules: Module[] = [reactBasicsModule];
