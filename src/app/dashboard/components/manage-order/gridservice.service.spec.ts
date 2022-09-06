import { TestBed } from '@angular/core/testing';

import { GridserviceService } from './gridservice.service';

describe('GridserviceService', () => {
  let service: GridserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
