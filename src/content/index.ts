// Import all modules from their folders
import { arraysModule } from './arrays';
import { linkedListsModule } from './linked-lists';
import { stacksQueuesModule } from './stacks-queues';
import { treesModule } from './trees';
import { graphsModule } from './graphs';
import { sortingModule } from './sorting';
import { dynamicProgrammingModule } from './dynamic-programming';
import { Module } from '@/types/module';

// Export all modules as an array
// Add new modules here when you create them
export const dsaModules: Module[] = [
  arraysModule,
  linkedListsModule,
  stacksQueuesModule,
  treesModule,
  graphsModule,
  sortingModule,
  dynamicProgrammingModule,
];

// Re-export types for convenience
export type { Module, SubModule } from '@/types/module';
