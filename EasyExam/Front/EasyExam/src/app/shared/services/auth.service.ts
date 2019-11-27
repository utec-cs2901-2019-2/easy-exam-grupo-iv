import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ConnectionService } from './connection.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  emailChecker = `^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-z
A-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$`;
  admin: boolean;
  user: User;

  constructor(private http: HttpService, private router: Router, private connection: ConnectionService) { }

  login(email: string, password: string): boolean {
    this.connection.login(email, password)
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
          exams: [],
          savedQuestions: []
        };
        if (this.user.email === '') {
          return;
        }
        if (this.user.password !== password) {
          return false;
        }
        this.user.password = '';
        this.http.user = this.user;
        localStorage.setItem('access_token', data.token);
        this.http.loadsavedq();
      },
      (err) => {
        this.user = null;
        console.log(err);
      }
    );
    return true;
  }

  register(Name: string, Email: string, Password: string): boolean {
    this.connection.register(Name, Email, Password)
    .subscribe(
      (data) => {
        localStorage.setItem('access_token', data.token);
        this.user = {
          email : Email,
          lastName : '',
          name : Name,
          password : '',
          phone : '',
          isAdmin: false,
          points: 0,
          exams: [],
          savedQuestions: []
        };
        this.http.user = this.user;
        this.router.navigate(['/search']);
      }
    );
    return true;
  }

  logout() {
    this.http.savedata(true,
      () => {
        localStorage.removeItem('access_token');
        this.router.navigate(['login']);
        this.user = {
          email : '',
          lastName : '',
          name : '',
          password : '',
          phone : '',
          isAdmin: false,
          points: 0,
          exams: [],
          savedQuestions: []
        };
        this.http.user = this.user;
        for (const i of this.http.questions) {
          i.selected = false;
        }
      }
    );
  }

  loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  getuser() {
    const request = {
      token: localStorage.getItem('access_token')
    }
    this.connection.getuset(request)
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
          exams: [],
          savedQuestions: []
        };
        this.user.password = '';
        this.http.user = this.user;
        localStorage.setItem('access_token', data.token);
        this.http.loadsavedq();
      }
    );
  }

  forgotPassword(email: string) {}
}
