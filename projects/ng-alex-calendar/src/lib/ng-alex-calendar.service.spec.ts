import { TestBed } from '@angular/core/testing';

import { NgAlexCalendarService } from './ng-alex-calendar.service';

describe('NgAlexCalendarService', () => {
  let service: NgAlexCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAlexCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
