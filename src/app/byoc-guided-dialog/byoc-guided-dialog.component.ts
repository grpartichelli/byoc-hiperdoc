import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SectionData } from '../data/section.data';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'byoc-guided-dialog-component',
  templateUrl: 'byoc-guided-dialog.component.html',
  styleUrls: ['byoc-guided-dialog.component.scss'],
})
export class ByocGuidedDialogComponent {
  public selectedSection = 1;
  public askQuestion = false;
  public SECTION_DATA = SectionData;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    readonly navigationService: NavigationService
  ) {
    this.askQuestion = data.askQuestion;
  }

  start() {
    this.navigationService.goToSubsection(`${this.selectedSection},1`);
  }

  startDialog() {
    this.askQuestion = false;
  }
}
