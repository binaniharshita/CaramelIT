import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrepComponent } from './progrep.component';

describe('ProgrepComponent', () => {
  let component: ProgrepComponent;
  let fixture: ComponentFixture<ProgrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
