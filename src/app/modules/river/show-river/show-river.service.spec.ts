import { TestBed } from '@angular/core/testing';

import { ShowRiverService } from './show-river.service';

describe('ShowRiverService', () => {
  let service: ShowRiverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowRiverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
