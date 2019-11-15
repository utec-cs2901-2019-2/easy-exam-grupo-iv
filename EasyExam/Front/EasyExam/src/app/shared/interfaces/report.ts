import { Question } from '../classes/question';
import { User } from './user';

export interface Report {
  description: string;
  question: Question;
  creator: User;
}
