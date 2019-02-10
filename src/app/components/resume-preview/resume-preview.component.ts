import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

import { ResumeService } from 'src/app/services/resume.service';
import { Resume } from 'src/app/models/Resume';

@Component({
  selector: 'app-resume-preview',
  templateUrl: './resume-preview.component.html',
  styleUrls: ['./resume-preview.component.scss']
})
export class ResumePreviewComponent implements OnInit {

  private resumeId: string;
  private resume$: Observable<Resume>;
  public resumeModel: Resume;

  constructor(
    private route: ActivatedRoute,
    private resumeService: ResumeService
  ) { }

  ngOnInit() {
    this.resume$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.resumeId = params.get('id');
        return this.resumeService.loadResume(this.resumeId);
      })
    );

    this.resume$.subscribe((r: Resume) => {
      this.resumeModel = r;
    });
  }

  private getSafeFileName() {
    return (this.resumeModel && this.resumeModel.fullname)
      ? this.resumeModel.fullname.replace(/\W+/gmi, '-') + '.pdf'
      : 'MyPDF.pdf';
  }

  public asArray(n: Number): Array<Number> {
    return new Array(n);
  }

  public saveAsPDF() {
    const data = document.getElementById('resume-node');
    const _safeFileName = this.getSafeFileName();
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save(_safeFileName);
    });
  }

}
