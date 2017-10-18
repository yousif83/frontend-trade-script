import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

@Injectable()
export class HttpRequestsService {
   signInId='59e6c0e46ab6a15693901b85'
  constructor(private http: Http) {}
getUsers() {
  return this.http.get(`http://localhost:3000/suggestions/${this.signInId}`)
}
addConnects(userId: any []){
  return this.http.put(`http://localhost:3000/network/${this.signInId}/${userId}/send`,userId)
}
getConnections(stat) {
  return this.http.get(`http://localhost:3000/network/${this.signInId}/${stat}`)
}
acceptRequest(userId: any []){
  return this.http.put(`http://localhost:3000/network/${this.signInId}/${userId}/accept`,userId)
}
}
