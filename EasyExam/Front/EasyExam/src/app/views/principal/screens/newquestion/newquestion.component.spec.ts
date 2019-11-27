import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewquestionComponent } from './newquestion.component';

describe('NewquestionComponent', () => {
  let component: NewquestionComponent;
  let fixture: ComponentFixture<NewquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
