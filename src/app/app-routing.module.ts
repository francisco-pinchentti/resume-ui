import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeDashboardComponent } from './resume-dashboard/resume-dashboard.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ResumeDashboardComponent
  },
  {
    path: 'resume',
    component: ResumeFormComponent
  },
  {
    path: 'preview',
    component: ResumePreviewComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
