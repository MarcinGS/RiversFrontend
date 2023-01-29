import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRiverUpdateComponent } from './admin-river-update.component';

describe('AdminRiverUpdateComponent', () => {
  let component: AdminRiverUpdateComponent;
  let fixture: ComponentFixture<AdminRiverUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRiverUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRiverUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
