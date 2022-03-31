import { Component, OnInit } from '@angular/core';
import { SubsectionData } from '../data/subsection.data';

@Component({
  selector: 'app-byoc-home',
  templateUrl: './byoc-home.component.html',
  styleUrls: ['./byoc-home.component.scss'],
})
export class ByocHomeComponent implements OnInit {
  readonly SUBSECTION_DATA = SubsectionData;

  ngOnInit() {}
}
