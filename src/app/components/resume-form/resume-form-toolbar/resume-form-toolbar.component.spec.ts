import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormToolbarComponent } from './resume-form-toolbar.component';

describe('ResumeFormToolbarComponent', () => {
  let component: ResumeFormToolbarComponent;
  let fixture: ComponentFixture<ResumeFormToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFormToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFormToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
