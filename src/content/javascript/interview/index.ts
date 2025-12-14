import { SubModule } from '@/types/module';
import { interviewConceptsSections, codingProblemsSections } from './content';

export const jsInterviewConcepts: SubModule = {
  id: 'js-interview-concepts',
  title: 'Interview Concepts',
  sections: interviewConceptsSections,
};

export const jsCodingProblems: SubModule = {
  id: 'js-coding-problems',
  title: 'Coding Problems',
  sections: codingProblemsSections,
};
