import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Question } from '../../../../shared/classes/question';

import { HttpService } from '../../../../shared/services/http.service';
import { ConnectionService } from '../../../../shared/services/connection.service';

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
  constructor(private http: HttpService, private conn: ConnectionService) { }

  ngOnInit() {
    this.http.updatecategories();
  }
  savequestion() {
    this.http.user.points++;
    const response = {
      creatorID: this.http.user.email,
      title: this.question.title,
      creation_date: '',
      allowed: this.question.allowed,
      answer: this.question.answer,
      description: this.question.description,
      subcategories: []
    };
    for (const i of this.question.subcategory) {
      response.subcategories.push(i.id);
    }
    this.conn.newq(response)
    .subscribe((id) => {
      this.question.id = id;
      this.http.questions.push({ ...this.question});
    });
  }
  push(a) {
    this.question.subcategory.push(a);
  }
  clear() {
    this.question.subcategory = [];
  }
}
