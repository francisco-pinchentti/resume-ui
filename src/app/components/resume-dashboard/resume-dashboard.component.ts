import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { Resume } from 'src/app/models/Resume';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-resume-dashboard',
  templateUrl: './resume-dashboard.component.html',
  styleUrls: ['./resume-dashboard.component.scss']
})
export class ResumeDashboardComponent implements OnInit, OnDestroy {

  public resumes: Resume[];
  private _subscription: Subscription;

  constructor(
    private router: Router,
    private resumeService: ResumeService
  ) { }

  ngOnInit() {
    this._subscription = this.resumeService.listResumes().subscribe(resumes => {
      this.resumes = resumes;
    });
  }

  ngOnDestroy() {
    if (!!this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  public onGoToPreview(resume: Resume): void {
    this.router.navigate(['/preview', resume.id]);
  }

  public onDeleteResume(resume: Resume): void {
    this.resumeService
    .deleteResume(resume.id)
    .subscribe((deletedResume: Resume) => {
      this.resumes = this.resumes.filter( (r: Resume) => r.id !== deletedResume.id);
    });
  }

  public onEditResume(resume: Resume): void {
    // this.router.navigate(['/resume', resume.id]);
  }

}
