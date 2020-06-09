import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSkillsComponent } from './course-skills.component';

describe('CourseSkillsComponent', () => {
  let component: CourseSkillsComponent;
  let fixture: ComponentFixture<CourseSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
