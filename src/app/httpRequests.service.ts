
import {Http} from '@angular/http'
import {EventEmitter, Injectable} from '@angular/core'
@Injectable()
export class HttpRequestsService {
basuUrl="https://evening-temple-67850.herokuapp.com"

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

 parseJWT(token) { // THIS WORKS
   if (token != null && token != 'undefined') {
     let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
   }

}
requestToConnect = new EventEmitter<object>();
inChatRoom = new EventEmitter<boolean>();


}
