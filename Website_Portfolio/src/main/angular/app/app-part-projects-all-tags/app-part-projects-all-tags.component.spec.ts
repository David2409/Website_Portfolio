import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPartProjectsAllTags } from './app-part-projects-all-tags.component';

describe('AppPartProjectsAllTagsComponent', () => {
  let component: AppPartProjectsAllTags;
  let fixture: ComponentFixture<AppPartProjectsAllTags>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPartProjectsAllTags ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPartProjectsAllTags);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
