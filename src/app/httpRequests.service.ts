
import {Http} from '@angular/http'
import {EventEmitter, Injectable} from '@angular/core'
@Injectable()
export class HttpRequestsService {


  constructor(private http: Http) {}
getUsers() {

  return this.http.get(`http://localhost:3000/suggestions/${this.parseJWT(sessionStorage.getItem('token'))._id}`)
}
addConnects(userId: any []){
  return this.http.put(`http://localhost:3000/network/${this.parseJWT(sessionStorage.getItem('token'))._id}/${userId}/send`,userId)
}
getConnections(stat) {
  return this.http.get(`http://localhost:3000/network/${this.parseJWT(sessionStorage.getItem('token'))._id}/${stat}`)
}
acceptRequest(userId: any []){
  return this.http.put(`http://localhost:3000/network/${this.parseJWT(sessionStorage.getItem('token'))._id}/${userId}/accept`,userId)
}
getChatsByChatRoom(chatRoom) {
  return this.http.get(`http://localhost:3000/chat/${chatRoom}`)
}
insertChatMessage(chatBody) {
  return this.http.put((`http://localhost:3000/chat/`),chatBody)
}

signup(userInfo) {
  return this.http.post((`http://localhost:3000/auth/signup/`),userInfo)
}

login(data) {
  return this.http.post((`http://localhost:3000/auth/login/`),data)
}
uploadImg(data){
  return this.http.post((`http://localhost:3000/users/image`),data)
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
