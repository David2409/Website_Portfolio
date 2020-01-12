import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPartProjectsFavorites } from './app-part-projects-favorites.component';

describe('AppPartProectsFavoritesComponent', () => {
  let component: AppPartProjectsFavorites;
  let fixture: ComponentFixture<AppPartProjectsFavorites>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPartProjectsFavorites ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPartProjectsFavorites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
