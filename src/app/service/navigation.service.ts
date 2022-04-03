import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  public goToSubsection(subsectionKey: string) {
    const splitted = subsectionKey.split(',');
    this.router
      .navigate([`/section/${splitted[0]}/subsection/${splitted[1]}`])
      .then();
  }
}
