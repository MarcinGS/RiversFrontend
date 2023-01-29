import { TestBed } from '@angular/core/testing';

import { AdminRiverService } from './admin-river.service';

describe('AdminRiverService', () => {
  let service: AdminRiverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRiverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
