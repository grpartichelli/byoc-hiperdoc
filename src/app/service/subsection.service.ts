import { SubsectionData } from '../data/subsection.data';
import { SubsectionModel } from '../model/subsection.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubsectionService {
  readonly SUBSECTION_DATA = SubsectionData;

  public find(section: number, subsection: number): SubsectionModel {
    return this.SUBSECTION_DATA.get(
      [section, subsection].toString()
    ) as SubsectionModel;
  }
}
