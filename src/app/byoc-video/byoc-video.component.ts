import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-byoc-video',
  templateUrl: './byoc-video.component.html',
  styleUrls: ['./byoc-video.component.scss'],
})
export class ByocVideoComponent {
  constructor(
    private matDialogRef: MatDialogRef<ByocVideoComponent>,
    private router: Router
  ) {}

  close() {
    localStorage.setItem('showvideo', 'false');
    localStorage.setItem('askshowvideo', new Date().toISOString());
    this.router.navigate(['/']);
    this.matDialogRef.close();
  }
}
