import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../shared/services/http.service';

import { Exam } from '../../../../shared/interfaces/exam';

declare var $: any;

@Component({
  selector: 'app-newexam',
  templateUrl: './newexam.component.html',
  styleUrls: ['./newexam.component.scss']
})
export class NewexamComponent implements OnInit {
  exam: Exam = {
    college: '',
    course: '',
    creation_date: '',
    exam_date: '',
    max_points: 0,
    question_number: 0,
    questions: [],
    subcategories: [],
    rules: '',
    specs: '',
    title: '',
    creator: null,
  };
  category: string;
  constructor(public http: HttpService) {
  }

  ngOnInit() {
    this.http.updatecategories();
  }

}
