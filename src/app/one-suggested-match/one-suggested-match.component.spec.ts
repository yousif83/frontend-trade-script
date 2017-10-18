import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSuggestedMatchComponent } from './one-suggested-match.component';

describe('OneSuggestedMatchComponent', () => {
  let component: OneSuggestedMatchComponent;
  let fixture: ComponentFixture<OneSuggestedMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSuggestedMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSuggestedMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
