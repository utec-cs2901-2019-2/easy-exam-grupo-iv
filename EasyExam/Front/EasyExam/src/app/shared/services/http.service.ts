import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from '../interfaces/user';
import { Exam } from '../interfaces/exam';
import { Question } from '../classes/question';
import { Category } from '../classes/category';
import { Subcategory } from '../classes/subcategory';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  user: User;
  numpages = 1;

  questions: Question[] = [];
  categories: Category[] = [];

  constructor(private connection: ConnectionService, private router: Router) {
  }

  register(Name: string, Email: string, Password: string) {
    this.connection.register(Name, Email, Password)
    .subscribe(
      (data) => {
        localStorage.setItem('access_token', data.token);
      }
    );
  }

  forgotPassword(Email: string) {
    this.connection.forgotPassword(Email).subscribe();
  }

  getpdf(texstring: string, savevalue: Exam) {}

  updatequestions(index: number) {
    if (index > this.numpages) {
      console.log('Overflow');
      index = 1;
    }
    this.connection.updatequestions(index)
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
    this.connection.updatecategories()
    .subscribe(
      (data) => {
        this.categories = data;
      }
    );
  }
  loadsavedq() {
    this.connection.loadsavedq(this.user.email)
    .subscribe(
      (data) => {
        for (const i of data) {
          for (const j of this.questions) {
            if (i === j.id) {
              j.selected = true;
            }
          }
        }
        this.router.navigate(['/search']);
      }
    );
  }

  savedata(data: boolean = false, exec?) {
    if (!this.user) {return; }
    if (this.user.email === '') {return; }
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
    }
    this.connection.savedata(response).subscribe(
      () => {
        if (data) {
          exec();
        }
      }
    );
  }
}
