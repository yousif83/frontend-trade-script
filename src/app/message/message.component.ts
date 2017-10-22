import { Component, OnInit } from '@angular/core';
import {HttpRequestsService} from '../httpRequests.service'
import * as io from 'socket.io-client'
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
     socket = io('http://localhost:3000/');
  constructor(private HttpRequestsService: HttpRequestsService) { }
    flag = false
chats
chatRoom='5555555555'
  ngOnInit() {


  this.socket.on('message',  (data) =>{
    console.log(data)
    if (data.chatMessage !='') {
      this.HttpRequestsService.insertChatMessage(data)
      .subscribe(
        (response) => {
        },
          (error) => console.log(error)
    )
          this.chats.push(data)
    }
   return data.message
    });
  }
sendMessage(chatMessage){
let data = {
  chatRoom: "5555555555" ,
  name: "yousif" ,
  chatMessage: chatMessage
  }
  this.socket.emit('room', data)
}
startChat(){
  this.HttpRequestsService.getChatsByChatRoom(this.chatRoom)
  .subscribe(
    (response) => {
      console.log(response.json())
      this.chats=response.json()
    },
      (error) => console.log(error)
)
  this.flag = true
  let data = {
    chatRoom: "5555555555" ,
    name: "" ,
    chatMessage: ''

    }
  this.socket.emit('room', data);
}
}
