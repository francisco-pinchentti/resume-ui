import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/Resume';
import { ResumeService } from 'src/app/services/resume.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resume-dashboard',
  templateUrl: './resume-dashboard.component.html',
  styleUrls: ['./resume-dashboard.component.scss']
})
export class ResumeDashboardComponent implements OnInit {

  public resumes: Resume[];
  private _subscription: Subscription;

  constructor(
    private resumeService: ResumeService
  ) { }

  ngOnInit() {
    this._subscription = this.resumeService.listResumes().subscribe(resumes => {
      this.resumes = resumes;
    });
  }

}
