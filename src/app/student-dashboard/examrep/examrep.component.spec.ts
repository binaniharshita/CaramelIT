import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamrepComponent } from './examrep.component';

describe('ExamrepComponent', () => {
  let component: ExamrepComponent;
  let fixture: ComponentFixture<ExamrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
