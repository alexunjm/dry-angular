import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAlexCalendarComponent } from './ng-alex-calendar.component';

describe('NgAlexCalendarComponent', () => {
  let component: NgAlexCalendarComponent;
  let fixture: ComponentFixture<NgAlexCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAlexCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAlexCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
