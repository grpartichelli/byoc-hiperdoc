import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'byoc-toolbar',
  templateUrl: './byoc-toolbar.component.html',
  styleUrls: ['./byoc-toolbar.component.scss'],
})
export class ByocToolbarComponent implements OnInit {
  @Output() isSidebarOpenEvent = new EventEmitter<boolean>();
  isSidebarOpen = true;

  ngOnInit(): void {
    this.isSidebarOpenEvent.emit(true);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isSidebarOpenEvent.emit(this.isSidebarOpen);
  }
}
