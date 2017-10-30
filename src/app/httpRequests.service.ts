
import {Http} from '@angular/http'
import {EventEmitter, Injectable} from '@angular/core'
import * as io from 'socket.io-client'
@Injectable()
export class HttpRequestsService {
basuUrl="https://evening-temple-67850.herokuapp.com"
socket = io(this.basuUrl);
  constructor(private http: Http) {}
getUsers() {

  return this.http.get(`${this.basuUrl}/suggestions/${this.parseJWT(sessionStorage.getItem('token'))._id}`)
}
addConnects(userId: any []){
  return this.http.put(`${this.basuUrl}/network/${this.parseJWT(sessionStorage.getItem('token'))._id}/${userId}/send`,userId)
}
getConnections(stat) {
  return this.http.get(`${this.basuUrl}/network/${this.parseJWT(sessionStorage.getItem('token'))._id}/${stat}`)
}
acceptRequest(userId: any []){
  return this.http.put(`${this.basuUrl}/network/${this.parseJWT(sessionStorage.getItem('token'))._id}/${userId}/accept`,userId)
}
getChatsByChatRoom(chatRoom) {
  return this.http.get(`${this.basuUrl}/chat/${chatRoom}`)
}
insertChatMessage(chatBody) {
  return this.http.put((`${this.basuUrl}/chat/`),chatBody)
}
getLessonByLessonRoom(lessonRoom) {
  return this.http.get(`${this.basuUrl}/lessons/${lessonRoom}`)
}
getLessonsByuserId(userId,skill) {
  return this.http.get(`${this.basuUrl}/lessons/${userId}/${skill}/userlessons`)
}
insertlessonMessage(lessonBody) {
  return this.http.put((`${this.basuUrl}/lessons/`),lessonBody)
}

signup(userInfo) {
  return this.http.post((`${this.basuUrl}/auth/signup/`),userInfo)
}

login(data) {
  return this.http.post((`${this.basuUrl}/auth/login/`),data)
}
uploadImg(data){
  return this.http.post((`${this.basuUrl}/users/image`),data)
}

updateUserOnlineFlag(body){
  return this.http.put((`${this.basuUrl}/users/${this.parseJWT(sessionStorage.getItem('token'))._id}/userOnline`),body)
}
 parseJWT(token) { // THIS WORKS
   if (token != null && token != 'undefined') {
     let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
   }

}
userOnline(userId,onlineFlag){
  let data ={
    onlineFlag: onlineFlag,
    userId: userId
  }

    this.socket.emit('userOnline', data)
    this.updateUserOnlineFlag(data)
    .subscribe(
      (response) => {
        console.log(response.json())
      },
        (error) => console.log(error)
  )
    console.log(data)

}
requestNotification(userId,requestFlag){
  let data ={
    requestFlag: requestFlag,
    userId: userId
  }

    this.socket.emit('notification', data)
    console.log(data)

}
requestToConnect = new EventEmitter<object>();
inChatRoom = new EventEmitter<boolean>();


}
