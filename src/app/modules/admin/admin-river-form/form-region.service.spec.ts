import { TestBed } from '@angular/core/testing';

import { FormRegionService } from './form-region.service';

describe('FormRegionService', () => {
  let service: FormRegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
