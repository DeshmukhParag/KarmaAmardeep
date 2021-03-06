import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPaymentComponent } from './pending-payment.component';

describe('PendingPaymentComponent', () => {
  let component: PendingPaymentComponent;
  let fixture: ComponentFixture<PendingPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
