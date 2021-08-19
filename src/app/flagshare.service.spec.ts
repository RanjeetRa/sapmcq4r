import { TestBed } from '@angular/core/testing';

import { FlagshareService } from './flagshare.service';

describe('FlagshareService', () => {
  let service: FlagshareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlagshareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
