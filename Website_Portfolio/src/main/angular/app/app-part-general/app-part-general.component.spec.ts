import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPartGeneral } from './app-part-general.component';

describe('AppPartGeneralComponent', () => {
  let component: AppPartGeneral;
  let fixture: ComponentFixture<AppPartGeneral>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPartGeneral ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPartGeneral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
