import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-byoc-subsection',
  templateUrl: './byoc-subsection.component.html',
  styleUrls: ['./byoc-subsection.component.scss'],
})
export class ByocSubsectionComponent {
  constructor(private readonly router: ActivatedRoute) {}
  public readonly section = this.router.snapshot.paramMap.get('section');
  public readonly subsection = this.router.snapshot.paramMap.get('subsection');
}
