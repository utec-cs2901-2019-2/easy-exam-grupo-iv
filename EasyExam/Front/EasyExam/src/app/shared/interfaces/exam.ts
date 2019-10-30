import { Question } from '../classes/question';
import { Subcategory } from '../classes/subcategory';
import { Teacher } from '../classes/teacher';

export interface Exam {
  college: string;
  course: string;
  creation_date: string;
  exam_date: string;
  max_points: number;
  question_number: number;
  questions: Question[];
  subcategories: Subcategory[];
  rules: string;
  specs: string;
  title: string;
  creator: Teacher;
}
