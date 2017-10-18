import { Component, OnInit, Input } from '@angular/core';
import {HttpRequestsService} from '../httpRequests.service';

@Component({
  selector: 'app-one-received',
  templateUrl: './one-received.component.html',
  styleUrls: ['./one-received.component.css']
})
export class OneReceivedComponent implements OnInit {
     @Input()  singleRequest
  constructor(private HttpRequestsService: HttpRequestsService) { }
acceptRequest(){
  this.HttpRequestsService.acceptRequest(this.singleRequest._id)
 .subscribe(
   response => {

// for (var i = 0; i < this.allMacthes.length; i++) {
//   if (this.allMacthes[i]._id == this.suggestedMatch._id) {
//     this.allMacthes.splice(i, 1);
//     i--
//   }
// }
     console.log(response.json()),
     (error) => console.log(error)
})
}
  ngOnInit() {
  }

}
