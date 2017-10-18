import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSentComponent } from './one-sent.component';

describe('OneSentComponent', () => {
  let component: OneSentComponent;
  let fixture: ComponentFixture<OneSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
