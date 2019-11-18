import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../../../shared/services/http.service';

@Component({
  selector: 'app-saved-questions',
  templateUrl: './saved-questions.component.html',
  styleUrls: ['./saved-questions.component.scss']
})
export class SavedQuestionsComponent implements OnInit {

  constructor(public http: HttpService) { }

  ngOnInit() {
  }

}
