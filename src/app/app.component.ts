import { Component } from '@angular/core';
import { SectionData } from './data/section.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSidebarOpen = true;
  SECTION_DATA = SectionData;

  setIsSidebarOpen(isSidebarOpen: boolean) {
    this.isSidebarOpen = isSidebarOpen;
  }
}
