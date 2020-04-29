import { TestBed } from '@angular/core/testing';

import { StudentUserService } from './student-user.service';

describe('StudentUserService', () => {
  let service: StudentUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
