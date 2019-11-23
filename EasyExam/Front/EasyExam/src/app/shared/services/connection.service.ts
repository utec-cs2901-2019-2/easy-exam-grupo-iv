import { Injectable } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Http, ResponseContentType} from '@angular/http';
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
export class ConnectionService {
  url = 'http://localhost:8080';
  apiurl = '/api';
  loginurl = '/login';
  questionsurl = '/questions';
  categoriesurl = '/categories';
  registerurl = '/register';
  saveurl = '/savedata';
  savedqurl = '/savedquestions';
  loadurl = '/loadq';
  compileurl = '/compile';
  getuserurl = '/log';
  forgoturl = '';

  constructor(private http: HttpClient) {}
  login(Email: string, Password: string) {
    return this.http.post<{email: string; lastName: string; name: string; password: string; phone: string; isAdmin: boolean;
      points: number; token: string}>(this.url + this.loginurl, {email: Email, password: Password});
  }

  register(Name: string, Email: string, Password: string) {
    return this.http.post<{token: string}>(this.url + this.registerurl, {name: Name, email: Email, password: Password});
  }

  forgotPassword(Email: string) {
    return this.http.post(this.url + this.registerurl, { email: Email });
  }

  updatequestions(index: number) {
    return this.http.post<{questions: any; pages: number}>(this.url + this.questionsurl, { questions: 25, page: 1 });
  }

  updatecategories() {
    return this.http.post<Category[]>(this.url + this.categoriesurl, '');
  }

  loadsavedq(Email: string) {
    return this.http.post<number[]>(this.url + this.apiurl + this.savedqurl, {email: Email});
  }

  savedata(response) {
    return this.http.post(this.url + this.apiurl + this.saveurl, response);
  }

  compile(response) {
    return this.http.post<Blob>(this.url + this.apiurl + this.compileurl, response, { responseType: 'blob' as 'json' });
  }
  getuset(response) {
    return this.http.post<{email: string; lastName: string; name: string; password: string; phone: string; isAdmin: boolean;
      points: number; token: string}>(this.url + this.getuserurl, response);
  }
}
