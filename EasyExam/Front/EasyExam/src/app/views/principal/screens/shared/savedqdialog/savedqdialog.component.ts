import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { HttpService } from '../../../../../shared/services/http.service';

@Component({
  selector: 'app-savedqdialog',
  templateUrl: './savedqdialog.component.html',
  styleUrls: ['./savedqdialog.component.scss']
})
export class SavedqdialogComponent implements OnInit, OnDestroy {

  selected: boolean[] = [];
  questions = [];

  constructor(public dialogRef: MatDialogRef<SavedqdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public http: HttpService) {}

  ngOnInit() {
    for (const i of this.getquestions()) {
      this.selected.push(false);
    }
  }
  ngOnDestroy() {
    const questions = [];
    const response = this.getquestions();
    for (let i = 0; i < this.selected.length; i++) {
      if (this.selected[i]) {
        questions.push(response[i]);
      }
    }
    this.data.exam.questions = questions;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getquestions() {
    const response = [];
    for (const i of this.http.questions) {
      if (i.selected) {
        for (const j of i.subcategory) {
          if (j.name === this.data.exam.subcategory) {
            response.push(i);
            break;
          }
        }
      }
    }
    return response;
  }
}
