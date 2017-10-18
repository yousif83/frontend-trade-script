import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneReceivedComponent } from './one-received.component';

describe('OneReceivedComponent', () => {
  let component: OneReceivedComponent;
  let fixture: ComponentFixture<OneReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
