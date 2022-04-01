import { Component, Input } from '@angular/core';

@Component({
  selector: 'byoc-sidebar',
  templateUrl: './byoc-sidebar.component.html',
  styleUrls: ['./byoc-sidebar.component.scss'],
})
export class ByocSidebarComponent {
  @Input() isSidebarOpen = true;
  constructor() {}
}
