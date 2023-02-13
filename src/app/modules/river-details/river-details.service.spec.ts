import { TestBed } from '@angular/core/testing';

import { RiverDetailsService } from './river-details.service';

describe('RiverDetailsService', () => {
  let service: RiverDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiverDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
