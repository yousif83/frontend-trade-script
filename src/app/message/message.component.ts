import { Component, OnInit } from '@angular/core';
import {HttpRequestsService} from '../httpRequests.service'
// import {notificationService} from '../notification.service'
import {ActivatedRoute} from '@angular/router'
import * as io from 'socket.io-client'
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
     socket = io('http://localhost:3000/');
     selectedUserId= []
     signedUserName=''
     signedId =[]
     flag = false
     chats =[]
     chatRoom=''

  constructor(private HttpRequestsService: HttpRequestsService, private route: ActivatedRoute) {
   }
  ngOnInit() {
  this.signedUserName=this.HttpRequestsService.parseJWT(sessionStorage.getItem('token')).name
  this.selectedUserId=[this.route.snapshot.params['selectedUserId']]
  this.signedId=[this.HttpRequestsService.parseJWT(sessionStorage.getItem('token'))._id]
  this.chatRoom=this.signedId.concat(this.selectedUserId).sort().join()
  this.receiveDataRoom(this.socket,  this.chatRoom)


  }
sendMessage(chatMessage){
  let data = {
  chatRoom: this.chatRoom ,
  senderId: this.HttpRequestsService.parseJWT(sessionStorage.getItem('token'))._id,
  name: this.signedUserName ,
  chatMessage: chatMessage
  }
  this.socket.emit('chat', data)
  this.HttpRequestsService.insertChatMessage(data)
  .subscribe(
    (response) => {
    },
      (error) => console.log(error)
)
}
startChat(){
  this.HttpRequestsService.inChatRoom.emit(false)
  this.HttpRequestsService.getChatsByChatRoom(this.chatRoom)
  .subscribe(
    (response) => {
      console.log(response.json())
      this.chats=response.json()
    },
      (error) => console.log(error)
)
  this.flag = true
}
receiveDataRoom(socket, chatRoom){
  socket.on('chat',  (data) =>{
    if (data.chatMessage !='' && data.chatRoom == chatRoom) {
        this.chats.push(data)

    }
    });
}
}
