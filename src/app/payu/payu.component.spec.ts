import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayuComponent } from './payu.component';

describe('PayuComponent', () => {
  let component: PayuComponent;
  let fixture: ComponentFixture<PayuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});