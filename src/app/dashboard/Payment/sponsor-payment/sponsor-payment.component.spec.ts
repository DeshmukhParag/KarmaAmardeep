import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorPaymentComponent } from './sponsor-payment.component';

describe('SponsorPaymentComponent', () => {
  let component: SponsorPaymentComponent;
  let fixture: ComponentFixture<SponsorPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
