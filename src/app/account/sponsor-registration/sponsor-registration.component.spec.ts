import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorRegistrationComponent } from './sponsor-registration.component';

describe('SponsorRegistrationComponent', () => {
  let component: SponsorRegistrationComponent;
  let fixture: ComponentFixture<SponsorRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
