import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedqdialogComponent } from './savedqdialog.component';

describe('SavedqdialogComponent', () => {
  let component: SavedqdialogComponent;
  let fixture: ComponentFixture<SavedqdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedqdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedqdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
