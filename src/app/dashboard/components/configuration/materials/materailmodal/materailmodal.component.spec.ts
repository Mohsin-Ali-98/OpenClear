import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterailmodalComponent } from './materailmodal.component';

describe('MaterailmodalComponent', () => {
  let component: MaterailmodalComponent;
  let fixture: ComponentFixture<MaterailmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterailmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterailmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
