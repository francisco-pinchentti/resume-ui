import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-form-toolbar',
  templateUrl: './resume-form-toolbar.component.html',
  styleUrls: ['./resume-form-toolbar.component.scss']
})
export class ResumeFormToolbarComponent implements OnInit {

  // @todo take input model

  constructor() { }

  ngOnInit() {
  }

  public onSave() {
    // @todo emit
  }

  public onPreview() {
    // @todo emit
  }

}
