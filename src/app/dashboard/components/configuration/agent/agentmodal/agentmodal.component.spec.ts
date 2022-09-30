import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentmodalComponent } from './agentmodal.component';

describe('AgentmodalComponent', () => {
  let component: AgentmodalComponent;
  let fixture: ComponentFixture<AgentmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
