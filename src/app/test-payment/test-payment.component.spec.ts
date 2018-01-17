import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPaymentComponent } from './test-payment.component';

describe('TestPaymentComponent', () => {
  let component: TestPaymentComponent;
  let fixture: ComponentFixture<TestPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
