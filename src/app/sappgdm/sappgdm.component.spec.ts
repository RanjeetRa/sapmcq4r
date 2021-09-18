import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SappgdmComponent } from './sappgdm.component';

describe('SappgdmComponent', () => {
  let component: SappgdmComponent;
  let fixture: ComponentFixture<SappgdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SappgdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SappgdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
