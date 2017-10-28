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
     console.log(this.imgUrl)
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
    })
    }
    this.HttpRequestsService.signup(userInfo)
    .subscribe(
      (res) => {      
  			sessionStorage.setItem('token', res.json().data)
        console.log(sessionStorage.getItem('token'))
        if (sessionStorage.getItem('token') != 'undefined') {
           this.HttpRequestsService.inChatRoom.emit(true)
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
      console.log(res)
        sessionStorage.setItem('token', res.json().data)
        console.log(sessionStorage.getItem('token'))
        if (sessionStorage.getItem('token') != 'undefined') {
           this.HttpRequestsService.inChatRoom.emit(true)
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
      console.log(formData)
      this.HttpRequestsService.uploadImg(formData)
      .subscribe(
        (res) => {
        this.imgUrl= res.json()
        console.log(this.imgUrl)
        } ,
          (error) => console.log(error)
    )
    }
}
