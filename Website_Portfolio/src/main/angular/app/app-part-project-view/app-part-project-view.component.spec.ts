import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPartProjectView } from './app-part-project-view.component';

describe('AppPartProjectViewComponent', () => {
  let component: AppPartProjectView;
  let fixture: ComponentFixture<AppPartProjectView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPartProjectView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPartProjectView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
