import { NgModule } from '@angular/core';
import { NgAlexCalendarComponent } from './ng-alex-calendar.component';
import { NgAlexCalendarService } from './ng-alex-calendar.service';

@NgModule({
  declarations: [NgAlexCalendarComponent],
  imports: [],
  exports: [NgAlexCalendarComponent, NgAlexCalendarService],
})
export class NgAlexCalendarModule {}
