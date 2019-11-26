import { Component, OnInit, OnDestroy } from '@angular/core';
import { LatexService } from '../../../../shared/services/latex.service';

import { HttpService } from '../../../../shared/services/http.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnDestroy {

  selected: boolean[] = [];
  scores: number[] = [];

  constructor(public tex: LatexService, public http: HttpService) {
    console.log('Me Construyo');
  }

  ngOnInit() {
    console.log('Me Cargo');
    for (const i of this.tex.exam.questions) {
      this.selected.push(true);
    }
    for (const i of this.tex.exam.questions) {
      this.scores.push(0);
    }
  }
  ngOnDestroy() {
    this.tex.exam = null;
  }
  likeordis(like: boolean, index: number) {
    if (like) {
      this.tex.exam.questions[index].score += 1;
    } else {
      this.tex.exam.questions[index].score -= 1;
    }
    this.selected[index] = false;
  }
  generate() {
    this.tex.scores = this.scores;
    this.http.generate();
  }
}
