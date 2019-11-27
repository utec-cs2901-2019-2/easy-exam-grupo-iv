import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Question } from '../../../../shared/classes/question';

import { HttpService } from '../../../../shared/services/http.service';

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.scss']
})
export class NewquestionComponent implements OnInit {
  question: Question = {
    id: 0,
    allowed: true,
    creationDate:  '',
    reports: [],
    score: 0,
    selected: false,
    answer: '',
    description: '',
    subcategory: [],
    title: ''
  };
  category = {
    subcategories: []
  };
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.updatecategories();
  }
  savequestion() {
    console.log(this.question);
  }
  push(a) {
    this.question.subcategory.push(a);
  }
  clear() {
    this.question.subcategory = [];
  }
}
