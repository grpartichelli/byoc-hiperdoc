import { Injectable } from '@angular/core';
import { ByocGuidedDialogComponent } from '../byoc-guided-dialog/byoc-guided-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root',
})
export class GuidedService {
  constructor(
    private matDialog: MatDialog,
    private navigationService: NavigationService
  ) {}

  public get isActive() {
    return Boolean(JSON.parse(localStorage.getItem('guided') || 'false'));
  }

  public activate() {
    this.openGuidedDialog();
    localStorage.setItem('guided', String(true));
  }

  public deactivate() {
    localStorage.setItem('guided', String(false));
  }

  public openGuidedDialog() {
    const dialogRef = this.matDialog.open(ByocGuidedDialogComponent, {
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.navigationService.goToSubsection('1,1');
      }
    });
  }
}
