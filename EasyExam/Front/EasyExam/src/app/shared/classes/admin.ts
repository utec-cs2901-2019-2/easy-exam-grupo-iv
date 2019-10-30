import { User } from '../interfaces/user';
import { Question } from './question';

export class Admin implements User {
  disabledQuestions: Question[];
  constructor(public email: string, public lastName: string, public name: string, public password: string, public phone: string) {}
  addQuestion(question: Question) {
    this.disabledQuestions.push(question);
  }
}
