import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sapecpart1Component } from './sapecpart1.component';

describe('Sapecpart1Component', () => {
  let component: Sapecpart1Component;
  let fixture: ComponentFixture<Sapecpart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sapecpart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sapecpart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
