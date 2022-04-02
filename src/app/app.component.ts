import { Component } from '@angular/core';
import { SectionData } from './data/section.data';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSidebarOpen = true;
  SECTION_DATA = SectionData;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let selectedElement = document.querySelector('mat-drawer-content');
        if (selectedElement) {
          selectedElement.scrollTo(0, 0);
        }
      }
    });
  }

  setIsSidebarOpen(isSidebarOpen: boolean) {
    this.isSidebarOpen = isSidebarOpen;
  }
}
