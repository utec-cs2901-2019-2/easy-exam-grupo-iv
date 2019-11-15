import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from '../interfaces/user';
import { Exam } from '../interfaces/exam';
import { Question } from '../classes/question';
import { Category } from '../classes/category';
import { Subcategory } from '../classes/subcategory';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  url = 'http://localhost:8080';
  loginurl = '/login';
  questionsurl = '/questions';
  categoriesurl = '/categories';
  registerurl = '/register';
  saveurl = '/savedata';
  numpages = 1;
  forgoturl = '';
  user: User;

  questions: Question[] = [];
  categories: Category[] = [];

  constructor(private http: HttpClient) {
    this.updatecategories();
    this.updatequestions(1);
  }

  login(Email: string, Password: string): User {
    this.http.post<{email: string; lastName: string; name: string; password: string; phone: string; isAdmin: boolean;
      points: number; token: string}>(this.url + this.loginurl, {email: Email, password: Password})
    .subscribe(
      (data) => {
        this.user = {
          email: data.email,
          lastName: data.lastName,
          name: data.name,
          password: data.password,
          phone: data.phone,
          isAdmin: data.isAdmin,
          points: data.points,
          exams: null
        };
        if (this.user.email === '') {
          return;
        }
        localStorage.setItem('access_token', data.token);
      },
      (err) => {
        this.user = null;
        console.log(err);
      }
    );
    return {...this.user};
  }

  register(Name: string, Email: string, Password: string) {
    this.http.post<{token: string}>(this.url + this.registerurl, {name: Name, email: Email, password: Password})
    .subscribe(
      (data) => {
        localStorage.setItem('access_token', data.token);
      }
    );
  }

  forgotPassword(Email: string) {
    this.http.post(this.url + this.registerurl, { email: Email });
  }

  getpdf(texstring: string, savevalue: Exam) {}

  updatequestions(index: number) {
    if (index > this.numpages) {
      console.log('Overflow');
      index = 1;
    }
    this.http.post<{questions: any; pages: number}>(this.url + this.questionsurl, { questions: 25, page: 1 })
    .subscribe(
      (data) => {
        this.questions = [];
        this.numpages = data.pages;
        for (const i of data.questions) {
          this.questions.push({
            id: i.id,
            allowed: i.allowed,
            creationDate: i.creationDate,
            reports: [],
            score: i.score,
            selected: false,
            answer: i.answer,
            description : i.description,
            subcategory: i.subcategory,
            title: i.title
          });
        }
      }
    );
  }

  updatecategories() {
    this.http.post<Category[]>(this.url + this.categoriesurl, '')
    .subscribe(
      (data) => {
        this.categories = data;
      }
    );
  }

  savedata() {
    const response = {
      email: this.user.email,
      lastName: this.user.lastName,
      name: this.user.name,
      phone: this.user.phone,
      points: this.user.points,
      savedQuestions: []
    };
    for (const i of this.questions) {
      if (i.selected) {
        response.savedQuestions.push(i.id);
      }
      this.http.post(this.url + this.saveurl, response);
    }
  }
}
