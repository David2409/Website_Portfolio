import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPartProectsAll } from './app-part-projects-all.component';

describe('AppPartProectsAllComponent', () => {
  let component: AppPartProectsAll;
  let fixture: ComponentFixture<AppPartProectsAll>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPartProectsAll ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPartProectsAll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
