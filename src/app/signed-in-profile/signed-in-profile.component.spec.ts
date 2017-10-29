import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedInProfileComponent } from './signed-in-profile.component';

describe('SignedInProfileComponent', () => {
  let component: SignedInProfileComponent;
  let fixture: ComponentFixture<SignedInProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedInProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedInProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
