import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPartProjects } from './app-part-projects.component';

describe('AppPartProjectsComponent', () => {
  let component: AppPartProjects;
  let fixture: ComponentFixture<AppPartProjects>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPartProjects ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPartProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
