import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentativeRegistrationComponent } from './representative-registration.component';

describe('RepresentativeRegistrationComponent', () => {
  let component: RepresentativeRegistrationComponent;
  let fixture: ComponentFixture<RepresentativeRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentativeRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentativeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
