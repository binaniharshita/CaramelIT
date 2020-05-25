import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DissociateComponent } from './dissociate.component';

describe('DissociateComponent', () => {
  let component: DissociateComponent;
  let fixture: ComponentFixture<DissociateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DissociateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DissociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
