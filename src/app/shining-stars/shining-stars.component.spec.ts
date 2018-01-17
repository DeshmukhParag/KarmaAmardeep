import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiningStarsComponent } from './shining-stars.component';

describe('ShiningStarsComponent', () => {
  let component: ShiningStarsComponent;
  let fixture: ComponentFixture<ShiningStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiningStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiningStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
