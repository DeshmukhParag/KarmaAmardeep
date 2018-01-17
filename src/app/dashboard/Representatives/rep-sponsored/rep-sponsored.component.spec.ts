import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepSponsoredComponent } from './rep-sponsored.component';

describe('RepSponsoredComponent', () => {
  let component: RepSponsoredComponent;
  let fixture: ComponentFixture<RepSponsoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepSponsoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepSponsoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
