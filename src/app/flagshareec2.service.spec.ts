import { TestBed } from '@angular/core/testing';

import { Flagshareec2Service } from './flagshareec2.service';

describe('Flagshareec2Service', () => {
  let service: Flagshareec2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Flagshareec2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
