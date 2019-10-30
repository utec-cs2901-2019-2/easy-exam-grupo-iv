import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admin: boolean;
  user: any;
  constructor(private http: HttpService) { }
  login(email: string, password: string): boolean {return true; }
  register(name: string, email: string, password: string): boolean {return true; }
  logout() {}
  forgotPassword(email: string) {}
}
