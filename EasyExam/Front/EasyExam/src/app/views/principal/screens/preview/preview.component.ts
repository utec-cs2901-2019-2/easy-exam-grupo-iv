import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public tex: LatexService, private router: Router, public http: HttpService) {
  }

  ngOnInit() {
    for (const i of this.tex.exam.questions) {
      this.selected.push(true);
    }
    for (const i of this.tex.exam.questions) {
      this.scores.push(0);
    }
    this.tex.exam.question_number = this.scores.length;
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
    if (this.http.user.points < 2) {
      this.router.navigate(['/newquest']);
      return;
    }
    this.http.user.points--;
    this.tex.scores = this.scores;
    this.http.generate();
  }
  puedo() {
    for (const i of this.selected) {
      if (i) {
        return true;
      }
    }
    return false;
  }
}
