import { TestBed } from '@angular/core/testing';

import { DashAuthguardService } from './dash-authguard.service';

describe('DashAuthguardService', () => {
  let service: DashAuthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashAuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
