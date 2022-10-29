import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsPanelComponent } from './levels-panel.component';

describe('LevelsPanelComponent', () => {
  let component: LevelsPanelComponent;
  let fixture: ComponentFixture<LevelsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
