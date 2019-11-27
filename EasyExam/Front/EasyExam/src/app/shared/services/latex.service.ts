import { Injectable } from '@angular/core';
import { Question } from '../classes/question';
import { Exam } from '../interfaces/exam';

@Injectable({
  providedIn: 'root'
})
export class LatexService {
  exam: Exam;
  scores: number[] = [];
  constructor() {
    this.exam = null;
  }
}
