import { Component, OnDestroy } from '@angular/core';
import { HttpService } from './shared/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {

  constructor(public http: HttpService) {
  }

  ngOnDestroy() {
    this.http.savedata();
  }
  owo() {
  }
}
