import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'byoc-guided-dialog-component',
  templateUrl: 'byoc-guided-dialog.component.html',
  styleUrls: ['byoc-guided-dialog.component.scss'],
})
export class ByocGuidedDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
