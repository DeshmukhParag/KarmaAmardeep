import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorOrderViewComponent } from './sponsor-order-view.component';

describe('SponsorOrderViewComponent', () => {
  let component: SponsorOrderViewComponent;
  let fixture: ComponentFixture<SponsorOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
