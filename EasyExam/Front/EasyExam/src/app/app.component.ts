import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from './shared/services/http.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy, OnInit {

  constructor(public http: HttpService, public auth: AuthService) {
    this.http.updatecategories();
    this.http.updatequestions(1);
    if (this.auth.loggedIn()) {
      this.auth.getuser();
    }
  }

  ngOnDestroy() {
  }
  ngOnInit() {
  }
}
