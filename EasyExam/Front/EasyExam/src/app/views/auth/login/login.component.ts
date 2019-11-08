import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  error = 0;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.error = 0;
    if (!this.user.email.match(this.auth.emailChecker)) {
      this.error = 2;
      return;
    }
    if (!this.auth.login(this.user.email, this.user.password)) {
      this.error = 1;
      return;
    }
    this.auth.logout();
  }
}
