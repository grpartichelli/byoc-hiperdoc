import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
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
    private readonly dataService: DataService
  ) {}

  ngOnInit() {
    this.loadSubsection();
  }

  public goToPreviousSubsection() {
    if (this.subsection.isFirstSection) {
      return;
    }

    if (this.subsection.isFirstSubsection) {
      this.router
        .navigate([
          `/section/${this.sectionNumber - 1}/subsection/${
            this.subsection.previousSubsection
          }`,
        ])
        .then();
      return;
    }

    this.router
      .navigate([
        `/section/${this.sectionNumber}/subsection/${
          this.subsectionNumber - 1
        }`,
      ])
      .then();
  }

  public goToHome() {
    this.router.navigate([`/home`]).then();
  }

  public goToNextSubsection() {
    if (this.subsection.isLastSection) {
      return;
    }

    if (this.subsection.isLastSubsection) {
      this.router
        .navigate([`/section/${this.sectionNumber + 1}/subsection/1`])
        .then();
      return;
    }

    this.router
      .navigate([
        `/section/${this.sectionNumber}/subsection/${
          this.subsectionNumber + 1
        }`,
      ])
      .then();
  }

  private loadSubsection() {
    if (!this.sectionNumber || !this.subsectionNumber) {
      this.router.navigate(['/home']).then();
    }
    this.section = this.dataService.findSection(this.sectionNumber);

    this.subsection = this.dataService.findSubsection(
      this.sectionNumber,
      this.subsectionNumber
    );

    if (!this.subsection) {
      this.router.navigate(['/home']).then();
    }
  }
}
