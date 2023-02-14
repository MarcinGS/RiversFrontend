import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegionUpdateComponent } from './admin-region-update.component';

describe('AdminRegionUpdateComponent', () => {
  let component: AdminRegionUpdateComponent;
  let fixture: ComponentFixture<AdminRegionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRegionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
