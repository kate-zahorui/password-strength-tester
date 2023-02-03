import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PstFormComponent } from './pst-form.component';
import { PstIndicatorComponent } from './pst-indicator.component';

@NgModule({
  declarations: [AppComponent, PstFormComponent, PstIndicatorComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
