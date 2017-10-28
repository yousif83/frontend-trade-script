import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLessonMsgComponent } from './one-lesson-msg.component';

describe('OneLessonMsgComponent', () => {
  let component: OneLessonMsgComponent;
  let fixture: ComponentFixture<OneLessonMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneLessonMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLessonMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
