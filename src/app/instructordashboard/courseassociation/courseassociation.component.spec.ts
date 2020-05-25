import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseassociationComponent } from './courseassociation.component';

describe('CourseassociationComponent', () => {
  let component: CourseassociationComponent;
  let fixture: ComponentFixture<CourseassociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseassociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseassociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
