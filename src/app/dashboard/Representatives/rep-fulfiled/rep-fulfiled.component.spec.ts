import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepFulfiledComponent } from './rep-fulfiled.component';

describe('RepFulfiledComponent', () => {
  let component: RepFulfiledComponent;
  let fixture: ComponentFixture<RepFulfiledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepFulfiledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepFulfiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
