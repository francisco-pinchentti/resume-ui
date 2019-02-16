import { Injectable } from '@angular/core';
import { Resume } from '../models/Resume';
import { Observable, of } from 'rxjs';

const INITIAL_DATASET: any[] = [
  { "id": "1", "fullname": "Jony Tolengo", "position": "DevOps", "bio": "I like to hammer stuff", "skills": [{ "name": "docker", "grade": 5 }, { "name": "bash", "grade": 3 }], "languages": [{ "name": "english", "grade": 2 }], "experiences": [{ "position": "devops", "company": "GloboSysCorp", "summary": "Server maintenance and I wrote many pipelines!", "from": "2015-02-10T03:00:00.000Z", "to": "2019-02-21T03:00:00.000Z" }], "contact": { "email": "a@a.com", "github": "jt.github.com", "linkedIn": "", "skypeID": "jt.sk.hammernow", "website": "www.thehammerjt.com" } },
  { "id": "2", "fullname": "John Doe", "position": "Fullstack developer", "bio": "By day I code, at nights I \"bash\" crime!", "skills": [{ "name": "javascript", "grade": 4 }, { "name": "java", "grade": 4 }, { "name": "mysql", "grade": 3 }, { "name": "mongodb", "grade": 2 }, { "name": "git", "grade": 5 }, { "name": "bash", "grade": 5 }], "languages": [{ "name": "italian", "grade": 5 }, { "name": "english", "grade": 3 }], "experiences": [{ "position": "Backend developer", "company": "GL", "summary": "mantained a java mvc application", "from": "2011-02-16T03:00:00.000Z", "to": "2014-02-10T03:00:00.000Z" }, { "position": "Frontend developer", "company": "InfoSys Supercorp", "summary": "We developed a mobile client for a secret project don't tell anyone", "from": "2014-03-01T03:00:00.000Z", "to": "2018-12-31T03:00:00.000Z" }], "contact": { "email": "jd@nomail.com", "github": "jd.nono.github.com", "linkedIn": "", "skypeID": "", "website": "www.jdnnn.com" } }
];

@Injectable()
export class ResumeService {

  constructor() {
    if (Object.keys(localStorage).length === 0) {
      INITIAL_DATASET.forEach(o => {
        localStorage.setItem(o.id, JSON.stringify(o));
      });
    }
  }

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
