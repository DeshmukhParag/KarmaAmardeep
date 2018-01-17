import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredComponent } from './sponsored.component';

describe('SponsoredComponent', () => {
  let component: SponsoredComponent;
  let fixture: ComponentFixture<SponsoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
