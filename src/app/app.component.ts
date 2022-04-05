import { Component } from '@angular/core';
import { SectionData } from './data/section.data';
import { NavigationEnd, Router } from '@angular/router';
import { GuidedService } from './service/guided.service';
import { SubsectionData } from './data/subsection.data';
import { SubsectionModel } from './model/subsection.model';
import { NavigationService } from './service/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSidebarOpen = true;
  SECTION_DATA = SectionData;
  SUBSECTION_DATA = SubsectionData;
  sectionIsActive: Map<number, boolean> = new Map<number, boolean>();

  constructor(
    private router: Router,
    private readonly guidedService: GuidedService,
    private readonly navigationService: NavigationService
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let selectedElement = document.querySelector('mat-drawer-content');
        if (selectedElement) {
          selectedElement.scrollTo(0, 0);
        }
      }
    });
  }

  public goToSubsection(subsection: string) {
    this.navigationService.goToSubsection(subsection);
  }

  public toggleSection(section: number) {
    this.sectionIsActive.set(section, !this.sectionIsActive.get(section));
  }

  public getSubsections(section: number): Array<SubsectionModel> {
    const subsections: Array<SubsectionModel> = [];

    if (this.sectionIsActive.get(section)) {
      SubsectionData.forEach((subsection, key) => {
        if (key.startsWith(section.toString())) {
          subsection.key = key;
          subsections.push(subsection);
        }
      });
    }

    return subsections;
  }
  public get isGuidedActive() {
    return this.guidedService.isActive;
  }

  public activateGuided() {
    this.guidedService.activate();
  }

  setIsSidebarOpen(isSidebarOpen: boolean) {
    this.isSidebarOpen = isSidebarOpen;
  }
}
