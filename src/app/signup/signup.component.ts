import { Component, OnInit, ElementRef } from '@angular/core';
import {HttpRequestsService} from '../httpRequests.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent implements OnInit {
  constructor(private HttpRequestsService: HttpRequestsService, private router: Router, private elem: ElementRef ) { }
  basuUrl="https://evening-temple-67850.herokuapp.com"

   name =''
   email =''
   skillsTeach =[]
   skillsLearn = []
   password =''
   loginPassword=''
   loginEmail=''
   imgUrl=""

  ngOnInit() {
  }
  signup(){
    let userInfo={
      name:this.name,
      email:this.email,
      password:this.password,
      imageUrl:`https://s3-us-west-2.amazonaws.com/yaltimimie/${this.imgUrl}`,
      connections: [],
      pending: [],
      received: [],
      skillsToLearn: this.skillsLearn.map(function(item) {
      return item.value;
    }),
      skillsToTeach:this.skillsTeach.map(function(item) {
      return item.value;
    }),
      onlineFlag:true
    }
    this.HttpRequestsService.signup(userInfo)
    .subscribe(
      (res) => {
  			sessionStorage.setItem('token', res.json().data)
        if (sessionStorage.getItem('token') != 'undefined') {
           this.HttpRequestsService.inChatRoom.emit(true)
          this.HttpRequestsService.userOnline(this.HttpRequestsService.parseJWT(sessionStorage.getItem('token'))._id,"true")
             this.router.navigate(['./matches']);
        }
      } ,
        (error) => console.log(error)
  )
  }
   login() {
	let data = {
		email: this.loginEmail,
		password: this.loginPassword
	}
  this.HttpRequestsService.login(data)
  .subscribe(
    (res) => {  
        sessionStorage.setItem('token', res.json().data)
        if (sessionStorage.getItem('token') != 'undefined') {
           this.HttpRequestsService.inChatRoom.emit(true)
            this.HttpRequestsService.userOnline(this.HttpRequestsService.parseJWT(sessionStorage.getItem('token'))._id,"true")
             this.router.navigate(['./matches']);
        }
    } ,
      (error) => console.log(error)
)
}
  uploadImage() {
      let files=this.elem.nativeElement.querySelector('#selectFile').files
      let formData=new FormData()
      let img=files[0]
      formData.append('image', img)
      this.HttpRequestsService.uploadImg(formData)
      .subscribe(
        (res) => {
        this.imgUrl= res.json()
        } ,
          (error) => console.log(error)
    )
    }


}
