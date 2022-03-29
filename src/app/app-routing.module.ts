import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByocHomeComponent } from './byoc-home/byoc-home.component';
import { ByocSubsectionComponent } from './byoc-subsection/byoc-subsection.component';

const routes: Routes = [
  { path: 'home', component: ByocHomeComponent },
  {
    path: 'section/:section/subsection/:subsection',
    component: ByocSubsectionComponent,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
