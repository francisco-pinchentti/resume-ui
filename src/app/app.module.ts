// core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// angular-material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSliderModule,
  MatToolbarModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatTooltipModule
} from '@angular/material';

// custom
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeDashboardComponent } from './components/resume-dashboard/resume-dashboard.component';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeFormToolbarComponent } from './components/resume-form/resume-form-toolbar/resume-form-toolbar.component';
import { ResumePreviewComponent } from './components/resume-preview/resume-preview.component';
import { ResumeNavbarComponent } from './components/resume-navbar/resume-navbar.component';
import { ResumeService } from './services/resume.service';
import { ResumePreviewToolbarComponent } from './components/resume-preview/resume-preview-toolbar/resume-preview-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeDashboardComponent,
    ResumeFormComponent,
    ResumeFormToolbarComponent,
    ResumePreviewComponent,
    ResumeNavbarComponent,
    ResumePreviewToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatSliderModule
  ],
  providers: [
    ResumeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
