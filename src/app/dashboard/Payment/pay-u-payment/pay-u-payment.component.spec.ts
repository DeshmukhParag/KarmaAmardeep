import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayUPaymentComponent } from './pay-u-payment.component';

describe('PayUPaymentComponent', () => {
  let component: PayUPaymentComponent;
  let fixture: ComponentFixture<PayUPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayUPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayUPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
