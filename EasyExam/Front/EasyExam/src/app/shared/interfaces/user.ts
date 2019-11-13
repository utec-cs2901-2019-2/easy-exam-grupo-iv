import { Exam } from './exam';
export interface User {
  email: string;
  lastName: string;
  name: string;
  password: string;
  phone: string;
  exams: Exam[];
  isAdmin: boolean;
  points: number;
}
