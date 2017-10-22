import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-chat-message',
  templateUrl: './one-chat-message.component.html',
  styleUrls: ['./one-chat-message.component.css']
})
export class OneChatMessageComponent implements OnInit {
@Input() singlChat
  constructor() { }

  ngOnInit() {
  }

}
