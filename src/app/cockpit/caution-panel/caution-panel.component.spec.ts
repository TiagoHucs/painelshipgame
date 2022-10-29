import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CautionPanelComponent } from './caution-panel.component';

describe('CautionPanelComponent', () => {
  let component: CautionPanelComponent;
  let fixture: ComponentFixture<CautionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CautionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CautionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
