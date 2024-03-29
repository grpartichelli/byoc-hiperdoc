import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ByocToolbarComponent } from './byoc-toolbar/byoc-toolbar.component';
import { ByocSearchBarComponent } from './byoc-home/byoc-search-bar/byoc-search-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { ByocHomeComponent } from './byoc-home/byoc-home.component';
import { ByocSubsectionComponent } from './byoc-subsection/byoc-subsection.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SafePipe } from './pipes/safe.pipe';
import { FormsModule } from '@angular/forms';
import { ByocGuidedDialogComponent } from './byoc-guided-dialog/byoc-guided-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { ByocVideoComponent } from './byoc-video/byoc-video.component';

@NgModule({
  declarations: [
    AppComponent,
    ByocToolbarComponent,
    ByocSearchBarComponent,
    ByocHomeComponent,
    ByocGuidedDialogComponent,
    ByocSubsectionComponent,
    SafePipe,
    ByocVideoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    AppRoutingModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
