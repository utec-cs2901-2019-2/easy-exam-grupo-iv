import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
  };
  error = 0;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  signup() {
    this.error = 0;
    if (!this.user.email.match(this.auth.emailChecker)) {
      this.error = 1;
      return;
    }
    if (this.user.password.length < 8) {
      this.error = 2;
      return;
    }
    if (this.user.password.toLowerCase() === this.user.password || !(/\d/.test(this.user.password))) {
      this.error = 3;
      return;
    }
    if (!this.auth.register(this.user.name, this.user.email, this.user.password)) {
      alert('Error');
      return;
    }
    this.auth.logout();
  }
}
