import { Injectable } from '@angular/core';
import { ByocGuidedDialogComponent } from '../byoc-guided-dialog/byoc-guided-dialog.component';
import { MatDialog } from '@angular/material/dialog';
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
    return JSON.parse(localStorage.getItem('guided') || 'true');
  }

  public activate(askQuestion?: boolean) {
    localStorage.setItem('askguided', String(false));
    localStorage.setItem('askguideddate', new Date().toISOString());
    this.openGuidedDialog(askQuestion);
  }

  public deactivate() {
    let date = new Date(localStorage.getItem('askguideddate') || '');
    let today = new Date();
    if (today.getTime() - date.getTime() > 60000 * 30) {
      localStorage.removeItem('askguided');
      localStorage.removeItem('askguideddate');
    }
    localStorage.setItem('guided', String(false));
  }

  public openGuidedDialog(askQuestion?: boolean) {
    const dialogRef = this.matDialog.open(ByocGuidedDialogComponent, {
      autoFocus: false,
      data: {
        isFinished: false,
        askQuestion: askQuestion,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        this.deactivate();
      } else {
        localStorage.setItem('guided', String(true));
      }
    });
  }
}
