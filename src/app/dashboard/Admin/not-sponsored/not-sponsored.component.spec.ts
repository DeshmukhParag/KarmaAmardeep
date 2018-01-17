import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSponsoredComponent } from './not-sponsored.component';

describe('NotSponsoredComponent', () => {
  let component: NotSponsoredComponent;
  let fixture: ComponentFixture<NotSponsoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotSponsoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotSponsoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
