import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRiverAddComponent } from './admin-river-add.component';

describe('AdminRiverAddComponent', () => {
  let component: AdminRiverAddComponent;
  let fixture: ComponentFixture<AdminRiverAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRiverAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRiverAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
