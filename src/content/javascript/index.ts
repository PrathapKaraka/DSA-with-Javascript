import { Module } from '@/types/module';
import { jsIntroduction, jsVariables, jsOperators, jsFunctions } from './basics';
import { jsObjects, jsArrays } from './objects-arrays';
import { jsAsyncBasics, jsPromises, jsAsyncAwait } from './async';
import { jsES6Features, jsModulesSubmodule } from './es6-features';
import { jsDom, jsEvents } from './dom-events';
import { jsInterviewConcepts, jsCodingProblems } from './interview';

export const jsBasicsModule: Module = {
  id: 'js-basics',
  title: 'JavaScript Basics',
  icon: '📝',
  subModules: [jsIntroduction, jsVariables, jsOperators, jsFunctions],
};

export const jsObjectsArraysModule: Module = {
  id: 'js-objects-arrays',
  title: 'Objects & Arrays',
  icon: '📦',
  subModules: [jsObjects, jsArrays],
};

export const jsAsyncModule: Module = {
  id: 'js-async',
  title: 'Async JavaScript',
  icon: '⚡',
  subModules: [jsAsyncBasics, jsPromises, jsAsyncAwait],
};

export const jsES6Module: Module = {
  id: 'js-es6',
  title: 'ES6+ Features',
  icon: '✨',
  subModules: [jsES6Features, jsModulesSubmodule],
};

export const jsDomEventsModule: Module = {
  id: 'js-dom-events',
  title: 'DOM & Events',
  icon: '🖱️',
  subModules: [jsDom, jsEvents],
};

export const jsInterviewModule: Module = {
  id: 'js-interview',
  title: 'Interview Prep',
  icon: '🎯',
  subModules: [jsInterviewConcepts, jsCodingProblems],
};

export const jsModules: Module[] = [
  jsBasicsModule,
  jsObjectsArraysModule,
  jsAsyncModule,
  jsES6Module,
  jsDomEventsModule,
  jsInterviewModule,
];
