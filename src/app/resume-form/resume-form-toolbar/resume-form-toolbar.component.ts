import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-resume-form-toolbar',
  templateUrl: './resume-form-toolbar.component.html',
  styleUrls: ['./resume-form-toolbar.component.scss']
})
export class ResumeFormToolbarComponent implements OnInit {

  // @todo take input model

  @Output()
  save = new EventEmitter();

  @Output()
  preview = new EventEmitter();

  @Input()
  public formValid: boolean;

  constructor() { }

  ngOnInit() {
  }

  public onSave() {
    this.save.emit();
  }

  public onPreview() {
    this.preview.emit();
  }

}
