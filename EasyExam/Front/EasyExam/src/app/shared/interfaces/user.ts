import { Exam } from './exam';
import { Question } from '../classes/question';

export interface User {
  email: string;
  lastName: string;
  name: string;
  password: string;
  phone: string;
  exams: Exam[];
  isAdmin: boolean;
  points: number;
  savedQuestions: any;
}
