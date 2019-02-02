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
  MatToolbarModule
} from '@angular/material';

// custom
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeDashboardComponent } from './resume-dashboard/resume-dashboard.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeDashboardComponent,
    ResumeFormComponent,
    ResumePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
