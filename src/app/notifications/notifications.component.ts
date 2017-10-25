import { Component, OnInit } from '@angular/core';
import {HttpRequestsService} from '../httpRequests.service'
import * as io from 'socket.io-client'
// import {notificationService} from '../notification.service'
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
   signedId
   visible=true
   notifications=[]
   socket = io('http://localhost:3000/');
  constructor(private HttpRequestsService: HttpRequestsService) {
    this.HttpRequestsService.inChatRoom.subscribe(
      (stat: boolean) => {
        this.visible=stat
     }
   )
  }
  ngOnInit() {
    this.signedId=this.HttpRequestsService.parseJWT(sessionStorage.getItem('token'))._id
    this.socket.on('chat',  (data) =>{
      if (data.chatRoom.includes(this.signedId) && this.visible  ) {
          this.notifications.push(`${data.chatRoom.replace(this.signedId,'').replace(',','')}`)

      }
      });
  }


}
