import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

  // options: FormGroup;
  public resume: FormGroup;
  private formBuilder: FormBuilder;

  public languageGrades = [
    { label: 'basic', grade: 1 },
    { label: 'intermediate', grade: 2 },
    { label: 'advanced', grade: 3 },
    { label: 'native', grade: 4 }
  ];

  constructor(formBuilder: FormBuilder) {

    this.formBuilder = formBuilder;

    this.resume = formBuilder.group({
      fullname: ['', Validators.required],    // full candidate name
      picture: [''],                          // optional profile picture
      position: [''],                         // applying position / main role
      bio: ['', Validators.maxLength(1024)],  // a.k.a. profile/about me
      experience: formBuilder.array([]),
      skills: formBuilder.array([]),          // @todo validate non repeated
      languages: formBuilder.array([]),       // @todo validate non repeated
      contact: formBuilder.group({
        gmail: ['', Validators.compose([Validators.email])],
        linkedIn: [''], // @see Validators.pattern() for url
        secondaryEmail: ['', Validators.email]
      })
    });

  }

  ngOnInit() {}

  private createNewSkill(): any {
    return this.formBuilder.group({
      name: ['', Validators.required],
      grade: [1, Validators.required]
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

  public onLoad() {
    // @todo load previous JSON model from localstorage
  }

  public onSave() {
    // @todo
    // 1. form to json
    // 2. json to model
    // 3. save to localstorage (id, model)
    // 4. go to preview
  }

}
