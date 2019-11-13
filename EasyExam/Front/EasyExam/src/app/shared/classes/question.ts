import { Subcategory } from './subcategory';
import { Report } from '../interfaces/report';
import { User } from '../interfaces/user';

export class Question {
  allowed: boolean;
  creationDate: string;
  reports: Report[];
  score: number;
  selected: boolean;
  constructor(public answer: string, public description: string, public subcategory: Subcategory[], public creator: User) {}
  dislike() {}
  like() {}
  report() {}
  toggle() {}
}
