import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  emailChecker = `^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-z
A-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$`;
  admin: boolean;
  user: User;

  constructor(private http: HttpService, private router: Router) { }

  login(email: string, password: string): boolean {
    this.user = this.http.login(email, password);
    if (this.user.email === '') {
      return false;
    }
    if (this.user.password !== password) {
      return false;
    }
    this.user.password = '';
    this.http.user = this.user;
    this.router.navigate(['/search']);
    return true;
  }

  register(Name: string, Email: string, Password: string): boolean {
    this.http.register(Name, Email, Password)
    this.router.navigate(['/search']);
    this.user = {
      email : Email,
      lastName : '',
      name : Name,
      password : '',
      phone : '',
      isAdmin: false,
      points: 0,
      exams: []
    };
    for (const i of Password) {
      this.user.password += '*';
    }
    this.http.user = this.user;
    return true;
  }

  logout() {
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
      exams: []
    };
    this.http.user = this.user;
  }

  loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  forgotPassword(email: string) {}
}
