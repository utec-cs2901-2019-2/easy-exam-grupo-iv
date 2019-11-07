import { Subcategory } from './subcategory';
import { Teacher } from './teacher';
import { Report } from '../interfaces/report';

export class Question {
  allowed: boolean;
  creationDate: string;
  reports: Report[];
  score: number;
  constructor(public answer: string, public description: string, public subcategory: Subcategory[], public creator: Teacher) {}
  dislike() {}
  like() {}
  report() {}
  toggle() {}
}
