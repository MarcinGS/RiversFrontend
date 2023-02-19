import { TestBed } from '@angular/core/testing';

import { AdminRiverUpdateService } from './admin-river-update.service';

describe('AdminRiverUpdateService', () => {
  let service: AdminRiverUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRiverUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
