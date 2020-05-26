import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTransformationComponent } from './top-transformation.component';

describe('TopTransformationComponent', () => {
  let component: TopTransformationComponent;
  let fixture: ComponentFixture<TopTransformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTransformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
