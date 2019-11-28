import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../../shared/services/http.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Exam } from '../../../../shared/interfaces/exam';
import { SavedqdialogComponent } from '../shared/savedqdialog/savedqdialog.component';
import { LatexService } from '../../../../shared/services/latex.service';

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
    subcategory: '',
    rules: '',
    specs: '',
    title: '',
    creator: this.http.user.email,
  };
  category = {
    subcategories: []
  };
  constructor(public http: HttpService, private router: Router, private dialog: MatDialog, private gen: LatexService) {
  }

  ngOnInit() {
    this.http.updatecategories();
  }

  openview() {
    const dialogRef = this.dialog.open(SavedqdialogComponent, {
      width: '50vw',
      height: '70vh',
      data: {
        exam: this.exam
      }
    });
  }
  savedata() {
    if (this.http.user.points < 2) {
      this.router.navigate(['/newquest']);
      return;
    }
    this.gen.exam = this.exam;
    this.router.navigate(['/preview']);
  }
}
