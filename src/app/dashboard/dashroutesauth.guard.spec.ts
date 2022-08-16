import { TestBed } from '@angular/core/testing';

import { DashroutesauthGuard } from './dashroutesauth.guard';

describe('DashroutesauthGuard', () => {
  let guard: DashroutesauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DashroutesauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
