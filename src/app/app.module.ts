import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsynctutorialComponent } from './components/asynctutorial/asynctutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    AsynctutorialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
