import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpRequestsService} from '../httpRequests.service'
import * as io from 'socket.io-client'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  basuUrl="https://evening-temple-67850.herokuapp.com"
  socket = io(this.basuUrl);
  constructor(private router: Router, private HttpRequestsService: HttpRequestsService) { }
  signedUser
  notificationRequestFlag=false
  notificationCount=""
  ngOnInit() {
    this.signedUser=this.HttpRequestsService.parseJWT(sessionStorage.getItem('token'))
    this.recieveConnectNotification()
  }
  logout(){
      this.HttpRequestsService.userOnline(this.HttpRequestsService.parseJWT(sessionStorage.getItem('token'))._id,false)
      sessionStorage.removeItem('token');
       this.router.navigate(['']);
  }
  profilePage (){
       this.router.navigate(['./myProfile']);
  }
  recieveConnectNotification(){
    this.socket.on('notification',  (data) =>{

        if (this.HttpRequestsService.parseJWT(sessionStorage.getItem('token'))._id == data.userId) {

          this.notificationRequestFlag=data.requestFlag
          this.notificationCount="1"
        }
      });
  }

}
