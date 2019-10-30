import { Question } from '../classes/question';
import { Teacher } from '../classes/teacher';

export interface Report {
  description: string;
  question: Question;
  creator: Teacher;
}
