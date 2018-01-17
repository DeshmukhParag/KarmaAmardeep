import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepWaitingComponent } from './rep-waiting.component';

describe('RepWaitingComponent', () => {
  let component: RepWaitingComponent;
  let fixture: ComponentFixture<RepWaitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepWaitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
