import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyControlComponent } from './energy-control.component';

describe('EnergyControlComponent', () => {
  let component: EnergyControlComponent;
  let fixture: ComponentFixture<EnergyControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
