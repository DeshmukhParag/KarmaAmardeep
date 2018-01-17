import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepNotSponsoredComponent } from './rep-not-sponsored.component';

describe('RepNotSponsoredComponent', () => {
  let component: RepNotSponsoredComponent;
  let fixture: ComponentFixture<RepNotSponsoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepNotSponsoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepNotSponsoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
