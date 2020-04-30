import { TestBed } from '@angular/core/testing';

import { InstructorUserService } from './instructor-user.service';

describe('InstructorUserService', () => {
  let service: InstructorUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
