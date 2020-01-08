import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPartProjectPrev } from './app-part-project-prev.component';

describe('AppPartProjectPrevComponent', () => {
  let component: AppPartProjectPrev;
  let fixture: ComponentFixture<AppPartProjectPrev>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPartProjectPrev ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPartProjectPrev);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
