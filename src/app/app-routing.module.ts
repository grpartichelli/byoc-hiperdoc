import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByocHomeComponent } from './byoc-home/byoc-home.component';

const routes: Routes = [
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ByocHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
