import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service/service';
import { SubsectionModel } from '../model/subsection.model';

@Component({
  selector: 'app-byoc-subsection',
  templateUrl: './byoc-subsection.component.html',
  styleUrls: ['./byoc-subsection.component.scss'],
})
export class ByocSubsectionComponent implements OnInit {
  readonly sectionNumber: number = Number(
    this.activatedRoute.snapshot.paramMap.get('section')
  );
  readonly subsectionNumber: number = Number(
    this.activatedRoute.snapshot.paramMap.get('subsection')
  );
  subsection: SubsectionModel = new SubsectionModel('', [], [], [], []);
  section: string = '';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly service: Service
  ) {}

  ngOnInit() {
    this.loadSubsection();
  }

  private loadSubsection() {
    if (!this.sectionNumber || !this.subsectionNumber) {
      this.router.navigate(['/home']).then();
    }
    this.section = this.service.findSection(this.sectionNumber);

    this.subsection = this.service.findSubsection(
      this.sectionNumber,
      this.subsectionNumber
    );
    if (!this.subsection) {
      this.router.navigate(['/home']).then();
    }
  }
}
