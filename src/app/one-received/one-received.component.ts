import { Component, OnInit, Input } from '@angular/core';
import {HttpRequestsService} from '../httpRequests.service';

@Component({
  selector: 'app-one-received',
  templateUrl: './one-received.component.html',
  styleUrls: ['./one-received.component.css']
})
export class OneReceivedComponent implements OnInit {
     @Input()  singleRequest
     @Input()  allRequests
  constructor(private HttpRequestsService: HttpRequestsService) { }
acceptRequest(){
  this.HttpRequestsService.acceptRequest(this.singleRequest._id)
 .subscribe(
   response => {
     this.HttpRequestsService.inChatRoom.emit(this.singleRequest)
for (var i = 0; i < this.allRequests.length; i++) {
  if (this.allRequests[i]._id == this.singleRequest._id) {
    this.allRequests.splice(i, 1);
    i--
  }
}
     (error) => console.log(error)
})
}
  ngOnInit() {
  }

}
