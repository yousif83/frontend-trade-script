import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpRequestsService} from '../httpRequests.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private HttpRequestsService: HttpRequestsService) { }
  signedUserImg
  ngOnInit() {
    this.signedUserImg=this.HttpRequestsService.parseJWT(sessionStorage.getItem('token')).imageUrl
  }
  logout(){
    sessionStorage.removeItem('token');

       this.router.navigate(['./signup']);
  }
}
