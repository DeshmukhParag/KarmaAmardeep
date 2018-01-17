import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LampEditComponent } from './lamp-edit.component';

describe('LampEditComponent', () => {
  let component: LampEditComponent;
  let fixture: ComponentFixture<LampEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
