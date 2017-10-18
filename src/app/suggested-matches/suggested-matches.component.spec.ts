import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedMatchesComponent } from './suggested-matches.component';

describe('SuggestedMatchesComponent', () => {
  let component: SuggestedMatchesComponent;
  let fixture: ComponentFixture<SuggestedMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
