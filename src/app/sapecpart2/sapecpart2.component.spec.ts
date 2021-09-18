import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sapecpart2Component } from './sapecpart2.component';

describe('Sapecpart2Component', () => {
  let component: Sapecpart2Component;
  let fixture: ComponentFixture<Sapecpart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sapecpart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sapecpart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
