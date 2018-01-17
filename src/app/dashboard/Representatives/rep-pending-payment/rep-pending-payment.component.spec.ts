import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepPendingPaymentComponent } from './rep-pending-payment.component';

describe('RepPendingPaymentComponent', () => {
  let component: RepPendingPaymentComponent;
  let fixture: ComponentFixture<RepPendingPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepPendingPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepPendingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
