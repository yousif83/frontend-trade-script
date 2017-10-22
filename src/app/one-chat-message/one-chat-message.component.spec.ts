import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneChatMessageComponent } from './one-chat-message.component';

describe('OneChatMessageComponent', () => {
  let component: OneChatMessageComponent;
  let fixture: ComponentFixture<OneChatMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneChatMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
