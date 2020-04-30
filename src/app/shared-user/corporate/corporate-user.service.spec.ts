import { TestBed } from '@angular/core/testing';

import { CorporateUserService } from './corporate-user.service';

describe('CorporateUserService', () => {
  let service: CorporateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporateUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
