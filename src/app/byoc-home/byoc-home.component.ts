import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubsectionData } from '../data/subsection.data';
import { GuidedService } from '../service/guided.service';
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
    let date = new Date(localStorage.getItem('askshowvideo') || '');
    let today = new Date();
    if (today.getTime() - date.getTime() > 30000 * 30) {
      localStorage.removeItem('askshowvideo');
      localStorage.removeItem('showvideo');
    }

    if (JSON.parse(localStorage.getItem('showvideo') || 'true')) {
      this.matDialog.open(ByocVideoComponent);
    }

    this.guidedService.deactivate();
    setTimeout(() => {
      if (
        this.showGuided &&
        !JSON.parse(localStorage.getItem('showvideo') || 'true') &&
        JSON.parse(localStorage.getItem('askguided') || 'true')
      ) {
        this.guidedService.activate(true);
      }
    }, 45000);
  }

  ngOnDestroy() {
    this.showGuided = false;
  }
}
