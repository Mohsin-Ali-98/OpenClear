import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersmodalComponent } from './usersmodal.component';

describe('UsersmodalComponent', () => {
  let component: UsersmodalComponent;
  let fixture: ComponentFixture<UsersmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
