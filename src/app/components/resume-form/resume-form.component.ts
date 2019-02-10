import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Resume } from 'src/app/models/Resume';
import { ResumeService } from 'src/app/services/resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

  // di:
  private formBuilder: FormBuilder;
  private resumeService: ResumeService;
  private router: Router;

  public resume: FormGroup;
  private resumeId: string;

  public languageGrades = [
    { label: 'basic', grade: 1 },
    { label: 'intermediate', grade: 2 },
    { label: 'advanced', grade: 3 },
    { label: 'native', grade: 4 }
  ];

  constructor(
    formBuilder: FormBuilder,
    resumeService: ResumeService,
    router: Router
  ) {

    this.formBuilder = formBuilder;
    this.resumeService = resumeService;
    this.router = router;

    this.resume = formBuilder.group({
      fullname: ['', Validators.required],    // full candidate name
      picture: [''],                          // optional profile picture
      position: [''],                         // applying position / main role
      bio: ['', Validators.maxLength(1024)],  // a.k.a. profile/about me
      experiences: formBuilder.array([]),
      skills: formBuilder.array([]),          // @todo validate non repeated
      languages: formBuilder.array([]),       // @todo validate non repeated
      email: ['', Validators.email],
      github: [''],   // @see Validators.pattern() for url
      linkedIn: [''], // @see Validators.pattern() for url
      skypeID: [''],
      website: ['']   // @see Validators.pattern() for url
    });

  }

  ngOnInit() {
    this.resumeId = uuid();
  }

  private createNewSkill(): any {
    return this.formBuilder.group({
      name: ['', Validators.required],
      grade: [1, Validators.required]
    });
  }

  private createNewExperienceEntry() {
    return this.formBuilder.group({
      position: ['', Validators.required],
      company: ['', Validators.required],
      summary: [''],
      from: [new Date()],
      to: []
    });
  }

  public addLanguage(): void {
    const languages = this.resume.get('languages') as FormArray;
    languages.push(this.formBuilder.group({
      name: '',
      grade: this.languageGrades[0]
    }));
  }

  public removeLanguage(i: number): void {
    const languages = this.resume.get('languages') as FormArray;
    languages.removeAt(i);
  }

  public addSkill(): void {
    const skills = this.resume.get('skills') as FormArray;
    skills.push(this.createNewSkill());
  }

  public removeSkill(i: number): void {
    const skills = this.resume.get('skills') as FormArray;
    skills.removeAt(i);
  }

  public addExperienceEntry(): void {
    const experiences = this.resume.get('experiences') as FormArray;
    experiences.push(this.createNewExperienceEntry());
  }

  public removeExperienceEntry(i: number): void {
    const experiences = this.resume.get('experiences') as FormArray;
    experiences.removeAt(i);
  }

  public onLoad() {
    // @todo load previous JSON model from localstorage
  }

  public onSave() {

    if (this.resume.valid) {

      const resume: Resume = {
        id: this.resumeId,
        fullname: this.resume.get('fullname').value,
        position: this.resume.get('position').value,
        bio: this.resume.get('bio').value,
        skills: this.resume.get('skills').value,
        languages: this.resume.get('languages').value,
        experiences: this.resume.get('experiences').value,
        contact: {
          email: this.resume.get('email').value,
          github: this.resume.get('github').value,
          linkedIn: this.resume.get('linkedIn').value,
          skypeID: this.resume.get('skypeID').value,
          website: this.resume.get('website').value
        }
      };

      this.resumeService
        .saveResume(resume)
        .toPromise()
        .then((r: Resume) => {
          this.router.navigate(['/preview', this.resumeId]);
        })
        .catch((reason) => console.error(reason));

    }
  }

}
