import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Exam } from '../interfaces/exam';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string;
  constructor(private http: HttpClient) { }
  login(email: string, password: string): User {
    let user: User = {
      email: '',
      lastName: '',
      name: '',
      password: '',
      phone: ''
    };
    return user;
  }
  register(name: string, email: string, password: string) {}
  logout() {}
  forgotPassword(email: string) {}
  getlang(): any {}
  changelang(value: string): any {}
  getpdf(texstring: string, savevalue: Exam) {}
}
