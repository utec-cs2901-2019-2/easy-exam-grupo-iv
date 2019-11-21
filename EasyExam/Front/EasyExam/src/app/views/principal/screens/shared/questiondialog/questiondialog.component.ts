import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-questiondialog',
  templateUrl: './questiondialog.component.html',
  styleUrls: ['./questiondialog.component.scss']
})
export class QuestiondialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuestiondialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
