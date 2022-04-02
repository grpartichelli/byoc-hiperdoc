import { SubsectionData } from '../data/subsection.data';
import { SubsectionModel } from '../model/subsection.model';
import { Injectable } from '@angular/core';
import { SectionData } from '../data/section.data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly SUBSECTION_DATA = SubsectionData;
  readonly SECTION_DATA = SectionData;

  public findSubsection(section: number, subsection: number): SubsectionModel {
    return this.SUBSECTION_DATA.get(
      [section, subsection].toString()
    ) as SubsectionModel;
  }

  public findSection(section: number): string {
    return this.SECTION_DATA.get(section) as string;
  }
}
