import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { HttpService } from '../../../../shared/services/http.service';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.scss']
})

export class SeekerComponent implements OnInit {

  constructor(public http: HttpService) { }
  ngOnInit() {
    this.http.updatecategories();
    this.http.updatesubcategories();
    this.http.updatequestions();
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
}
