import { TestBed } from '@angular/core/testing';

import { Flagshareec1Service } from './flagshareec1.service';

describe('Flagshareec1Service', () => {
  let service: Flagshareec1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Flagshareec1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
