import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-dashboard',
  templateUrl: './resume-dashboard.component.html',
  styleUrls: ['./resume-dashboard.component.scss']
})
export class ResumeDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //@todo read possible resumes from storage, build list with EDIT / DELETE / PREIEW icons
  }

}
