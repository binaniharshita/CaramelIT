import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SExamrepComponent } from './s-examrep.component';

describe('SExamrepComponent', () => {
  let component: SExamrepComponent;
  let fixture: ComponentFixture<SExamrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SExamrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SExamrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
