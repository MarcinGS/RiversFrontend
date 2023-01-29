import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRiverComponent } from './admin-river.component';

describe('AdminRiverComponent', () => {
  let component: AdminRiverComponent;
  let fixture: ComponentFixture<AdminRiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
