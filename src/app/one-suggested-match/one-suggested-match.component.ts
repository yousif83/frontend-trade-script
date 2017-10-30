import { Component, OnInit, Input } from '@angular/core';
import {HttpRequestsService} from '../httpRequests.service';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import * as io from 'socket.io-client'
@Component({
  selector: 'app-one-suggested-match',
  templateUrl: './one-suggested-match.component.html',
  styleUrls: ['./one-suggested-match.component.css']
})
export class OneSuggestedMatchComponent implements OnInit {
  @Input() suggestedMatch

  @Input() allMacthes
  skillsTeachStr
  skillsLearnStr
  userOnlineFlag=false
  basuUrl="https://evening-temple-67850.herokuapp.com"
  socket = io(this.basuUrl);
  constructor(private HttpRequestsService: HttpRequestsService, private router: Router) {
    this.lessonToUserOnline()
   }
  addConnect() {
          this.HttpRequestsService.requestNotification(this.suggestedMatch._id,"true")
     this.HttpRequestsService.addConnects(this.suggestedMatch._id)
    .subscribe(
      response => {
   for (var i = 0; i < this.allMacthes.length; i++) {
     if (this.allMacthes[i]._id == this.suggestedMatch._id) {
       this.allMacthes.splice(i, 1);
       i--
     }
   }
        (error) => console.log(error)
  })
  }
  ngOnInit() {
    this.skillsTeachStr=this.suggestedMatch.skillsToTeach.join()
    this.skillsLearnStr=this.suggestedMatch.skillsToLearn.join()
  }
  lessonToUserOnline(){
    this.socket.on('userOnline',  (data) =>{
      for (var i = 0; i < this.allMacthes.length; i++) {
        if (this.allMacthes[i]._id == data.userId) {
           this.allMacthes[i].onlineFlag=data.onlineFlag
        }
      }
      });
  }


}
