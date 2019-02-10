import { Injectable } from '@angular/core';
import { Resume } from '../models/Resume';
import { Observable, of } from 'rxjs';

@Injectable()
export class ResumeService {

  constructor() { }

  listResumes(): Observable<Resume[]> {
    const resumes = Object.keys(localStorage).map(k => {
      let item = null;
      try {
        item = JSON.parse(localStorage.getItem(k));
      } catch (e) {
      }
      finally {
        return item;
      }
    }).filter( i => !!i);
    return of(resumes);
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

  deleteResume(id: string): Observable<Resume> {
    const _deletedStr = localStorage.getItem(id);
    if (_deletedStr) {
      localStorage.removeItem(id);
    }
    return of (JSON.parse(_deletedStr));
  }

}
