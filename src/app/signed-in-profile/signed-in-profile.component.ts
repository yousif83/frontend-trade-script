import { Component, OnInit } from '@angular/core';
import {HttpRequestsService} from '../httpRequests.service'
@Component({
  selector: 'app-signed-in-profile',
  templateUrl: './signed-in-profile.component.html',
  styleUrls: ['./signed-in-profile.component.css']
})
export class SignedInProfileComponent implements OnInit {

   profileInfo
   skillsTeach=[]
   skillsLearn=[]
  previouslessonMsgs = []

  constructor(private HttpRequestsService: HttpRequestsService) { }

  ngOnInit() {
    this.profileInfo= this.HttpRequestsService.parseJWT(sessionStorage.getItem('token'))
    this.skillsTeach=this.profileInfo.skillsToTeach
      this.skillsLearn=this.profileInfo.skillsToLearn

  }
getLessonByuser(skill){
  console.log(skill)
  this.HttpRequestsService.getLessonsByuserId(this.profileInfo._id, skill)
  .subscribe(
    (response) => {
      console.log(response.json())
      this.previouslessonMsgs=response.json()

    },
      (error) => console.log(error)
)

}

}
