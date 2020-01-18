import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPartProjectsAll } from './app-part-projects-all.component';

describe('AppPartProjectsAllComponent', () => {
  let component: AppPartProjectsAll;
  let fixture: ComponentFixture<AppPartProjectsAll>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPartProjectsAll ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPartProjectsAll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
