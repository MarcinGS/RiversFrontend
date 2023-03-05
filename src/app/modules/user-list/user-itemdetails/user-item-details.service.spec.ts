import { TestBed } from '@angular/core/testing';

import { UserItemDetailsService } from './user-item-details.service';

describe('UserItemDetailsService', () => {
  let service: UserItemDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserItemDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
