import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-navbar',
  templateUrl: './resume-navbar.component.html',
  styleUrls: ['./resume-navbar.component.scss']
})
export class ResumeNavbarComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = 'resume-ui';
  }

  ngOnInit() {
  }

}
