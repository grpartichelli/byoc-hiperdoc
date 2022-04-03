import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GuidedService {
  public isActiveCurrently = false;

  public get isActive() {
    return this.isActiveCurrently;
  }

  public activate() {
    this.isActiveCurrently = true;
  }

  public deactivate() {
    this.isActiveCurrently = false;
  }
}
