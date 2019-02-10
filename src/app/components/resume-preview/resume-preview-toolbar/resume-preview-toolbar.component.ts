import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-resume-preview-toolbar',
  templateUrl: './resume-preview-toolbar.component.html',
  styleUrls: ['./resume-preview-toolbar.component.scss']
})
export class ResumePreviewToolbarComponent implements OnInit {

  @Output()
  save = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSave() {
    this.save.emit();
  }

}
