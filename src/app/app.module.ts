import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgAlexCalendarModule } from 'ng-alex-calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgAlexCalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
