import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShippingComponent } from './view-shipping.component';

describe('ViewShippingComponent', () => {
  let component: ViewShippingComponent;
  let fixture: ComponentFixture<ViewShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
