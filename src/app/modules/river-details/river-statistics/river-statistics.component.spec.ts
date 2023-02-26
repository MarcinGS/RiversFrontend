import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverStatisticsComponent } from './river-statistics.component';

describe('RiverStatisticsComponent', () => {
  let component: RiverStatisticsComponent;
  let fixture: ComponentFixture<RiverStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiverStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiverStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
