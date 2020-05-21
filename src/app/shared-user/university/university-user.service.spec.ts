import { TestBed } from '@angular/core/testing';

import { UniversityUserService } from './university-user.service';

describe('UniversityUserService', () => {
  let service: UniversityUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversityUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
