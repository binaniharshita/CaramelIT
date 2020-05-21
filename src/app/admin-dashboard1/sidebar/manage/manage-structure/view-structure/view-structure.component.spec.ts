import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStructureComponent } from './view-structure.component';

describe('ViewStructureComponent', () => {
  let component: ViewStructureComponent;
  let fixture: ComponentFixture<ViewStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
