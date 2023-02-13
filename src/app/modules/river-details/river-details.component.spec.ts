import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverDetailsComponent } from './river-details.component';

describe('RiverDetailsComponent', () => {
  let component: RiverDetailsComponent;
  let fixture: ComponentFixture<RiverDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiverDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
