import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneConnectionComponent } from './one-connection.component';

describe('OneConnectionComponent', () => {
  let component: OneConnectionComponent;
  let fixture: ComponentFixture<OneConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
