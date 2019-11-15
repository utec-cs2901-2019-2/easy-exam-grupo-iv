import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiondialogComponent } from './questiondialog.component';

describe('QuestiondialogComponent', () => {
  let component: QuestiondialogComponent;
  let fixture: ComponentFixture<QuestiondialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestiondialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestiondialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
