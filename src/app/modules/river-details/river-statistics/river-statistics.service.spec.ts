import { TestBed } from '@angular/core/testing';

import { RiverStatisticsService } from './river-statistics.service';

describe('RiverStatisticsService', () => {
  let service: RiverStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiverStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
