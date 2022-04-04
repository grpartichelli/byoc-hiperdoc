import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GuidedService } from '../service/guided.service';
import { MatDialog } from '@angular/material/dialog';
import { ByocVideoComponent } from '../byoc-video/byoc-video.component';

@Component({
  selector: 'byoc-toolbar',
  templateUrl: './byoc-toolbar.component.html',
  styleUrls: ['./byoc-toolbar.component.scss'],
})
export class ByocToolbarComponent implements OnInit {
  @Output() isSidebarOpenEvent = new EventEmitter<boolean>();
  isSidebarOpen = true;

  constructor(
    private readonly guidedService: GuidedService,
    private readonly matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isSidebarOpenEvent.emit(true);
  }

  public deactivateGuided() {
    this.guidedService.deactivate();
  }

  public get isGuidedActive() {
    return this.guidedService.isActive;
  }

  public howToUse() {
    this.matDialog.open(ByocVideoComponent);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isSidebarOpenEvent.emit(this.isSidebarOpen);
  }
}
