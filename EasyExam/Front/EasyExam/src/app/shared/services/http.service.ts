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
  registerurl = '/register';
  forgoturl = '';
  user: User;

  questions: Question[] = [];
  categories: Category[] = [];
  subcategories: Subcategory[] = [];

  constructor(private http: HttpClient) {
    this.updatecategories();
    this.updatesubcategories();
    this.updatequestions();
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
  updatequestions() {
    for (let i = 0; i < 100; i++) {
      let qstions = [];
      for (let j = 0; j < i; j++) {
        qstions.push(this.subcategories[Math.floor(Math.random() * (this.subcategories.length - 1 - 0 + 1) + 0)]);
      }
      console.log(qstions);
      const quest = new Question('48', `Mike tiene 5 carros y va a comprar 8,
si el sol esta alineado, cual es el volumen del planeta tierra`, qstions, this.user);
      quest.score  = 4;
      quest.selected = false;
      this.questions.push(quest);
      qstions = [];
    }
  }
  updatecategories() {
    for (let i = 0; i < 10; i++) {
      const quest = new Category('Computacion');
      this.categories.push(quest);
    }
  }
  updatesubcategories() {
    for (let i = 0; i < 10; i++) {
      const quest = new Subcategory('Computacion', this.categories[Math.floor(Math.random() * (this.categories.length - 1 - 0 + 1) + 0)]);
      this.subcategories.push(quest);
    }
  }
}
