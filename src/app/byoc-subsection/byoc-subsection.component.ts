import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubsectionService } from '../service/subsection.service';
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

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly subsectionService: SubsectionService
  ) {}

  ngOnInit() {
    this.loadSubsection();
  }

  private loadSubsection() {
    if (!this.sectionNumber || !this.subsectionNumber) {
      this.router.navigate(['/home']).then();
    }
    this.subsection = this.subsectionService.find(
      this.sectionNumber,
      this.subsectionNumber
    );
    if (!this.subsection) {
      this.router.navigate(['/home']).then();
    }
  }
}
