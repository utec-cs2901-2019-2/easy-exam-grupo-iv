import { Injectable } from '@angular/core';
import { Question } from '../classes/question';
import { AuthService } from './auth.service';
import { Exam } from '../interfaces/exam';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LatexService {
  header: string;
  content: string;
  footer: string;
  constructor(private authservice: AuthService, private http: HttpService) { }
  generatepdf(exam: Exam) {}
  generatelatex(): string {
    let result: string;
    result = '';
    return result;
  }
}
