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
  constructor(private http: HttpService) { }
  login(email: string, password: string): boolean {
    this.user = this.http.login(email, password);
    if (this.user.email === '') {
      return false;
    }
    return true;
  }
  register(Name: string, Email: string, Password: string): boolean {
    this.http.register(Name, Email, Password)
    this.user = {
      email : Email,
      lastName : '',
      name : Name,
      password : Password,
      phone : '',
      isAdmin: false,
      points: 0
    };
    return true;
  }
  logout() {
    localStorage.removeItem('access_token');
    this.user = {
      email : '',
      lastName : '',
      name : '',
      password : '',
      phone : '',
      isAdmin: false,
      points: 0
    };
  }
  loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
  forgotPassword(email: string) {}
}
