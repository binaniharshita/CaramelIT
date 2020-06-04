import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseSkillsComponent } from './user-course-skills.component';

describe('UserCourseSkillsComponent', () => {
  let component: UserCourseSkillsComponent;
  let fixture: ComponentFixture<UserCourseSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
