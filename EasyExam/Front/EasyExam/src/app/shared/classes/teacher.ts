import { User } from '../interfaces/user';
import { Exam } from '../interfaces/exam';
import { Question } from './question';

export class Teacher implements User {
  email: string;
  lastName: string;
  name: string;
  password: string;
  phone: string;
  exams: Exam[];
  isAdmin: boolean;
  points: number;
  questions: Question[];
  reportedQuestions: Question[];
}
