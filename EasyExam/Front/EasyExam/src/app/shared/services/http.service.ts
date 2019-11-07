import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from '../interfaces/user';
import { Exam } from '../interfaces/exam';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  url = '';
  loginurl = '';
  registerurl = '';
  forgoturl = '';
  constructor(private http: HttpClient) { }
  login(Email: string, Password: string): User {
    let user: User;
    this.http.post<{user: User; token: string}>(this.url + this.loginurl, {email: Email, password: Password})
    .subscribe(
      (data) => {
        user = data.user;
        localStorage.setItem('access_token', data.token);
      },
      (err) => {
        user = null;
        console.log(err);
      }
    );
    return user;
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
  getlang(): any {}
  changelang(value: string): any {}
  getpdf(texstring: string, savevalue: Exam) {}
}
