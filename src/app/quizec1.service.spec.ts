import { TestBed } from '@angular/core/testing';

import { Quizec1Service } from './quizec1.service';

describe('Quizec1Service', () => {
  let service: Quizec1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Quizec1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
