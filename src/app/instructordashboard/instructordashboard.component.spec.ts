import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructordashboardComponent } from './instructordashboard.component';

describe('InstructordashboardComponent', () => {
  let component: InstructordashboardComponent;
  let fixture: ComponentFixture<InstructordashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructordashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructordashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
