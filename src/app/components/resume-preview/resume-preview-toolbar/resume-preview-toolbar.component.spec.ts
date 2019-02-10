import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePreviewToolbarComponent } from './resume-preview-toolbar.component';

describe('ResumePreviewToolbarComponent', () => {
  let component: ResumePreviewToolbarComponent;
  let fixture: ComponentFixture<ResumePreviewToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePreviewToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePreviewToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
