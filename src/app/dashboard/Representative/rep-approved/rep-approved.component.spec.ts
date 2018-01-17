import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepApprovedComponent } from './rep-approved.component';

describe('RepApprovedComponent', () => {
  let component: RepApprovedComponent;
  let fixture: ComponentFixture<RepApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
