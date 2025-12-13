import { Module } from '@/types/module';
import { jsIntroduction, jsVariables, jsFunctions } from './basics';

export const jsBasicsModule: Module = {
  id: 'js-basics',
  title: 'JavaScript Basics',
  icon: '📝',
  subModules: [jsIntroduction, jsVariables, jsFunctions],
};

export const jsModules: Module[] = [jsBasicsModule];
