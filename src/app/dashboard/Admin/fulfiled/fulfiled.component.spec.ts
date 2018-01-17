import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfiledComponent } from './fulfiled.component';

describe('FulfiledComponent', () => {
  let component: FulfiledComponent;
  let fixture: ComponentFixture<FulfiledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulfiledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulfiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
