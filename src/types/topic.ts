import { Module } from './module';

export interface Topic {
  id: string;
  title: string;
  icon: string;
  description: string;
  modules: Module[];
}
