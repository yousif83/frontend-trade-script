import { Component, OnInit, ElementRef, AfterViewChecked } from '@angular/core';
import {HttpRequestsService} from '../httpRequests.service'
// import {notificationService} from '../notification.service'
import {ActivatedRoute} from '@angular/router'
import * as io from 'socket.io-client'
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, AfterViewChecked {

     basuUrl="https://evening-temple-67850.herokuapp.com"
     socket = io(this.basuUrl);
     selectedUserId= []
     selectedUserName= ''
     signedUserName=''
     signedId =[]
     flag = false
     chats =[]
     lessonMsgs=[]
     chatRoom=''
     lessonMessage=''
     startLessonFlag=true
     placeholderText="Start a Lesson "
     SentMessage :string
     lessonSkill =""

  constructor(private HttpRequestsService: HttpRequestsService, private route: ActivatedRoute, private elem: ElementRef) {
   }
   ngAfterViewChecked() {
           let board=this.elem.nativeElement.querySelector('.board')
         board.scrollTop =board.scrollHeight
   }

  ngOnInit() {

  this.signedUserName=this.HttpRequestsService.parseJWT(sessionStorage.getItem('token')).name
  this.selectedUserId=[this.route.snapshot.params['selectedUserId']]
  this.selectedUserName=this.route.snapshot.params['selectedUserName']
  this.lessonSkill=this.route.snapshot.params['lessonSkill']
  this.signedId=[this.HttpRequestsService.parseJWT(sessionStorage.getItem('token'))._id]
  this.chatRoom=this.signedId.concat(this.selectedUserId).sort().join()
  this.receiveDataRoom(this.socket,  this.chatRoom)
  this.getOldLessons(this.chatRoom)
  this.receiveLessonMsgs(this.socket,  this.chatRoom)

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
submitlessonMessage(SentMessage){

  let lessonData = {
  lessonRoom: this.chatRoom ,
  senderId: this.HttpRequestsService.parseJWT(sessionStorage.getItem('token'))._id,
  name: this.signedUserName ,
  receiveUserId: this.selectedUserId[0],
  lessonMessage: SentMessage.replace(/```/g,''),
  codeFlag : /^```/.test(SentMessage) && /```$/igm.test(SentMessage),
  lessonSkill: this.lessonSkill

  }
    console.log(SentMessage)

    this.socket.emit('lesson', lessonData)
    this.SentMessage =null
      this.placeholderText=`Wait for ${this.selectedUserName}`
    this.startLessonFlag=true
    this.HttpRequestsService.insertlessonMessage(lessonData)
    .subscribe(
      (response) => {
      },
        (error) => console.log(error)
    )
}
receiveLessonMsgs(socket, chatRoom){

  socket.on('lesson',  (data) =>{
    if (data.lessonMessage !='' && data.lessonRoom == chatRoom) {
        this.lessonMsgs.push(data)

        if (this.HttpRequestsService.parseJWT(sessionStorage.getItem('token'))._id !=data.senderId) {
              this.startLessonFlag=false
              this.placeholderText=`Teach ${this.selectedUserName} ${this.lessonSkill} `
        }
    }
    });
}
getOldLessons(lessonRoom){
  this.HttpRequestsService.getLessonByLessonRoom(lessonRoom)
  .subscribe(
    (response) => {
      console.log(response.json())
      this.lessonMsgs=response.json()
         let board=this.elem.nativeElement.querySelector('.board')
      board.scrollTop =board.scrollHeight
    },
      (error) => console.log(error)
)
}
startLesson(){
this.startLessonFlag=false
this.placeholderText=`Teach ${this.selectedUserName} ${this.lessonSkill} `
}

}
