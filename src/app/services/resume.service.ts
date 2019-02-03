import { Injectable } from '@angular/core';
import { Resume } from '../models/Resume';
import { Observable, of } from 'rxjs';

@Injectable()
export class ResumeService {

  constructor() { }

  listResumes(): Observable<Resume[]> {
    return of([]);
  }

  loadResume(id: string): Observable<Resume> {
    const resumeString: string = localStorage.getItem(id);
    const r: any = JSON.parse(resumeString);
    return of(r);
  }

  saveResume(r: Resume): Observable<Resume> {
    localStorage.setItem(r.id, JSON.stringify(r));
    return of(r);
  }

}
