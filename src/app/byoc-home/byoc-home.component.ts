import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubsectionData } from '../data/subsection.data';
import { GuidedService } from '../service/guided.service';
import { timeout } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ByocVideoComponent } from '../byoc-video/byoc-video.component';

@Component({
  selector: 'app-byoc-home',
  templateUrl: './byoc-home.component.html',
  styleUrls: ['./byoc-home.component.scss'],
})
export class ByocHomeComponent implements OnInit, OnDestroy {
  readonly SUBSECTION_DATA = SubsectionData;
  public showGuided = true;

  constructor(
    private guidedService: GuidedService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.matDialog.open(ByocVideoComponent);
    this.guidedService.deactivate();
    setTimeout(() => {
      if (
        this.showGuided &&
        JSON.parse(localStorage.getItem('askguided') || 'true')
      ) {
        this.guidedService.activate(true);
      }
    }, 15000);
  }

  ngOnDestroy() {
    this.showGuided = false;
  }
}
