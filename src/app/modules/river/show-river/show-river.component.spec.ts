import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRiverComponent } from './show-river.component';

describe('ShowRiverComponent', () => {
  let component: ShowRiverComponent;
  let fixture: ComponentFixture<ShowRiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
