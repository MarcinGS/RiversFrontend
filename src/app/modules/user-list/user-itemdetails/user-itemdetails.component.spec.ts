import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserItemdetailsComponent } from './user-itemdetails.component';



describe('UserItemdetailsComponent', () => {
  let component: UserItemdetailsComponent;
  let fixture: ComponentFixture<UserItemdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserItemdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserItemdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 