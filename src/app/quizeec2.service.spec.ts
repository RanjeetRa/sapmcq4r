import { TestBed } from '@angular/core/testing';

import { Quizeec2Service } from './quizeec2.service';

describe('Quizeec2Service', () => {
  let service: Quizeec2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Quizeec2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
