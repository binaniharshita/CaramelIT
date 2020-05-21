import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecontComponent } from './tablecont.component';

describe('TablecontComponent', () => {
  let component: TablecontComponent;
  let fixture: ComponentFixture<TablecontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablecontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablecontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
