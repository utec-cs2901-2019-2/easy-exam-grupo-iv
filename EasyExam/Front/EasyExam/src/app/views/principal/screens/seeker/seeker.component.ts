import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Question } from '../../../../shared/classes/question';
import { HttpService } from '../../../../shared/services/http.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { QuestiondialogComponent } from '../shared/questiondialog/questiondialog.component';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.scss']
})

export class SeekerComponent implements OnInit, OnDestroy {

  constructor(public http: HttpService, private auth: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
  }
  ngOnDestroy() {
    const savedq: Question[] = [];
    for (const i of this.http.questions) {
      if (i.selected) {
        savedq.push(i);
      }
    }
    if (this.http.user) {this.http.user.savedQuestions = savedq; }
    if (this.auth.user) {this.auth.user.savedQuestions = savedq; }
    this.http.savedata();
  }

  getsubcategories(index: number) {
    let a = '';
    for (const i of this.http.questions[index].subcategory) {
      a = a + i.name + ' ';
    }
    return a;
  }
  shortdesc(index: number) {
    let a = '';
    let contador = 60;
    for (const i of this.http.questions[index].description) {
      a = a + i;
      if (contador === 0) {
        break;
      }
      contador -= 1;
    }
    if (this.http.questions[index].description.length > 60) {
      a = a + '...';
    }
    return a;
  }
  shortcat(index: number) {
    const text = this.getsubcategories(index);
    let a = '';
    let contador = 40;
    for (const i of text) {
      a = a + i;
      if (contador === 0) {
        break;
      }
      contador -= 1;
    }
    if (text.length > 60) {
      a = a + '...';
    }
    return a;
  }
  openview(a) {
    const dialogRef = this.dialog.open(QuestiondialogComponent, {
      width: '50vw',
      height: '50vh',
      data: {
        description: this.http.questions[a].description,
        answer: this.http.questions[a].answer,
        subcategory: this.http.questions[a].subcategory,
        score: this.http.questions[a].score
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
