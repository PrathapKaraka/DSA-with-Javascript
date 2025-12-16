import { Module } from '@/types/module';
import { jsIntroduction, jsVariables, jsOperators, jsFunctions, jsControlFlow } from './basics';
import { jsObjects, jsArrays } from './objects-arrays';
import { jsAsyncBasics, jsPromises, jsAsyncAwait } from './async';
import { jsES6Features, jsModulesSubmodule } from './es6-features';
import { jsDom, jsEvents } from './dom-events';
import { jsInterviewConcepts, jsCodingProblems } from './interview';

export const jsBasicsModule: Module = {
  id: 'js-basics',
  title: 'JavaScript Basics',
  icon: 'Code',
  subModules: [jsIntroduction, jsVariables, jsOperators, jsFunctions, jsControlFlow],
};

export const jsObjectsArraysModule: Module = {
  id: 'js-objects-arrays',
  title: 'Objects & Arrays',
  icon: 'Database',
  subModules: [jsObjects, jsArrays],
};

export const jsAsyncModule: Module = {
  id: 'js-async',
  title: 'Asynchronous JavaScript',
  icon: 'Clock',
  subModules: [jsAsyncBasics, jsPromises, jsAsyncAwait],
};

export const jsES6Module: Module = {
  id: 'js-es6',
  title: 'ES6+ & Modules',
  icon: 'Sparkles',
  subModules: [jsES6Features, jsModulesSubmodule],
};

export const jsDomEventsModule: Module = {
  id: 'js-dom-events',
  title: 'DOM & Events',
  icon: 'MousePointer',
  subModules: [jsDom, jsEvents],
};

export const jsInterviewModule: Module = {
  id: 'js-interview',
  title: 'Interview Preparation',
  icon: 'GraduationCap',
  subModules: [jsInterviewConcepts, jsCodingProblems],
};

export const javascriptModules: Module[] = [
  jsBasicsModule,
  jsObjectsArraysModule,
  jsAsyncModule,
  jsES6Module,
  jsDomEventsModule,
  jsInterviewModule,
];
