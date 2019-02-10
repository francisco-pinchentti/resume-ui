import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeDashboardComponent } from './components/resume-dashboard/resume-dashboard.component';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumePreviewComponent } from './components/resume-preview/resume-preview.component';

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
    path: 'resume/:id',
    component: ResumeFormComponent
  },
  {
    path: 'preview/:id',
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
