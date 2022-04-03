import { Component } from '@angular/core';
import { SubsectionData } from '../../data/subsection.data';
import { SubsectionModel } from '../../model/subsection.model';
import { NavigationService } from '../../service/navigation.service';

@Component({
  selector: 'byoc-search-bar',
  templateUrl: './byoc-search-bar.component.html',
  styleUrls: ['./byoc-search-bar.component.scss'],
})
export class ByocSearchBarComponent {
  readonly DATA = SubsectionData;
  public text = '';

  constructor(private navigationService: NavigationService) {}
  public search() {
    let found = false;

    this.DATA.forEach((value: SubsectionModel, key: string) => {
      if (
        !found &&
        value.name.toLowerCase().includes(this.text.toLowerCase())
      ) {
        this.navigationService.goToSubsection(key);
        found = true;
      }
    });

    if (found) {
      return;
    }

    this.DATA.forEach((value: SubsectionModel, key: string) => {
      value.paragraphs.forEach((paragraph) => {
        if (
          !found &&
          (paragraph.title.toLowerCase().includes(this.text.toLowerCase()) ||
            paragraph.text.toLowerCase().includes(this.text.toLowerCase()))
        ) {
          this.navigationService.goToSubsection(key);
          found = true;
        }
      });
    });

    if (found) {
      return;
    }

    const random = [...this.DATA.keys()][
      Math.floor(Math.random() * this.DATA.size)
    ];

    this.navigationService.goToSubsection(random);
  }
}
